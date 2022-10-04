import { NextFunction, Request, Response } from 'express';
import * as projectsService from '../services/projects.service';

export async function insertProject(req: Request, res: Response, next: NextFunction) {
  const data = req.body;

  try {
    const projects = await projectsService.insertNewProject(data);
    return res.status(projects.status).json(projects.content);
  } catch (error) {
    console.log(error);
    return next(error);
  }
}

export async function listProjects(_req: Request, res: Response, next: NextFunction) {
  try {
    const foundProjects = await projectsService.listProjects();
    return res.status(foundProjects.status).json(foundProjects.content);
  } catch (error) {
    console.log(error);
    return next(error);
  }
}

export async function findProject(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;

    const foundProject = await projectsService.findProject(id);
    return res.status(foundProject.status).json(foundProject.content);
  } catch (error) {
    console.log(error);
    return next(error);
  }
}

export async function updateProject(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const data = req.body;

    const foundProject = await projectsService.updateProject(id, data);

    return res.status(foundProject.status).json(foundProject.content);
  } catch (error) {
    console.log(error);
    return next(error);
  }
}

export async function deleteProject(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;

    const foundProject = await projectsService.deleleProject(id);
    return res.status(foundProject.status).json(foundProject.content);
  } catch (error) {
    console.log(error);
    return next(error);
  }
}

export async function deleleAllProjects(_req: Request, res: Response, next: NextFunction) {
  try {
    const foundProject = await projectsService.deleleAllProjects();
    return res.status(foundProject.status).json(foundProject.content);
  } catch (error) {
    console.log(error);
    return next(error);
  }
}
