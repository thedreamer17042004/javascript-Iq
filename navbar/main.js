var icon_bar = document.querySelector('.bars-icon');
var menu = document.querySelector('.ul_menu');
icon_bar.addEventListener('click', function(e) {
    e.preventDefault();

    menu.classList.toggle('show');
})