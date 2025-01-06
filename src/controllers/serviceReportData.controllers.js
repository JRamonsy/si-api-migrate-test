const catchError = require('../utils/catchError');
const ServiceReportData = require('../models/ServiceReportData');
const ImageDatasServiceReport = require('../models/ImageDatasServiceReport');
const ImgDataDiagnosisSr = require('../models/ImgDataDiagnosisSr');
const ImgDataEvidenceInitialSr = require('../models/ImgDataEvidenceInitialSr');
const ImgDataEvidenceFinalSr = require('../models/ImgDataEvidenceFinalSr');
const EvidenceInitialSr = require('../models/EvidenceInitialSr');

const getAll = catchError(async(req, res) => {
    const results = await ServiceReportData.findAll({
            include: [
                { model: ImageDatasServiceReport, as: 'images' },
                { model: ImgDataDiagnosisSr, as: 'images_diagnosis' },
                { model: ImgDataEvidenceInitialSr, as: 'images_evidence_initial', 
                    include: [
                        { model: EvidenceInitialSr, as: 'evidenceInitial' }
                    ]
                 },
                { model: ImgDataEvidenceFinalSr, as: 'images_evidence_final' },

            ]
        });
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await ServiceReportData.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await ServiceReportData.findByPk(id, {
        include: [
            { model: ImageDatasServiceReport, as: 'images' },
            { model: ImgDataDiagnosisSr, as: 'images_diagnosis' },
            { model: ImgDataEvidenceInitialSr, as: 'images_evidence_initial' },
            { model: ImgDataEvidenceFinalSr, as: 'images_evidence_final' },

        ]
    });
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await ServiceReportData.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await ServiceReportData.update(
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