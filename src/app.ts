import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';

import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { swaggerSpec } from './swagger-spec';

import {routerUser} from './routes';

const app = express();

app.use(morgan('dev'));

app.use(cors());

app.use(express.json());

app.use('/api/users', routerUser);

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(swaggerSpec)))

export default app;