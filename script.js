window.onload = function(){
    var c = new Canvas();
    //Create a new canvas with default width and height. the canvas will be added to the body element
    var ball = new Circle(50,50,10,'green');
    //params x,y,radius,color
    var dx = 2,dy = 2;
    //move speed
    window.setInterval(function(){
        // for the main loop
        c.clear();
        //clear the screen
        ball.move(dx,dy);
        //move the ball
        c.draw(ball);
        //draw the ball
        if (ball.x+ball.radius >= c.width || ball.x-ball.radius <= 0){
            //if ball is out of screen
            dx = -dx;
        }
        else if (ball.y+ball.radius >= c.height || ball.y-ball.radius <= 0){
            dy = -dy;
        }
    },10);
};