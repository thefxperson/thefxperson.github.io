function mobileMenu() {
  //change navbar to dropdown
  var x = document.getElementById("nav_elems");
  var y = document.getElementById("name");  //adjust name position so there's no conflict
  if (x.className === "topnav") {
    x.className += " responsive";
    y.style.top = "65%";
  } else {
    x.className = "topnav";
    y.style.top = "50%";
  }
}
