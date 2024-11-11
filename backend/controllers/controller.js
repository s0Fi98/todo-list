import LoginDetails from "../models/login.js";

const test =  (req, res) => {
  res.send({
    tittle: 'Pe town Man',
    desc: 'Yo Simde Mc Stan'
})
}

const loginCredentials = async (req, res) => {
  const {userId, password} = req.body;
  try {
    const userData = new LoginDetails({ userId, password });
    await userData.save();
    res.status(201).json(userData)
  } catch (error) {
    res.status(500).json({message: "Error saving user", error})
  }
}

export default {test, loginCredentials}