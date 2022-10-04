import Joi from 'joi';

import { ProjectInterface } from '../interfaces/project.interface';
import GenetateError from './errorGenerate';
import STATUS from './httpStatusCode';

const SCHEMA = Joi.object({
  title: Joi.string(),
  abstractContent: Joi.string(),
  content: Joi.string(),
  images: Joi.array().items(Joi.string()),
  linkGitHub: Joi.string().pattern(/(fabiojuvenalpereira)/).message('pattern is not valid'),
  linkProject: Joi.string(),
  skills: Joi.array().items(Joi.string()),
});

const validateEntries = (data: ProjectInterface) => {
  const validation = SCHEMA.validate({ ...data });
  if (validation.error) {
    throw new GenetateError(STATUS.BADREQUEST, validation.error.message);
  }
};

export default validateEntries;
