'use strict'

const express = require('express');
const tournamentController = require('../controllers/tournament.controller')
var authentication = require('../middlewares/authenticated')

var tournament = express.Router();
tournament.post('/creartorneo', authentication.ensureAuth, tournamentController.torneo);
tournament.post('/edittorneo/:idTorneo', authentication.ensureAuth, tournamentController.edittorneo)
tournament.post('/deletetorneo/:idTorneo', authentication.ensureAuth, tournamentController.deletetorneo)
tournament.post('/torneos', authentication.ensureAuth, tournamentController.torneos)

module.exports = tournament;