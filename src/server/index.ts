import { Router } from 'express';
import chirpRouter from './routes';

const router = Router();
router.use(chirpRouter);//('/hello', chirpRouter);

export default router;