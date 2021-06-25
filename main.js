function mobileMenu() {
  var x = document.getElementById("nav_elems");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
