import express from "express";
import routes from "./routes";

const app = express();

//express needs to be alerted to use json
app.use(express.json());
app.use(routes)


//listens the port from the adress
app.listen(3337);
