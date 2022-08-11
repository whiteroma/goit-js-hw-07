import { galleryItems } from "./gallery-items.js";
// Change code below this line


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


  function onKeyDownEscape (e) {
    if (e.code === 'Escape' && instance.visible()) {
      instance.close()
    }
  }

  const lightBoxConfig = {
    onShow: () => {
      gallery.addEventListener("keydown", onKeyDownEscape)
    },
    onClose: () => {
      if (e.key === "Escape") {
      gallery.removeEventListener("keydown", onKeyDownEscape)
      }
    }
  }


  const instance = basicLightbox.create(
    `<img src="${imgs}" class="gallery__image">`,
    lightBoxConfig
    ); 
    instance.show()
});
