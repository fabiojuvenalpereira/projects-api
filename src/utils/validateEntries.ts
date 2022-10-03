import { ProjectInterface } from "../interfaces/project.interface";
import Joi from 'joi';

import NewError from "./errorGenerate";
import STATUS from "./httpStatusCode";

const SCHEMA = Joi.object({
  title: Joi.string(),
  abstractContent: Joi.string(),
  content: Joi.string(),
  images: Joi.array().items(Joi.string()),
  linkGitHub: Joi.string().pattern(new RegExp(/(fabiojuvenalpereira)/)),
  linkProject: Joi.string(),
  skills: Joi.array().items(Joi.string().alphanum().max(15)),
});


const validateEntries = (data: ProjectInterface) => {
  const validation = SCHEMA.validate({...data});
  if (validation.error) {
    throw NewError(STATUS.BADREQUEST, validation.error.message)
  }
}

export default validateEntries;
