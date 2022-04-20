class Game {
  constructor() { }


  getState(){

    var gameStateRef=database.ref("gameState")
    gameStateRef.on("value",function (data){
      gameState = data.val()
    })
  }

  handlelements(){
    form.hide()
    form.titleimage.position(40,50)
    form.titleimage.class("gametitlafterthegame")
  }

  updateState(state){
    database.ref("/").update({
      gameState:state
    })
  }

  start() {
    form= new Form()
    form.display()
    player=new Player()
    player.getPlayercount()
  }

  play(){
  this.handlelments()


  }

  end() {




  }
}


