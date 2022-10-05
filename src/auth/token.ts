import * as jwt from 'jsonwebtoken';

import * as dotenv from 'dotenv';

dotenv.config();

const PASS = `${process.env.JWT_KEY}`;

const generateToken = (data: any) => jwt.sign(data, PASS, { expiresIn: '24h', algorithm: 'HS256' });
export default generateToken;
