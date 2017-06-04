import { Router } from 'express';
import * as MainController from '../controllers/main.controller';
const router = new Router();

router.route('/songs').get(MainController.getSongs);

router.route('/library/:id').get(MainController.getSongFromLibrary);

router.route('/tube/:id').get(MainController.getSongFromYoutube);

export default router;
