var b=(_,c,t)=>new Promise((r,o)=>{var m=a=>{try{f(t.next(a))}catch(s){o(s)}},i=a=>{try{f(t.throw(a))}catch(s){o(s)}},f=a=>a.done?r(a.value):Promise.resolve(a.value).then(m,i);f((t=t.apply(_,c)).next())});import{a5 as C,R as g,aW as p,Y as d,J as N,X as B,ah as S,ai as $,ab as w,bw as A,ag as F,n as l,ar as M}from"../jse/index-index-0SEuuMhD.js";import"./bootstrap-SKctUie3.js";import{c as O,D as U}from"./history-data-Cp8fzrnm.js";import{_ as V}from"./not-bind-tip.vue_vue_type_script_setup_true_lang-1kM5Hddw.js";import{u as j}from"./app-Bz8GH1Kr.js";import{_ as E}from"./line-chart.vue_vue_type_script_setup_true_lang-D8VnO4R6.js";import{_ as I}from"./page.vue_vue_type_script_setup_true_lang-Dgq6zLp-.js";import"./use-modal-CeNy_I9O.js";import"./x-Cpey3BCi.js";import"./loading-BVj1NiH4.js";import"./domain-Cy3FhfO2.js";import"./use-echarts-ZPUl1qtN.js";const J={class:"md:pt-5"},aa=C({__name:"rebuffer",setup(_){const c=j(),t=g("week"),r=g([p().startOf("day").subtract(1,"week"),p().startOf("day")]),o=d({xData:[],unit:"%",yName:"Rebuffer"}),m=d({}),i=d({rebuffer:[]}),f=N(()=>t.value==="week"||t.value==="month");function a(){return b(this,arguments,function*(n=r.value[0],e=r.value[1]){var h;o.xData=[],i.rebuffer=[];let u=5;f.value&&(u=1440);const D=((h=c.currentDomain)==null?void 0:h.id)||0,y={start_ts:s(n),end_ts:s(e),gran:u};if(D){const[k,R]=yield A(O(D,y));if(k)return;R.list.forEach(v=>{o.xData.push(p(v.ts*1e3).format("MM-DD")),i.rebuffer.push(Number.parseFloat((v.value*100).toFixed(2)))})}})}function s(n){return n.unix()}function x(n,e){a(n,e)}return B(()=>c.currentDomain,()=>{a()},{deep:!0}),a(),(n,e)=>(F(),S(w(I),null,{default:$(()=>[l(V),M("div",J,[l(w(U),{date:t.value,"onUpdate:date":e[0]||(e[0]=u=>t.value=u),range:r.value,"onUpdate:range":e[1]||(e[1]=u=>r.value=u),day:!1,hour:!1,"show-time":!1,onChange:x},null,8,["date","range"])]),l(E,{data:m,"option-data":o,"second-data":i,class:"mt-6"},null,8,["data","option-data","second-data"])]),_:1}))}});export{aa as default};