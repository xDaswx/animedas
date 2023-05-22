import Router from 'express';
// import validator from '../validators/req_validator';
import * as animeController from '../controllers/animeController';


const router =  Router()

router.get('/random',animeController.getAnimes_random);
router.post('/putanim',animeController.putAnime);
router.get('/maid',animeController.getAnimes_maid);
router.get('/waifu',animeController.getAnimes_waifu);
export default router;