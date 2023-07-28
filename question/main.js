var plus = document.querySelectorAll('.plus');
var ctn = document.querySelectorAll('.ctn');

plus.forEach(function(item1, index1) {
    item1.addEventListener('click', function(e) {
        e.preventDefault();
        ctn.forEach(function(item, index) {
            if(index1 == index) {
                item.classList.toggle('show');
            }else {
                item.classList.remove('show');
            }
            
        })
        
    });
})

