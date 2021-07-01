var snakeimg, snake;
var bg;

function preload()
{
    bg = loadImage("images/bg.jpg");
    snakeimg = loadAnimation("images/snk-0.png","images/snk-1.png","images/snk-2.png","images/snk-3.png","images/snk-4.png","images/snk-5.png","images/snk-6.png","images/snk-7.png","images/snk-8.png","images/snk-9.png","images/snk-10.png","images/snk-11.png","images/snk-12.png","images/snk-13.png","images/snk-14.png","images/snk-15.png","images/snk-16.png","images/snk-17.png","images/snk-18.png","images/snk-19.png","images/snk-20.png","images/snk-21.png","images/snk-22.png","images/snk-23.png","images/snk-24.png","images/snk-25.png","images/snk-26.png","images/snk-27.png","images/snk-28.png","images/snk-29.png","images/snk-30.png","images/snk-31.png","images/snk-32.png","images/snk-33.png");
}
function setup()
{
    createCanvas(1400,800);

    snake=createSprite(200,200,20,60);
    snake.addAnimation("snks", snakeimg);
    snake.scale = 0.2;
}

function draw()
{
    background(bg);

    drawSprites();
}
