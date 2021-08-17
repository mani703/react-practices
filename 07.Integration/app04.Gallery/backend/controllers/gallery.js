const fs = require('fs');
const path = require('path');
const models = require('../models');

module.exports = {
    read: async function(req, res, next) {
        try {
            const results = await models.Gallery.findAll({
                attributes: ['no', 'url', 'comment'],
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
    },
    delete: async function(req, res, next) {
        try {
            const no = req.params.no;
            const results = await models.Gallery.destroy({where: {no: no}});
            res
                .status(200)
                .send({
                    result: 'success',
                    data: no,
                    message: null
                });
        } catch (err) {
            next(err);
        } 
    },
    create: async function(req, res, next) {
        try {
            const file = req.body.selectedFile;
            console.log(typeof file);
            console.log("file: ", file);
            
            if(!file) {
                throw new Error('error: no file attached');
            }

            console.log("filepath:", file.path);
            const content = fs.readFileSync(file.path);

            const storeDirectory = path.join(path.dirname(require.main.filename), process.env.STATIC_RESOURCES_DIRECTORY, process.env.UPLOADIMAGE_STORE_LOCATION);
            const storePath = path.join(storeDirectory, file.filename) + path.extname(file.originalname);
            const url = path.join(process.env.UPLOADIMAGE_STORE_LOCATION, file.filename) + path.extname(file.originalname);

            fs.existsSync(storeDirectory) || fs.mkdirSync(storeDirectory);
            fs.writeFileSync(storePath, content, {flag: 'w+'});
            fs.unlinkSync(file.path);

            console.log('url: ', url);

            const result = await models.Gallery.create({
                url: url.replace(/\\/gi, '/'),
                comment: req.body.comment || ''
            });

            res
                .status(200)
                .send({
                    result: 'success',
                    data: result,
                    message: null
                });
                
        } catch (err) {
            next(err);
        }       
    }
}