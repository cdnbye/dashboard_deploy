import{a as f,$ as t,B as i}from"./bootstrap-CgpL34Qf.js";import{u as h}from"./app-DvGgY6y1.js";import{a5 as _,a6 as g,a7 as b,ag as y,ah as B,ai as o,n as u,ap as s,aq as p,ab as a}from"../jse/index-index-CBSM48l5.js";import{u as k}from"./use-modal-Dp_oiybZ.js";const N=_({__name:"not-bind-tip",setup(x){const[d,e]=k(),n=f(),c=h();function m(){n.push("/app/app"),e.close()}function l(){n.push("/user/domain"),e.close()}let r;return g(()=>{r=setTimeout(()=>{c.domains.length<=1&&e.open()},1e4)}),b(()=>{clearTimeout(r)}),(A,C)=>(y(),B(a(d),{title:"Tip"},{footer:o(()=>[u(a(i),{type:"primary",onClick:m},{default:o(()=>[s(p(a(t)("page.dashboard.goApp")),1)]),_:1}),u(a(i),{class:"mr-auto",type:"primary",onClick:l},{default:o(()=>[s(p(a(t)("page.dashboard.goBind")),1)]),_:1})]),default:o(()=>[s(p(a(t)("page.dashboard.tip"))+" ",1)]),_:1}))}});export{N as _};