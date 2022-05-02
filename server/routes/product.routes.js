const router = require('express').Router();
const productController = require('../controllers/product.controllers');
const multer = require('multer');
const upload = multer();

router.get('/', productController.getProducts);
router.get('/latest', productController.getLatestProduct);
router.get('/best-seller', productController.getBestSeller);
router.get('/trend', productController.getTrend);
router.get('/deals', productController.getDeals);
router.get('/:id', productController.getProduct);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);


module.exports = router;