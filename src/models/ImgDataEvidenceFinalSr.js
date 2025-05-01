const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const ImgDataEvidenceFinalSr = sequelize.define('imgEvidenceFinalSr', {
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cloudinaryId: {
        type: DataTypes.STRING,
        allowNull: true, // o false si siempre debe tener uno
    },
      service_report_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'service_report_data',
          key: 'id'
        },
      },
    }, {
      tableName: 'img_data_evidence_final',
      timestamps: true,
});

module.exports = ImgDataEvidenceFinalSr;