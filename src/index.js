// require('dotenv').config({path:'./env'});
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });
import app from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`server is running on port :${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("Mongodb connections failed", err);
  });
connectDB();

/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("error", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`app is listenong on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
})();
*/
