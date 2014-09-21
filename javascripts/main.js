//
/// Download by http://www.oslook.com
//
var ballX,ballY;
var addX,addY;
var intervalId ;

var context ;
var canvas ;
var width;
var height = 600;

function catch_ball(ev){
    alert('catch');
    var x = ev.pageX;
    var y = ev.pageY;
    // get position relative to canvas .
    
    var relativeX = x - document.getElementById("mycanvas").offsetLeft;
    var relativeY = y - document.getElementById("mycanvas").offsetTop;
    
    //judge  whether  clicked  the ball
    if(-5<(relativeX - ballX)&&(relativeX - ballX)<=5){
         if(-5<(relativeY - ballY)&&(relativeY - ballY)<=5){
             alert('congratulation  to  you  ~~~ ,you are win .');
             clearInterval(intervalId);
             document.getElementById("start_btn").disabled = "";
        }
    }
}

function windowLoad(){
    document.getElementById("mycanvas").onclick = catch_ball;
}

function jump(){
   context.clearRect(0,0,width,height);
   context.save();
   //draw  ball table .
   context.fillStyle = "#58A9D8";
   context.strokeStyle = "#3c3c3c";
   context.lineWidth = 3;
   context.fillRect(3,3,width -6,height-6);
   context.strokeRect(3,3,width-6,height-6);
   
   //draw ball .
   context.beginPath();
   context.fillStyle = "blue";
   context.arc(ballX,ballY,5,0,2*Math.PI,false);

   ballX += addX;
   ballY += addY;
   //alert(ballX+":"+ballY);
   //modify position .
   if(ballX<5){
       ballX = 5;
       addX = -addX;
   }
   
   if(ballY <5){
       ballY = 5;
       addY = -addY;
   }
   
   if(ballX>width-6){
       ballX = width-6;
       addX = -addX;
   }
   
   if(ballY>height-6){
       ballY = height-6;
       addY = -addY;
   }
   
   context.closePath();
   context.fill();
   context.restore(); 
   
}

//random move
function jump_2(){
   context.clearRect(0,0,width,height);
   context.save();
   //draw  ball table .
   context.fillStyle = "#58A9D8";
   context.strokeStyle = "#3c3c3c";
   context.lineWidth = 3;
   context.fillRect(3,3,width -6,height-6);
   context.strokeRect(3,3,width-6,height-6);
   
   //draw monkey .
   ballX = parseInt(Math.random()*width);
   ballY = parseInt(Math.random()*height);
   var img=new Image()
	img.src="./monkey.jpg"
	img.onload=function(){
	    context.drawImage(img,ballX,ballY);
	};
}

function startclick(){
   // alert('game  start ');
    canvas = document.getElementById("mycanvas");
    context = canvas.getContext("2d");
    
    width = canvas.width;
    height = canvas.height;
    //alert(height);
    //init  ball  init position .
    ballX = parseInt(Math.random()*width);
    ballY = parseInt(Math.random()*height);
    
    addX = -5;
    addY = -5;
    
    jump_2();
    
    intervalId = setInterval("jump_2()",500);
    document.getElementById("start_btn").disabled = "disabled";
}

