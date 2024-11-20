const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const imgContainer = document.querySelector('#dog-image-container');
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const breedContainer = document.querySelector('#dog-breeds');
let allBreeds;
const dropdown = document.querySelector('#breed-dropdown');

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
    .then(data => {
        Object.keys(data.message).forEach(e => {
            const li = document.createElement('li');
            li.innerText = e;
            li.classList.add('breed');
            breedContainer.append(li)
        });

// CHALLENGE 3

        allBreeds = document.querySelectorAll('.breed');
        allBreeds.forEach(e => e.addEventListener('click', () => {
            const red = Math.floor(Math.random()*255);
            const green = Math.floor(Math.random()*255);
            const blue = Math.floor(Math.random()*255);
            e.style.color = `rgb(${red}, ${green}, ${blue})`;
        }))
    });

// CHALLENGE 4

dropdown.addEventListener('change', () => {
    switch (dropdown.value) {
        case 'a':
            allBreeds.forEach(e => {
                if (e.innerText[0] !== 'a') {
                    e.classList.add('hidden');
                } else if (e.innerText[0] === 'a' && e.classList.contains('hidden')) {
                    e.classList.remove('hidden');
                }
            });
            break;
        case 'b':
            allBreeds.forEach(e => {
                if (e.innerText[0] !== 'b') {
                    e.classList.add('hidden');
                } else if (e.innerText[0] === 'b' && e.classList.contains('hidden')) {
                    e.classList.remove('hidden');
                }
            });
            break;
        case 'c':
            allBreeds.forEach(e => {
                if (e.innerText[0] !== 'c') {
                    e.classList.add('hidden');
                } else if (e.innerText[0] === 'c' && e.classList.contains('hidden')) {
                    e.classList.remove('hidden');
                }
            });
            break;
        case 'd':
            allBreeds.forEach(e => {
                if (e.innerText[0] !== 'd') {
                    e.classList.add('hidden');
                } else if (e.innerText[0] === 'd' && e.classList.contains('hidden')) {
                    e.classList.remove('hidden');
                }
            });
            break;
    }
});