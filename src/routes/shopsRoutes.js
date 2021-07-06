const express = require("express")
const router = express.Router()
const controller = require("../controllers/shopController")

//rota criação - create - post
router.post("/", controller.createShop)

//rotas leitura - read - get 
router.get("/", controller.getAllShops)

router.get("/drugstore", controller.showDrugstore)
router.get("/gym", controller.showGym)
router.get("/hotel", controller.showHotel)

router.get("/:id", controller.getShopBySuburb)

//rota atualização - update - put
router.put("/:id", controller.updateShop)

//rota exclusão - delete - delete
router.delete("/:id", controller.deleteShop)

module.exports = router
