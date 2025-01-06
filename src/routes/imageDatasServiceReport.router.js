const { getAll, create, getOne, remove, update } = require('../controllers/imageDatasServiceReport.controllers.js');
const express = require('express');
const upload = require('../utils/multer');

const imageDatasServiceReportRouter = express.Router();

imageDatasServiceReportRouter.route('/images_datas')
    .get(getAll)
    .post(upload.single('images'), create);

imageDatasServiceReportRouter.route('/images_datas/:id')
    .get(getOne)
    .delete(remove)
    .put(upload.single('images'), update);  // Asegúrate de que esta línea esté presente

module.exports = imageDatasServiceReportRouter;