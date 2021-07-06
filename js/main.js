$(document).ready(function() {
    $('#switch').focus();
    $('#btn-small-font').on("click", function() {
        [...document.querySelectorAll('.size')].map((item, key) => {
            document.querySelectorAll('.size')[key].classList.remove('large-font')
            document.querySelectorAll('.size')[key].classList.remove('middle-font')
            document.querySelectorAll('.size')[key].classList.add('small-font')
        })
    }); 

    $('#btn-middle-font').on("click", function() {
        [...document.querySelectorAll('.size')].map((item, key) => {
            document.querySelectorAll('.size')[key].classList.remove('large-font')
            document.querySelectorAll('.size')[key].classList.remove('small-font')
            document.querySelectorAll('.size')[key].classList.add('middle-font')
        })
    });

    $('#btn-large-font').on("click", function() {
        [...document.querySelectorAll('.size')].map((item, key) => {
            document.querySelectorAll('.size')[key].classList.remove('small-font')
            document.querySelectorAll('.size')[key].classList.remove('middle-font')
            document.querySelectorAll('.size')[key].classList.add('large-font')
        })
     });

    $('#switch').change(function() {
        if(this.checked==true) {
            document.body.classList.remove('light-theme')
            document.body.classList.add('dark-theme')
        } else {
            document.body.classList.remove('dark-theme')
            document.body.classList.add('light-theme')
        }
    });
});
