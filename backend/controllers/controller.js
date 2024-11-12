import LoginDetails from "../models/login.js";

const test = (req, res) => {
  res.send({
    tittle: 'Pe town Man',
    desc: 'Yo Simde Mc Stan'
  })
}

const userCredentials = async (req, res) => {
  try {
    const { userId, password } = req.body;
    const value = new LoginDetails({ userId, password });
    const newValue = await value.save();
    console.log('credentials: ', newValue);
    res.status(201).send({ message: "User data saved successfully.." })
  } catch (error) {
    res.status(500).send({ message: "Error in saving data" });
  }
}

export default { test, userCredentials }