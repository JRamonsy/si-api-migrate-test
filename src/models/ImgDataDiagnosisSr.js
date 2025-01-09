const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const ImgDataDiagnosisSr = sequelize.define('imgDataDiagnosisSr', {
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
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
  tableName: 'img_data_diagnosis',
  timestamps: true,
});

module.exports = ImgDataDiagnosisSr;