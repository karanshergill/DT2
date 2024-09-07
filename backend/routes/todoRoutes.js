import express from 'express';
import { getAll, getById, createNew, updateById, deleteById } from '../controllers/todoControllers.js';

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', createNew);
router.patch('/:id', updateById);
router.delete('/:id', deleteById);

export default router;