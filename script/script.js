//Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const menu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	menu.classList.toggle("active");
});
//Banner Card Slideshow
var cardIndex = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName("banner-card");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	cardIndex++;
	if (cardIndex > x.length) {
		cardIndex = 1;
	}
	x[cardIndex - 1].style.display = "block";
	setTimeout(carousel, 8000);
}

//CTA Service Selector
//Large Screens
function lg_service(i) {
	const one = document.getElementById("lg-content-1");
	const two = document.getElementById("lg-content-2");
	const three = document.getElementById("lg-content-3");
	switch (i) {
		case 1:
			one.style = "display:block";
			two.style = "display:none";
			three.style = "display:none";
			break;
		case 2:
			one.style = "display:none";
			two.style = "display:block";
			three.style = "display:none";
			break;
		case 3:
			one.style = "display:none";
			two.style = "display:none";
			three.style = "display:block";
			break;
	}
}
//Small Screens
function sm_service(i) {
	const one = document.getElementById("sm-content-1");
	const two = document.getElementById("sm-content-2");
	const three = document.getElementById("sm-content-3");
	const svg1 = document.getElementById("selectorSVG-1");
	const svg2 = document.getElementById("selectorSVG-2");
	const svg3 = document.getElementById("selectorSVG-3");

	switch (i) {
		case 1:
			one.style = "display:block";
			two.style = "display:none";
			three.style = "display:none";
			document.getElementById("sm-btn-1").scrollIntoView({behavior: "smooth"});
			svg1.classList.add("active");
			svg2.classList.remove("active");
			svg3.classList.remove("active");
			break;
		case 2:
			one.style = "display:none";
			two.style = "display:block";
			three.style = "display:none";
			document.getElementById("sm-btn-2").scrollIntoView({behavior: "smooth"});
			svg1.classList.remove("active");
			svg2.classList.add("active");
			svg3.classList.remove("active");
			break;
		case 3:
			one.style = "display:none";
			two.style = "display:none";
			three.style = "display:block";
			document.getElementById("sm-btn-3").scrollIntoView({behavior: "smooth"});
			svg1.classList.remove("active");
			svg2.classList.remove("active");
			svg3.classList.add("active");
			break;
	}
}
