import { NextFunction, Request, Response } from 'express';
import { insertNewProject } from '../services/projects.service';

const insertProject = async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;

  try {
    const projects = await insertNewProject(data);
    return res.status(projects.status).json(projects.content);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

export default insertProject;
