import { Request, Response } from 'express';

export default function error(err: any, _req: Request, res:Response) {
  if (err.status) return res.status(err.status).json({ message: err.message });

  return res.status(500).json({ message: 'Internal Server Error' });
}
