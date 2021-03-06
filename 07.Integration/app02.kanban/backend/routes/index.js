const errorRouter = require('./error');
const auth = require('./auth');

const applicationRouter = {
    setup: async function(application){

        application
        .all('*', function(req, res, next) {
            res.locals.req = req;
            res.locals.res = res;
            next();
        })

        .use('/api', require('./kanban'))
        .use(errorRouter.error404) // 404 error
        .use(errorRouter.error500) // 500 error
    }
};

module.exports = { applicationRouter };