import mongoose from "mongoose";

const mongooseURI = process.env.MONGO_DB_URI;
const mongooseConnection = async () => {
    try {
        await mongoose.connect(mongooseURI);
        console.log("Mongoose is connected");
    } catch (error) {
        console.log(error);
    }
}

export default mongooseConnection;