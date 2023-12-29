import mongoose from "mongoose";

export const establishMongoConnection = async () => {
  const MONGO_URI: string | undefined = process.env.MONGO_URI;
  try {
    if (!MONGO_URI) {
      throw new Error("Mongo URI is not configured in the env");
    }
    const mongoReturn = await mongoose.connect(MONGO_URI);
    console.log("Mongodb host : ", mongoReturn.connection.host);
  } catch (err) {
    console.error("mongodb error", err);
    return null;
  }
};
