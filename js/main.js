$(document).ready(function() {
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
});
