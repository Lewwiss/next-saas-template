import mongoose from "mongoose";

const connectMongo = async () => {
  return mongoose
    .connect(`${process.env.MONGODB_URI}`, {
      dbName: `${process.env.MONGODB_DB}`,
    })
    .catch((e) => console.error(e.message));
};

export default connectMongo;
