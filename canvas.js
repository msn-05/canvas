class Canvas{
    constructor(width = window.innerWidth,height = window.innerHeight){
        this.canvas = document.createElement("canvas");
        this.canvas.style.border = "1px solid black";
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = width;
        this.height = height;
        document.body.appendChild(this.canvas);
    }
    draw(obj){
        this.ctx.beginPath();
        if (obj.type == "circle"){
            this.ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI*2);
            this.ctx.fillStyle = obj.color;
            this.ctx.fill();
        }
        else if (obj.type == "rect"){
            this.ctx.rect(obj.x, obj.y, obj.width, obj.height);
            this.ctx.fillStyle = obj.color;
            this.ctx.fill();
        }
        else if (obj.type == "text"){
            this.ctx.fillStyle = obj.color;
            this.ctx.font = obj.font + ' ' + obj.fontSize + 'px';
            this.ctx.fillText(obj.text,obj.x,obj.y);
        }
        this.ctx.closePath();
    }
    clear(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
class Circle{
    constructor(x,y,radius,color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.type = "circle";
    }
    move(offsetX,offsetY){
            this.x += offsetX;
            this.y += offsetY;
    }
}
class Text{
    constructor(text, x , y , color ,font = "Arial", fontSize = 10){
        this.type = "text";
        this.text = text;
        this.x = x;
        this.y = y;
        this.color = color;
        this.font = font;
        this.fontSize = fontSize;
    }
}
class Rect{
    constructor(x, y, width, height, color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
}
