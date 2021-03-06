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

module.exports = usersRouter;

var Example = {
  Title: "Warcraft: The Beginning",
  Year: "2016",
  Rated: "PG-13",
  Released: "10 Jun 2016",
  Runtime: "123 min",
  Genre: "Action, Adventure, Fantasy",
  Director: "Duncan Jones",
  Writer: "Charles Leavitt, Duncan Jones",
  Actors: "Travis Fimmel, Paula Patton, Ben Foster, Dominic Cooper",
  Plot:
    "When the world of the Orcs of Draenor is being destroyed by the evil fel magic that uses life-force, the powerful warlock Gul'dan creates a portal to the world of Azeroth and forms the Horde with members of the Orc clans. He also captures many prisoners to keep the portal open. The king of Azeroth, Llane Wrynn and his brother-in-law, Anduin Lothar are informed by the apprentice of magician Khadgar that he has found fel magic in dead bodies and the king decides to summon the Guardian of Tirisfal, Medivh, to protect his kingdom. Lothar and Khadgar head to Kharazhan to meet Medivh and an ominous shadow points a book out to Khadgar, who takes it and hides. Anduin, Khadgar and Medivh and a group of soldiers are attacked by Orcs and they capture the slave Garona, who is released by King Llane, and she shows them the location of the portal. Garona is contacted by the Orc chief of a clan Durotan that wants to meet King Llane to stop the fel magic. Meanwhile Khadgar learns that the gate was opened with the help of someone in Azeroth. Shall King Llane trust Garona and Durotan, who might be the traitor?",
  Language: "English",
  Country: "China, Canada, Japan, USA",
  Awards: "2 wins & 3 nominations.",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjIwNTM0Mzc5MV5BMl5BanBnXkFtZTgwMDk5NDU1ODE@._V1_SX300.jpg",
  Ratings: [
    { Source: "Internet Movie Database", Value: "6.9/10" },
    { Source: "Rotten Tomatoes", Value: "28%" },
    { Source: "Metacritic", Value: "32/100" }
  ],
  Metascore: "32",
  imdbRating: "6.9",
  imdbVotes: "223,797",
  imdbID: "tt0803096",
  Type: "movie",
  DVD: "27 Sep 2016",
  BoxOffice: "$44,765,679",
  Production: "Universal Pictures",
  Website: "http://www.warcraftmovie.com/",
  Response: "True"
};
