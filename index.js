import{S as P,i as h,a as q}from"./assets/vendor-CctE18Lr.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();let $=new P(".gallery a");const m=document.querySelector(".gallery"),y=document.querySelector(".loader"),p=document.querySelector(".nav-btn");function E(e){return e.map(({webformatURL:r,largeImageURL:i,tags:n,likes:t,views:o,comments:l,downloads:C})=>`<li class="gallery-item">
     <a class="gallery-link" href="${i}">
     <img class="gallery-img" src="${r}" alt="${n}" width="360" height="200"/>
     </a>
     <ul class="gallery-info">
     <li class="gallery-info-item">
     <h3 class="gallery-info-title">Likes</h3>
     <p class="gallery-info-text">${t}</p>
     </li>
     <li class="gallery-info-item">
     <h3 class="gallery-info-title">Views</h3>
     <p class="gallery-info-text">${o}</p>
     </li>
     <li class="gallery-info-item">
     <h3 class="gallery-info-title">Comments</h3>
     <p class="gallery-info-text">${l}</p>
     </li>
     <li class="gallery-info-item">
     <h3 class="gallery-info-title">Downloads</h3>
     <p class="gallery-info-text">${C}</p>
     </li>
     </ul>
    </li>`).join("")}function b(e){m.insertAdjacentHTML("beforeend",E(e)),$.refresh()}function A(){m.innerHTML=""}function L(){y.classList.remove("hide")}function u(){y.classList.add("hide")}function w(e){e.classList.remove("hide")}function f(e){e.classList.add("hide")}function O(){p.classList.remove("hide")}function z(){p.classList.add("hide")}function d(){h.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",position:"topRight",icon:"material-icons"})}function B(){h.error({message:"Please enter the correct name!",messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",position:"topRight",icon:"material-icons"})}function S(){h.error({message:"We're sorry, but you've reached the end of search results",messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",position:"topRight",icon:"material-icons"})}const I="54675250-921b736f026c47058d05b606e",M="https://pixabay.com/api/",x=15,v=async(e,r=1)=>(await q.get(M,{params:{key:I,q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:x}})).data,k=document.querySelector(".form"),s=document.querySelector(".gallery-btn");k.addEventListener("submit",H);s.addEventListener("click",R);let c="",a=1,g=0;async function H(e){if(e.preventDefault(),f(s),c=e.target.elements["search-text"].value.trim(),!c.length)return B();A(),L();try{a=1;const r=await v(c,a);if(!r.hits.length)return d();b(r.hits),w(s),g=r.totalHits/x,a>=g&&(f(s),S())}catch{d()}finally{u(),e.target.reset()}}async function R(){L(),f(s),s.disabled=!0,z();try{a+=1;const e=await v(c,a);a>=g?(f(s),S()):(w(s),s.disabled=!1),O(),b(e.hits),u();const i=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:`${i*2}`,behavior:"smooth"})}catch{d()}finally{u()}}
//# sourceMappingURL=index.js.map
