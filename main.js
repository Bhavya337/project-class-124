function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,400);
    canvas.position(580,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses );


}

function modelLoaded(){
    console.log('posenet is initialized');
    
}
function gotPoses(results){
    if(results.lenght>0){
        console.log(results);
    }

}
function draw(){
    background('#6bdaff');

}
