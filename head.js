var pgTop, yPos, tB;

function yScroll(){
	pgTop = document.getElementById('gora');
	yPos = window.pageYOffset;
	tB = document.getElementById('navbar');
	
	if(yPos){
		//tB.style.top = "0%";
		tB.style.position = "fixed";
	}

	else  {
		//tB.style.top = "10%";
		tB.style.position = "relative";
	}
	console.log(yPos);
}

window.addEventListener("scroll", yScroll);