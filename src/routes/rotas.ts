import Router from 'express';
import validator from '../validators/req_validator';
import * as animeController from '../controllers/animeController';


const router =  Router()

router.get('/random',animeController.getAnimes_random);
router.post('/put/anime',validator,animeController.putAnime);
router.post('/delete/anime',animeController.deleteAnime)
router.get('/maid',animeController.getAnimes_random);
router.get('/waifu',animeController.getAnimes_random);
export default router;