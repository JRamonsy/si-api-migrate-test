const catchError = require('../utils/catchError');
const EvidenceFinalSr = require('../models/EvidenceFinalSr');

const getAll = catchError(async(req, res) => {
    const results = await EvidenceFinalSr.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await EvidenceFinalSr.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await EvidenceFinalSr.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await EvidenceFinalSr.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await EvidenceFinalSr.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}   