const express = require("express");
const app = express();
//modulo handlebars
const handlebars = require('express-handlebars');
//modulo body parser (para formulários)
const bodyParser = require('body-parser');
//modulo criado Post
const Post = require('./models/Post')


//config
//definindo que a template engine é o handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine',  'handlebars')

//body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//Rotas
    app.get('/', function(req, res){

      Post.all({order: [['id', 'DESC']]}).then(function(posts){
        res.render("home", {posts: posts});
      })
    })

    app.get('/cad', function(req, res){
        res.render("formulario");
    })

    app.post('/add', function(req, res){
      Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
      }).then(function(){
        res.redirect('/')
        //res.send("Post criado")
      }).catch(function(erro){
        res.send("Houve erro: "+ erro)
      })
      
    })

    app.get('/deletar/:id', function(req, res){
      Post.destroy({where: {'id': req.params.id}}).then(function(){
        console.log('deletado')    
      }).catch(function(erro){
        console.log("nao deletado: "+ erro)
      })

    })

app.listen(8081, function() {
console.log("Servidor rodando na url localhost:8081")
}); //localhost:8081