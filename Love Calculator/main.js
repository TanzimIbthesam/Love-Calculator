function lovepar(){
    //alert('Hello World');
var name=document.getElementById('name').value;
var lname=document.getElementById('lname').value;
var len=name.length;

if(name==""){
    alert('Please enter your name');
 }
 else if(name.length<=2){
 alert('Minimum length is 3');
}else if(!isNaN(name)){
    alert('Numbers are not allowed')
}
else if(lname==""){
    alert('Please enter your lname');
 }
 else if(lname.length <=2){
    alert('Min length is 3');
}else if(!isNaN(lname)){
alert('Numbers are not allowed');
}else{
    var lovedata=Math.random()*100;
    lovedata=Math.floor(lovedata);
    document.getElementById('lovevalue').value=lovedata +"%";
}

}
