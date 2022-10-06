import GenetateError from './errorGenerate';
import STATUS from '../fixtures/httpStatusCode';
import { ProjectInterface } from '../interfaces/project.interface';
import UPDATESCHEMA from '../schemas/updateProjectSchema';
import INSERTSCHEMA from '../schemas/InsertProjectSchema';

const validateEntries = (data: ProjectInterface, update = false) => {
  let validation;

  if (update) {
    validation = UPDATESCHEMA.validate({ ...data });
  } else {
    validation = INSERTSCHEMA.validate({ ...data });
  }

  if (validation.error) {
    throw new GenetateError(STATUS.BADREQUEST, validation.error.message);
  }
};

export default validateEntries;
