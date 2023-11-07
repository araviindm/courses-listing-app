import mongoose from "mongoose";

const connection = {};

const connect = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
    });
    connection.isConnected = db.connections[0].readyState;
    console.log("MongoDb connected");
  } catch (error) {
    throw new Error("Error in connecting to MongoDb.");
  }
};

export default connect;
