$('#navbarTogglerDemo02Button').on('click', function() {
    var article = document.getElementById('navbarTogglerDemo02');
    var number = article.dataset.number
    if (number === "false") {
        $(".home").css("display", "none");
        $(".main").css("display", "none");
        $(".gallery").css("display", "none");
        $(".hearder-title-two").css("display", "none");
        $(".main-bar").css("margin-top", "0");
        article.dataset.number = true
    } else {
        $(".home").css("display", "block");
        $(".main").css("display", "inline-block");
        $(".gallery").css("display", "inline-block");
        $(".hearder-title-two").css("display", "block");
        $(".main-bar").css("margin-top", "-90px");
        $(".main-bar").css("margin-left", "-18px");
        article.dataset.number = false
    }
});