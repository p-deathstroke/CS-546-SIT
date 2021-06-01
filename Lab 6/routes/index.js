const booksRoutes = require('./books');
const reviewsRoutes = require('./reviews');

const constructorMethod = (app) => {
  app.use('/books', booksRoutes);
  app.use('/reviews', reviewsRoutes);

  app.use('*', (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;
