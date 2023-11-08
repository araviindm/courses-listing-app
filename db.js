import mongoose from "mongoose";

const connection = {};

const connect = async () => {
  try {
    if (connection.isConnected) return true;
    const db = await mongoose.connect(process.env.MONGO_URI);
    connection.isConnected = db.connections[0].readyState;
    console.log("MongoDb connected");
    return true;
  } catch (error) {
    console.log("Error in connecting to MongoDb.", error);
    return false;
  }
};

export default connect;
