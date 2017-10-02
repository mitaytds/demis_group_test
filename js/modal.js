var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');
var btn = document.getElementById('Btn');
var btn1 = document.getElementById('imgBtn_1');
var btn2 = document.getElementById('imgBtn_2');
var btn3 = document.getElementById('imgBtn_3');
var btn4 = document.getElementById('imgBtn_4');
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];

btn.onclick =function (){
	modal.style.display ="block";
}
btn1.onclick = function(){
	modal2.style.display = "block";
}
btn2.onclick = function(){
	modal2.style.display ="block";
}
btn3.onclick = function(){
	modal2.style.display ="block";
}
btn4.onclick = function(){
	modal2.style.display ="block";
}
span.onclick = function(){
	modal.style.display = "none";
}
span1.onclick = function(){
	modal2.style.display = "none";
}
window.onclick = function(event){
	if (event.target == modal) {
		modal.style.display = "block";
	}
}