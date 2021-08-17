const models = require('../models');

module.exports = {
    readAll: async function(req, res, next) {
        try {
            const results = await models.Guestbook.findAll({
                attributes: [
                    'no',
                    'name',
                    'message',
                    'regDate'
                ],
                order: [
                    ['no', 'DESC']
                ]
            });
            
            res
                .status(200)
                .send({
                    result: 'success',
                    data: results,
                    message: null
                });
        } catch (err) {
            next(err);
        }
    }
}