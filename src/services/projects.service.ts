// import generateToken from '../auth/token';
import { ProjectInterface } from '../interfaces/project.interface';
import { ProjectUpdateInterface } from '../interfaces/projectUpdate.interface';
import * as projectsModel from '../models/projects.model';
import GenetateError from '../utils/errorGenerate';
import STATUS from '../fixtures/httpStatusCode';
import validateEntries from '../utils/validateEntries';
import ObjectIdValidate from './utils/objectIdValidate';

export async function insertNewProject(project: ProjectInterface) {
  validateEntries(project);

  const projectExist = await projectsModel.findProjectBylink(project);
  if (projectExist) throw new GenetateError(STATUS.FORBIDEN, 'Project already exists');

  const insertedProject = await projectsModel.insertProjectOnDataBase(project);
  if (!insertedProject) throw new GenetateError(STATUS.BADREQUEST, 'Could not insert new project');

  return { status: 201, content: insertedProject };
}

export async function listProjects() {
  const foundProjects = await projectsModel.listProjectsFromDataBase();
  if (foundProjects.length !== 0) return { status: 200, content: foundProjects };

  throw new GenetateError(STATUS.BADREQUEST, 'Database are empty');
}

export async function findProject(id: string) {
  const foundProject = await projectsModel.findProjectOnDataBase(ObjectIdValidate(id));
  if (foundProject) return { status: 200, content: foundProject };

  throw new GenetateError(STATUS.NOTFOUND, 'Project not found in the database');
}

export async function updateProject(id:string, data:ProjectUpdateInterface) {
  const projectId = ObjectIdValidate(id);

  const foundProject = await projectsModel.findProjectOnDataBase(projectId);
  if (!foundProject) throw new GenetateError(STATUS.BADREQUEST, 'Could not found project');

  validateEntries(data);

  const updatedProject = await projectsModel.updateProjectOnDataBase(projectId, data);
  if (updatedProject.matchedCount === 0) throw new GenetateError(STATUS.BADREQUEST, 'Could not update project');

  return { status: 200, content: updatedProject };
}

export async function deleleProject(id:string) {
  const projectId = ObjectIdValidate(id);

  const deleteProject = await projectsModel.deleteProjectOnDataBase(projectId);
  if (deleteProject) return { status: 200, content: deleteProject };

  throw new GenetateError(STATUS.BADREQUEST, 'Could not delete project');
}

export async function deleleAllProjects() {
  const deletedProjects = await projectsModel.deleteAllProjectOnDataBase();

  if (deletedProjects) return { status: 200, content: deletedProjects };

  throw new GenetateError(STATUS.BADREQUEST, 'Could not delete projects');
}
