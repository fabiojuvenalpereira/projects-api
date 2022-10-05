import { ObjectId } from 'mongodb';
import { ProjectUpdateInterface } from '../interfaces/projectUpdate.interface';
import connection from './connection';

export async function insertProjectOnDataBase(test: any) {
  const conn = await connection();
  const insertedObject = await conn.insertOne(test);
  return insertedObject;
}

export async function listProjectsFromDataBase() {
  const conn = await connection();
  const foundProjects = await conn.find({}).toArray();
  return foundProjects;
}

export async function findProjectOnDataBase(projectId: ObjectId) {
  const conn = await connection();
  const foundProjects = await conn.findOne({ _id: projectId });
  return foundProjects;
}

export async function findProjectBylink(link: any) {
  const conn = await connection();
  const foundProjectByLink = await conn.findOne({
    $or: [
      { title: link.title },
      { abstractContent: link.abstractContent },
      { content: link.content },
      { images: link.images },
      { linkProject: link.linkProject },
      { skills: link.skills },
    ],
  });
  return foundProjectByLink;
}

export async function updateProjectOnDataBase(projectId:ObjectId, data: ProjectUpdateInterface) {
  const conn = await connection();

  const foundProjects = await conn.updateOne(
    { _id: projectId },
    { $set: { ...data } },
  );

  return foundProjects;
}

export async function deleteProjectOnDataBase(projectId:ObjectId) {
  const conn = await connection();
  const foundProjects = await conn.deleteOne({ _id: projectId });
  return foundProjects;
}

export async function deleteAllProjectOnDataBase() {
  const conn = await connection();
  const foundProjects = await conn.deleteMany({});
  return foundProjects;
}
