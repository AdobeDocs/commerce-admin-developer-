"use strict";(self.webpackChunkcommerce_admin_developer=self.webpackChunkcommerce_admin_developer||[]).push([[4794],{64794:function(e,n,t){t.r(n),t.d(n,{default:function(){return R}});var o,r,i,s,c,a=t(35776),l=t(1597),d=t(10504);!function(e){e.Call="call",e.Reply="reply",e.Syn="syn",e.SynAck="synAck",e.Ack="ack"}(o||(o={})),function(e){e.Fulfilled="fulfilled",e.Rejected="rejected"}(r||(r={})),function(e){e.ConnectionDestroyed="ConnectionDestroyed",e.ConnectionTimeout="ConnectionTimeout",e.NoIframeSrc="NoIframeSrc"}(i||(i={})),function(e){e.DataCloneError="DataCloneError"}(s||(s={})),function(e){e.Message="message"}(c||(c={}));const u={"http:":"80","https:":"443"},g=/^(https?:)?\/\/([^/:]+)?(:(\d+))?/,m=["file:","data:"];const f=({name:e,message:n,stack:t})=>({name:e,message:n,stack:t});let h=0;var p=()=>++h;const v=e=>e?e.split("."):[],w=(e,n,t)=>{const o=v(n);return o.reduce(((e,n,r)=>(void 0===e[n]&&(e[n]={}),r===o.length-1&&(e[n]=t),e[n])),e),e},y=(e,n)=>{const t={};return Object.keys(e).forEach((o=>{const r=e[o],i=((e,n)=>{const t=v(n||"");return t.push(e),(e=>e.join("."))(t)})(o,n);"object"==typeof r&&Object.assign(t,y(r,i)),"function"==typeof r&&(t[i]=r)})),t};var $=(e,n,t,s,a)=>{const{localName:l,local:d,remote:u,originForSending:g,originForReceiving:m}=n;let f=!1;a(`${l}: Connecting call sender`);const h=e=>(...n)=>{let t;a(`${l}: Sending ${e}() call`);try{u.closed&&(t=!0)}catch(h){t=!0}if(t&&s(),f){const n=new Error(`Unable to send ${e}() call due to destroyed connection`);throw n.code=i.ConnectionDestroyed,n}return new Promise(((t,i)=>{const s=p(),f=n=>{if(n.source!==u||n.data.penpal!==o.Reply||n.data.id!==s)return;if("*"!==m&&n.origin!==m)return void a(`${l} received message from origin ${n.origin} which did not match expected origin ${m}`);const g=n.data;a(`${l}: Received ${e}() reply`),d.removeEventListener(c.Message,f);let h=g.returnValue;g.returnValueIsError&&(h=(e=>{const n=new Error;return Object.keys(e).forEach((t=>n[t]=e[t])),n})(h)),(g.resolution===r.Fulfilled?t:i)(h)};d.addEventListener(c.Message,f);const h={penpal:o.Call,id:s,methodName:e,args:n};u.postMessage(h,g)}))},v=t.reduce(((e,n)=>(e[n]=h(n),e)),{});return Object.assign(e,(e=>{const n={};for(const t in e)w(n,t,e[t]);return n})(v)),()=>{f=!0}},S=(e,n,t,i,a)=>{const{destroy:l,onDestroy:d}=i;let u,g;const m={};return i=>{if("*"!==n&&i.origin!==n)return void a(`Parent: Handshake - Received ACK message from origin ${i.origin} which did not match expected origin ${n}`);a("Parent: Handshake - Received ACK");const h={localName:"Parent",local:window,remote:i.source,originForSending:t,originForReceiving:n};u&&u(),u=((e,n,t)=>{const{localName:i,local:a,remote:l,originForSending:d,originForReceiving:u}=e;let g=!1;const m=e=>{if(e.source!==l||e.data.penpal!==o.Call)return;if("*"!==u&&e.origin!==u)return void t(`${i} received message from origin ${e.origin} which did not match expected origin ${u}`);const c=e.data,{methodName:a,args:m,id:h}=c;t(`${i}: Received ${a}() call`);const p=e=>n=>{if(t(`${i}: Sending ${a}() reply`),g)return void t(`${i}: Unable to send ${a}() reply due to destroyed connection`);const c={penpal:o.Reply,id:h,resolution:e,returnValue:n};e===r.Rejected&&n instanceof Error&&(c.returnValue=f(n),c.returnValueIsError=!0);try{l.postMessage(c,d)}catch(u){if(u.name===s.DataCloneError){const e={penpal:o.Reply,id:h,resolution:r.Rejected,returnValue:f(u),returnValueIsError:!0};l.postMessage(e,d)}throw u}};new Promise((e=>e(n[a].apply(n,m)))).then(p(r.Fulfilled),p(r.Rejected))};return a.addEventListener(c.Message,m),()=>{g=!0,a.removeEventListener(c.Message,m)}})(h,e,a),d(u),g&&g.forEach((e=>{delete m[e]})),g=i.data.methodNames;const p=$(m,h,g,l,a);return d(p),m}};var E=e=>{let{iframe:n,methods:t={},childOrigin:r,timeout:s,debug:a=!1}=e;const l=(e=>(...n)=>{e&&console.log("[Penpal]",...n)})(a),d=((e,n)=>{const t=[];let o=!1;return{destroy(r){o||(o=!0,n(`${e}: Destroying connection`),t.forEach((e=>{e(r)})))},onDestroy(e){o?e():t.push(e)}}})("Parent",l),{onDestroy:f,destroy:h}=d;r||((e=>{if(!e.src&&!e.srcdoc){const e=new Error("Iframe must have src or srcdoc property defined.");throw e.code=i.NoIframeSrc,e}})(n),r=(e=>{if(e&&m.find((n=>e.startsWith(n))))return"null";const n=document.location,t=g.exec(e);let o,r,i;return t?(o=t[1]?t[1]:n.protocol,r=t[2],i=t[4]):(o=n.protocol,r=n.hostname,i=n.port),`${o}//${r}${i&&i!==u[o]?`:${i}`:""}`})(n.src));const p="null"===r?"*":r,v=y(t),w=((e,n,t,r)=>i=>{if(!i.source)return;if("*"!==t&&i.origin!==t)return void e(`Parent: Handshake - Received SYN message from origin ${i.origin} which did not match expected origin ${t}`);e("Parent: Handshake - Received SYN, responding with SYN-ACK");const s={penpal:o.SynAck,methodNames:Object.keys(n)};i.source.postMessage(s,r)})(l,v,r,p),$=S(v,r,p,d,l),E=new Promise(((e,t)=>{const r=((e,n)=>{let t;return void 0!==e&&(t=window.setTimeout((()=>{const t=new Error(`Connection timed out after ${e}ms`);t.code=i.ConnectionTimeout,n(t)}),e)),()=>{clearTimeout(t)}})(s,h),a=t=>{if(t.source===n.contentWindow&&t.data)if(t.data.penpal!==o.Syn)if(t.data.penpal!==o.Ack);else{const n=$(t);n&&(r(),e(n))}else w(t)};window.addEventListener(c.Message,a),l("Parent: Awaiting handshake"),((e,n)=>{const{destroy:t,onDestroy:o}=n,r=setInterval((()=>{e.isConnected||(clearInterval(r),t())}),6e4);o((()=>{clearInterval(r)}))})(n,d),f((e=>{window.removeEventListener(c.Message,a),e&&t(e)}))}));return{promise:E,destroy(){h()}}};var k=t(42075),I=t(26777),C=t(95459);var R=e=>{let{src:n,height:t="calc(100vh - var(--spectrum-global-dimension-size-800))",location:o}=e;const r=(0,a.useRef)(null),{ims:i,isLoadingIms:s}=(0,a.useContext)(I.ZP);let c;const{0:u,1:g}=(0,a.useState)(null),{0:m,1:f}=(0,a.useState)(!1);(0,a.useEffect)((()=>{u&&(0===r.current.clientHeight?u.onHide():u.onShow())}),[o.pathname]),(0,a.useEffect)((()=>{if(f(!1),null!=r&&!s){c=window.adobeIMS;const e=p();return()=>{e.destroy()}}}),[r,s]);const h=(0,C.Bm)(n)?n:(0,l.dq)(n),p=()=>{const e=E({iframe:r.current,childOrigin:(0,C.Bm)(n)?new URL(n).origin:window.origin,methods:{scrollTop(e){var n;void 0===e&&(e=0),null!==(n=document)&&void 0!==n&&n.scrollingElement&&(document.scrollingElement.scrollTop=e)},getURL(){var e,n;return null===(e=window)||void 0===e||null===(n=e.location)||void 0===n?void 0:n.href},setURL(e){var n;null!==(n=window)&&void 0!==n&&n.location&&(window.location=e)},setHeight(e){r.current.style.height=e},getIMSAccessToken(){var e;return null!==(e=c)&&void 0!==e&&e.isSignedInUser()?c.getAccessToken():null},getIMSProfile(){var e;return null!==(e=c)&&void 0!==e&&e.isSignedInUser()?c.getProfile():null},signIn(){c&&!c.isSignedInUser()&&c.signIn()},signOut(){c&&c.isSignedInUser()&&c.signOut()},getIMSClientId:()=>c?c.adobeIdData.client_id:null}});return e.promise.then((e=>{0===r.current.clientHeight?e.onHide():e.onShow(),g(e)})),f(!0),e};return(0,d.tZ)(a.default.Fragment,null,(0,d.tZ)("iframe",{title:"Main content",ref:r,src:m?h:"",css:(0,d.iv)("display:block;height:",t,";width:100%;border:none;","")}),(0,d.tZ)(k.$,null))}}}]);
//# sourceMappingURL=4794-1c520c783b2876f05c07.js.map