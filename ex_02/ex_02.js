function rotateCircle() {
  let integer = 0;
  let img = document.querySelector("#circle");

  function applyRotation(angle) {
    integer += angle;
    img.style.transform = `rotate(${integer}deg)`;
  }

  document.getElementById("rotate-add-45").onclick = function() {
    applyRotation(45);
  };

  document.getElementById("rotate-add-90").onclick = function() {
    applyRotation(90);
  };

  document.getElementById("rotate-sub-45").onclick = function() {
    applyRotation(-45);
  };

  document.getElementById("rotate-sub-90").onclick = function() {
    applyRotation(-90);
  };

  document.getElementById("rotate-reset").onclick = function() {
    integer = 0;
    img.style.transform = `rotate(${integer}deg)`;
  };
}

rotateCircle();


