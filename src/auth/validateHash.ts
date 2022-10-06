import { NextFunction, Request, Response } from 'express';
import * as dotenv from 'dotenv';

import objectHash from 'object-hash';
import validateValues from '../utils/validateValues';
import GenetateError from '../utils/errorGenerate';
import STATUS from '../fixtures/httpStatusCode';

dotenv.config();

const HASH = `${process.env.HASH}`;

export default async function validateHash(req: Request, _res: Response, next: NextFunction) {
  try {
    const { authorization } = req.headers;
    const hashValidation = objectHash.MD5(String(authorization));

    if (!validateValues(hashValidation, HASH)) {
      throw new GenetateError(STATUS.UNAUTHORIZED, 'Acesso não autorizado!');
    }
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
}
