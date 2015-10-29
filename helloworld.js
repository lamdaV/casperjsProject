var page = require('webpage').create();
page.onConsoleMessage = function(msg) {
	console.log("Status: " + msg);
};

page.open("https://prod11gbss8.rose-hulman.edu/BanSS/bwskfreg.P_AltPin", function(status) {
	console.log("loading webpage...");
	
	page.evaluate(function() {
		console.log("logging in...")
		document.querySelector("#UserID").value = "lamd";
		document.querySelector("input[name='PIN']").value = "Doomlord500"
		document.querySelector("input[type='submit']").click();
		console.log("login sucess");
	});

    window.setTimeout(function () {
    	pagePin.render("currentPage.png");

    }, 5000);

});
