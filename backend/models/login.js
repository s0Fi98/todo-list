import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userId: {type: 'string', required: true},
    password: {type: 'string', required: true}
});

const mongoScema = mongoose.model("todoDataBase", userSchema)
export default mongoScema;