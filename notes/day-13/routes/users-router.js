const { Router } = require("express");
const usersController = require("../controllers/users-controller");
const userValidator = require("../middelwares/user-validator");

const usersRouter = Router();

// POST /users
// headers... body...

// [express.static]
// [bodyParser.json]
// [bodyParser.urlencoded]
// [userRouter]
// [validateUser]
// [userController.addUser]

// endpoint: method + route
// controller action should handle an endpoint
usersRouter.get("/", usersController.getUsernameList);

usersRouter.post(
  "/",
  userValidator.isValidUsername,
  usersController.addUserName
);

usersRouter.delete(
  "/",
  userValidator.isValidUsername,
  usersController.deleteUsername
);

usersRouter.put(
  "/",
  userValidator.isValidUsername,
  usersController.updateUsername
);



module.exports = usersRouter;
