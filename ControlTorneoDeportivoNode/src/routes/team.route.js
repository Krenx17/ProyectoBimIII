'use strict'
const express = require('express')
const teamController = require('../controllers/team.controller')
var authentication = require('../middlewares/authenticated')

var team = express.Router()

team.post('/equipo/:idTorneo', authentication.ensureAuth, teamController.equipo);
team.post('/editequipo/:idTorneo/:idEquipo', authentication.ensureAuth, teamController.editequipo);
team.post('/deleteequipo/:idTorneo/:idEquipo', authentication.ensureAuth, teamController.deleteequipo);
team.post('/equipos/:idTorneo', authentication.ensureAuth, teamController.equipos);


module.exports = team;