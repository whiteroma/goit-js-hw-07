import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const createGalleryMarkup = createGallery(galleryItems);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
        <div class="gallery__item">
            <a href="${original}" class="gallery__link">
                <img src="${preview}" data-source="${original}" alt="${description}" class="gallery__image">
             </a>
        </div>`;
    })
    .join("");
}

gallery.insertAdjacentHTML("beforeend", createGalleryMarkup);

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const imgs = e.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${imgs}" class="gallery__image">
`);

  instance.show();

  gallery.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  });
});
