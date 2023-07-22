import Router from 'express';
import validator from '../validators/req_validator';
import * as animeController from '../controllers/animeAPIController';
import { PrivateEndpoint } from '../config/passport';


const router =  Router()

router.get('/get/:id',animeController.getById);
router.get('/many/:type',animeController.getSome);
router.get('/random',animeController.getRandom);
router.get('/random/maid',animeController.getRandomMaid);
router.get('/random/waifu',animeController.getRandomWaifu);
router.get('/random/smug',animeController.getRandomSmug);
router.get('/random/genshin',animeController.getRandomGenshin);
router.post('/admin/login',animeController.login);
router.post('/admin/register',animeController.register);
router.post('/admin/put/anime',PrivateEndpoint,validator,animeController.putAnime);
router.post('/admin/delete/anime',PrivateEndpoint,animeController.deleteAnime)
export default router;