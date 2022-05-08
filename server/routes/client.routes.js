const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const clientController = require('../controllers/client.controller');

//auth
router.post('/register', authController.signUp);
router.post('/login', authController.signIn);
router.get('/logout', authController.logout);

//client DB
router.get('/', clientController.getAllUsers);
router.get("/:id", clientController.userInfo);
router.put('/wishlist', clientController.updateWishlist);
router.put("/:id", clientController.updateUser);

module.exports = router;