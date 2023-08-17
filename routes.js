const Router=require("express").Router();
const Controller=require('./controller')
Router.post("/newuser",Controller.adduser)
Router.post("/login",Controller.login)


module.exports = Router
