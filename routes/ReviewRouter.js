import Router from 'express';
import ReviewController from '../controllers/ReviewController.js';

const router = new Router();


router.post("/review",ReviewController.create);
router.get("/reviews", ReviewController.getAll);
router.get("/review/:id", ReviewController.getById);
router.put("/review", ReviewController.update);
router.delete("/review/:id",ReviewController.delete);


export default router;