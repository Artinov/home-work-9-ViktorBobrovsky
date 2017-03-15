var ball = document.querySelector(".discoball");
var arrayClasses = ["here", "goes", "our","awesome", "disco", "ball"];
i = 0;
function goDisco() {
	if(i<=5){
		ball.setAttribute("class", "discoball " + arrayClasses[i]);
		i++;
	}else {i = 0};
};

setInterval(goDisco,300);