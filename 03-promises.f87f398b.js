!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("h6c0i"),r=document.querySelector(".form"),u={timeout:5e3};function a(e,t){return new Promise((function(n,o){var i=Math.random()>.3;setTimeout((function(){i?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}r.addEventListener("submit",(function(e){document.querySelector("button[type=submit]").disabled=!0,e.preventDefault();var t=e.currentTarget.elements,n=t.delay,o=t.step,r=t.amount,l=0;setTimeout((function(){document.querySelector("button[type=submit]").disabled=!1}),u.timeout+Number(n.value)+Number(o.value)*Number(r.value)+1);for(var c=1;c<=r.value;c++)l=Number(n.value)+Number(o.value)*c,a(c,l).then((function(e){var t=e.position,n=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"),u)})).catch((function(e){var t=e.position,n=e.delay;i.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"),u)}))}))}();
//# sourceMappingURL=03-promises.f87f398b.js.map