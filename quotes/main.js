// to do click to change the content 

// objects
// DOMContentLoaded -- to act when content is loaded without waiting for the image--
// addEventListener()--
// array.length
// textContent--

const data = [
    {image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg', name: 'anna johnson', job: 'web designer', info: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.'},
    {image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg', name: 'peter jones', job: 'intern', info: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.'},
    {image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg', name: 'Bill Anderson', job: 'THE BOSS', info: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.'},
    {image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg', name: 'Susan Smith', job: 'WEB DEVELOPER', info: 'Im baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry'}
];


var be = document.getElementById('be');
var lon = document.getElementById('lon');
var img = document.getElementById('img');
var name = document.getElementById('name');
var info = document.getElementById('info');
var job = document.getElementById('job');



document.addEventListener('DOMContentLoaded', function(event) {
    event.preventDefault();
    var index = data.findIndex(object => {
        return object.name === 'anna johnson';
    });

    img.setAttribute('src', data[index].image);
    name.textContent = data[index].name;
    job.textContent = data[index].job;
    info.textContent = data[index].info;
    console.log(index);


    lon.addEventListener('click', function(e) {
        event.preventDefault();
            if(index > 2) {
                index = 0;
                img.setAttribute('src', data[index].image);
                name.textContent = data[index].name;
                job.textContent =  data[index].job;
                info.textContent =  data[index].info;
                console.log(index);
            }else {
               var a = ++index;
               var b = data[a];
                img.setAttribute('src', b.image);
                name.textContent = b.name;
                job.textContent = b.job;
                info.textContent = b.info;
                console.log(a)
            }
    });
    be.addEventListener('click', function(e) {
        event.preventDefault();
            if(index < 1) {
                index = data.length - 1;
                img.setAttribute('src', data[index].image);
                name.textContent = data[index].name;
                job.textContent =  data[index].job;
                info.textContent =  data[index].info;
                console.log(index);
            }else {
               var a = --index;
               var b = data[a];
                img.setAttribute('src', b.image);
                name.textContent = b.name;
                job.textContent = b.job;
                info.textContent = b.info;
                console.log(a)
            }
    });

})

