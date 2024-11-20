console.log('%c HI', 'color: red');console.log('%c HI', 'color: orange');console.log('%c HI', 'color: goldenrod');console.log('%c HI', 'color: green');console.log('%c HI', 'color: blue');console.log('%c HI', 'color: indigo');console.log('%c HI', 'color: violet');

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const imgContainer = document.querySelector('#dog-image-container');
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const breedContainer = document.querySelector('#dog-breeds');

let test;

// CHALLENGE 1

fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => data.message.forEach(e => {
        const newImg = document.createElement('img');
        newImg.setAttribute('src', `${e}`);
        newImg.style.height = '150px';
        imgContainer.append(newImg);
    }));

// CHALLENGE 2

fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => Object.keys(data.message).forEach(e => {
        const li = document.createElement('li');
        li.innerText = e;
        breedContainer.append(li);
    }));