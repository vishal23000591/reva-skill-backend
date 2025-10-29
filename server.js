import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import roleRoutes from "./routes/roleRoutes.js";
import questionRoutes from "./routes/questionRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/api/roles", roleRoutes);
app.use("/api/questions", questionRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
