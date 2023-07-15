import * as express from 'express';
import { Request, Response } from 'express';
import initialState from './Api.js'

const app = express();
const port = process.env.PORT || 3005;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Typescript')
})

app.get('/api/v1', (req: Request, res: Response) => {
    res.json(initialState);
})

app.listen(port, () => {
    console.log(`App listening at port: ${port}`)
})