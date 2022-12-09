import { Router } from 'express';
import validateHash from '../../auth/validateHash';
import * as projectsController from '../../controllers/projects.cotroller';

const projectsRouter = Router();

projectsRouter.post('/', validateHash, projectsController.insertProject);

projectsRouter.get('/', projectsController.listProjects);
projectsRouter.get('/:id', projectsController.findProject);

projectsRouter.put('/:id', validateHash, projectsController.updateProject);

projectsRouter.delete('/', validateHash, projectsController.deleleAllProjects);
projectsRouter.delete('/:id', validateHash, projectsController.deleteProject);

export default projectsRouter;
