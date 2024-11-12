import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
    userId: {type: 'string', required: true},
    password: {type: 'string', required: true}
});

const loginSchema = new mongoose.Schema({
    userId: {type: 'string', required: true},
    password: {type: 'string', required: true}
}, {collection: "checkusers"})

const mongoScema = mongoose.model("logindatas", userSchema, "logindatas" );
const login = mongoose.model("checkUser", loginSchema);

export default {mongoScema, login}