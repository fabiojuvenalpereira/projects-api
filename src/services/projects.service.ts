import * as projectsModel from '../models/projects.model';
import ObjectIdValidate from './utils/objectIdValidate';

export async function insertNewProject(project: any) {
  const insertedProject = await projectsModel.insertProjectOnDataBase(project);
  return { status: 201, content: insertedProject };
}

export async function listProjects() {
  const foundProjects = await projectsModel.listProjectsFromDataBase();
  return { status: 200, content: foundProjects };
}

export async function findProject(id: string) {
  const projectId = ObjectIdValidate(id);

  const foundProject = await projectsModel.findProjectOnDataBase(projectId);
  return { status: 200, content: foundProject };
}

export async function updateProject(id:string, data:any) {
  const projectId = ObjectIdValidate(id);

  const insertedProject = await projectsModel.updateProjectOnDataBase(projectId, data);
  return { status: 200, content: insertedProject };
}

export async function deleleProject(id:string) {
  const projectId = ObjectIdValidate(id);

  const deleteProject = await projectsModel.deleteProjectOnDataBase(projectId);
  return { status: 200, content: deleteProject };
}

export async function deleleAllProjects() {
  const deletedProjects = await projectsModel.deleteAllProjectOnDataBase();
  return { status: 200, content: deletedProjects };
}
