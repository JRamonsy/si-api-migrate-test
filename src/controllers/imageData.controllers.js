const catchError = require('../utils/catchError');
const ImageData = require('../models/ImageData');
const {uploadToCloudinary, deleteFromCloudinary} = require('../utils/cloudinary')

const getAll = catchError(async(req, res) => {
    const results = await ImageData.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    if(!req.file) return res.status(400).json({ message: 'No file uploaded.' });
    const { url, public_id } = await uploadToCloudinary(req.file);
    const image = await ImageData.create({
        imageUrl: url,
        cloudinaryId: public_id,
        plateId: req.body.plateId
    })
    return res.status(201).json(image);

});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await ImageData.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async (req, res) => {
    const { id } = req.params;
    const image = await ImageData.findByPk(id);
    if (!image) return res.status(404).json({ message: 'Imagen no encontrada' });

    if (image.cloudinaryId) {
        await deleteFromCloudinary(image.cloudinaryId);
    }

    await image.destroy();
    return res.json(image);
});


const update = catchError(async (req, res) => {
    const { id } = req.params;
    console.log(`Request to update image with ID: ${id}`);
  
    const image = await ImageData.findByPk(id);
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
  
  
  


// const update = catchError(async(req, res) => {
//     const { id } = req.params;
//     const result = await ImageData.update(
//         req.body,
//         { where: {id}, returning: true }
//     );
//     if(result[0] === 0) return res.sendStatus(404);
//     return res.json(result[1][0]);
// });

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}