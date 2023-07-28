var btn = document.querySelectorAll('.btn');
var aa = [];
var data = [
    {category: 1, img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg', title: 'Buttermilk Pancakes', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' },
    {category: 2,img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg', title: 'Diner Double', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' },
    {category: 3,img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg', title: 'Godzilla Milkshake', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' },
    {category: 1,img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg', title: 'Country Delight  ', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' },
    {category: 2,img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg', title: 'Egg Attack', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' },
    {category: 3,img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg', title: 'Oreo Dream', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' },
    {category: 1,img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg', title: 'Bacon Overflow', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' },
    {category: 2,img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg', title: 'American Classic', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' },
    {category: 3,img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg', title: 'Quarantine Buddy', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' },
    {category: 4,img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg', title: 'Steak Dinner', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' }
];
 

function filee(id) {
    data.reduce((acc, item) => {
    if (item.category == id) {
      acc.push({category: item.category,img: item.img, title: item.title,price: item.price, content: item.content });
    }
    aa = acc;
    return aa;
  }, []);
}


function displayCategory() {
    btn.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            var categoryName = item.getAttribute('class');
            if(categoryName.includes('all')) {
                listProduct(data);
            }else if (categoryName.includes('break')){
                console.log('break')
                filee(1);
                listProduct(aa);
            }else if(categoryName.includes('launch')){
                filee(2);
                listProduct(aa);
            } else if(categoryName.includes('shake')){
                filee(3);
                listProduct(aa);
            }else if(categoryName.includes('dinner')){
                filee(4);
                listProduct(aa);
            }
            
        });
        
    });
}


function listProduct(data) {
    var id = document.getElementById('cold');

    var tr = '';
    for (let i = 0; i < data.length; i++) {
        const element = data[i];

    tr += `
    <div class="col-md-6" style="display: flex;margin-top: 20px;" >

        <div class="content" style="display: flex;width: fit-content;">
            <img src="${element.img}" alt="" class="img_" style="width: 100px;">
            <div>
                <h4 class="title_">
                    <!-- Buttermilk Pancakes -->
                    ${element.title}
                </h4>
                <span class="price_">
                ${element.price}
                </span>
                <p class="content_">
                ${element.content}</p>
            </div>
        </div>
        </div>

    `
    }
    id.innerHTML = tr;
}  

window.addEventListener('DOMContentLoaded', (e) => {
    listProduct(data);
});

displayCategory();

