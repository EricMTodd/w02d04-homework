console.log("JavaScript is running...");

 $(() => {
	let $container = $("div").attr("id", "container");
console.log($container);

$($container).append("<h1/>");
$("h1").text("Syllable skill-a-holic");

$($container).append("<h2/>");
$("h2").text("Eric Todd");

$($container).append("<h3/>");
$("h3").text("Slytherin");

$($container).append("<h4/>");
$("h4").addClass("dog");
$(".dog").text("Zephyr")

// $($container).append("<h4/>");
// $("h4").text("Holly Wood with Unicorn Hair Core");
// ("Holly Wood with Unicorn Hair Core")

// THIS SHIT DOESN'T WORK







});






















