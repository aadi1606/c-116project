mustacheX=0;
mustacheY=0;

function preload(){
mustache_img=loadImage(' https://i.postimg.cc/3x3QzSGq/m.png')
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
 image(video,0,0,300,300);
 image(mustache_img,mustacheX,mustacheY,50,50);
}

function take_snapshot(){
    save("MyFilterImage.png");
}

function modelLoaded(){
    console.log('poseNet is initialized');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        mustacheX=results[0].pose.mustache.x-15;
        mustacheY=results[0].pose.mustache.y-15;
    }
}