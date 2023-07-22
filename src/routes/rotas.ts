import Router from 'express';
import validator from '../validators/req_validator';
import * as animeController from '../controllers/animeAPIController';


const router =  Router()

router.get('/get/:id',animeController.getById);
router.get('/many/:type',animeController.getSome);
router.get('/random',animeController.getRandom);
router.get('/random/maid',animeController.getRandomMaid);
router.get('/random/waifu',animeController.getRandomWaifu);
router.get('/random/smug',animeController.getRandomSmug);
router.get('/random/genshin',animeController.getRandomGenshin);
router.post('/admin/put/anime',validator,animeController.putAnime);
router.post('/admin/delete/anime',animeController.deleteAnime)
export default router;