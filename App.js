import "dotenv/config";
import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import cors from "cors";
import UserRoutes from "./User/routes.js";
import mongoose from "mongoose";

const CONNECTION_STRING =
  process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas-su1";
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json()); // do all your work after this line

Hello(app);
Lab5(app);
CourseRoutes(app);
ModuleRoutes(app);
UserRoutes(app);

app.listen(process.env.PORT || 4000);
