function menuOpen() {
	if (document.getElementById("menu").style.display == "flex") {
		document.getElementById("menu").style.display = "none";
		document.getElementById("social").style.display = "none";
	} else {
		document.getElementById("menu").style.display = "flex";
		document.getElementById("social").style.display = "flex";
	}
}

function menuHide() {
	if (screen.width <= 768) {
		document.getElementById("menu").style.display = "none";
		document.getElementById("social").style.display = "none";
	}
}
