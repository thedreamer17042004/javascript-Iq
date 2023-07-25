var numb = document.getElementById('number');
var num = 0;
function inscre() {
    num++;
    numb.textContent = num;
    console.log(num);
}
function desc() {
    num--;
    numb.textContent = num;
    console.log(num);
}
function reset() {
    num = 0;
    numb.textContent = num;
    console.log(num);

}