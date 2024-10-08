function reduceOpacity() {
  const square = document.getElementById("square");
  square.style.opacity = "0.5";
}

function resetOpacity() {
  const square = document.getElementById("square");
  square.style.opacity = "1";
}

const square = document.getElementById("square");

square.onmouseover = reduceOpacity;
square.onmouseout = resetOpacity;