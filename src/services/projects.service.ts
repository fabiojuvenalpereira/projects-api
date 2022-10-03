// import generateToken from '../auth/token';
import { ProjectInterface } from '../interfaces/project.interface';
import * as projectsModel from '../models/projects.model';
import NewError from '../utils/errorGenerate';
import STATUS from '../utils/httpStatusCode';
import validateEntries from '../utils/validateEntries';
import ObjectIdValidate from './utils/objectIdValidate';

export async function insertNewProject(project: ProjectInterface) {
  validateEntries(project);
  const insertedProject = await projectsModel.insertProjectOnDataBase(project);

  return { status: 201, content: insertedProject};
}

export async function listProjects() {
  const foundProjects = await projectsModel.listProjectsFromDataBase();

  if (foundProjects.length !== 0) return { status: 200, content: foundProjects };
  throw NewError(STATUS.BADREQUEST, 'Database are empty')
}

export async function findProject(id: string) {
  const projectId = ObjectIdValidate(id);
  const foundProject = await projectsModel.findProjectOnDataBase(projectId);

  if (foundProject) return { status: 200, content: foundProject };
  throw NewError(STATUS.NOTFOUND, 'Project not found in the database');
}

export async function updateProject(id:string, data:any) {
  const projectId = ObjectIdValidate(id);
  const updatedProject = await projectsModel.updateProjectOnDataBase(projectId, data);

  if (updatedProject) return { status: 200, content: updatedProject };
  throw NewError(STATUS.BADREQUEST, 'Could not update project');
}

export async function deleleProject(id:string) {
  const projectId = ObjectIdValidate(id);
  const deleteProject = await projectsModel.deleteProjectOnDataBase(projectId);

  if (!deleteProject)return { status: 200, content: deleteProject };
  throw NewError(STATUS.BADREQUEST, 'Could not delete project');
}

export async function deleleAllProjects() {
  const deletedProjects = await projectsModel.deleteAllProjectOnDataBase();

  if (!deletedProjects)return { status: 200, content: deletedProjects };
  throw NewError(STATUS.BADREQUEST, 'Could not delete projects');
}
