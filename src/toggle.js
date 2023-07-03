function toggleGif() {
  var gif = document.getElementById("gif");
  var gifContainer = document.getElementById("gifContainer");

  if (gif.style.display === "none") {
    gif.style.display = "block";
  } else {
    gif.style.display = "none";
  }
}
