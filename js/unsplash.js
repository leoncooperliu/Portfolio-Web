const numItemsToGenerate = 10; //how many gallery items you want on the screen
const btn = document.querySelector('#generate-btn');

function renderGalleryItem(i) {
    fetch(`https://source.unsplash.com/random/` + i).then((response) => {
        let galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.innerHTML = `
      <img src="${response.url}" alt="gallery image"/>
    `
        document.querySelector('#body-img').appendChild(galleryItem);
    })
}

function renderPhoto() {
    document.querySelector('#body-img').innerHTML = "";
    for (let i = 0; i < numItemsToGenerate; i++) {
        renderGalleryItem(i);
    }
}

btn.addEventListener('click', renderPhoto);
