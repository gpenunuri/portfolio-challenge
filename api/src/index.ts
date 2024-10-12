import express from "express";
import { router as postsRouter } from "./routes";
import dotenv from "dotenv";

// configures dotenv to work in your application
dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", postsRouter);

app
  .listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
