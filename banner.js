document.getElementById("closeAlert").onclick = function(){

	document.getElementById("alertContent").style.display = "none";


};

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
	var mobileMenu = document.getElementById("nav-links-mobile");
	if (mobileMenu.style.display === "block") {
		mobileMenu.style.display = "none";
	} else {
		mobileMenu.style.display = "block";
	}
  }

