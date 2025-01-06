const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const RemissionData = sequelize.define('remissionData', {
    email: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    referenceAgent: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    remissionDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    receivedDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    whoReceive: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    unit: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    deliveryDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    unitPrice: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    totalPrice: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    subtotal: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    vat: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    total: {
        type: DataTypes.DECIMAL,
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
      tableName: 'remission_data',
      timestamps: true,
});

module.exports = RemissionData;