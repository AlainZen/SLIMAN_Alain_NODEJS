import express from 'express';
import authRoutes from './routes/authRoutes.js';
import user from './routes/UserRoutes.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/user', user);


export default router;