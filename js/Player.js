class Player {
  constructor() {
    this.name=null
    this.index=null
    this.positionX=0
    this.positionY=0
  }
  addplayer(){
    if(this.index===1){
      this.positionX=width/2-150
    }else{
      this.positionX=width/2+150
    }
    db.ref("players/player"+this.index).set({
      name:this.name,
      positionX:this.positionX,
      positionY:this.positionY
    })
  }
  //reading playerCount values from the database
  gc (){
    db.ref("playerCount").on("value",data=>{
      playerCount=data.val()
    })
  }
  //write the playerCount value to the database
  uc(count){
    db.ref("/").update({
      playerCount:count
    })
  }
  //collects all the players information at a time
  static gpi (){
    db.ref("players").on("value",data=>{
      players = data.val()
    })
  }

}
