const catchError = require('../utils/catchError');
const ImgDataDiagnosisSr = require('../models/ImgDataDiagnosisSr');
const {uploadToCloudinary, deleteFromCloudinary} = require('../utils/cloudinary')

const getAll = catchError(async(req, res) => {
    const results = await ImgDataDiagnosisSr.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    if(!req.file) return res.status(400).json({ message: 'No file uploaded.' });
    const { url } = await uploadToCloudinary(req.file);
    const image = await ImgDataDiagnosisSr.create({
        imageUrl: url,
        service_report_id: req.body.service_report_id
    })
    return res.status(201).json(image);

});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await ImgDataDiagnosisSr.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const image = await ImgDataDiagnosisSr.findByPk(id);
    if (!image) return res.status(404).json({ message: 'imagen no encontrada' });
    await deleteFromCloudinary(image.imageUrl)
    await image.destroy();
    return res.json(image);
});

const update = catchError(async (req, res) => {
    const { id } = req.params;
    console.log(`Request to update image with ID: ${id}`);
  
    const image = await ImgDataDiagnosisSr.findByPk(id);
    if (!image) {
      console.error(`Image with ID: ${id} not found.`);
      return res.status(404).json({ message: 'Image not found' });
    }
  
    // Si hay un archivo nuevo, sube la nueva imagen y elimina la antigua
    if (req.file) {
      console.log(`Deleting old image from Cloudinary: ${image.imageUrl}`);
      await deleteFromCloudinary(image.imageUrl);
  
      console.log(`Uploading new image to Cloudinary`);
      const { url } = await uploadToCloudinary(req.file);
  
      req.body.imageUrl = url;
    }
  
    // Actualiza los demás campos
    await image.update(req.body);
    console.log(`Image with ID: ${id} updated successfully.`);
    return res.json(image);
  });

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}