import{a5 as m,R as t,X as p,ag as s,am as o,ar as r,F as f,au as v,aq as b,al as g,b3 as _,ab as x,b4 as y}from"../jse/index-index-0SEuuMhD.js";import{a5 as k}from"./bootstrap-SKctUie3.js";const T={class:"dot relative inline-block size-9 text-3xl"},h={key:0,class:"mt-4 text-xs"},z=m({name:"VbenLoading",__name:"loading",props:{class:{},minLoadingTime:{default:50},spinning:{type:Boolean},text:{default:""}},setup(c){const n=c,e=t(!1),i=t(!0),l=t();p(()=>n.spinning,a=>{if(!a){e.value=!1,clearTimeout(l.value);return}l.value=setTimeout(()=>{e.value=!0,e.value&&(i.value=!0)},n.minLoadingTime)},{immediate:!0});function u(){e.value||(i.value=!1)}return(a,L)=>(s(),o("div",{class:_(x(y)("z-100 dark:bg-overlay bg-overlay-content pointer-events-none absolute left-0 top-0 flex size-full flex-col items-center justify-center transition-all duration-500",{"invisible opacity-0":!e.value},n.class)),onTransitionend:u},[r("span",T,[(s(),o(f,null,v(4,d=>r("i",{key:d,class:"bg-primary absolute block size-4 origin-[50%_50%] scale-75 rounded-full opacity-30"})),64))]),a.text?(s(),o("div",h,b(a.text),1)):g("",!0)],34))}}),C=k(z,[["__scopeId","data-v-a3d8beca"]]);export{C as V};
