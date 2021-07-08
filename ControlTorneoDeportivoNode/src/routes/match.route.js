'use strict'
const express = require('express')
const matchController = require('../controllers/match.controller')
var authentication = require('../middlewares/authenticated')

var match = express.Router()

match.post('/match/:idTorneo', authentication.ensureAuth, matchController.match);
match.post('/editmatch/:idTorneo/:idPartido', authentication.ensureAuth, matchController.editematch);
match.post('/deletematch/:idTorneo/:idPartido', authentication.ensureAuth, matchController.deletematch);
match.post('/matchs/:idTorneo/:idPartido', authentication.ensureAuth, matchController.matchs);

module.exports = match;