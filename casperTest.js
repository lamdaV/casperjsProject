var casper = require("casper").create();

casper.start("https://prod11gbss8.rose-hulman.edu/BanSS/twbkwbis.P_WWWLogin", function() {
	this.echo(this.getTitle());
});

casper.thenEvaluate(function() {
	document.querySelector("#UserID").value = ""; // add
	document.querySelector("input[name='PIN']").value = ""
});

casper.then(function() {
	this.click("input[type='submit']");
});

// casper.then(function() {
// 	console.log(this.getCurrentUrl());
// })

casper.thenOpen("https://prod11gbss8.rose-hulman.edu/BanSS/bwskfreg.P_AltPin", function() {
	console.log(this.getCurrentUrl());
});

casper.then(function() {
	this.click("input[type='submit']");
	this.capture('test2.png');
});

casper.then(function() {
	this.capture('test1.png');
	// this.click("input[type='submit']");
});

casper.thenEvaluate(function() {
	document.querySelector("input[name='pin']").value = "468261" // fix
});

casper.then(function() {
	// this.capture('test1.png');
	// this.click("input[type='submit']");
});

casper.then(function() {
	console.log(this.getCurrentUrl());
})

casper.run();

// "https://prod11gbss8.rose-hulman.edu/BanSS/bwskfreg.P_AltPin"