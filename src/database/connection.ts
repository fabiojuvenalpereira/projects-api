import * as dotenv from 'dotenv';
import * as mongoDB from 'mongodb';

dotenv.config();

const MONGO_DB_URL = process.env.DB_CONN_STRING || 'mongodb://127.0.0.1:27017/';
const COLLECTION_DB = process.env.COLLECTION_DB || 'projects';

export default async function connection() {
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(MONGO_DB_URL);
  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);
  const projectsCollection: mongoDB.Collection = db.collection(COLLECTION_DB);

  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${projectsCollection.collectionName}`);
  return projectsCollection;
}
