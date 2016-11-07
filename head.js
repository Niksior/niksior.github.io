var pgTop, yPos, tB;

function yScroll(){
	pgTop = document.getElementById('gora');
	yPos = window.pageYOffset;
	tB = document.getElementById('navbar');
	
	if(yPos){
		tB.style.top = "0%";
	}

	else  {
		tB.style.top = "10%";
	}
}

window.addEventListener("scroll", yScroll);