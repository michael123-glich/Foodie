var hypnoticBall, database;
var position;
var time = 0;
var bowl;
function setup(){
 food = loadImage("Empty bowl.png");
 food2 = loadImage("Full bowl.png")
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);  
  bowl = food;
  Scale = 0.3;
}

function draw(){
  background("white");
  
    drawSprites();
    text("Last time Feed: "+time,200,200);
    console.log(1);
   feed();
   push();
   scale(Scale);
   if(bowl === food2){
      translate(-200,-200);
   }
   image(bowl,500,750);
   pop();
  
}
function feed(){
  database.ref('FeedTime').set(time);
}
function mouseClicked(){
  getTime();
  bowl = food2;
  Scale = 0.5;
}
async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/New_York");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  time = hour;
}