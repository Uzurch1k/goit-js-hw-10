import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as m,i as h}from"./assets/vendor-651d7991.js";const o=document.querySelector("#datetime-picker"),t=document.querySelector("[data-start]"),b=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),C=document.querySelector("[data-minutes]"),k=document.querySelector("[data-seconds]");m(o,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){g(e[0])}});t.disabled=!0;r(t);function g(e){e<=Date.now()?(h.error({title:"Error",message:"Please choose a date in the future",backgroundColor:"#EF4040",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",position:"topRight",timeout:3e3,progressBar:!1}),t.disabled=!0,r(t)):(t.disabled=!1,d(t))}t.addEventListener("click",S);function S(){t.disabled=!0,r(t),o.disabled=!0,r(o);const e=o.value,u=setInterval(()=>{const s=new Date(e)-Date.now(),{days:i,hours:a,minutes:c,seconds:l}=D(s);b.textContent=n(i),p.textContent=n(a),C.textContent=n(c),k.textContent=n(l),s<1e3&&(clearInterval(u),o.disabled=!1,d(o))},1e3)}function D(e){const a=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:c,minutes:l,seconds:y}}function n(e){return`${e}`.padStart(2,"0")}function r(e){switch(e){case t:t.style.backgroundColor="#cfcfcf",t.style.color="#989898",t.style.cursor="auto";break;case o:o.style.backgroundColor="#FAFAFA",o.style.color="#808080",o.style.cursor="auto",o.style.borderColor="#808080";break}}function d(e){switch(e){case t:t.style.backgroundColor=null,t.style.color=null,t.style.cursor="pointer";break;case o:o.style.backgroundColor=null,o.style.color=null,o.style.cursor="pointer",o.style.borderColor=null;break}}
//# sourceMappingURL=commonHelpers.js.map