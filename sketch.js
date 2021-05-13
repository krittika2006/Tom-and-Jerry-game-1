var tom,tomImg1,tomImg2,tomImg3;
var jerry,jerryImg1,jerryImg2,jerryImg3;
var bg;


function preload() {
    //load the images here
    tomImg1 = loadAnimation("images/cat1.png");
    tomImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3 = loadAnimation("images/cat4.png");
    jerryImg1 = loadAnimation("images/mouse1.png");
    jerryImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3 = loadAnimation("images/mouse4.png");
    bg = loadImage("images/garden.png");
    

}

function setup(){
    var canvas = createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600);
    tom.addAnimation("tom",tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200,600);
    jerry.addAnimation("jerry",jerryImg1);
    jerry.scale =0.1;

}


function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x-jerry.x<(tom.width/2-jerry.width/2)){
        tom.velocityX = 0;
        tom.addAnimation("toming",tomImg3);
        tom.changeAnimation("toming");
        tom.x = 300;
        jerry.addAnimation("jerrying",jerryImg3);
        jerry.changeAnimation("jerrying");

    }

    drawSprites();
}


function keyPressed(){

//For moving and changing animation write code here

if (keyCode === LEFT_ARROW){
    tom.velocityX = -5;
    tom.addAnimation("tommy",tomImg2);
    tom.changeAnimation("tommy");
     jerry.addAnimation("jerr",jerryImg2);
    jerry.changeAnimation("jerr");


}

}

  



