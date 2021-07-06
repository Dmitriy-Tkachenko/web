$(document).ready(function() {
    $('#toggle-theme').change(function() {
        var link = document.getElementById("theme-link");
        let lightTheme = "css/light.css";
        let darkTheme = "css/dark.css";
        var currTheme = link.getAttribute("href");
        var theme = "";
        if(this.checked==true) {
            currTheme = darkTheme;
            theme = "dark";
            document.querySelectorAll('.task__edit-img').forEach(function(item) {
                item.src = "img/pen-white.png";
            })
            document.querySelectorAll('.task__add-img').forEach(function(item) {
                item.src = "img/confirm-white.png";
            })
        } else {
            currTheme = lightTheme;
            theme = "light";
            document.querySelectorAll('.task__edit-img').forEach(function(item) {
                item.src = "img/pen.png";
            })
            document.querySelectorAll('.task__add-img').forEach(function(item) {
                item.src = "img/confirm.png";
            })
        }

        link.setAttribute("href", currTheme);
        Save(theme);
    });
});