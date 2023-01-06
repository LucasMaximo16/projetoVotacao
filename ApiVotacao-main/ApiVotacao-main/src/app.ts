import express, { application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { routes } from './routes';

export class App {
  public express: express.Application

  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json())
    this.express.use(bodyParser.urlencoded())
    this.express.use(bodyParser.json())
    this.express.use(cors());
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;


