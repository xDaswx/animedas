import Router from 'express';
import validator from '../validators/req_validator';
import * as animeController from '../controllers/animeController';


const router =  Router()

router.get('/many/random',animeController.getSome);
router.get('/random',animeController.getRandom);
router.get('/random/maid',animeController.getRandomMaid);
router.get('/random/waifu',animeController.getRandomWaifu);
router.get('/random/smug',animeController.getRandomSmug);
router.get('/random/genshin',animeController.getRandomGenshin);
router.post('/put/anime',validator,animeController.putAnime);
router.post('/delete/anime',animeController.deleteAnime)
export default router;