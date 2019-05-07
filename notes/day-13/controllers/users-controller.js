const userService = require("../services/user-service");

const getUsernameList = (_req, res) => {
  const usernameList = userService.getAllUsernames();
  res.render("users", {
    usernameList
  });
};

const addUserName = (req, res) => {
  const { username } = req.body;

  if (!username.length) {
    return res.render("error", {
      message: "Username cannot be empty"
    });
  }

  userService.addUsername(username);
  res.redirect("/users");
};


// PUT /users/mishelashala
const updateUsername = (req, res) => {};

// DELETE /users/mishelashala
const deleteUsername = (req, res) => {
  const { username } = req.body;

  if (!username.length) {
    return res.render("error", {
      message: "That username doesn't exist"
    });
  }

  userService.addUsername(username);
  res.redirect("/users");
};

// GET /useres/mishelashala
const getSingleUsername = (req, res) => {};

module.exports = {
  getUsernameList,
  addUserName
};
