
function navFunction() {
    console.log("func call");
    let x = document.getElementById("myTopnav");
    if (x.className === "nav_bar uni-padding") {
      x.className += " responsive";
    } else {
      x.className = "nav_bar uni-padding";
    }
  }