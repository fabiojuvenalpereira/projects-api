import Joi from 'joi';

const UPDATESCHEMA = Joi.object({
  title: Joi.string(),
  abstractContent: Joi.string(),
  content: Joi.string(),
  images: Joi.array().items(Joi.string()),
  linkGitHub: Joi.string().pattern(/(fabiojuvenalpereira)/).message('pattern is not valid'),
  linkProject: Joi.string(),
  skills: Joi.array().items(Joi.string()),
});

export default UPDATESCHEMA;
