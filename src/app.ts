import express, { Application, Request, Response, NextFunction } from 'express';
import tokenRoutes from './routes/token';
import cors from 'cors';
import { Constants } from './constants/const';

const app: Application = express();

// Middleware to parse request body as JSON
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World From Token Service Node Server!')
});

app.use('/token', tokenRoutes);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

const port = Constants.TOKEN_SERVICE_PORT;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
