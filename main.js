noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,400);
    canvas.position(560,100);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses );


}

function modelLoaded(){
    console.log('posenet is initialized');
    
}
function gotPoses(results){
  if(results.lenght>0){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("noseX= " +noseX + "noseY= " +noseY);
    leftwristX=results[0].pose.leftWrist.x;
    rightwristX=results[0].pose.rightWrist.x;
    difference=floor(leftwristX-rightwristX);
    
    console.log("leftwristX= " + leftwristX +"rightwristX= " + rightwristX+"difference= " + difference);

  }
  

   
}


function draw(){
    background('#63ff7b');
    textSize(difference);
    fill('#90f2fc');
    text('Bhavya',50,400);
   

}


