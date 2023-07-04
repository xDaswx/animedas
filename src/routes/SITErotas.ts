import Router from "express";
import SITErotas from '../controllers/animeSITEController'
const router = Router()

router.get('/home',SITErotas.home)
router.get('/gallery',SITErotas.gallery)
export default router