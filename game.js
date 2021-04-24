class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(100,500);
    player1.addImage("player1",player1Img);
    player1.scale= 0.5;
    player1.x= mouseX;
    player1.y= mouseY;
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player2Img);
    player2.scale= 0.5;
    player2.x= mouseX;
    player2.y= mouseY;

    rock = createSprite(350,150);
    rock.addImage("rock",rockImg);
    rock.scale= 0.4;

    paper = createSprite(650,150);
    paper.addImage("paper",paperImg);
    paper.scale= 0.4;

    scissors = createSprite(950,150);
    scissors.addImage("scissors",scissorsImg);
    scissors.scale= 0.4;

    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1400, 700);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     if(index-1<2){
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index-1].x = x;
                     players[index-1].y = y;
                       
                     if(index === player.index){
                         
                        fill("yellow");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);
                     }
                    
                    }
                    
                    
                 }
                
                 
            
               
                     
                 
                 
                  if (player.index !== null) {
                    if(fruitGroup.isTouching(player1)){
                        console.log("touched");
                        fruitGroup.destroyEach();
                        player.score++;
                        player.update();
                  }
                  if(fruitGroup.isTouching(player2)){
                    console.log("touched");
                    fruitGroup.destroyEach();
                    player.score2++;
                    player.update();
              }
                  }
    }

    end(){
       console.log("Game Ended");
    }
}