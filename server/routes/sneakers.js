import Router from 'express';
import sneakersController from '../controllers/sneakers.controller.js';
import allowClient from "../middleware/allowClient.js";
const router = Router();

router.route('/').get(sneakersController.getAll);
router.route('/filter/').post(sneakersController.getFiltered);

export default router;