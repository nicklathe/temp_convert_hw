//waits for document to load
document.addEventListener("DOMContentLoaded", function() {
	//listens for button click
	document.querySelector(".btn-default").addEventListener("click", function() {
		//gets value from input box, then performs function
		var tempF = parseInt(document.querySelector(".form-control").value);
		var tempC = ((tempF - 32) * (5 / 9)).toFixed(0);
		//checks to see if it's a number, then depending on what number, will change the div color
			if(isNaN(tempF)) {
			document.querySelector("h4").innerText = "That is not a temperature, idiot! Enter a number.";
		    } else if(tempC > 0) {
		    	document.querySelector(".top-color").style.backgroundColor = "red";
		    	document.querySelector("h4").innerText = "The Temperature in Celsius is: " + tempC + " C";
		    } else {
		    	document.querySelector(".top-color").style.backgroundColor = "#9D9AF5";
		    	document.querySelector("h4").innerText = "The Temperature in Celsius is: " + tempC + " C";
		    }
	}); //function to reload page 
	document.querySelector(".btn-primary").addEventListener("click", function() {
		window.location.reload();
	});
});