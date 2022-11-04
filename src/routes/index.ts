import { Router } from 'express';
import validateHash from '../auth/validateHash';
import * as projectsController from '../controllers/projects.cotroller';

const router = Router();

router.post('/', validateHash, projectsController.insertProject);

router.get('/', projectsController.listProjects);
router.get('/:id', projectsController.findProject);

router.put('/:id', validateHash, projectsController.updateProject);

router.delete('/', validateHash, projectsController.deleleAllProjects);
router.delete('/:id', validateHash, projectsController.deleteProject);

export default router;
