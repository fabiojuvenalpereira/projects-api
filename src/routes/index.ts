import { Router } from 'express';
import insertProject from '../controllers/projects.cotroller';

const router = Router();

router.post('/', insertProject);

router.get('/', insertProject);
router.get('/:id', insertProject);

router.put('/', insertProject);

router.delete('/', insertProject);
router.delete('/:id', insertProject);

export default router;
