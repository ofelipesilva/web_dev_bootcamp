// Selecting and adding attributes
$("#title").addClass("big-title margin-50");

$("h1").text("Goodbye");

$("button").addClass("btn btn-primary");
$("button").html("<strong>don't click me</strong>");

console.log($("a").attr("href"));
$("a").attr({href: "https://www.yahoo.com", target: "_blank"});


// Adding event listeners
$("#title").click( () => {
    $("#title").css("color", "red");
});

$("button").click( () => {
    $("#title").css("color", "purple");
});

$(document).keypress(event => {
    $("#title").text(event.key);
});

$("h1").on("mouseover", () => {
    $("h1").css("color", "green");
});


// Adding and removing elements before and after and element

$("h1").before("<button class='btn btn-danger'>Hello</button>");

// $("button").remove();


// Animations
// $("button").on("click", () => {
//     $("#title").slideToggle();
// });

$("button").on("click", () => {
    $("#title").slideUp().slideDown().animate({margin: 100, opacity: 0.5});
});