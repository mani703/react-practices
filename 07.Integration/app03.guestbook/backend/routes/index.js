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
        .use('/api', require('./guestbook'))
        .use(errorRouter.error404)
        .use(errorRouter.error500)
    }
}

module.exports = { applicationRouter };
