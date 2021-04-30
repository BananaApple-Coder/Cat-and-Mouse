var bgImg
var mouse, mouseImg, mouse1, mouseAni
var cat, catImg1, cat1, catAni
var a, b
var x = 0

function preload() {
    //load the images here
    bgImg = loadImage("garden.png")
    mouseImg = loadImage("mouse1.png")
    cat1 = loadAnimation("cat4.png")
    mouse1 = loadAnimation("mouse4.png")
    catImg1 = loadImage("cat1.png")
    catAni = loadAnimation("cat2.png", "cat3.png")
    mouseAni = loadAnimation("mouse2.png", "mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(700,650)
    //cat.addImage(catImg1)
    cat.scale = 0.15

    mouse = createSprite(200,650)
    //mouse.addImage(mouseImg)
    mouse.scale = 0.15
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    a = mouse.width/2 + cat.width/2
    b = mouse.height/2 + cat.height/2
    if (abs(mouse.x - cat.x) < a && abs(mouse.y - cat.y) < b) {
      cat.velocityX = 0
      cat.addAnimation("done", cat1)
      mouse.addAnimation("done", mouse1)
      cat.changeAnimation("done")
      mouse.changeAnimation("done")
    } else {
      if (x === 0) { 
        x = 1
        cat.addImage(catImg1)
        mouse.addImage(mouseImg)
      }
    }
    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if (keyCode === RIGHT_ARROW) {
      mouse.addAnimation("tease", mouseAni)
      mouse.changeAnimation("tease")
      mouse.frameDelay = 25
  }

  if (keyCode === LEFT_ARROW) {
    cat.addAnimation("walk", catAni)
    cat.changeAnimation("walk")
    cat.frameDelay = 10
    cat.velocityX = -3
    cat.depth = 9999999
  }
}
