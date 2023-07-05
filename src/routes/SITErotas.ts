import Router from "express";
import SITErotas from '../controllers/animeSITEController'
const router = Router()

router.get('/home',SITErotas.home)
router.get('/gallery',SITErotas.gallery)
router.get('/gallery/maid',SITErotas.galleryMaid)
router.get('/gallery/waifu',SITErotas.galleryWaifu)
router.get('/gallery/smug',SITErotas.gallerySmug)
router.get('/gallery/genshin',SITErotas.galleryGenshin)
router.get('/see/:id',SITErotas.seeByID)
export default router