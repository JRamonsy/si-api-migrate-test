const { getAll, create, getOne, remove, update } = require('../controllers/evidenceFinalSr.controllers');
const express = require('express');

const evidenceFinalSrRouter = express.Router();

evidenceFinalSrRouter.route('/evidence_final')
    .get(getAll)
    .post(create);

evidenceFinalSrRouter.route('/evidence_final/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = evidenceFinalSrRouter;