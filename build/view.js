document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".simple-popup").forEach((e=>{(e=>{let o={},t=!1,p="";function s(){t||(o.popup.classList.add("simple-popup--show"),document.body.classList.add("simple-popup--opened"),t=!0,"true"===o.autoClosePopup&&setTimeout((()=>{l()}),1e3*o.autoClosePopupInterval),clearInterval(p),o.showPopupOnce?document.cookie="popupDisplayed=true":document.cookie="popupDisplayed=; Max-Age=0;")}function l(){o.popup.classList.remove("simple-popup--show"),o.popup.classList.add("simple-popup--hide"),document.body.classList.remove("simple-popup--opened"),document.body.classList.add("simple-popup--closed")}function i(e){e.target===o.popup&&(o.popup.classList.remove("simple-popup--show"),o.popup.classList.add("simple-popup--hide"),document.body.classList.remove("simple-popup--opened"),document.body.classList.add("simple-popup--closed"))}const u=()=>{if("percentage"===o.scrollBehavior)window.scrollY>=o.scrollTriggerPosition&&(s(),document.removeEventListener("scroll",u));else{const e=o.scrollByElement;if(e.startsWith("#")){const o=document.getElementById(e.slice(1));o&&window.scrollY>=o.offsetTop&&s()}else if(e.startsWith(".")){const o=document.querySelectorAll(e);if(o.length>0){const e=o[0];window.scrollY>=e.offsetTop&&s()}}}},n=()=>{o.closeButton.addEventListener("click",(()=>{l()})),"scroll-behavior"===o.triggerBehavior?o.hasPopupBeenDisplayed||document.addEventListener("scroll",u):"time-interval"===o.triggerBehavior?o.hasPopupBeenDisplayed||(0===o.popupDelay?s():p=setInterval(s,1e3*o.popupDelay)):(()=>{const e=o.clickByElement,p=e.startsWith("#"),l=e.startsWith(".");p?document.getElementById(e.slice(1)).addEventListener("click",(()=>{s(),t=!1})):l&&document.querySelectorAll(e).forEach((e=>{e.addEventListener("click",(()=>{s(),t=!1}))}))})(),window.addEventListener("keydown",(function(e){27==e.keyCode&&l()})),window.addEventListener("click",i),"closeBtnHidden"===o.closeBtnPosition?o.closeButton.classList.add("closeBtnHidden"):"closeBtnInside"===o.closeBtnPosition?o.closeButton.classList.add("closeBtnInside"):o.closeButton.classList.add("closeBtnOutside")};return{init:()=>{o.closeButton=e.querySelector(".simple-popup--close"),o.popup=e,o.popupDelay=parseInt(o.popup.getAttribute("data-popup-delay")),o.scrollByPercentage=parseInt(o.popup.getAttribute("data-scroll-by-percentage")),o.scrollTriggerPosition=o.scrollByPercentage/100*document.body.scrollHeight,o.scrollBehavior=o.popup.getAttribute("data-scroll-behavior"),o.scrollByElement=o.popup.getAttribute("data-scroll-by-element"),o.popupWidth=o.popup.getAttribute("data-popup-width"),o.triggerBehavior=o.popup.getAttribute("data-trigger-behavior"),o.clickByElement=o.popup.getAttribute("data-click-by-element"),o.closeBtnPosition=o.popup.getAttribute("data-close-icon-Position"),o.showPopupOnce="true"===o.popup.getAttribute("data-show-popup-once"),o.popupCookie=document.cookie.includes("popupDisplayed=true"),o.hasPopupBeenDisplayed=o.showPopupOnce&&o.popupCookie,o.autoClosePopup=o.popup.getAttribute("data-auto-close-popup"),o.autoClosePopupInterval=o.popup.getAttribute("data-auto-close-popup-interval"),o.userLoggedInOut=o.popup.getAttribute("data-user-logged-in-out"),o.selectedUserRoles=o.popup.getAttribute("data-selected-user-roles"),"logged-in"===o.userLoggedInOut?cmSimplePopup.userLoggedIn&&n():"logged-out"===o.userLoggedInOut?cmSimplePopup.userLoggedIn||n():"specific"===o.userLoggedInOut?cmSimplePopup.userLoggedIn&&(o.selectedUserRoles.length<=2||cmSimplePopup.current_roles.some((e=>o.selectedUserRoles.includes(e))))&&n():n()}}})(e).init()}))}));