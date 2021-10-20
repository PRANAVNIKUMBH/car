class Game {
  constructor() {}

  gs (){
    db.ref("gameState").on("value",data=>{
      gameState=data.val()
    })
  }
  //write the gameState value to the database
  us(count){
    db.ref("/").update({
      gameState:count
    })
  }

  start() {
    form = new Form();
    form.display();
    player = new Player();
    player.gc()
    car1 = createSprite(width/2-150,height-150)
    car1.addImage(c1) 
    car1.scale=0.07
    car2 = createSprite(width/2+150,height-150)
    car2.addImage(c2) 
    car2.scale=0.07
  }

  play(){
    form.r()
    Player.gpi()
    if(players!==undefined){
     image(t,0,-height*5,width,height*6) 
     drawSprites()
    }
  }
}
