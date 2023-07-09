import express from "express";
import morgan from "morgan";
import cors from "cors";

import taskRoutes from "./routes";

//! down -> import has not been good
//import taskRoutes from "./routes/index.ts";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api", taskRoutes);

export default app;
