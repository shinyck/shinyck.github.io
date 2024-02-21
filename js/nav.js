function myFunction() {
    let x = document.getElementById("mobile-nav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }
