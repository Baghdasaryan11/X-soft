import Router from 'express';
import ProductController from '../controllers/ProductController.js';

const router = new Router();


router.post("/product",ProductController.create);
router.get("/products", ProductController.getAll);
router.get("/product/:id", ProductController.getById);
router.put("/product", ProductController.update);
router.delete("/product/:id",ProductController.delete);


export default router;