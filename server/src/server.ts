import express from "express";
import cors from 'cors'
import routes from "./routes";

const app = express();

app.use(cors());
//express needs to be alerted to use json
app.use(express.json());
app.use(routes);

//listens the port from the adress
app.listen(3337);
