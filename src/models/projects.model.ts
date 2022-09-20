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

export async function findProjectOnDataBase(projectId: any) {
  const conn = await connection();
  const foundProjects = await conn.findOne({ _id: projectId });
  return foundProjects;
}

export async function updateProjectOnDataBase(projectID:any, content: any) {
  const conn = await connection();
  const foundProjects = await conn.updateOne(
    { _id: projectID },
    { $set: { ...content } },
  );
  return foundProjects;
}

export async function deleteProjectOnDataBase(projectID:any) {
  const conn = await connection();
  const foundProjects = await conn.deleteOne({ _id: projectID });
  return foundProjects;
}

export async function deleteAllProjectOnDataBase() {
  const conn = await connection();
  const foundProjects = await conn.deleteMany({});
  return foundProjects;
}
