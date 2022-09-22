import { Router } from 'express';
import * as projectsController from '../controllers/projects.cotroller';

const router = Router();

router.post('/', projectsController.insertProject);

router.get('/', projectsController.listProjects);
router.get('/:id', projectsController.findProject);

router.put('/:id', projectsController.updateProject);

router.delete('/', projectsController.deleleAllProjects);
router.delete('/:id', projectsController.deleteProject);

export default router;
