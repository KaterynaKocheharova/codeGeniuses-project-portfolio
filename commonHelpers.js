import{S as d,N as c,M as u,K as f}from"./assets/vendor-ed486197.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function p(i,r){i.style.opacity=0,i.style.transform="translateY(100%)",i.style.transition=`opacity ${r/1e3}s, transform ${r/1e3}s`,setTimeout(function(){i.style.opacity=1,i.style.transform="translateY(0)"},100),setTimeout(function(){i.style.transition=""},r)}var s=document.getElementById("heroTitle");function a(){var i=s.getBoundingClientRect(),r=Math.max(document.documentElement.clientHeight,window.innerHeight);i.top>=0&&i.bottom<=r&&p(s,1e3)}document.addEventListener("DOMContentLoaded",a);window.addEventListener("scroll",a);let m={modules:[c,u,f],slidesPerView:"auto",spaceBetween:100,loop:!1,centeredSlides:!0,direction:"horizontal",mousewheel:!0,keyboard:!0,navigation:{nextEl:".custom-swiper-btn-next",prevEl:".custom-swiper-btn-prev"},on:{init:function(){this.navigation.prevEl.setAttribute("data-swiper-button-disabled","true")},slideChange:function(){this.activeIndex===0?this.navigation.prevEl.setAttribute("data-swiper-button-disabled","true"):this.navigation.prevEl.removeAttribute("data-swiper-button-disabled"),this.activeIndex===this.slides.length-1?this.navigation.nextEl.setAttribute("data-swiper-button-disabled","true"):this.navigation.nextEl.removeAttribute("data-swiper-button-disabled")}}};new d(".swiper-container",m);
//# sourceMappingURL=commonHelpers.js.map