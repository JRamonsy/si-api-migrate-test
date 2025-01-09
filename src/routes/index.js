const express = require('express');
const plateDataRouter = require('./plateData.router');
const imageDataRouter = require('./imageData.router');
const checkListDataRouter = require('./checklistData.router');
const serviceReportRouter = require('./serviceReportData.router');
const remissionDataRouter = require('./remissionData.router');
const imageDatasServiceReportRouter = require('./imageDatasServiceReport.router');
const imgDataDiagnosisSrRouter = require('./imgDataDiagnosis.router');
const imgDataEvidenceInitialSrRouter = require('./imgDataEvidenceInitialSr.router');
const imgDataEvidenceFinalSrRouter = require('./imgDataEvidenceFinalSR.router');
const userRouter = require('./user.router');
const evidenceFinalSrRouter = require('./evidenceFinalSr.router');
const evidenceInitialSrRouter = require('./evidenceInitialSr.router');
const imgDataObservationsRouter = require('./imgDataObservations.router');
const router = express.Router();

// colocar las rutas aquí
router.use(plateDataRouter);
router.use(imageDataRouter);
router.use(checkListDataRouter);
router.use(serviceReportRouter)
router.use(remissionDataRouter)
router.use(imageDatasServiceReportRouter)
router.use(imgDataDiagnosisSrRouter)
router.use(imgDataEvidenceInitialSrRouter)
router.use(imgDataEvidenceFinalSrRouter)
router.use(userRouter)
router.use(evidenceFinalSrRouter)
router.use(evidenceInitialSrRouter)
router.use(imgDataObservationsRouter)

module.exports = router;