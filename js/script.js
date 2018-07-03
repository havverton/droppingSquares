var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");


var square = new Object();

square.color = "#000";
square.height = 50;
square.width = 50;
square.x = getX();
square.y = 0;
square.offsetY = 5;


ctx.fillStyle = square.color;
//ctx.fillRect(0,0,50,50);

game();

function getX (){
    x=Math.floor(Math.random()*550);
    return x;
}



function game(){


}


 function dropSquare(){
    
    var i=square.y;
    var n=square.x;
        var timerId = setInterval(function () 
        {

            ctx.clearRect(n-50,Math.abs(i)-50,n, i);
            ctx.fillRect(n,i,square.height, square.width);
            i+=square.offsetY;

        }
            , 30);
     
     

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