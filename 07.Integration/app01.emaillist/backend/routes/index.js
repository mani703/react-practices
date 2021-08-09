const errorRouter = require('./error');
const auth = require('./auth');

const applicationRouter = {
    setup: async function(application){

        const site = await models.Site.findOne();

        application
        .all('*', function(req, res, next) {
            res.locals.req = req;
            res.locals.res = res;
            next();
        })

        .use('/api', require('./emaillist'))
        .use(errorRouter.error404) // 404 error
        .use(errorRouter.error500) // 500 error
    }
};

module.exports = { applicationRouter };