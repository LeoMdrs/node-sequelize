const db = require('./db')

const Post = db.sequelize.define('postagens', {
    titulo: {
      type: db.Sequelize.STRING
    },
    conteudo: {
      type: db.Sequelize.TEXT
    }
  })

//sincronizando o bd (criar a tabela)
//Post.sync({force: true})

module.exports = Post