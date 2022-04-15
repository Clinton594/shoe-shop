// import "dotenv/config";
import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB, { useUnifiedTopology: true, useNewUrlParser: true });
  } catch (error) {
    console.log(`Error ${error.message}`);
    process.exit(1);
  }
};

export default connect;
