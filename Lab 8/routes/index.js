const searchRoutes = require('./search')
const showsRoutes = require('./shows')


const constructorMethod = (app) => {
    app.use("/", searchRoutes);
    app.use('/shows', showsRoutes);
    app.use("*", (req, res) => {
        res.render('screen/error')
       
      });
}

module.exports = constructorMethod;
