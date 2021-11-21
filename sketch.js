//Create variables here
var dog, happyDog, database, foodS, foodStock; 
var database;

function preload()
{
	//load images here
  dogNormal = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref("Food")
  foodStock.on("value",readStock);

  
}


function draw() {  
  background(46,139,87);

  if(keywentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  
  }

  drawSprites();
  //add styles here

}



