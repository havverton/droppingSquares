var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var fps = 1000 / 60;
var squares = [50];
var lastX = 0;
var lastY = 0;


function Square(x, y) {
    this.width = 50;
    this.height = 50;
    this.color = "#000";
    this.speed = getRandSpeed(5, 8);
    this.x;
    this.y;

    if (x <= lastX || x >= lastX + 50) {
        lastX = x;
        this.x = x;
    } else {
        x += 50;
        this.x = x;
    }

    if (y <= lastY || y >= lastY + 50) {
        lastY = y;
        this.y = y;
    } else {
        y -= 50;
        this.y = y;
    }

    //падение квадрата
    this.fall = function () {
        this.y += this.speed;
        if (this.y >= 550) {
            this.y = y;
        }
    }
    //отрисовка
    this.draw = function () {
        ctx.fillRect(this.x, this.y, this.height, this.width);

    }
    //смена цвета
    this.changeColor = function (color) {
        ctx.fillStyle = color;
    }

}


//очистка экрана 60 кад/cек
function clearScreen() {
    setInterval(function () {
        ctx.clearRect(0, 0, 600, 600);
    }, fps)
}

function game() {
    for (var i = 0; i < 10; i++) {
        squares[i] = new Square(getRandX(), getRandY());
    }

    clearScreen();

    setInterval(function () {
        for (var i = 0; i < 10; i++) {
            squares[i].fall();
            squares[i].draw();
        }
    }, fps);
}

function getRandX() {
    var x = Math.floor(Math.random() * 550);
    return x;
}

function getRandY() {
    var x = Math.floor((Math.random() * -500 + (-100)) - 100);
    return x;
}

function getRandSpeed(a, b) {
    var x = Math.floor(Math.random() * (b - a)) + a;
    return x;
}

game();