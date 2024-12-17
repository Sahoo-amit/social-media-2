import mongoose from "mongoose";

const connectDb = async () => {
  try {
   mongoose.connection.on('connected', () => {
      console.log("DB Connection Successful");
   })

   await mongoose.connect(`${process.env.MONGODB_URI}`, {
    dbName: "Social-Media-2",
  })
  console.log(mongoose.connection.name);
  } catch (error) {
   console.log(error);
  }
}

export default connectDb