var N=Object.defineProperty,x=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var w=(s,t,e)=>t in s?N(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,_=(s,t)=>{for(var e in t||(t={}))I.call(t,e)&&w(s,e,t[e]);if(h)for(var e of h(t))T.call(t,e)&&w(s,e,t[e]);return s},k=(s,t)=>x(s,A(t));var l=(s,t,e)=>new Promise((i,n)=>{var m=a=>{try{r(e.next(a))}catch(o){n(o)}},c=a=>{try{r(e.throw(a))}catch(o){n(o)}},r=a=>a.done?i(a.value):Promise.resolve(a.value).then(m,c);r((e=e.apply(s,t)).next())});import{v as C,$ as u}from"./bootstrap-SKctUie3.js";import{u as V}from"./form-ufAcWega.js";import{c as y}from"./seeder-zpsteWJp.js";import{a5 as B,bw as F,ag as M,ah as O,ai as D,n as P,ab as p}from"../jse/index-index-0SEuuMhD.js";import{u as R}from"./use-modal-CeNy_I9O.js";const E=B({__name:"create-seeder-modal",emits:["success"],setup(s,{emit:t}){const e=t,[i,n]=V({layout:"vertical",handleSubmit:r,schema:[{component:"Input",fieldName:"url",label:"Server URL",rules:"required"},{component:"Input",fieldName:"bandwidth",label:"Bandwidth",suffix:"Mbps"},{component:"Input",fieldName:"accessToken",label:"AccessToken",componentProps:{placeholder:"Optional"}},{component:"Input",fieldName:"remarks",label:"Remarks",componentProps:{placeholder:"Optional"}}],showDefaultActions:!1}),[m,c]=R({onConfirm:()=>l(this,null,function*(){yield n.submitForm()}),onOpenChange(a){if(a){const{values:o}=c.getData();o&&n.setValues(o)}}});function r(a){return l(this,null,function*(){var f,b;if(!(yield n.validate()).valid)return;const d=(f=a.url)==null?void 0:f.trim(),v=(b=a.accessToken)==null?void 0:b.trim(),g=Number(a.bandwidth);if(!d)return;c.setState({loading:!0});const[S]=yield F(y(k(_({},a),{url:d,accessToken:v,bandwidth:g})));c.setState({loading:!1}),!S&&(c.close(),C.success({message:u("common.success"),description:u("common.createItemSuccess")}),e("success"))})}return(a,o)=>(M(),O(p(m),{title:p(u)("page.seeder.createTitle")},{default:D(()=>[P(p(i),{class:"mx-4"})]),_:1},8,["title"]))}});export{E as _};