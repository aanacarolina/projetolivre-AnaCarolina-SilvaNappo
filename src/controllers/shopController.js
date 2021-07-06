const mongoose = require('mongoose')
const Shop = require('../models/shop')


const createShop = async (req, res) => {
    const shop = new Shop({
        _id: new mongoose.Types.ObjectId(),
        nomeFantasia: req.body.nomeFantasia,
        endereco : req.body.endereco,
        bairro : req.body.bairro,
        horarioFuncionamento : req.body.horarioFuncionamento,
        email : req.body.email,
        categoria : req.body.categoria
    })

    const existShop = await Shop.findOne({ nomeFantasia: req.body.nomeFantasia })
    if (existShop) {
        return res.status(409).json({ error: "Oba, essa loja já se encontra cadastrada em nosso site." })
    }

    try {
        const newShop = await shop.save()
        res.status(201).json({
            message: "Loja cadastrada com sucesso. Gratidão pela parceria!",
            newShop
        })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}


const getShopBySuburb = async (req, res) => {
    const shop = await Shop.find()
    res.status(200).json(shop)
    
    try {
        const { suburb } = req.query.bairro

        const shop = await Shop.find(suburb)
        

        if (shop == undefined || suburb == " ") {
            return res.status(404).json({
                message: "Ooooops! Bairro inválido, tente novamente"
            })
        }
        res.status(200).json(shop)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


const getAllShops = async (req, res) => {
    const shop = await Shop.find().populate('categoria')
    res.status(200).json(shop)
}


const showDrugstore = async (req, res) => {
    const shops = await Shop.find().populate('categoria')
    const shopFiltered = shops.filter(shop => shop.category.nome == "farmácia")

    res.status(200).json(shopFiltered)
}


const showGym = async (req, res) => {
    const shops = await Shop.find().populate('categoria')
    const shopFiltered = shops.filter(shop => shop.category.nome == "academia")

    res.status(200).json(shopFiltered)
}


const showHotel = async (req, res) => {
    const shops = await Shop.find().populate('categoria')
    const shopFiltered = shops.filter(shop => shop.category.nome == "hotel")

    res.status(200).json(shopFiltered)
}



const updateShop = async (req, res) => {

    const shop = await Shop.findById(req.params.id)
    const body = req.body

    if (shop == null) res.status(404).json({ message: 'Loja não encontrada. Dá uma conferida nos dados inseridos, blz?' })

    Object.keys(body).forEach(key => {
        shop[key] = body[key]
    })

    try {
        const shopUpdated = await shop.save()
        res.status(200).json({
            message: "Certinho,  dados atualizados.",
            shopUpdated
        })

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


const deleteShop = async (req, res) => {
    const shop = await Shop.findById(req.params.id);

    if (shop == "" || shop == null) {
        return res.status(404).json({ message: "Loja não encontrada" })
    }

    try {
        await shop.remove()
        res.status(200).json({ message: "Loja excluída! Esperamos você de volta um dia desses." })

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    createShop,
    getAllShops,
    getShopBySuburb,
    showDrugstore,
    showGym,
    showHotel,
    updateShop,
    deleteShop
}
