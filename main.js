document.addEventListener("DOMContentLoaded", function() {
	document.querySelector(".btn-default").addEventListener("click", function() {
		var tempF = parseInt(document.querySelector(".form-control").value);
		var tempC = ((tempF - 32) * (5 / 9)).toFixed(0);
			if(isNaN(tempF)) {
			document.querySelector("h4").innerText = "That is not a temperature, idiot! Enter a number.";
		    } else if(tempC > 0) {
		    	document.querySelector(".top-color").style.backgroundColor = "red";
		    	document.querySelector("h4").innerText = "The Temperature in Celsius is: " + tempC + " C";
		    } else {
		    	document.querySelector(".top-color").style.backgroundColor = "#9D9AF5";
		    	document.querySelector("h4").innerText = "The Temperature in Celsius is: " + tempC + " C";
		    }
	});
	document.querySelector(".btn-primary").addEventListener("click", function() {
		window.location.reload();
	});
});