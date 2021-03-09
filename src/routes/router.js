import express from 'express';
import UserController from '../controller/users/useController';

const router = express.Router();

router.post('/users', UserController.post);

export default router;