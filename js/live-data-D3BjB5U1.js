var d=(s,c,e)=>new Promise((r,a)=>{var m=t=>{try{i(e.next(t))}catch(u){a(u)}},f=t=>{try{i(e.throw(t))}catch(u){a(u)}},i=t=>t.done?r(t.value):Promise.resolve(t.value).then(m,f);i((e=e.apply(s,c)).next())});import{w as n,L as o}from"./bootstrap-CgpL34Qf.js";function _(s){return d(this,null,function*(){const e=n().accessUserId;return o.get(`user/user_id/${e}/channel`,{params:s})})}function $(s,c){return d(this,null,function*(){const r=n().accessUserId;return o.get(`user/user_id/${r}/domain/domain_id/${s}/num`,{params:c})})}function g(s){const e=n().accessUserId;return o.get(`global/user/user_id/${e}/domain/domain_id/${s}`)}function h(s){const e=n().accessUserId;return o.get(`user/user_id/${e}/domain/domain_id/${s}`)}function p(s,c){const a=`global/user/user_id/${n().accessUserId}/domain/domain_id/${s}/num`;return o.get(a,{params:c})}function U(s,c){const a=`user/user_id/${n().accessUserId}/domain/domain_id/${s}/num`;return o.get(a,{params:c})}export{g as a,h as b,p as c,U as d,_ as e,$ as f};