!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]");a.disabled=!0,e.addEventListener("click",(function(){var d=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3);e.disabled=!0,a.disabled=!1,a.addEventListener("click",(function(){e.disabled=!1,a.disabled=!0,clearInterval(d)}))}))}();
//# sourceMappingURL=01-color-switcher.9c7c6a1a.js.map
