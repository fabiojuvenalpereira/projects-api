import { Router } from 'express';
import validateHash from '../auth/validateHash';
import * as projectsController from '../controllers/projects.cotroller';

const router = Router();

router.post('/', validateHash, projectsController.insertProject);

router.get('/', validateHash, projectsController.listProjects);
router.get('/:id', validateHash, projectsController.findProject);

router.put('/:id', validateHash, projectsController.updateProject);

router.delete('/', validateHash, projectsController.deleleAllProjects);
router.delete('/:id', validateHash, projectsController.deleteProject);

export default router;
