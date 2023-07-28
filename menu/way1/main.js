var all = document.querySelector('.all');
var break_ = document.querySelector('.break');
var launch = document.querySelector('.launch');
var shake = document.querySelector('.shake');
var dinner = document.querySelector('.dinner');


const data = [
    {img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg', title: 'Buttermilk Pancakes', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' },
    {img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg', title: 'Diner Double', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' },
    {img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg', title: 'Godzilla Milkshake', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' },
    {img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg', title: 'Country Delight  ', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' },
    {img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg', title: 'Egg Attack', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' },
    {img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg', title: 'Oreo Dream', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' },
    {img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg', title: 'Bacon Overflow', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' },
    {img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg', title: 'American Classic', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' },
    {img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg', title: 'Quarantine Buddy', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' },
    {img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg', title: 'Steak Dinner', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' }
];
const breakData = [
    {img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg', title: 'Buttermilk Pancakes', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' },
    {img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg', title: 'Country Delight  ', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' },
    {img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg', title: 'Bacon Overflow', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' }
];

const lauchData = [
    {img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg', title: 'Diner Double', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' },
    {img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg', title: 'Egg Attack', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' },
    {img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg', title: 'American Classic', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' }

];
const shakeData = [
    {img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg', title: 'Godzilla Milkshake', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' },
    {img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg', title: 'Oreo Dream', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' },
    {img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg', title: 'Quarantine Buddy', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' }

];
const dinnerData = [
    {img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg', title: 'Steak Dinner', price: '$15.99', content: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' }
];

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

listProduct(data);


all.addEventListener('click', (e) => {
    listProduct(data);
});
break_.addEventListener('click', (e) => {
    listProduct(breakData);
});
launch.addEventListener('click', (e) => {
    listProduct(lauchData);
});
shake.addEventListener('click', (e) => {
    listProduct(shakeData);
});
dinner.addEventListener('click', (e) => {
    listProduct(dinnerData);
});