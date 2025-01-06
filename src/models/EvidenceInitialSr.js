const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const EvidenceInitialSr = sequelize.define('evidenceInitialSr', {
    imgDescriptionEvidenceI: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    imgEvidenceIId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'img_data_evidence_initial',
          key: 'id'
        },
      },
    }, {
      tableName: 'evidence_i',
      timestamps: true,
});

module.exports = EvidenceInitialSr ;