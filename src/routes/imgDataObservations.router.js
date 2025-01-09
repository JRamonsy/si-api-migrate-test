const { getAll, create, getOne, remove, update } = require('../controllers/imgDataObservations.controllers.js');
const express = require('express');
const upload = require('../utils/multer');


const imgDataObservationsRouter = express.Router();

imgDataObservationsRouter.route('/img_datas_observations')
    .get(getAll)
    .post(upload.single('images_observations'), create);

imgDataObservationsRouter.route('/img_datas_observations/:id')
    .get(getOne)
    .delete(remove)
    .put(upload.single('images_observations'), update);

module.exports = imgDataObservationsRouter;