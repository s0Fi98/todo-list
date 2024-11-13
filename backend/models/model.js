import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
    fname: {type: 'string', required: true},
    email: {type: 'string', required: true},
    contact: {type: 'number', required: true},
    userId: {type: 'string', required: true},
    password: {type: 'string', required: true}
});

const todoSchema = new mongoose.Schema({
    todoTittle: {type: "string", required: true},
    todoTextarea: {type: "string", required: true}
}, {collection: "todos"});

const mongoScema = mongoose.model("logindatas", userSchema, "logindatas" );
const newTodo = mongoose.model("toDo", todoSchema);

export default {mongoScema, newTodo}