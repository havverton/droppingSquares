var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");


var square = new Object();

square.color = "#000";
square.height = 50;
square.width = 50;
square.x = getRandX();
square.y = 0;
square.offsetY = 5;
square.delay =30;


//ctx.fillRect(0,0,50,50);

function getRandX(){
    var x=Math.floor(Math.random()*550);
    return x;
}


function startGame(){
    setInterval(dropSquare(square.x), 1000);
}

startGame();




function dropSquare(n){
    
    var i=square.y;
        var timerId = setInterval(function () 
        {
            //отрисовка квадрата
            ctx.fillStyle = square.color;
            ctx.fillRect(n,i,square.height, square.width);
            
            //очистка квадрата
            ctx.fillStyle = "#fff";
            ctx.fillRect(square.x,i-50,50,50)

            i+=square.offsetY;

        }
            ,square.delay);

    // alert(n);
     

 }




 /*function dropSquare(){
    var i=square.y;
    var n=square.x;
 
    for(i;i<650;i+=square.offsetY){
     ctx.clearRect(n-50,Math.abs(i)-50,n, i);
     ctx.fillRect(n,i,square.height, square.width);
     
     i+=square.offsetY;
   
 }
 }
*/