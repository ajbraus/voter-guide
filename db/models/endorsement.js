// models/endorsement.js

'use strict';

module.exports = (sequelize, DataTypes) => {
  const Endorsement = sequelize.define('Endorsement', {
    content: DataTypes.TEXT
  }, {});

  Endorsement.associate = function(models) {
    // associations can be defined here
  };

  return Endorsement;
};
