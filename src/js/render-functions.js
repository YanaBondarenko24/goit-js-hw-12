import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


let lightbox = new SimpleLightbox(".gallery a");
 const gallery = document.querySelector(".gallery");
 const loader = document.querySelector(".loader");
 const arrow = document.querySelector(".nav-btn");


export function createGallery(images){
 return images.map(({webformatURL,largeImageURL, tags, likes, views, comments, downloads}) => 
      `<li class="gallery-item">
     <a class="gallery-link" href="${largeImageURL}">
     <img class="gallery-img" src="${webformatURL}" alt="${tags}" width="360" height="200"/>
     </a>
     <ul class="gallery-info">
     <li class="gallery-info-item">
     <h3 class="gallery-info-title">Likes</h3>
     <p class="gallery-info-text">${likes}</p>
     </li>
     <li class="gallery-info-item">
     <h3 class="gallery-info-title">Views</h3>
     <p class="gallery-info-text">${views}</p>
     </li>
     <li class="gallery-info-item">
     <h3 class="gallery-info-title">Comments</h3>
     <p class="gallery-info-text">${comments}</p>
     </li>
     <li class="gallery-info-item">
     <h3 class="gallery-info-title">Downloads</h3>
     <p class="gallery-info-text">${downloads}</p>
     </li>
     </ul>
    </li>`).join("");


}
   
export function renderGallery(arr){
    gallery.insertAdjacentHTML("beforeend", createGallery(arr));
    lightbox.refresh();
}

export function clearGallery(){
   gallery.innerHTML = "";
}

export function showLoader(){
  loader.classList.remove("hide");
}

export function hideLoader(){
  loader.classList.add("hide");
}

export function showLoadMoreButton(elem){
elem.classList.remove("hide");
}

export function hideLoadMoreButton(elem){
elem.classList.add("hide");
}
export function showArrow(){
  arrow.classList.remove("hide");
}
export function hideArrow(){
  arrow.classList.add("hide");
}

 
export function showError(){
     iziToast.error({
      message: 'Sorry, there are no images matching your search query. Please try again!',
      messageColor: "#fafafb",
      backgroundColor: "#ef4040",
      messageSize: "16px",
      position: "topRight",
      icon: 'material-icons',
  })
 }
 export function showEmptyInputError(){
     iziToast.error({
      message: 'Please enter the correct name!',
      messageColor: "#fafafb",
      backgroundColor: "#ef4040",
      messageSize: "16px",
      position: "topRight",
      icon: 'material-icons',
  })
 }

  
export function showFinishedCollectionError(){
     iziToast.error({
      message: `We're sorry, but you've reached the end of search results`,
      messageColor: "#fafafb",
      backgroundColor: "#ef4040",
      messageSize: "16px",
      position: "topRight",
      icon: 'material-icons',
  })
 }
