var m=(c,p,i)=>new Promise((d,u)=>{var a=t=>{try{n(i.next(t))}catch(l){u(l)}},s=t=>{try{n(i.throw(t))}catch(l){u(l)}},n=t=>t.done?d(t.value):Promise.resolve(t.value).then(a,s);n((i=i.apply(c,p)).next())});import{w as h,L as v,aH as y,$ as e,B as x,x as w,l as C}from"./bootstrap-CgpL34Qf.js";import{u as $}from"./vxe-table-J3NlbK9Z.js";import{_ as S}from"./page.vue_vue_type_script_setup_true_lang-BObZ_Ion.js";import{a5 as k,Y as B,ah as I,ai as r,ab as o,ag as T,n as f,ap as g,aq as _}from"../jse/index-index-CBSM48l5.js";import{c as V}from"./copy-BRMoLS5b.js";import"./loading-Dx-bVRTa.js";import"./form-Cm2BdYzg.js";import"./RightOutlined-CipoCalF.js";import"./x-Br57HnM1.js";function b(c){return m(this,null,function*(){const i=h().accessUserId;return v.get(`user/user_id/${i}/invite_records`,{params:c})})}const H=k({__name:"index",setup(c){const p=y(),i=B({columns:[{field:"created_at",title:e("page.invitation.date"),formatter:"formatDateTime",width:200},{field:"from",title:e("page.invitation.from"),width:220},{field:"original_price",title:e("page.invitation.price"),width:150},{field:"currency",title:e("page.order.currency"),width:100},{field:"status",title:e("page.invitation.status"),width:150,slots:{default:"status"}},{field:"amount",title:e("page.invitation.commission"),width:100}],height:"auto",pagerConfig:{},proxyConfig:{ajax:{query:s=>m(this,[s],function*({page:a}){return{items:yield b({page:a.currentPage,page_size:a.pageSize}),total:1e3}})}}}),[d]=$({gridOptions:i});function u(){const a=`${location.origin+location.pathname}#/signup`,s=p.userInfo;if(!s)return;const n=C(),t=`${a}?zone=${n}&inviter=${encodeURIComponent(s.email)}`;V(t)}return(a,s)=>(T(),I(o(S),{description:o(e)("page.invitation.desc"),"auto-content-height":""},{default:r(()=>[f(o(d),null,{"toolbar-actions":r(()=>[f(o(x),{class:"mr-2",type:"primary",onClick:u},{default:r(()=>[g(_(o(e)("page.invitation.copy")),1)]),_:1})]),status:r(()=>[f(o(w),{color:"success"},{default:r(()=>[g(_(o(e)("page.invitation.done")),1)]),_:1})]),_:1})]),_:1},8,["description"]))}});export{H as default};