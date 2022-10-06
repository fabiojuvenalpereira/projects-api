import Joi from 'joi';

const INSERTSCHEMA = Joi.object({
  title: Joi.string().required(),
  abstractContent: Joi.string().required(),
  content: Joi.string().required(),
  images: Joi.array().items(Joi.string()).required(),
  linkGitHub: Joi.string().pattern(/(fabiojuvenalpereira)/).message('pattern is not valid').required(),
  linkProject: Joi.string(),
  skills: Joi.array().items(Joi.string()).required(),
});

export default INSERTSCHEMA;
