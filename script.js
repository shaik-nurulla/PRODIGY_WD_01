let clickCount = 0;
document.getElementById("btn").addEventListener("click", function() {
  clickCount++;
  if (clickCount === 1) {
    document.getElementById("heading").innerHTML = "Button Clicked!";
  } else {
    document.getElementById("heading").innerHTML = "Button Clicked " + clickCount + " times!";
  }
});
