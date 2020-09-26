
$("div").append("<h2>Todos")
$("div").append("<ul>")
$("div").append("<input type='text'>")
$("div").append("<button>Add")
$("button").click(() => {
    $("ul").append(`<li>${$('input').val()}`)
})
$("li").css("margin-left", "10px")
$("li").click(() => {
    $("li").css("text-decoration-line", "line-through")
})