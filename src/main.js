
import * as render from "./js/render-functions.js";
import * as request from "./js/pixabay-api.js";

const form = document.querySelector(".form");
export const gallery = document.querySelector(".gallery");
export const loader = document.querySelector(".loader");
export const button = document.querySelector(".gallery-btn");
export const arrow = document.querySelector(".nav-btn");

form.addEventListener("submit", handleSubmit);
button.addEventListener("click", handleClick);

let inputData = "";
let page = 1;
let totalPages = 0;
async function handleSubmit(event){
event.preventDefault();
render.hideLoadMoreButton();
inputData = event.target.elements['search-text'].value.trim();
 if(!inputData.length){ 
  return render.showEmptyInputError();
 }
 render.clearGallery();
 render.showLoader();
 
 try {
     page = 1;
     const data = await request.getImagesByQuery(inputData, page); 
     if(!data.hits.length){ 
         return render.showError();
        }
        render.renderGallery(data.hits);
        render.showLoadMoreButton();
        
        totalPages = data.totalHits / request.perPage;
        if (page >= totalPages) {
                render.hideLoadMoreButton();
                render.showFinishedCollectionError();
            }
} catch (error) {
    render.showError();     
}finally{
    render.hideLoader();
    event.target.reset();
}
}
 
async function handleClick(){
    render.showLoader();
    render.hideLoadMoreButton();
    button.disabled = true;
    render.hideArrow();
    try {
        page += 1;       
        const newQuery = await request.getImagesByQuery(inputData, page);
          if (page >= totalPages) {
                render.hideLoadMoreButton();
                render.showFinishedCollectionError();
            } else {
            render.showLoadMoreButton();
            button.disabled = false;
        }
        render.showArrow();
        render.renderGallery(newQuery.hits);
        render.hideLoader();
      
        
        const card = document.querySelector(".gallery-item");
        const cardHeight = card.getBoundingClientRect().height;
       window.scrollBy({
          left: 0,
          top: `${cardHeight * 2}`,
          behavior: "smooth",
});        
    } catch (error) {
        render.showError();
    }finally{
        render.hideLoader();
       
    }
}