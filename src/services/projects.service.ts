import * as ProjectModel from '../models/projects.model';

export async function insertNewProject(project: any) {
  const insertedProject = await ProjectModel.insertProjectOnDataBase(project);
  return { status: 201, content: insertedProject };
}

export async function listProjects() {
  const foundProjects = await ProjectModel.listProjectsFromDataBase();
  return { status: 200, content: foundProjects };
}

export async function findProject(projectId: any) {
  const foundProject = await ProjectModel.findProjectOnDataBase(projectId);
  return { status: 200, content: foundProject };
}

export async function updateProject(data:any) {
  const insertedProject = await ProjectModel.updateProjectOnDataBase(project, data);
  return { status: 200, content: insertedProject };
}

export async function deleleProject(projectId:any) {
  const deleteProject = await ProjectModel.deleteProjectOnDataBase(projectId);
  return { status: 200, content: deleteProject };
}

export async function deleleAllProjects() {
  const deletedProjects = await ProjectModel.deleteAllProjectOnDataBase();
  return { status: 200, content: deletedProjects };
}
