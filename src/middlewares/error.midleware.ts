import { NextFunction, Request, Response } from 'express';
import { RequestError } from '../interfaces/requestError.interface';
import STATUS from '../utils/httpStatusCode';

const errorMiddleware = (err: RequestError, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || STATUS.INTERNALERROR;
  const message = err.message || 'Internal Server Error';

  return res.status(status).json({ message });
};

export default errorMiddleware;
