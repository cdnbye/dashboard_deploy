var h=(y,f,p)=>new Promise((r,b)=>{var m=a=>{try{i(p.next(a))}catch(e){b(e)}},u=a=>{try{i(p.throw(a))}catch(e){b(e)}},i=a=>a.done?r(a.value):Promise.resolve(a.value).then(m,u);i((p=p.apply(y,f)).next())});import{$ as o,t as _,bc as x,v as A}from"./bootstrap-SKctUie3.js";import{u as L}from"./vxe-table-CfGRJCLB.js";import{f as M}from"./domain-Cy3FhfO2.js";import{a as S}from"./p2p-DsAJDZBq.js";import{_ as V}from"./page.vue_vue_type_script_setup_true_lang-Dgq6zLp-.js";import{a5 as D,Y as N,ah as d,ai as c,ab as t,ag as n,n as P,ap as g,aq as k,al as U,bw as T}from"../jse/index-index-0SEuuMhD.js";import"./loading-BVj1NiH4.js";import"./form-ufAcWega.js";import"./RightOutlined-BmsLIaO2.js";import"./x-Cpey3BCi.js";const v="*Apply To All*",H=D({__name:"p2p-switch",setup(y){const f=N({checkboxConfig:{highlight:!0,labelField:"name"},columns:[{field:"domain",title:o("page.p2p.name"),minWidth:250},{field:"status",title:o("page.p2p.status"),slots:{default:"status"},width:100},{field:"operation",title:o("common.operation"),slots:{default:"operation"},width:100},{field:"switchMobile",title:o("page.p2p.switchMobile"),slots:{default:"switchMobile"},width:150}],height:"auto",keepSource:!0,pagerConfig:{},proxyConfig:{ajax:{query:a=>h(this,[a],function*({page:i}){var s,l,C;let e=yield M({page:i.currentPage,page_size:i.pageSize,isvalid:1});return e=e.filter(w=>!w.blocked),e.length>1&&e.unshift({uid:(s=e==null?void 0:e[0])==null?void 0:s.uid,domain:v,id:0,blocked:!1,disable_p2p:(l=e==null?void 0:e[0])==null?void 0:l.disable_p2p,disable_mobile:(C=e==null?void 0:e[0])==null?void 0:C.disable_mobile}),{items:e,total:1e3}})}}}),[p,r]=L({gridOptions:f});function b(i,a){const e={disable:!a,disable_mobile:i.disable_mobile};u(i.id,e)}function m(i,a){const e={disable:i.disable_p2p,disable_mobile:!a};u(i.id,e)}function u(i,a){return h(this,null,function*(){r.setLoading(!0);const[e]=yield T(S(i,a));if(r.setLoading(!1),e){A.error({description:o("page.p2p.configFail"),message:o("common.error")});return}A.success({description:o("page.p2p.configSuccess"),message:o("common.success")});const s=r.grid.getData();Number(i)===0?s.forEach(l=>{l.disable_p2p=a.disable,l.disable_mobile=a.disable_mobile}):s.forEach(l=>{l.id===i&&(l.disable_p2p=a.disable,l.disable_mobile=a.disable_mobile)})})}return(i,a)=>(n(),d(t(V),{"auto-content-height":""},{default:c(()=>[P(t(p),null,{status:c(({row:e})=>[e.blocked?(n(),d(t(_),{key:0,color:"error"},{default:c(()=>[g(k(t(o)("common.illegal")),1)]),_:1})):e.disable_p2p?(n(),d(t(_),{key:1,color:"error"},{default:c(()=>[g(k(t(o)("page.p2p.close")),1)]),_:1})):(n(),d(t(_),{key:2,color:"success"},{default:c(()=>[g(k(t(o)("page.p2p.open")),1)]),_:1}))]),operation:c(({row:e})=>[e.blocked?U("",!0):(n(),d(t(x),{key:0,checked:!e.disable_p2p,"onUpdate:checked":s=>b(e,s)},null,8,["checked","onUpdate:checked"]))]),switchMobile:c(({row:e})=>[e.blocked?U("",!0):(n(),d(t(x),{key:0,checked:!e.disable_mobile,"onUpdate:checked":s=>m(e,s)},null,8,["checked","onUpdate:checked"]))]),_:1})]),_:1}))}});export{H as default};