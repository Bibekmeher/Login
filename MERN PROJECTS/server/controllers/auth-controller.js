const user = require("../models/user_models");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send({ message: "Welcome to the API through router88" });
  } catch (error) {
    console.log("Error in home:", error);
    res.status(500).send("Internal Server Error");
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    if (!username || !email || !phone || !password) {
      return res
        .status(400)
        .json({ error: "Please provide all required fields" });
    }

    const userExists = await user.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    //     const saltRound = 10;
    //    const hashPassword = await bcrypt.hash(password, saltRound);
    
const UserCreated = await user.create({ username, email, phone, password});

    console.log(req.body);
    res.status(201).json({
      message: UserCreated,
      token: await UserCreated.generateToken(),
      userId: UserCreated._id > toString(),
    });
  } catch (error) {
    // console.log("Internal server error:", error);
    // res.status(500).send("Internal Server Error");
    next(error);
  }
};

// const login = async (req, res) => {
//     try {
//       const { password, email } = req.body;
//       const userExists = await user.findOne({ email });
//       console.log("Credentials:", password, email);

//       if (!userExists) {
//         return res.status(400).json({ error: "Invalid Credentials" });
//       }
//       console.log(userExists.password);

//       // Await the result of bcrypt.compare
//       const match = await bcrypt.compare(password, userExists.password);
//       console.log(match);

//       if (!match) {
//         return res.json({ message: "Unauthorized" });
//       } else {
//         res.json({
//           message: userExists,
//           token: await userExists.generateToken(),
//           userId: userExists._id.toString(), // Corrected toString method call
//         });
//       }
//     } catch (err) {
//       console.error("Error in login:", err);
//       return res.status(500).json({ error: "Internal Server Error" });
//     }
//   };

const login = async (req, res) => {
  try {
    const { password, email } = req.body;
    const userExists = await user.findOne({ email });
    console.log("Credentials:", password, email);
    if (!userExists) {
      console.log("User not found");
      return res.status(400).json({ error: "Invalid Credentials" });
    }

    const match = await bcrypt.compare(password, userExists.password);
    console.log("Password Match:", match);
    console.log("Password Verification:", userExists.password== password);
    const t=(userExists.password== password);
    if (!t ) {
      console.log("Password does not match");
      return res.json({ message: "Unauthorized" });
    } else  {
      console.log("Login successful");
      res.json({
        message: "Login successful",
        token: await userExists.generateToken(),
        userId: userExists._id.toString(),
      });
    }
  } catch (err) {
    console.error("Error in login:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { home, register, login };
