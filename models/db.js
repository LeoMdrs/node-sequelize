//modulo sequelize (para bd)
const Sequelize = require("sequelize");

//Conectando com o banco
const Op = Sequelize.Op;
const sequelize = new Sequelize(
    "cursonodejs",
    "root", 
    "password",
    {
      host: "localhost",
      dialect: 'mysql',
      logging: false,
      freezeTableName: true,
      operatorsAliases: {
        $and: Op.and,
        $or: Op.or,
        $eq: Op.eq,
        $gt: Op.gt,
        $lt: Op.lt,
        $lte: Op.lte,
        $like: Op.like
      }
    }
  )

  module.exports = {
      Sequelize: Sequelize,
      sequelize: sequelize
  }