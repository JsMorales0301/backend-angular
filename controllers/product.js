const { request, response } = require('express');
const product = require('../models/product');

const getProducts = async (req = request, res = response) => {
   const producto = await product.find();
   res.json(producto);
}

const getProductById = async(req = request, res = response) => {
    const { _id } = req.params;
    const producto = await product.findOne({ _id });
    res.json(producto);
};

const postProduct = async(req = request, res = response) => {
    const { _id ,name, price } = req.body;

    const newProduct = await product({
        _id,
        name,
        price
    });

    await newProduct.save();

    res.json({
        msg: 'Producto creado con exito'
    });
}

const putProduct = async(req = request, res = response) => {
    const { _id } = req.params;
    const { name, price } = req.body;
    const producto = await product.findOneAndUpdate({ _id }, { name, price });
    res.json({
        msg: 'Producto actualizado'
    })
}

const deleteProduct = async(req = request, res = response) => {
    const { _id } = req.params;
    const producto = await product.deleteOne({ _id });
    res.json({
        msg: 'Producto eliminado'
    });
}

module.exports = {
    getProducts,
    getProductById,
    postProduct,
    putProduct,
    deleteProduct
}