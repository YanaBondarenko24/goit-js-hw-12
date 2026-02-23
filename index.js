import{S as C,i as h,a as P}from"./assets/vendor-CctE18Lr.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();let $=new C(".gallery a");function q(t){return t.map(({webformatURL:r,largeImageURL:i,tags:n,likes:e,views:o,comments:a,downloads:x})=>`<li class="gallery-item">
     <a class="gallery-link" href="${i}">
     <img class="gallery-img" src="${r}" alt="${n}" width="360" height="200"/>
     </a>
     <ul class="gallery-info">
     <li class="gallery-info-item">
     <h3 class="gallery-info-title">Likes</h3>
     <p class="gallery-info-text">${e}</p>
     </li>
     <li class="gallery-info-item">
     <h3 class="gallery-info-title">Views</h3>
     <p class="gallery-info-text">${o}</p>
     </li>
     <li class="gallery-info-item">
     <h3 class="gallery-info-title">Comments</h3>
     <p class="gallery-info-text">${a}</p>
     </li>
     <li class="gallery-info-item">
     <h3 class="gallery-info-title">Downloads</h3>
     <p class="gallery-info-text">${x}</p>
     </li>
     </ul>
    </li>`).join("")}function m(t){w.insertAdjacentHTML("beforeend",q(t)),$.refresh()}function v(){w.innerHTML=""}function y(){S.classList.remove("hide")}function f(){S.classList.add("hide")}function E(){l.classList.remove("hide")}function u(){l.classList.add("hide")}function d(){h.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",position:"topRight",icon:"material-icons"})}function O(){h.error({message:"Please enter the correct name!",messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",position:"topRight",icon:"material-icons"})}function p(){h.error({message:"We're sorry, but you've reached the end of search results",messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",position:"topRight",icon:"material-icons"})}const k="54675250-921b736f026c47058d05b606e",z="https://pixabay.com/api/",b=15,L=async(t,r=1)=>(await P.get(z,{params:{key:k,q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:b}})).data,B=document.querySelector(".form"),w=document.querySelector(".gallery"),S=document.querySelector(".loader"),l=document.querySelector(".gallery-btn");B.addEventListener("submit",I);l.addEventListener("click",M);let c="",s=1,g=0;async function I(t){if(t.preventDefault(),u(),c=t.target.elements["search-text"].value.trim(),!c.length)return O();v(),y();try{s=1;const r=await L(c,s);if(!r.hits.length)return d();m(r.hits),E(),g=r.totalHits/b,s>=g&&(u(),p())}catch{d()}finally{f(),t.target.reset()}}async function M(){y(),l.disabled=!0;try{s+=1;const t=await L(c,s);s>=g&&(u(),p()),m(t.hits),f(),l.disabled=!1;const i=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:`${i*2}`,behavior:"smooth"})}catch{d()}finally{f()}}
//# sourceMappingURL=index.js.map
