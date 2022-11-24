nx = "" ;
ny = "" ; 

function preload(){
img = loadImage("https://i.postimg.cc/HLX3gLwS/cw.png")
}

function setup(){

canvas = createCanvas(300 , 300)
canvas.center()
video = createCapture(VIDEO)
video.size(300 , 300)
video.hide()
ps  = ml5.poseNet(video , modelLoaded )
ps.on( "pose" , gotPoses)
}

function modelLoaded() {
    console.log("model has loaded commander") ; 
    
    }
    
    function gotPoses(results) {
        
        if(results.length > 0){
    
    console.log(results) ; 
    console.log('nose x = '+results[0].pose.nose.x) ; 
    console.log('nose y = '+results[0].pose.nose.y) ; 
    nx = results[0].pose.nose.x - 29 
    ny = results[0].pose.nose.y - 27
        } 
    }


function draw(){
    image(video , 0 , 0 , 300 ,300)
  image( img , nx , ny , 65 , 65 )
}




function ts() {

save("you.png") ; 

}