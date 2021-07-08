export class Tournament{
  constructor(
    public nombre:String,
    public creador:String,
    public equipos: [{
      image:String,
      nombre:String,
      puntos:Number,
      golesfavor:Number,
      golescontra:Number,
      partidosjugados:Number,
    }],
    public cantequipos:Number,
    public jornadas:Number
  ){}
}
