'use strict'

const Tournament = require('../models/tournament.model')
const Team = require('../models/team.model')
const Match = require('../models/match.model')

function match(req, res){
    var idTorneo = req.params.idTorneo;
    var matchModel = Match()
    var params = req.body;

    Tournament.findById(idTorneo, (err, torneo)=>{
        if (err) return res.status(500).send({mesaje:"Error en la petición"});
        if (req.user.rol === 'Admin' || req.user.sub === torneo.creador){
            if(torneo.partidosajugar>0){
                matchModel.torneo = idTorneo
                matchModel.equipo1 = params.equipo1
                matchModel.goles1 = 0
                matchModel.equipo2 = params.equipo2
                matchModel.goles2 = 0
                matchModel.jugando = 'No'
                var partidosporcrear = torneo.partidosajugar-1
                Tournament.findByIdAndUpdate(idTorneo, {$set:{
                    partidosajugar: partidosporcrear
                }}, (err, torneoactual)=>{
                    if (err) return res.status(500).send({mesaje: "Error al buscar el torneo"});
                    if (!torneoactual) return res.status(500).send({mesaje: "Error al crear el partido"});
                    matchModel.save((err, partido)=>{
                        if (err) return res.status(500).send({mesaje:"Error en la petición"});
                        if (!partido) return res.status(500).send({mesaje: "Error al crear el partido"});
                        return res.status(200).send({partido})
                    })
                })
            }else{
                return res.status(500).send({mesaje: "Ya se crearon todos los partidos necesarios"});
            }
        }else{
            return res.status(500).send({mesaje: "No tienes los permisos necesarios"})
        }
    })
}

function editematch(req, res){
    var idTorneo = req.params.idTorneo;
    var idPartido = req.params.idPartido;
    var params = req.body

    delete params.equipo1, params.equipo2;
    Tournament.findById(idTorneo, (err, torneo)=>{
        if (err) return res.status(500).send({mesaje:"Error en la petición"});
        if (req.user.rol === 'Admin' || req.user.sub === torneo.creador){
            Match.findById(idPartido, (err, partido1)=>{
                Team.findByIdAndUpdate(partido1.equipo1, {$set:{
                    golesfavor: params.goles1,
                    golescontra: params.goles2
                }}, (err, equipo1)=>{
                    if (err) return res.status(500).send({mesaje:"Error en la petición"});
                    Team.findByIdAndUpdate(partido1.equipo2, {$set:{
                        golesfavor: params.goles2,
                        golescontra: params.goles1
                    }}, (err, equipo2)=>{
                        if (err) return res.status(500).send({mesaje:"Error en la petición"});
                        Match.findByIdAndUpdate(idPartido, params, {new: true}, (err, partido)=>{
                            if (err) return res.status(500).send({mesaje:"Error en la petición"});
                            if(!partido) return res.status(500).send({mesaje: "Error al consultar equipos"}); 
                            return res.status(200).send(partido);
                        })
                    })
                })
            })
        }else{
            return res.status(500).send({mesaje: "No tienes los permisos necesarios"})
        }
    })
}

function deletematch(req, res){
    var idTorneo = req.params.idTorneo;
    var idPartido = req.params.idPartido;

    Tournament.findById(idTorneo, (err, torneo)=>{
        if (err) return res.status(500).send({mesaje:"Error en la petición"});
        if (req.user.rol === 'Admin' || req.user.sub === torneo.creador){
            var partidosporcrear = torneo.partidosajugar+1
                Tournament.findByIdAndUpdate(idTorneo, {$set:{
                    partidosajugar: partidosporcrear
                }}, (err, torneoactual)=>{
                    if (err) return res.status(500).send({mesaje: "Error al buscar el torneo"});
                    Match.findByIdAndDelete(idPartido, (err, partido)=>{
                        if (err) return res.status(500).send({mesaje:"Error en la petición"});
                        if(!partido) return res.status(500).send({mesaje: "Error al consultar el partido"}); 
                        return res.status(200).send(partido);
                    })
                })
        }else{
            return res.status(500).send({mesaje: "No tienes los permisos necesarios"})
        }
    })
}

function matchs(req, res){
    var idTorneo = req.params.idTorneo;

    Tournament.findById(idTorneo, (err, torneo)=>{
        if (err) return res.status(500).send({mesaje:"Error en la petición"});
        if (req.user.rol === 'Admin' || req.user.sub === torneo.creador){
            Match.find({$or: [
                {torneo: idTorneo}
            ]}).exec((err, partido)=>{
                if (err) return res.status(500).send({mesaje:"Error en la petición"});
                if(!partido) return res.status(500).send({mesaje: "Error al consultar el partido"}); 
                return res.status(200).send(partido);
            })
        }else{
            return res.status(500).send({mesaje: "No tienes los permisos necesarios"})
        }
    })
}

module.exports = {
    match,
    editematch,
    deletematch,
    matchs
}