document.getElementById("outArrow").addEventListener("click",
function(){
	document.getElementById("control").style.left = "0px";
	document.getElementById("outArrow").style.left = "-50px";
	document.getElementById("outArrow").style.right = "200px";
	document.getElementById("inArrow").style.left = "200px";
	document.getElementById("inArrow").style.right = "-50px";
});
document.getElementById("inArrow").addEventListener("click",
function(){
	document.getElementById("control").style.left = "-200px";
	document.getElementById("outArrow").style.left = "200px";
	document.getElementById("outArrow").style.right = "-50px";
	document.getElementById("inArrow").style.left = "-50px";
	document.getElementById("inArrow").style.right = "200px"
});

document.getElementById("bg1").addEventListener("click",
function(){
	document.getElementById("bg_image").style.backgroundImage 
	= "url(imgs/cat.jpg)";
});
document.getElementById("bg2").addEventListener("click",
function(){
	document.getElementById("bg_image").style.backgroundImage 
	= "url(imgs/FO4.jpg)";
});
document.getElementById("bg3").addEventListener("click",
function(){
	document.getElementById("bg_image").style.backgroundImage 
	= "url(imgs/Zelda_botw.jpg)";
});

