const URL = 'https://api.thedogapi.com/v1/images/search';

const URL_RANDOM = 'https://api.thedogapi.com/v1/images/search?limit=4&api_key=ef221a41-feef-4518-8e2d-9704ee9a9f5a';

const URL_FAVOURITES = 'https://api.thedogapi.com/v1/favourites?limit=1&api_key=ef221a41-feef-4518-8e2d-9704ee9a9f5a';

const URL_ERROR = 'https://api.thedogapi.com/v1/favourites?limit=1'

const spanError = document.getElementById('error');

document.addEventListener('DOMContentLoaded', (getRandomDog, getFavouritesDog))

async function getRandomDog() {
        const response = await fetch(URL_RANDOM);
        const data = await response.json();

        if(response.status !== 200) {
            spanError.innerHTML = " Hubo un error " + response.status;
        } else {
            const image1 = document.getElementById('img1');
            const image2 = document.getElementById('img2');
            const image3 = document.getElementById('img3');
            const image4 = document.getElementById('img4');
            image1.src = data[0].url;
            image2.src = data[1].url;
            image3.src = data[2].url;
            image4.src = data[3].url;
        }
}

const reload = document.querySelector('#reload')
reload.onclick = getRandomDog;


async function getFavouritesDog() {
        const response = await fetch(URL_ERROR);
        const data = await response.json();
        if(response.status !== 200) {
            spanError.innerHTML = " Hubo un error " + response.status;
        } else {
            const image1 = document.getElementById('img1');
        }
}
