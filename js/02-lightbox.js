import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const createGalleryMarkup = createGallery(galleryItems);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
        <div class="gallery__item">
         <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
         </a>
        </div>`;
    })
    .join("");
}

gallery.insertAdjacentHTML("beforeend", createGalleryMarkup);



let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionType: 'attr',
    captionPosition: 'Bottom',
    captionDelay: 250,

});

gallery.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
      return;
    }
  });