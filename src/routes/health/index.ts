import { Request, Response } from 'express';

const healthCheck = async (_request: Request, response: Response) => response.status(200).json({ message: 'ist live!!!' });

export default healthCheck;
