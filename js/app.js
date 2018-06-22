console.log("JavaScript is running...");

 $(() => {
	let $container = $("div").attr("id", "container");
console.log($container);

$($container).append("<h1>I walk with warlocks through labrynth-like corn stalks</h1>");

$($container).append("<h2>Eric Todd</h2>");

$($container).append("<h3>Slytherin</h3>");

$($container).append("<h4 class='dog'>Zephyr</h4>");

$($container).append("<h4>Holly Wood with Unicorn Hair Core</h4>");

$($container).append("<ul/>");
$("ul").attr("storage", "trunk");
$("ul").append("<li>Butter Beer</li><li class='secret'>Invisibility Cloak</li><li class='secret'>Marauder's Map</li><li class='secret'>Time Turner</li><li class='dog'>Leash</li><li>Bertie Bott's Every Flavor Beans</li>");






});






















