import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();
// const port = 3000

//parsers
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  // res.send('Hello World!')
  res.send(a);
});

// console.log(process.cwd());
//D:\OneDrive\Documents\Programming-Hero_L2\first-project.env

export default app;