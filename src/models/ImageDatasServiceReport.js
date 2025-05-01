const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const ImageDatasServiceReport = sequelize.define('imageDatasServiceReport', {
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
      tableName: 'images_datas',
      timestamps: true,
});

module.exports = ImageDatasServiceReport;