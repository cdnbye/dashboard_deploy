var y=(M,v,s)=>new Promise((_,c)=>{var l=t=>{try{u(s.next(t))}catch(i){c(i)}},p=t=>{try{u(s.throw(t))}catch(i){c(i)}},u=t=>t.done?_(t.value):Promise.resolve(t.value).then(l,p);u((s=s.apply(M,v)).next())});import{s as b}from"./vue-json-excel.esm-Cknc39kc.js";import{$ as B,B as E}from"./bootstrap-QC5HPXIW.js";import{a5 as $,R as h,aW as g,Y as k,af as C,ak as R,ah as x,ab as d,bw as A,w as f,au as H,al as S}from"../jse/index-index-C5kN0FgG.js";import{f as U,D as j}from"./history-data-DR3x4v2x.js";import{_ as F}from"./not-bind-tip.vue_vue_type_script_setup_true_lang-B53kzjhJ.js";import{_ as G}from"./line-chart.vue_vue_type_script_setup_true_lang-Dvo-Hib4.js";import{_ as O}from"./page.vue_vue_type_script_setup_true_lang-C2EvkboD.js";import"./app-DUrdUZ6y.js";import"./domain-DYNLDaZf.js";import"./use-modal-BWnJd4PN.js";import"./x-t2EEVmmI.js";import"./loading-CjfJb0X9.js";import"./use-echarts-efeZ2R18.js";const P={class:"md:pt-5"},ea=$({__name:"online-global",setup(M){const v=h("hour"),s=h([g().subtract(1,"hour"),g()]),_=h(),c=h(""),l=k({xData:[],yName:"online"}),p=k({}),u=k({});function t(){return y(this,arguments,function*(e=s.value[0],a=s.value[1]){const n={start_ts:i(e),end_ts:i(a)},[m,D]=yield A(U(0,n));if(m)return;const r=D.list;_.value=r,l.xData=[],p.online=[],r.forEach(o=>{l.xData.push(g(o.ts*1e3).format("MM-DD HH:mm")),p.online.push(o.value)})})}function i(e){return e.unix()}function N(e,a){t(e,a)}function V(){return y(this,null,function*(){const e=new Map;_.value.forEach(r=>{const o=g(r.ts*1e3).format("MM-DD"),w=e.get(o);(!w||w<r.value)&&e.set(o,r.value)});const a=[];let n=0,m=0;for(const[r,o]of e.entries())a.push({Date:r,Value:o}),n+=o,o!==0&&m++;let D=0;return m>0&&(D=Math.round(n/m)),a.push({Date:"Avg",Value:D}),c.value="Online Viewers Statistics.csv",a})}return t(),(e,a)=>(C(),R(d(O),{description:d(B)("page.history.data.descGlobal")},{extra:x(()=>[f(d(E),{class:"mt-1",type:"primary"},{default:x(()=>[f(d(b),{fetch:V,name:c.value,type:"csv"},{default:x(()=>a[2]||(a[2]=[H(" Export Excel ")])),_:1},8,["name"])]),_:1})]),default:x(()=>[f(F),S("div",P,[f(d(j),{date:v.value,"onUpdate:date":a[0]||(a[0]=n=>v.value=n),range:s.value,"onUpdate:range":a[1]||(a[1]=n=>s.value=n),month:!1,span:7,onChange:N},null,8,["date","range"])]),f(G,{data:p,"option-data":l,"second-data":u,class:"mt-6"},null,8,["data","option-data","second-data"])]),_:1},8,["description"]))}});export{ea as default};
