import{p as t}from"./client.a5fdd5e9.js";function n(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function a(t){const n=t-1;return n*n*n+1}function o(t,{delay:a=0,duration:o=400,easing:e=n,amount:i=5,opacity:r=0}={}){const s=getComputedStyle(t),c=+s.opacity,u="none"===s.filter?"":s.filter,p=c*(1-r);return{delay:a,duration:o,easing:e,css:(t,n)=>`opacity: ${c-p*n}; filter: ${u} blur(${n*i}px);`}}function e(n,{delay:a=0,duration:o=400,easing:e=t}={}){const i=+getComputedStyle(n).opacity;return{delay:a,duration:o,easing:e,css:t=>"opacity: "+t*i}}function i(t,{delay:n=0,duration:o=400,easing:e=a,x:i=0,y:r=0,opacity:s=0}={}){const c=getComputedStyle(t),u=+c.opacity,p="none"===c.transform?"":c.transform,y=u*(1-s);return{delay:n,duration:o,easing:e,css:(t,n)=>`\n\t\t\ttransform: ${p} translate(${(1-t)*i}px, ${(1-t)*r}px);\n\t\t\topacity: ${u-y*n}`}}export{e as a,o as b,i as f};
