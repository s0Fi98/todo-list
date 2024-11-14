import modelData from "../models/model.js";

const test = (req, res) => {
  res.send({
    tittle: 'Pe town Man',
    desc: 'Yo Simde Mc Stan'
  })
}

const userCredentials = async (req, res) => {
  try {
    const { fname, email, contact, userId, password } = req.body;
    const value = new modelData.mongoScema({ fname, email, contact, userId, password });
    const newValue = await value.save();
    console.log('credentials: ', newValue);
    res.status(201).send({ message: "User data saved successfully.." })
  } catch (error) {
    res.status(500).send({ message: "Error in saving data" });
  }
}

const matchUsers = async (req, res) => {
  try {
    const { userId, password } = req.body;
    
    const user = await modelData.mongoScema.findOne({ userId, password });
    // console.log(user);
    
    if (user) {
      res.status(200).send({ data:user, isAuthenticated:true, message: "Login Successful!" })
    } else {
      res.status(200).send({data:{}, isAuthenticated:false, message: "User doesnot exist" })
    }
  } catch (error) {
    res.status(500).send({ message: "Invalid user or password" })
  }
}

const addGoal = async (req, res) => {
  try {
    const { todoTittle, todoTextarea } = req.body;
    const goals = new modelData.newTodo({ todoTittle, todoTextarea });
    const newGoals = await goals.save();
    console.log("Todos: ",newGoals);
    res.status(201).send({ message: "Goal Added" })
  } catch (error) {
    res.status(500).send({ message: "Cannot add todos" })
  }
}

const getTodos = async (req, res) => {
 try {
   const findTodo = await modelData.newTodo.find();
   console.log(findTodo);
   
   if (findTodo) {
    res.status(200).json({data: findTodo})
   } else {
    res.status(200).send({message: "Cant find Todos"})
   }
 } catch (error) {
  res.status(500).send({error})
 }
}

export default { test, userCredentials, matchUsers, addGoal, getTodos }