/*==========
[=1: Load libraries]
===========*/  

/*==========
[=2: Custom functions]
===========*/
	//Hide URL bar on mobiles
		addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);
		function hideURLbar(){
		window.scrollTo(0,1);
		}

	//Device detect
		var deviceAgent = navigator.userAgent.toLowerCase();
	    var agentID = deviceAgent.match(/(ipad)/);


	$(document).ready(function() {
		var setHeight=$(document).height(); 
		var setWidth=$(document).width(); 
		$("body")
			.prepend("<p id='grid-toggle'>Toggle grid</p>")
			.prepend("<div id='grid-annotations'></div>")    
			.prepend("<div id='grid-overlay'></div>")
			.prepend("<canvas id='grid-overlay_horz' width='"+setWidth+"' height='"+setHeight+"'></canvas>");  
		$("#grid-overlay")   
			.height(setHeight)
			.hide();
		$("#grid-annotations,#grid-overlay_horz").hide();   
		$("#grid-toggle").click(function () {
			$("#grid-overlay,#grid-overlay_horz,#grid-annotations").fadeToggle("fast");
		});    
	
		var c_canvas = document.getElementById("grid-overlay_horz");
		var context = c_canvas.getContext("2d");
		for (var y = 0.5; y < setHeight; y += 5) {
		  context.moveTo(0, y);
		  context.lineTo(setWidth, y);
		}  
		context.strokeStyle = "#83CCDC";
		context.stroke(); 	
	});