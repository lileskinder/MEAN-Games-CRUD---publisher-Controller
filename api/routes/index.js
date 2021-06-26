const express = require("express");
const _gameController = require("../controllers/gamesController");
const _publisherController = require ("../controllers/publisherController");

const router = express.Router();

router.route("/games")
    .get(_gameController.getAllGames)
    .post(_gameController.addOneGame);

router.route("/games/:gameId")
    .get(_gameController.getOneGame)
    .put(_gameController.fullUpdateGame)
    .patch(_gameController.partialUpdateGame)
    .delete(_gameController.deleteOneGame);

router.route("/games/:gameID/publishers")
    .post(_publisherController.addOnePublisher)
    .get(_publisherController.getAllPublisher);

router.route("/games/:gameID/publishers/:publisherId")
    .get(_publisherController.getOnePublisher)
    .put(_publisherController.fUllUpdateOnePublisher)
    .delete(_publisherController.deleteOnePublisher);


module.exports = router;