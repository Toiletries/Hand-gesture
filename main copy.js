var prediction1=""
var prediction2=""
Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
})
camera=document.getElementById("camera") 
Webcam.attach("#camera") 
 function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img src="+data_uri+" id='selfieimage'>"
    })
 }//https://teachablemachine.withgoogle.com/models/XOX2Ut79-/
 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/XOX2Ut79-/model.json",modelloaded)
 function modelloaded(){
    console.log("modelloaded")
 }
 function check(){
    img= document.getElementById('selfieimage')
classifier.classify(img,gotResult)
 }
 function gotResult(error,Result){
if (error) {
    console.log(error)
} else {
   console.log(Result) 
   document.getElementById("result_emotion_name").innerHTML=Result[0].label
   document.getElementById("result_emotion_name2").innerHTML=Result[1].label
   prediction1=Result[0].label
   prediction2=Result[1].label
   if (prediction1=="Amazing") {
    document.getElementById("update_emoji").innerHTML="&#128076;"
    

   }
   if (prediction1=="Thumbs_ up") {
    document.getElementById("update_emoji").innerHTML="&#128077;"
    
    
   }
   if (prediction1=="victory") {
    document.getElementById("update_emoji").innerHTML="&#9996;"
    
   } 
}
 }