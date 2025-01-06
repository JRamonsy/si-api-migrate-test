const { getAll, create, getOne, remove, update } = require('../controllers/imgDataEvidenceInitialSr.controllers.js');
const express = require('express');
const upload = require('../utils/multer');


const imgDataEvidenceInitialSrRouter = express.Router();

imgDataEvidenceInitialSrRouter.route('/img_datas_evidence_i')
    .get(getAll)
    .post(upload.single('images_evidence_i'), create);

imgDataEvidenceInitialSrRouter.route('/img_datas_evidence_i/:id')
    .get(getOne)
    .delete(remove)
    .put(upload.single('images_evidence_i'), update);

module.exports = imgDataEvidenceInitialSrRouter;