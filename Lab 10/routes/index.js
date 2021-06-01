const userData = require('../data/users')
const bcrypt = require('bcryptjs');


const constructorMethod = (app) => {
    app.get('/', (req, res) => {
        if (req.session.user) {
            res.redirect('/private');
        } else {
            res.render('screen/login', { title: "Login" });
        }
    });

    app.post("/login", async (req, res) => {

        const { username, password } = req.body;
        if (username.trim().length === 0 || username === undefined || username === null) {
            return res.status(401).render('screen/login', { title: "Error", error: true, message: "Please provide username" })
        }
        if (password.trim().length === 0 || password === undefined || password === null) {
            return res.status(401).render('screen/login', { title: "Error", error: true, message: "Please provide password" })
        }
        if (req.session.user) {
            res.redirect('/private');
        }
        else {
            try {
                for (let index = 0; index < userData.length; index++) {
                    dbusername = userData[index].username
                    const user = userData[index];
                    if (username === dbusername) {
                        match = await bcrypt.compare(password, userData[index].hashedPassword);
                        // console.log(match);
                        // console.log(user)
                        if (match) {
                            req.session.user = user;
                            res.redirect('/private');
                        }
                        else {
                            return res.status(401).render('screen/login', { title: "Error", error: true, message: "Invalid Username and/or Password " })
                        }
                        break;
                    }
                }
            } catch (error) {
                res.status().json({ message: error });
            }
        }
    });

    app.get("/private", async (req, res) => {
        res.render("screen/private", { title: "Private Information", user: req.session.user });

    });
    app.get('/logout', async (req, res) => {
        req.session.destroy();
        res.render('screen/logout', { title: "Logout" });
    });
    app.use('/login', async (req, res, next) => {
        if (req.method === 'GET') {
            res.redirect('/')
        } else {
            next()
        }
    });

    app.use('*', (req, res) => {
        res.status(404).json({ message: "No such Page found" })

    })
}
module.exports = constructorMethod;