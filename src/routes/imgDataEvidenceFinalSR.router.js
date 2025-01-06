const { getAll, create, getOne, remove, update } = require('../controllers/imgDataEvidenceFinalSr.controllers.js');
const express = require('express');
const upload = require('../utils/multer');


const imgDataEvidenceFinalSrRouter = express.Router();

imgDataEvidenceFinalSrRouter.route('/img_datas_evidence_f')
    .get(getAll)
    .post(upload.single('images_evidence_f'), create);

imgDataEvidenceFinalSrRouter.route('/img_datas_evidence_f/:id')
    .get(getOne)
    .delete(remove)
    .put(upload.single('images_evidence_f'), update);

module.exports = imgDataEvidenceFinalSrRouter;