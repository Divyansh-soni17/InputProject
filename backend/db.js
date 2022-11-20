import mongoose from "mongoose";

const connectToMongo = () => {
  mongoose
    .connect("mongodb://localhost:27017/DataItem", { useNewUrlParser: true })
    .then(() => {
      console.log("connected to database");
    })
    .catch((error) => {
      console.log("error", error);
    });
};

export default connectToMongo;
