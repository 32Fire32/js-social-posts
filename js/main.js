// FUNZIONI
function onlyCapitalLetters(cap){
    return  cap.match(/[A-Z]/g, "").join(''); // join the array to return a string
}

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];



  
let arrayId = [];
let likesNumber = 0;
let year;
let month;
let day;

let postList = document.getElementById("container");

// Clonazione di un template html
for(let i = 0; i < posts.length; i++) {
    const singlePost = posts[i];

    const postContainer = document.getElementById('template-post').content.cloneNode(true);
    postContainer.querySelector('.post__image img').src = singlePost.media;

    if( singlePost.author.image ) {
        postContainer.querySelector('.profile-pic').src = singlePost.author.image;
    } else {
        postContainer.querySelector('.profile-pic').remove();
        postContainer.querySelector('.post-meta__icon').innerHTML = onlyCapitalLetters(singlePost.author.name);
    }

    postContainer.querySelector('.post-meta__author').innerHTML = singlePost.author.name;

    //Formattazione data
    for ( let key in posts){
        console.log(posts[key].created);
        let date = posts[key].created;
        day = date.slice(8,10);
        console.log(day);
        month = date.slice(5,7);
        console.log(month);
        year = date.slice(0,4);
        console.log(year);
    }
    postContainer.querySelector('.post-meta__time').innerHTML = `${day}/${month}/${year}`;
    
    postContainer.querySelector('.post__text').innerHTML = singlePost.content;
    postContainer.querySelector('img').src = singlePost.media;

    let likeButton = postContainer.querySelector('.like-button.js-like-button');
    likeButton.setAttribute('data-postid', singlePost.id);
    
    let counter = postContainer.querySelector('.js-likes-counter')
    counter.innerHTML = singlePost.likes;

    //click mi piace
    likeButton.addEventListener('click', function(){
        likeButton.classList.toggle('like-button--liked');
        likesNumber += 1;

        const classExists = document.getElementsByClassName('like-button--liked').length > 0;

        if (classExists) {
            counter.innerHTML = singlePost.likes + 1;
            arrayId.push(singlePost.id);
        } else {
            counter.innerHTML = singlePost.likes ;
        }

        
    });    

    postList.append(postContainer);  
}


