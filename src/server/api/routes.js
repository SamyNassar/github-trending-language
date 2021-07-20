const controllers = require('./controller');




module.exports = function(app){
    app.route('/').get(controllers.main);
    app.route('/trending-languages').get(controllers.trendingLanguage);
}