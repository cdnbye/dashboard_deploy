var d=(e,c,s)=>new Promise((u,i)=>{var m=o=>{try{n(s.next(o))}catch(a){i(a)}},S=o=>{try{n(s.throw(o))}catch(a){i(a)}},n=o=>o.done?u(o.value):Promise.resolve(o.value).then(m,S);n((s=s.apply(e,c)).next())});import{q as t,H as r}from"./bootstrap-SKctUie3.js";function f(e){return d(this,null,function*(){const s=t().accessUserId;return r.get(`user/user_id/${s}/domain`,{params:e})})}function $(e){const s=t().accessUserId;return r.post(`user/user_id/${s}/domain`,e)}function A(e){const s=t().accessUserId;return r.delete(`user/user_id/${s}/domain/domain_id/${e}`)}function U(e){const s=t().accessUserId;return r.post(`user/user_id/${s}/shadow_domain`,e)}function h(){const c=t().accessUserId;return r.get(`user/user_id/${c}/shadow_domain`)}function D(e){const s=t().accessUserId;return r.post(`user/user_id/${s}/domain/domain_id/${e}`)}export{U as a,$ as b,D as c,A as d,f,h as s};