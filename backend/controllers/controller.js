import User from "../models/User.js";
import { storageUsers } from "../util/users.js";

const controller = {
  addUser: (req, res) => {
    const { firstname, lastname, email, phone } = req.body;
    console.log(req.body)

    let user = new User(firstname,lastname,email,phone)
    user.save();
    storageUsers.push(user);
    res.json({ success: true, message: "Usuário criado!" });
  },

};

export default controller;
