objects=[];
status="";
function setup(){
canvas=createCanvas(380,380);
canvas.center();
video=createCapture(VIDEO);
video.size(380,380);
video.hide();


}
function modelLoaded(){
console.log("modelLoaded");
status=true;
}
function start(){
objectDetecter=ml5.objectDetecter('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status-detecting objects";
object_name=document.getElementById("object_name").value;
}