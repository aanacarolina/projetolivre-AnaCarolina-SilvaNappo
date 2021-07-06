const express = require("express")
const router = express.Router()
const controller = require("../controllers/categoryController")

//rota leitura - read - get 
router.get("/", controller.getAllCategories)

//rota criação - create - post
router.post("/", controller.createCategory)

module.exports = router

