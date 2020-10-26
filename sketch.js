//Create variables here
var dog;
var dogImage, happyDog, database, foodS, foodStock;
function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png");

  happyDog = loadImage("images/dogImg1.png");
  
}

function setup() {
  createCanvas(500, 500);
  
  database = firebase.database();
  
  dog = createSprite(300,300,30,30);
  dog.addImage(dogImage);
  dog.scale = 0.3;

  foodStock = database.ref('Food');
  foodStock.on("value", readStock)
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  fill("white");
  text("Note: press up arrow to feed the dog by milk!", 10,10);

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:  
  })
}

