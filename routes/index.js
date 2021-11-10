const homeController = require('../controllers/home');

const initRoute = (app) => {
  app.get('/', homeController.helloWorld)
}

module.exports = initRoute