class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    //create button variable
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton ('Reset');
  }
  //hide the form
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    //put background image
    background(bg);
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    //give positions 
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 220);
    this.button.position(displayWidth/2 + 30, displayHeight/2-180);
    this.reset.position(displayWidth-100,20);


    // make the play button
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
//create the reset button
    this.reset.mousePressed(()=>{
      //make gameState and playerCount 0
  game.update(0);
  player.updateCount(0);
})
  }
}