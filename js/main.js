$(document).ready(function() {
    $('#toggle-theme').change(function() {
        if(this.checked==true) {
            document.body.classList.add('dark-theme')
        } else {
            document.body.classList.remove('dark-theme')
        }
    });
});