class Player {
  //make constructor
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }

  //write player count
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  //update player count
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  //update name and distance
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  //get the player rank
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  //getting cars at end
  getCarsAtEnd()
  {
    database.ref('CarsAtEnd').on("value",(data)=>{
      this.rank=data.val();
    })
  }
  //update cars at end
  static updateCarsAtEnd(rank){
    database.ref('/').update({
      CarsAtEnd: rank
    });
  }
  
}
