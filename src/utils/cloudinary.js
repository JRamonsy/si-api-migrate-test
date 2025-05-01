const cloudinary = require("cloudinary").v2;
const fs = require('fs');
const path = require('path');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Aquí le podemos cambiar el nombre a la carpeta de "node_app", y ponerle
// un nombre diferente a la carpeta donde queramos subir nuestros archivos
// a cloudinary
const folder = "images_si_app";

const uploadToCloudinary = async (file) => {
    const { path: filePath, filename } = file;

    try {
        const filePathOnCloudinary = folder + "/" + path.parse(filename).name;
        const result = await cloudinary.uploader.upload(filePath, {
            public_id: filePathOnCloudinary
        });

        return {
            url: result.secure_url,
            public_id: result.public_id
        };
    } catch (error) {
        console.log(error);
        return { message: "Upload to cloudinary failed" };
    } finally {
        fs.unlinkSync(filePath);
    }
};


const deleteFromCloudinary = async (publicId) => {
    try {
        await cloudinary.uploader.destroy(publicId);
    } catch (error) {
        console.log(error);
        return { message: "Delete from cloudinary failed" };
    }
};


module.exports = { uploadToCloudinary, deleteFromCloudinary };