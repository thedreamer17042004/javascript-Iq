// arrays
// document.getElementById()
// document.querySelector()
// addEventListener()
// document.body.style.backgroundColor
// Math.floor()
// Math.random()
// array.length



var btnn = document.getElementById("btnn");
var ctn = document.querySelector('.ctn');
var color = document.querySelector('.color');
var col = document.getElementById('col');

let defaultColor = '#00ffff';

col.innerHTML = defaultColor;
ctn.style.backgroundColor = defaultColor;
var colorArray = ['#008000', '#ff0000', '#F15025', 'Rgba(133,122,200)'];

btnn.addEventListener('click', function(event) {
    event.preventDefault();


    let length = colorArray.length;
    let color = Math.floor(Math.random() * length);
    col.innerHTML =  colorArray[color];
    ctn.style.backgroundColor = colorArray[color];
});

