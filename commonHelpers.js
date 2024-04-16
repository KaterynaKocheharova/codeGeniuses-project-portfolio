import{A as L,S as m,N as p,M as T,K as v,a as g,i as b}from"./assets/vendor-1c985682.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const B=document.querySelector(".social-link"),c=document.querySelector(".modal-menu"),N=document.querySelector(".close-btn-menu"),E=document.getElementById("menu"),A=document.querySelectorAll(".mob-menu-text"),I=document.querySelector(".mob-menu-button-order"),C=document.querySelectorAll(".dropdown-box"),D=document.querySelectorAll(".dropdown-item"),S=document.querySelector(".dropdown-btn-menu"),a=document.querySelector("body");B.addEventListener("click",e=>{e.preventDefault(),c.classList.add("is-open"),a.classList.add("modal-is-open")});N.addEventListener("click",e=>{e.preventDefault(),c.classList.remove("is-open"),a.classList.remove("modal-is-open")});S.addEventListener("click",e=>{e.preventDefault(),E.classList.toggle("show")});A.forEach(e=>{e.addEventListener("click",()=>{c.classList.remove("is-open"),a.classList.remove("modal-is-open")})});I.addEventListener("click",()=>{c.classList.remove("is-open"),a.classList.remove("modal-is-open")});S.addEventListener("click",()=>{C.forEach(e=>{e.classList.add("pointer-auto")})});D.forEach(e=>e.addEventListener("click",()=>{E.classList.remove("show","pointer-auto")}));const u=document.getElementById("heroTitle");function k(){const e=u.getBoundingClientRect(),s=Math.max(document.documentElement.clientHeight,window.innerHeight);e.top>=0&&e.bottom<=s?u.classList.add("show"):u.classList.remove("show")}document.addEventListener("DOMContentLoaded",k);window.addEventListener("scroll",k);const H=Array.from(document.querySelectorAll(".accordion-container"));new L(H,{duration:600,showMultiple:!1,openOnInit:[0]});let z={modules:[p,T,v],slidesPerView:2,lazy:!0,loop:!0,centeredSlides:!1,direction:"horizontal",mousewheel:!0,keyboard:!0,spaceBetween:0,initialSlide:1,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".about-me-swiper-btn-next"}};new m(".about-me-swiper-container",z);let V={modules:[p,v],slidesPerView:"auto",spaceBetween:100,loop:!1,centeredSlides:!0,direction:"horizontal",mousewheel:!0,keyboard:!0,navigation:{nextEl:".custom-swiper-btn-next",prevEl:".custom-swiper-btn-prev"}};new m(".swiper-container",V);const R=document.querySelector(".faq-accordion-container");new L(R);const q="https://portfolio-js.b.goit.study/api";async function j(){const s=q+"/reviews";return(await g.get(s)).data}async function _(e){const n=q+"/requests";return(await g.post(n,e)).data}const y=document.querySelector(".reviews-swiper-wrapper"),$=document.querySelector(".reviews-swiper-container"),K=`<div class="btns-wrapper">
          <div class="custom-swiper-btn-prev">
            <svg class="swiper-btn-prev-icon" width="32" height="32">
              <use href="./img/sprite.svg#icon-slider-arrow-left"></use>
            </svg>
          </div>
          <div class="custom-swiper-btn-next">
            <svg class="swiper-btn-next-icon" width="32" height="32">
              <use href="./img/sprite.svg#icon-slider-arrow-right"></use>
            </svg>
          </div>
        </div>
    </div >`;F();async function F(){try{const e=await j(),s=Y(e);y.insertAdjacentHTML("afterbegin",s),$.insertAdjacentHTML("beforeend",K),W()}catch{b.show({titleLineHeight:"1.2",message:"Sorry. You cannot see reviews right now",messageSize:"50px",messageColor:"#ed3b44",backgroundColor:"black",position:"topRight"}),y.insertAdjacentHTML("afterbegin","No reviews found")}}function Y(e){return e.map(U).join("")}function U({_id:e,author:s,avatar_url:n,review:i}){return`
      <li class="swiper-slide reviews-item" id="${e}">
        <img
          class="reviews-image"
          src="${n}"
          alt="reviewer's avatar"
          width="48"
          height="48"
        />
        <h3 class="section-subtitle reviews-subtitle">${s}</h3>
        <p class="section-text reviews-text">
          ${i}
        </p>
      </li>
  `}function W(){let e={modules:[p,v],spaceBetween:16,loop:!1,direction:"horizontal",mousewheel:!0,keyboard:!0,breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},navigation:{nextEl:".custom-swiper-btn-next",prevEl:".custom-swiper-btn-prev"}};new m(".reviews-swiper-container",e)}const x=document.querySelector(".form-section"),r=document.querySelector(".backdrop"),M=document.querySelector(".close-btn");x.addEventListener("submit",G);async function G(e){e.preventDefault();const s={email:e.currentTarget.elements.email.value,comment:e.currentTarget.elements.comment.value};try{const n=await _(s);J(),x.reset()}catch{b.show({titleLineHeight:"1.2",maxWidth:500,message:"Sorry. You made an error in the input fields or there is an error on the server side",messageSize:"50px",messageColor:"#ed3b44",backgroundColor:"black",position:"topRight"})}}function J(){r.classList.remove("hidden"),document.body.classList.add("modal-is-open"),M.addEventListener("click",l),r.addEventListener("click",O),window.addEventListener("keydown",P)}function l(){r.classList.add("hidden"),document.body.classList.remove("modal-is-open"),M.removeEventListener("click",l),r.removeEventListener("click",O),document.removeEventListener("keydown",P)}function O(e){e.target===r&&l()}function P(e){e.key==="Escape"&&l()}const w=document.querySelector('input[name="email"]'),Q=document.querySelector('input[name="comment"]'),h=document.querySelector(".success-text"),f=document.querySelector(".error-text");function X(){h.classList.remove("visually-hidden"),f.classList.add("visually-hidden")}function Z(){h.classList.add("visually-hidden"),f.classList.remove("visually-hidden")}function ee(){h.classList.add("visually-hidden"),f.classList.add("visually-hidden")}Q.addEventListener("click",()=>{w.validity.valid?X():Z()});w.addEventListener("click",()=>{ee()});w.addEventListener("input",function(){this.validity.valid?(this.classList.remove("error"),this.classList.add("success")):(this.classList.remove("success"),this.classList.add("error"))});
//# sourceMappingURL=commonHelpers.js.map
