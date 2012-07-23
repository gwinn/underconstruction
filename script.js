$(function() {
    $('#work').animate({"opacity": "1"}, 3000);
    $('#work img').mouseover(function() {
        $(this).animate({"top": getRandomCoords(), "left": getRandomCoords()}, 1000);
    });
});

function getRandomCoords()
{
    x = window.innerWidth;
    y = window.innerHeight;

    return Math.round(200 - Math.random() * 500);
}

