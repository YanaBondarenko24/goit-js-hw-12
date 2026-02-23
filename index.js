import{S as w,i as g,a as S}from"./assets/vendor-CctE18Lr.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();let x=new w(".gallery a");function C(t){return t.map(({webformatURL:o,largeImageURL:a,tags:c,likes:e,views:r,comments:i,downloards:L})=>`<li class="gallery-item">
     <a class="gallery-link" href="${a}">
     <img class="gallery-img" src="${o}" alt="${c}" width="360" height="200"/>
     </a>
     <ul class="gallery-info">
     <li class="gallery-info-item">
     <h3 class="gallery-info-title">Likes</h3>
     <p class="gallery-info-text">${e}</p>
     </li>
     <li class="gallery-info-item">
     <h3 class="gallery-info-title">Views</h3>
     <p class="gallery-info-text">${r}</p>
     </li>
     <li class="gallery-info-item">
     <h3 class="gallery-info-title">Comments</h3>
     <p class="gallery-info-text">${i}</p>
     </li>
     <li class="gallery-info-item">
     <h3 class="gallery-info-title">Downloards</h3>
     <p class="gallery-info-text">${L}</p>
     </li>
     </ul>
    </li>`).join("")}function d(t){p.insertAdjacentHTML("beforeend",C(t)),x.refresh()}function P(){p.innerHTML=""}function $(){b.classList.remove("hide")}function q(){b.classList.add("hide")}function v(){n.classList.remove("hide")}function u(){n.classList.add("hide")}function E(){g.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",position:"topRight",icon:"material-icons"})}function O(){g.error({message:"Please enter the correct name!",messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",position:"topRight",icon:"material-icons"})}function h(){g.error({message:"We're sorry, but you've reached the end of search results",messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",position:"topRight",icon:"material-icons"})}const k="54675250-921b736f026c47058d05b606e",z="https://pixabay.com/api/",m=15,y=async(t,o=1)=>(await S.get(z,{params:{key:k,q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:m}})).data,B=document.querySelector(".form"),p=document.querySelector(".gallery"),b=document.querySelector(".loader"),n=document.querySelector(".gallery-btn");B.addEventListener("submit",I);n.addEventListener("click",M);let l="",s=1,f=0;async function I(t){if(t.preventDefault(),u(),l=t.target.elements["search-text"].value.trim(),console.log(l.length),!l.length)return O();P(),$();try{s=1;const o=await y(l,s);if(!o.hits.length)return E();d(o.hits),v(),f=o.totalHits/m,s>=f&&(u(),h())}catch(o){console.log(o.message)}finally{q(),t.target.reset()}}console.log(f);async function M(){n.disabled=!0;try{s+=1,console.log(s);const t=await y(l,s);console.log(t.hits),s>=f&&(u(),h()),d(t.hits),n.disabled=!1;const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:`${a*2}`,behavior:"smooth"})}catch(t){alert(t.message)}}
//# sourceMappingURL=index.js.map
