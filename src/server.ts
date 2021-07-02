import express, { request, response } from 'express';
import { CreateCourse } from './routes';

const app = express();

app.get("/", (request, response) => {
    return response.json({'message': 'active'});
})

app.post("createCouse", CreateCourse),

app.listen(8080);