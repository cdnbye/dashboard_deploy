import{q as s,H as t}from"./bootstrap-SKctUie3.js";function n(){const a=s().accessUserId;return t.get("goods/flow_packet",{params:{uid:a}})}function i(){const a=s().accessUserId;return t.get("goods/monthly_packet",{params:{uid:a}})}function p(e,a){return t.get("charge/methods",{params:{currency:e,total_price:a}})}function g(e,a,c){const o=location.origin+location.pathname;return t.get(`charge/${e}/pay`,{params:{origin:o,order_id:a,mobile:c==="mobile"}})}function m(e){return t.get("charge/crypto/nowpayments/available",{params:{price:e}})}export{g as a,i as b,n as c,p as f,m as i};
