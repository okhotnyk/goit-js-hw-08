import simplelightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const markUpGalleryList = createItemMarkUp(galleryItems);
const galleryContainer = document.querySelector('.gallery');
galleryContainer.insertAdjacentHTML('beforeend', markUpGalleryList);

function createItemMarkUp(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
    })
    .join('');
}

const myLightbox = new simplelightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
