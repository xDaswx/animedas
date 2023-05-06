import { Router, Request, Response, NextFunction} from 'express';
import validator from '../validators/req_validator';
import * as animeController from '../controllers/animeController';


const router =  Router()

router.get('/random',animeController.getAnimes_random);
router.get('/maid',animeController.getAnimes_maid);
router.get('/waifu',animeController.getAnimes_waifu);
export default router;