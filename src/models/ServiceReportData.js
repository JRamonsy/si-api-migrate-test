const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const ServiceReportData = sequelize.define('serviceReportData', {
    problemDescription: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    observations: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    requirementForRepair: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    serviceCompleted: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    plateId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'plate_data',
          key: 'id'
        },
      },
    }, {
      tableName: 'service_report_data',
      timestamps: true,
});

module.exports = ServiceReportData;