import express from "express";
import routes from "./routes/index";
import morgan from "morgan";
import "reflect-metadata"

const server = express();
server.use(morgan("dev"))
server.use(express.json());
server.use(routes)

export default server;