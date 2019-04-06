const Sequelize = require("sequelize");
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

  
  
//criando tabela banco de dados
const Postagem = sequelize.define('postagens', {
  titulo: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
})


//sincronizando o bd
//Postagem.sync({force: true})

//inserir dados
Postagem.create({
  titulo: "post",
  conteudo: "conteudo aqui"
})



const Usuario = sequelize.define('usuarios', {
  nome: {
    type: Sequelize.STRING
  },
  sobrenome: {
    type: Sequelize.STRING
  },
  idade: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  }
})

//sincronizando o bd
//Usuario.sync({force: true})

//inserir dados
Usuario.create({
  nome: "leo",
  sobrenome: "m",
  idade: 25,
  email: "leo@gmail.com"
})

  //teste
// sequelize.authenticate().then(function(){
//     console.log("Conectado no banco de dados com sucesso.")
// }).catch(function(erro){
//     console.log("Falha ao se conectar ao banco de dados." +erro)
// });