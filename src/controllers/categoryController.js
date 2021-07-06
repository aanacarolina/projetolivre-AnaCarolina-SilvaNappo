const mongoose = require('mongoose')
const Category = require('../models/category')


const createCategory = async (req, res) => {
    const category = new Category ({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        criadoEm: req.body.criadoEm
    })

    const existCategory = await Category.findOne({ nome: req.body.nome })
    if (existCategory) {
        return res.status(409).json({ error: "Categoria já existe" })
    }

try {
        const newCategory = await category.save()
        res.status(201).json(newCategory)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


const getAllCategories = async (req, res) => {
    try {
        const category = await Category.find()
        res.status(200).json(category)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}



module.exports = {
    createCategory,
    getAllCategories,
}