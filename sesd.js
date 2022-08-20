var urlmain = document.URL;
var param = document.URL.split("/")[4].replace("?m=1","").replace("?m=0","");
var dataUrl = ["https://movieshd.app/"];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem + param;
