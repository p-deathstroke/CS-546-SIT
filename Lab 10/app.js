const express = require('express');
const app = express();
const session = require('express-session');
const configRoutes = require('./routes')
const exphbs = require('express-handlebars');



const handlebarsInstance = exphbs.create({
    defaultLayout: 'main',
    // Specify helpers which are only registered on this instance.
    helpers: {
        asJSON: (obj, spacing) => {
            if (typeof spacing === 'number')
                return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));

            return new Handlebars.SafeString(JSON.stringify(obj));
        }
    }
});

const rewriteUnsupportedBrowserMethods = (req, res, next) => {
    // If the user posts to the server with a property called _method, rewrite the request's method
    // To be that method; so if they post _method=PUT you can now allow browsers to POST to a route that gets
    // rewritten in this middleware to a PUT route
    if (req.body && req.body._method) {
        req.method = req.body._method;
        delete req.body._method;
    }

    // let the next middleware run:
    next();
};

app.use(session({           //creating cookie
    name: 'AuthCookie',
    secret: 'some secret string!',
    resave: false,
    saveUninitialized: true
}))

app.use(async (req, res, next) => {    //middleware for logging
    console.log(`[${new Date().toUTCString()}]: ${req.method}\t${req.originalUrl}\t\t${req.session.user ? '(Authenticated User)' : '(Not Authenticated User)'}`);
    next()
});


app.use('/private', async (req, res, next) => {   //middleware for private
    if (req.session.user) {
        next();
    }
    else {
        // res.status(404).json({ error: "Sorry but you cannot access private without login." });
        return res.status(403).render('screen/notLoggedIn', { title: "Not logged In Error " })
    }

});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rewriteUnsupportedBrowserMethods);

app.engine('handlebars', handlebarsInstance.engine);
app.set('view engine', 'handlebars');

configRoutes(app);
app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log('Your routes will be running on http://localhost:3000');
});
