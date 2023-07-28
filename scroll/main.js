var navbar2 = document.querySelector('.navbar2');
var navbar1 = document.getElementById('navbar1');
var about1 = document.getElementById('about');
var service_ = document.getElementById('service_');
var tour_ = document.getElementById('tour_');


var a_service = document.querySelector('.a_service');

var linksContainers = document.querySelector('.link_containers');

function service(e) {
    // navigate to specific spot
    e.preventDefault();
    var service_ = document.getElementById('service_');
    const containerHeight = linksContainers.getBoundingClientRect().height;
    const fixedNav = navbar2.classList.contains("pin");
    const navHeight = navbar1.getBoundingClientRect().height;

    let position = service_.offsetTop - navHeight;

    if (!fixedNav) {
        position = position - navHeight;
      }

    scroll({
        top: position,
        behavior: "smooth"
    });

}


a_service.addEventListener('click', service);



window.addEventListener('scroll', (e) => {
    var pageOffsetY = window.scrollY;
    const navHeight = navbar1.getBoundingClientRect().height;

 
    if(pageOffsetY > navHeight) {
        navbar2.classList.add('pin');
    }else {
        navbar1.classList.remove('pin');
    }
    
});