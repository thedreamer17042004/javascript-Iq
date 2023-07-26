// how to ghep chung lai thanh a word includes 6 characters; ex: #000 000 

// why 0.5 - Math.random();
// Lần thử thứ hai của bạn, với sort(() => Math.random() - 0,5), 
// trả về với xác suất bằng nhau là số thứ nhất lớn hơn số thứ hai hoặc ngược lại, 
// điều này làm cho việc xáo trộn hoạt động tốt hơn nhiều. Tuy nhiên, 
// do tính không đáng tin cậy của toàn bộ nên không có gì đảm bảo rằng tính năng phát ngẫu nhiên sẽ hoạt động trong tất cả các trình duyệt hoặc đặc biệt ngẫu nhiên.
//  Vui lòng sử dụng thuật toán xáo trộn "thực" được liên kết ở trên.

var btnn = document.getElementById('btnn');
var col = document.getElementById('col');
var ctn = document.querySelector('.ctn');

function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}
  
var arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

let colordefault = '#fa123b';
col.innerText = colordefault;
ctn.style.backgroundColor = colordefault

btnn.addEventListener('click', function(event) {
    event.preventDefault();

    var result = '#' + getMultipleRandom(arr, 6).join(''); 
    col.innerText = result;
    ctn.style.backgroundColor = result;
    console.log(result);
});


