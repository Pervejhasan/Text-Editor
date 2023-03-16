var check_type = false;
document.getElementById("bold_text").addEventListener("click", function () {
  if (!check_type) {
    document.getElementById("text").style.fontWeight = "bold";
    check_type = true;
  } else {
    document.getElementById("text").style.fontWeight = "";
    check_type = false;
  }
});

document.getElementById("italic_text").addEventListener("click", function () {
  if (!check_type) {
    document.getElementById("text").style.fontStyle = "italic";
    check_type = true;
  } else {
    document.getElementById("text").style.fontStyle = "normal";
    check_type = false;
  }
});

document
  .getElementById("underline_text")
  .addEventListener("click", function () {
    if (!check_type) {
      document.getElementById("text").style.textDecoration = "underline";
      check_type = true;
    } else {
      document.getElementById("text").style.textDecoration = "none";
      check_type = false;
    }
  });

document.getElementById("left_align").addEventListener("click", function () {
  document.getElementById("text").style.textAlign = "left";
});

document.getElementById("center_align").addEventListener("click", function () {
  document.getElementById("text").style.textAlign = "center";
});

document.getElementById("right_align").addEventListener("click", function () {
  document.getElementById("text").style.textAlign = "right";
});

document.getElementById("justify_align").addEventListener("click", function () {
  document.getElementById("text").style.textAlign = "justify";
});

document.getElementById("font-size").addEventListener("change", function (e) {
  document.getElementById("text").style.fontSize = e.target.value + "px";
});

document.getElementById("text_color").addEventListener("change", function (e) {
  document.getElementById("text").style.color = e.target.value;
});

let selector = document.getElementById("text-decoration");

selector.addEventListener("click", () => {
  selector.addEventListener("change", () => {
    switch (selector.value) {
      case "uppercase":
        document.getElementById("text").style.textTransform = "uppercase";
        break;
      case "lowercase":
        document.getElementById("text").style.textTransform = "lowercase";
        break;
      case "capitalize":
        document.getElementById("text").style.textTransform = "capitalize";
        break;
    }
  });
});
