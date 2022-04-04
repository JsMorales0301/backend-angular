const { Router } = require('express');
const { 
    getProducts, 
    getProductById, 
    postProduct, 
    putProduct, 
    deleteProduct 
} = require('../controllers/product');

const router = Router();

router.get('/', getProducts);
router.get('/:_id', getProductById);
router.post('/', postProduct);
router.put('/:_id', putProduct);
router.delete('/:_id', deleteProduct);

module.exports = router;