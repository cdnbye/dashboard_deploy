import{$ as t}from"./bootstrap-CgpL34Qf.js";import{a5 as P,R as f,J as w,X as $,ag as i,am as D,n as h,ab as a,ah as n,al as o,ai as C,ar as v,aq as d,aW as N}from"../jse/index-index-CBSM48l5.js";import{u as R}from"./app-DvGgY6y1.js";import{_ as s}from"./live-card.vue_vue_type_script_setup_true_lang-2CrKIp02.js";import{f as l}from"./format-DM5sW9ek.js";const K={class:"xl: grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"},M={class:"text-primary absolute right-3 top-1 text-xs"},q={class:"text-foreground/80 absolute bottom-1 right-5 text-xs"},A=P({__name:"live-time",props:{global:{type:Boolean},isSuperPeer:{type:Boolean,default:!1},statis:{default:{whiteList:!1,type:{product_type:0,time:""},online:0,traffic_p2p:{num:0,unit:"KB"},traffic_share:{num:0,unit:"KB"},traffic_http:{num:0,unit:"KB"},frequency_day:0,num_max:0,flow:{remain:0,daily_remain:0,totalRemain:0,free:{num:0,unit:"KB"}},clock:new Date,traffic_p2p_day:0,traffic_http_day:0}}},setup(k){const u=k,m=f(0),c=f(0),y=f(0),g=f(0),b=f(0),T=R(),_=w(()=>u.statis.flow.remain>0||u.statis.type.product_type>0),B=w(()=>{const{statis:e}=u;let r=e.traffic_p2p_day-m.value;r<0&&(r=0);let p=e.traffic_http_day-c.value;return p<0&&(p=0),m.value=e.traffic_p2p_day,c.value=e.traffic_http_day,r===0?0:p===0?100:(y.value=Number((r/(r+p)*100).toFixed(2)),y.value)});function S(){if(u.statis.type.product_type===0)return"";{const e=u.statis.type.time?N(u.statis.type.time).format("YY-MM-DD 00:00"):"";return`${t("page.package.monthly")}${e}`}}return $(()=>u.statis,e=>{const r=e.flow.utc,p=new Date(e.clock);g.value=60-p.getUTCMinutes(),b.value=(23-(p.getUTCHours()+r)%24)%24},{deep:!0}),$(()=>T.currentDomain,()=>{m.value=0,c.value=0}),(e,r)=>(i(),D("div",K,[h(s,{desc:e.isSuperPeer&&!e.global?a(t)("page.dashboard.onlineSuper"):a(t)("page.dashboard.online"),num:e.statis.online,tip:a(t)("page.dashboard.onlinesTip")},null,8,["desc","num","tip"]),e.isSuperPeer&&!e.global?(i(),n(s,{key:0,decimals:2,desc:`${a(t)("page.dashboard.shareTraffic")} (${e.statis.traffic_share.unit})`,num:e.statis.traffic_share.num},null,8,["desc","num"])):o("",!0),!e.isSuperPeer||e.global?(i(),n(s,{key:1,decimals:2,desc:`${a(t)("page.dashboard.p2pTraffic")} (${e.statis.traffic_p2p.unit})`,num:e.statis.traffic_p2p.num,tip:a(t)("page.dashboard.p2pTip")},null,8,["desc","num","tip"])):o("",!0),!e.isSuperPeer||e.global?(i(),n(s,{key:2,decimals:2,desc:`${a(t)("page.dashboard.httpTraffic")} (${e.statis.traffic_http.unit})`,num:e.statis.traffic_http.num,tip:a(t)("page.dashboard.httpTip")},null,8,["desc","num","tip"])):o("",!0),!e.isSuperPeer||e.global?(i(),n(s,{key:3,decimals:2,desc:`${a(t)("page.dashboard.p2pEfficiency")} (%)`,num:B.value,tip:a(t)("page.dashboard.efficiencyTip")},null,8,["desc","num","tip"])):o("",!0),(!_.value||e.statis.whiteList)&&!e.isSuperPeer?(i(),n(s,{key:4,decimals:2,desc:`${a(t)("page.dashboard.free")} (${e.statis.flow.free.unit})`,infinite:e.statis.whiteList,num:e.statis.flow.free.num,tip:a(t)("page.dashboard.freeTip")},null,8,["desc","infinite","num","tip"])):o("",!0),e.statis.flow.remain>0?(i(),n(s,{key:5,color:e.statis.flow.totalRemain>1024*1024*100?"green":"red",decimals:2,desc:`${a(t)("page.dashboard.remain")} (${a(l)(e.statis.flow.remain).unit})`,infinite:a(l)(e.statis.flow.remain).unit==="TB"&&a(l)(e.statis.flow.remain).num>=99999,num:a(l)(e.statis.flow.remain).num},null,8,["color","desc","infinite","num"])):o("",!0),e.statis.type.product_type>0?(i(),n(s,{key:6,color:e.statis.flow.daily_remain>1024*1024*100?"green":"red",decimals:2,desc:`${a(t)("page.dashboard.monthlyRemain")} (${a(l)(e.statis.flow.daily_remain).unit})`,num:a(l)(e.statis.flow.daily_remain).num},{default:C(()=>[v("span",M,d(a(t)("page.package.resetAfter"))+" "+d(b.value)+"h:"+d(g.value)+"min ",1),v("div",q,d(S()),1)]),_:1},8,["color","desc","num"])):o("",!0),h(s,{desc:a(t)("page.dashboard.serveNum"),num:e.statis.frequency_day},null,8,["desc","num"]),e.statis.rebuffer_ratio>=0?(i(),n(s,{key:7,decimals:2,desc:`${a(t)("page.dashboard.rebufferRatio")} (%)`,num:e.statis.rebuffer_ratio*100,tip:a(t)("page.dashboard.rebufferTip")},null,8,["desc","num","tip"])):o("",!0),h(s,{desc:a(t)("page.dashboard.maxOnlineNum"),num:e.statis.num_max},null,8,["desc","num"])]))}});export{A as _};
