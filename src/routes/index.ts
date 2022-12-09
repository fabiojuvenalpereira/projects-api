import { Router } from 'express';
import healthCheck from './health';

import projectsRouter from './projects/index';

const router = Router();

router.use('/projects', projectsRouter);
router.use('/check', healthCheck);

export default router;
