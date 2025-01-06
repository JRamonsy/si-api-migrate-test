const { getAll, create, getOne, remove, update } = require('../controllers/evidenceInitialSr.controllers');
const express = require('express');

const evidenceInitialSrRouter = express.Router();

evidenceInitialSrRouter.route('/evidence_initial')
    .get(getAll)
    .post(create);

evidenceInitialSrRouter.route('/evidence_initial/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = evidenceInitialSrRouter;