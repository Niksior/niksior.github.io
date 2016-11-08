var yPos, tB;

function yScroll(){
	yPos = window.pageYOffset;
	tB = document.getElementById('navbar2');
	var t;
	if(yPos > 114){
		tB.style.top = "0px";
	}

	else  {
		t=114-yPos;
		tB.style.top = t+"px";
	}
}

window.addEventListener("scroll", yScroll); //114