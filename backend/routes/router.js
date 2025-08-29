import express from 'express'
import controller from '../controllers/controller.js';
import validate from '../middlewares/validation.js'; 

const router = express.Router();

router.post('/cadastrar',validate, controller.addUser)


export default router;