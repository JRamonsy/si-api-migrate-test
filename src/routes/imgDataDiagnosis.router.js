const { getAll, create, getOne, remove, update } = require('../controllers/imgDataDiagnosisSr.controllers.js');
const express = require('express');
const upload = require('../utils/multer');


const imgDataDiagnosisSrRouter = express.Router();

imgDataDiagnosisSrRouter.route('/img_datas_diagnosis')
    .get(getAll)
    .post(upload.single('images_diagnosis'), create);

imgDataDiagnosisSrRouter.route('/img_datas_diagnosis/:id')
    .get(getOne)
    .delete(remove)
    .put(upload.single('images_diagnosis'), update);

module.exports = imgDataDiagnosisSrRouter;