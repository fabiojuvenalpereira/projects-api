import { ObjectId } from 'mongodb';

export default function ObjectIdValidate(id: string): ObjectId {
  if (!ObjectId.isValid(id)) {
    throw Error();
  }

  return new ObjectId(id);
}
