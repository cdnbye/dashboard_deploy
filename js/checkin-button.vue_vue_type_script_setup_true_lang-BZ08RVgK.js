import{a as _,bg as g,$ as e,B as l,M as o,bh as C}from"./bootstrap-SKctUie3.js";import{a as v}from"./app-CCjOiP5P.js";import{u as b}from"./app-Bz8GH1Kr.js";import"./index-D1GUi0xR.js";import{a5 as x,R as m,a6 as y,ag as u,am as B,ah as T,ai as p,ap as d,aq as h,ab as t,al as I,n as S}from"../jse/index-index-0SEuuMhD.js";const w={class:"mt-2 flex flex-wrap gap-2"},$=x({__name:"checkin-button",setup(D){const s=m(!0),n=m(!1),c=_(),i=b();function k(){c.push("/user/commission")}function f(){var r;((r=i.currentDomain)==null?void 0:r.id)===void 0?o.info({title:e("page.dashboard.tip"),okText:e("common.ok"),onOk(){c.push("/user/domain")}}):(n.value=!0,v({user_id:i.currentDomain.uid}).then(a=>{a.repeat?o.info({title:e("page.dashboard.haveChecked"),okText:e("common.ok")}):o.success({title:e("page.dashboard.checkinSuccess"),okText:e("common.ok")}),n.value=!1,C(1,3600*12*1e3),s.value=!1}).catch(a=>{o.error({title:e("page.dashboard.checkinFail"),okText:e("common.ok")}),n.value=!1,console.error(a)}))}return y(()=>{g()&&(s.value=!1)}),(r,a)=>(u(),B("div",w,[s.value?(u(),T(t(l),{key:0,class:"mr-2",type:"primary",onClick:f},{default:p(()=>[d(h(t(e)("page.dashboard.checkin")),1)]),_:1})):I("",!0),S(t(l),{class:"md:ml-2",type:"primary",onClick:k},{default:p(()=>[d(h(t(e)("page.dashboard.invite")),1)]),_:1})]))}});export{$ as _};
