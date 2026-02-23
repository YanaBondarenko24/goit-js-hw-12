
import * as render from "./js/render-functions.js";
import * as request from "./js/pixabay-api.js";

const form = document.querySelector(".form");
export const gallery = document.querySelector(".gallery");
export const loader = document.querySelector(".loader");
export const button = document.querySelector(".gallery-btn");

form.addEventListener("submit", handleSubmit);
button.addEventListener("click", handleClick);

let inputData = "";
let page = 1;
let totalPages = 0;
/* const totalPages = response.totalHits / response.hits;
console.log(totalPages); */
async function handleSubmit(event){
event.preventDefault();
render.hideLoadMoreButton();
inputData = event.target.elements['search-text'].value.trim();
console.log(inputData.length);


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
        render.markup(data.hits);
        render.showLoadMoreButton();
        totalPages = data.totalHits / request.perPage;
        if (page >= totalPages) {
                render.hideLoadMoreButton();
                render.showFinishedCollectionError();
            }


} catch (error) {
    console.log(error.message);       
}finally{
    render.hideLoader();
    event.target.reset();
}
}
 console.log(totalPages);
 

async function handleClick(){
    button.disabled = true;
    try {
        page += 1;
        console.log(page);
        
        const newQuery = await request.getImagesByQuery(inputData, page);
        console.log(newQuery.hits);
          if (page >= totalPages) {
                render.hideLoadMoreButton();
                render.showFinishedCollectionError();
            } 
        render.markup(newQuery.hits);
        button.disabled = false;
        const card = document.querySelector(".gallery-item");
        const cardHeight = card.getBoundingClientRect().height;
       window.scrollBy({
          left: 0,
          top: `${cardHeight * 2}`,
          behavior: "smooth",
});        
    } catch (error) {
        alert (error.message)
    }

}