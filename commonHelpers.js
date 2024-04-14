import{S as f,N as g,M as y,K as L,A as x,a as A}from"./assets/vendor-339b6f76.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const M=document.querySelector(".social-link"),a=document.querySelector(".modal-menu"),k=document.querySelector(".close-btn"),T=document.querySelector(".dropdown-btn-menu"),I=document.getElementById("menu"),B=document.querySelectorAll(".mob-menu-text"),C=document.querySelector(".mob-menu-button-order");M.addEventListener("click",e=>{e.preventDefault(),a.classList.add("is-open")});k.addEventListener("click",()=>{a.classList.remove("is-open")});T.addEventListener("click",e=>{e.preventDefault(),I.classList.toggle("show")});B.forEach(e=>{e.addEventListener("click",()=>{a.classList.remove("is-open")})});C.addEventListener("click",()=>{a.classList.remove("is-open")});const l=document.getElementById("heroTitle");function E(){const e=l.getBoundingClientRect(),t=Math.max(document.documentElement.clientHeight,window.innerHeight);e.top>=0&&e.bottom<=t?l.classList.add("show"):l.classList.remove("show")}document.addEventListener("DOMContentLoaded",E);window.addEventListener("scroll",E);let N={modules:[g,y,L],slidesPerView:"auto",spaceBetween:100,loop:!1,centeredSlides:!0,direction:"horizontal",mousewheel:!0,keyboard:!0,navigation:{nextEl:".custom-swiper-btn-next",prevEl:".custom-swiper-btn-prev"},on:{init:function(){this.navigation.prevEl.setAttribute("data-swiper-button-disabled","true")},slideChange:function(){this.activeIndex===0?this.navigation.prevEl.setAttribute("data-swiper-button-disabled","true"):this.navigation.prevEl.removeAttribute("data-swiper-button-disabled"),this.activeIndex===this.slides.length-1?this.navigation.nextEl.setAttribute("data-swiper-button-disabled","true"):this.navigation.nextEl.removeAttribute("data-swiper-button-disabled")}}};new f(".swiper-container",N);const O=document.querySelector(".faq-accordion-container");new x(O);const P="https://portfolio-js.b.goit.study/api";async function S(){const t=P+"/reviews";return(await A.get(t)).data}const p=document.querySelector(".reviews-swiper-wrapper");H();async function H(){try{const e=await S(),t=D(e);p.insertAdjacentHTML("afterbegin",t),j()}catch{iziToast.show({title:"@{error}",titleColor:"rgba(250, 250, 250, 0.6)",titleLineHeight:"1.2",message:"Sorry. There is an error with the request",messageColor:"rgba(250, 250, 250, 0.6)",backgroundColor:"rgb(237, 59, 68)"}),p.insertAdjacentHTML("afterbegin","No reviews found")}}function D(e){return e.map($).join("")}function $({_id:e,author:t,avatar_url:o,review:i}){return`
      <li class="swiper-slide reviews-item" id="${e}">
        <img
          class="reviews-image"
          src="${o}"
          alt="reviewer's avatar"
          width="48"
          height="48"
        />
        <h3 class="section-subtitle reviews-subtitle">${t}</h3>
        <p class="section-text reviews-text">
          ${i}
        </p>
      </li>
  `}function j(){let t={modules:[g,y,L],spaceBetween:16,loop:!1,direction:"horizontal",mousewheel:!0,keyboard:!0,breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},navigation:{nextEl:".custom-swiper-btn-next",prevEl:".custom-swiper-btn-prev"},on:{init:function(){this.navigation.prevEl.setAttribute("data-swiper-button-disabled","true")},slideChange:function(){this.activeIndex===0?this.navigation.prevEl.setAttribute("data-swiper-button-disabled","true"):this.navigation.prevEl.removeAttribute("data-swiper-button-disabled"),this.activeIndex===this.slides.length-1?this.navigation.nextEl.setAttribute("data-swiper-button-disabled","true"):this.navigation.nextEl.removeAttribute("data-swiper-button-disabled")}}};new f(".reviews-swiper-container",t)}const w=document.querySelector(".modal-window"),h=document.querySelector(".backdrop"),R=document.querySelector(".close-btn"),V=document.querySelector(".modal-title"),z=document.querySelector(".modal-paragraf");class K{open(){w.classList.remove("hidden"),h.classList.remove("hidden")}close(){w.classList.add("hidden"),h.classList.add("hidden")}render(t,o){V.innerHTML=t,z.innerHTML=o}bindEvents(){R.addEventListener("click",()=>{this.close()}),window.addEventListener("keydown",t=>{t.key==="Escape"&&this.close()})}}const u=new K,d=document.querySelector(".form-section"),r=document.querySelector('input[name="email"]'),W=document.querySelector('input[name="comment"]'),m=document.querySelector(".success-text"),v=document.querySelector(".error-text");function _(){m.classList.remove("visually-hidden"),v.classList.add("visually-hidden")}function F(){m.classList.add("visually-hidden"),v.classList.remove("visually-hidden")}function q(){m.classList.add("visually-hidden"),v.classList.add("visually-hidden")}W.addEventListener("click",()=>{r.validity.valid?_():F()});function b(){r.classList.remove("success"),r.classList.remove("error"),q()}r.addEventListener("click",()=>{q()});r.addEventListener("input",function(){this.validity.valid?(this.classList.remove("error"),this.classList.add("success")):(this.classList.remove("success"),this.classList.add("error"))});d.addEventListener("submit",async e=>{e.preventDefault();const{email:t,comment:o}=e.target.elements;try{const i=await S(t.value,o.value);console.log(i),i&&(u.render(i.title,i.message),u.open(),b(),d.reset())}catch(i){console.error("Error submitting request:",i),b(),d.reset()}});u.bindEvents();
//# sourceMappingURL=commonHelpers.js.map
