const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const EvidenceFinalSr = sequelize.define('evidenceFinalSr', {
    imgDescriptionEvidenceF: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    imgEvidenceFId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'img_data_evidence_final',
          key: 'id'
        },
      },
    }, {
      tableName: 'evidence_f',
      timestamps: true,
});

module.exports = EvidenceFinalSr;