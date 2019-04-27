
document.getElementById("img").addEventListener("mouseover", function() {
   document.getElementById("full-screen-btn").style.display="block";
});

document.getElementById("img").addEventListener("mouseout", function() {
   document.getElementById("full-screen-btn").style.display="none";
});

document.getElementById("full-screen-btn").addEventListener("click", function()  {
   document.getElementById("img-full").style.display="block";
});


document.getElementById("close-btn").addEventListener("click", function() {
   document.getElementById("img-full").style.display="none";
});
