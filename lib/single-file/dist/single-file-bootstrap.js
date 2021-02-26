!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).singlefile={})}(this,(function(e){"use strict";const t="single-file-load-image",s="single-file-image-loaded",o=globalThis.browser,n=e=>globalThis.dispatchEvent(e),i=globalThis.CustomEvent,r=globalThis.document,a=globalThis.HTMLDocument,l=globalThis.FileReader,d=globalThis.Blob,c=[];if(r instanceof a&&o&&o.runtime&&o.runtime.getURL){m="single-file-new-font-face",u=e=>{const t=e.detail;c.find((e=>JSON.stringify(e)==JSON.stringify(t)))||c.push(e.detail)},globalThis.addEventListener(m,u,g);let e=r.createElement("script");e.textContent="("+function(){const e=globalThis.console,t=e&&e.warn&&((...t)=>e.warn(...t))||(()=>{}),s="single-file-new-font-face",o={family:"font-family",style:"font-style",weight:"font-weight",stretch:"font-stretch",unicodeRange:"unicode-range",variant:"font-variant",featureSettings:"font-feature-settings"};if(globalThis.FontFace){const e=globalThis.FontFace;let r;globalThis.FontFace=function(){r||(t("SingleFile is hooking the FontFace constructor to get font URLs."),r=!0);const a={};a["font-family"]=arguments[0],a.src=arguments[1];const c=arguments[2];if(c&&Object.keys(c).forEach((e=>{o[e]&&(a[o[e]]=c[e])})),a.src instanceof ArrayBuffer){const e=new l;e.readAsDataURL(new d([a.src])),e.addEventListener("load",(()=>{a.src="url("+e.result+")",n(new i(s,{detail:a}))}))}else n(new i(s,{detail:a}));return new e(...arguments)},globalThis.FontFace.toString=function(){return"function FontFace() { [native code] }"}}}.toString()+")()",(r.documentElement||r).appendChild(e),e.remove(),e=r.createElement("script"),e.src=o.runtime.getURL("/lib/single-file/processors/hooks/content/content-hooks-frames-web.js"),e.async=!1,(r.documentElement||r).appendChild(e),e.remove()}var m,u,g;const f=new RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)","ig");const h="single-file-on-before-capture",p="single-file-on-after-capture",b="data-single-file-removed-content",E="data-single-file-hidden-content",w="data-single-file-kept-content",y="data-single-file-hidden-frame",T="data-single-file-preserved-space-element",A="data-single-file-shadow-root-element",I="data-single-file-image",v="data-single-file-poster",S="data-single-file-canvas",R="data-single-file-import",F="data-single-file-input-value",N="data-single-file-lazy-loaded-src",C="data-single-file-stylesheet",k="data-single-file-disabled-noscript",M="data-single-file-async-script",_="*:not(base):not(link):not(meta):not(noscript):not(script):not(style):not(template):not(title)",P=["NOSCRIPT","DISABLED-NOSCRIPT","META","LINK","STYLE","TITLE","TEMPLATE","SOURCE","OBJECT","SCRIPT","HEAD"],q=/^'(.*?)'$/,x=/^"(.*?)"$/,L={regular:"400",normal:"400",bold:"700",bolder:"700",lighter:"100"},O="single-file-ui-element",D=(e,t,s)=>globalThis.addEventListener(e,t,s);let U={};function V(e,t,s){let o;return e.querySelectorAll("noscript:not([data-single-file-disabled-noscript])").forEach((e=>{e.setAttribute(k,e.textContent),e.textContent=""})),function(e){e.querySelectorAll("meta[http-equiv=refresh]").forEach((e=>{e.removeAttribute("http-equiv"),e.setAttribute("disabled-http-equiv","refresh")}))}(e),e.head&&e.head.querySelectorAll(_).forEach((e=>e.hidden=!0)),e.querySelectorAll("svg foreignObject").forEach((e=>{const t=e.querySelectorAll("html > head > "+_+", html > body > "+_);t.length&&(Array.from(e.childNodes).forEach((e=>e.remove())),t.forEach((t=>e.appendChild(t))))})),o=t&&e.documentElement?z(t,e,e.documentElement,s):{canvases:[],images:[],posters:[],usedFonts:[],shadowRoots:[],imports:[],markedElements:[]},{canvases:o.canvases,fonts:c,stylesheets:J(e),images:o.images,posters:o.posters,usedFonts:Array.from(o.usedFonts.values()),shadowRoots:o.shadowRoots,imports:o.imports,referrer:e.referrer,markedElements:o.markedElements}}function z(e,t,s,o,n={usedFonts:new Map,canvases:[],images:[],posters:[],shadowRoots:[],imports:[],markedElements:[]},i){return Array.from(s.childNodes).filter((t=>t instanceof e.HTMLElement||t instanceof e.SVGElement)).forEach((s=>{let r,a,l;if(!o.autoSaveExternalSave&&(o.removeHiddenElements||o.removeUnusedFonts||o.compressHTML)&&(l=e.getComputedStyle(s),s instanceof e.HTMLElement&&o.removeHiddenElements&&(a=(i||s.closest("html > head"))&&P.includes(s.tagName)||s.closest("details"),a||(r=i||function(e,t){let s=!1;if(t){const o=t.getPropertyValue("display"),n=t.getPropertyValue("opacity"),i=t.getPropertyValue("visibility");if(s="none"==o,!s&&("0"==n||"hidden"==i)&&e.getBoundingClientRect){const t=e.getBoundingClientRect();s=!t.width&&!t.height}}return Boolean(s)}(s,l),r&&(s.setAttribute(E,""),n.markedElements.push(s)))),!r)){if(o.compressHTML&&l){const e=l.getPropertyValue("white-space");e&&e.startsWith("pre")&&(s.setAttribute(T,""),n.markedElements.push(s))}o.removeUnusedFonts&&(B(l,o,n.usedFonts),B(e.getComputedStyle(s,":first-letter"),o,n.usedFonts),B(e.getComputedStyle(s,":before"),o,n.usedFonts),B(e.getComputedStyle(s,":after"),o,n.usedFonts))}!function(e,t,s,o,n,i,r){if("CANVAS"==s.tagName)try{const t=G(e,s,r);n.canvases.push({dataURI:s.toDataURL("image/png",""),width:t.width,height:t.height}),s.setAttribute(S,n.canvases.length-1),n.markedElements.push(s)}catch(e){}if("IMG"==s.tagName){const t={currentSrc:i?"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==":o.loadDeferredImages&&s.getAttribute(N)||s.currentSrc};if(n.images.push(t),s.setAttribute(I,n.images.length-1),n.markedElements.push(s),s.removeAttribute(N),r=r||e.getComputedStyle(s)){t.size=G(e,s,r);const o=r.getPropertyValue("box-shadow"),n=r.getPropertyValue("background-image");o&&"none"!=o||n&&"none"!=n||!(t.size.pxWidth>1||t.size.pxHeight>1)||(t.replaceable=!0,t.backgroundColor=r.getPropertyValue("background-color"),t.objectFit=r.getPropertyValue("object-fit"),t.boxSizing=r.getPropertyValue("box-sizing"),t.objectPosition=r.getPropertyValue("object-position"))}}if("VIDEO"==s.tagName&&!s.poster){const e=t.createElement("canvas"),o=e.getContext("2d");e.width=s.clientWidth,e.height=s.clientHeight;try{o.drawImage(s,0,0,e.width,e.height),n.posters.push(e.toDataURL("image/png","")),s.setAttribute(v,n.posters.length-1),n.markedElements.push(s)}catch(e){}}"IFRAME"==s.tagName&&i&&o.removeHiddenElements&&(s.setAttribute(y,""),n.markedElements.push(s));"LINK"==s.tagName&&s.import&&s.import.documentElement&&(n.imports.push({content:Y(s.import)}),s.setAttribute(R,n.imports.length-1),n.markedElements.push(s));"INPUT"==s.tagName&&("password"!=s.type&&(s.setAttribute(F,s.value),n.markedElements.push(s)),"radio"!=s.type&&"checkbox"!=s.type||(s.setAttribute(F,s.checked),n.markedElements.push(s)));"TEXTAREA"==s.tagName&&(s.setAttribute(F,s.value),n.markedElements.push(s));"SELECT"==s.tagName&&s.querySelectorAll("option").forEach((e=>{e.selected&&(e.setAttribute(F,""),n.markedElements.push(e))}));"SCRIPT"==s.tagName&&(s.async&&""!=s.getAttribute("async")&&"async"!=s.getAttribute("async")&&(s.setAttribute(M,""),n.markedElements.push(s)),s.textContent=s.textContent.replace(/<\/script>/gi,"<\\/script>"))}(e,t,s,o,n,r,l);const d=!(s instanceof e.SVGElement)&&H(s);if(d&&!s.classList.contains(O)){const i={};s.setAttribute(A,n.shadowRoots.length),n.markedElements.push(s),n.shadowRoots.push(i),z(e,t,d,o,n,r),i.content=d.innerHTML,i.delegatesFocus=d.delegatesFocus,i.mode=d.mode,d.adoptedStyleSheets&&d.adoptedStyleSheets.length&&(i.adoptedStyleSheets=Array.from(d.adoptedStyleSheets).map((e=>Array.from(e.cssRules).map((e=>e.cssText)).join("\n"))))}z(e,t,s,o,n,r),!o.autoSaveExternalSave&&o.removeHiddenElements&&i&&(a||""==s.getAttribute(w)?s.parentElement&&(s.parentElement.setAttribute(w,""),n.markedElements.push(s.parentElement)):r&&(s.setAttribute(b,""),n.markedElements.push(s)))})),n}function B(e,t,s){if(e){const o=e.getPropertyValue("font-style")||"normal";e.getPropertyValue("font-family").split(",").forEach((n=>{if(n=W(n),!t.loadedFonts||t.loadedFonts.find((e=>W(e.family)==n&&e.style==o))){const t=(i=e.getPropertyValue("font-weight"),L[i.toLowerCase().trim()]||i),r=e.getPropertyValue("font-variant")||"normal",a=[n,t,o,r];s.set(JSON.stringify(a),[n,t,o,r])}var i}))}}function H(e){const t=globalThis.chrome;if(e.openOrClosedShadowRoot)return e.openOrClosedShadowRoot;if(!(t&&t.dom&&t.dom.openOrClosedShadowRoot))return e.shadowRoot;try{return t.dom.openOrClosedShadowRoot(e)}catch(t){return e.shadowRoot}}function W(e=""){return function(e){e=e.match(q)?e.replace(q,"$1"):e.replace(x,"$1");return e.trim()}((t=e.trim(),t.replace(f,((e,t,s)=>{const o="0x"+t-65536;return o!=o||s?t:o<0?String.fromCharCode(o+65536):String.fromCharCode(o>>10|55296,1023&o|56320)})))).toLowerCase();var t}function j(e,t){if(e.querySelectorAll("[data-single-file-disabled-noscript]").forEach((e=>{e.textContent=e.getAttribute(k),e.removeAttribute(k)})),e.querySelectorAll("meta[disabled-http-equiv]").forEach((e=>{e.setAttribute("http-equiv",e.getAttribute("disabled-http-equiv")),e.removeAttribute("disabled-http-equiv")})),e.head&&e.head.querySelectorAll("*:not(base):not(link):not(meta):not(noscript):not(script):not(style):not(template):not(title)").forEach((e=>e.removeAttribute("hidden"))),!t){const s=[b,y,E,T,I,v,S,F,A,R,C,M];t=e.querySelectorAll(s.map((e=>"["+e+"]")).join(","))}t.forEach((e=>{e.removeAttribute(b),e.removeAttribute(E),e.removeAttribute(w),e.removeAttribute(y),e.removeAttribute(T),e.removeAttribute(I),e.removeAttribute(v),e.removeAttribute(S),e.removeAttribute(F),e.removeAttribute(A),e.removeAttribute(R),e.removeAttribute(C),e.removeAttribute(M)}))}function J(e){if(e){const t=[];return e.querySelectorAll("style").forEach(((s,o)=>{try{const n=e.createElement("style");n.textContent=s.textContent,e.body.appendChild(n);const i=n.sheet;n.remove(),i&&i.cssRules.length==s.sheet.cssRules.length||(s.setAttribute(C,o),t[o]=Array.from(s.sheet.cssRules).map((e=>e.cssText)).join("\n"))}catch(e){}})),t}}function G(e,t,s){let o=t.naturalWidth,n=t.naturalHeight;if(!o&&!n){let i,r,a,l,d,c,m,u,g=!1;if("content-box"==(s=s||e.getComputedStyle(t)).getPropertyValue("box-sizing")){const e=t.style.getPropertyValue("box-sizing"),s=t.style.getPropertyPriority("box-sizing"),o=t.clientWidth;t.style.setProperty("box-sizing","border-box","important"),g=t.clientWidth!=o,e?t.style.setProperty("box-sizing",e,s):t.style.removeProperty("box-sizing")}i=K("padding-left",s),r=K("padding-right",s),a=K("padding-top",s),l=K("padding-bottom",s),g?(d=K("border-left-width",s),c=K("border-right-width",s),m=K("border-top-width",s),u=K("border-bottom-width",s)):d=c=m=u=0,o=Math.max(0,t.clientWidth-i-r-d-c),n=Math.max(0,t.clientHeight-a-l-m-u)}return{pxWidth:o,pxHeight:n}}function K(e,t){if(t.getPropertyValue(e).endsWith("px"))return parseFloat(t.getPropertyValue(e))}function Y(e){const t=e.doctype;let s="";return t&&(s="<!DOCTYPE "+t.nodeName,t.publicId?(s+=' PUBLIC "'+t.publicId+'"',t.systemId&&(s+=' "'+t.systemId+'"')):t.systemId&&(s+=' SYSTEM "'+t.systemId+'"'),t.internalSubset&&(s+=" ["+t.internalSubset+"]"),s+="> "),s+e.documentElement.outerHTML}D("single-file-user-script-init",(()=>U.callback=async e=>{const t=new CustomEvent(e+"-request",{cancelable:!0}),s=new Promise((t=>D(e+"-response",t)));(e=>{globalThis.dispatchEvent(e)})(t),t.defaultPrevented&&await s}));const $=N,Q=O,X="attributes",Z=globalThis.browser,ee=globalThis.document,te=globalThis.MutationObserver,se=(e,t,s)=>globalThis.addEventListener(e,t,s),oe=(e,t,s)=>globalThis.removeEventListener(e,t,s),ne=new Map;async function ie(e){if(ee.documentElement){ne.clear();const o=Math.max(ee.documentElement.scrollHeight-1.5*ee.documentElement.clientHeight,0),r=Math.max(ee.documentElement.scrollWidth-1.5*ee.documentElement.clientWidth,0);if(globalThis.scrollY<=o&&globalThis.scrollX<=r)return function(e){return new Promise((async o=>{let r;const a=new Set,l=new te((async t=>{if((t=t.filter((e=>e.type==X))).length){t.filter((e=>{if("src"==e.attributeName&&(e.target.setAttribute($,e.target.src),e.target.addEventListener("load",d)),"src"==e.attributeName||"srcset"==e.attributeName||"SOURCE"==e.target.tagName)return!e.target.classList||!e.target.classList.contains(Q)})).length&&(r=!0,await ae(l,e,u),a.size||await re(l,e,u))}}));function d(e){const t=e.target;t.removeAttribute($),t.removeEventListener("load",d)}async function c(t){r=!0,await ae(l,e,u),await re(l,e,u),t.detail&&a.add(t.detail)}async function m(t){await ae(l,e,u),await re(l,e,u),a.delete(t.detail),a.size||await re(l,e,u)}function u(e){l.disconnect(),oe(t,c),oe(s,m),o(e)}await de("idleTimeout",(()=>{r||(ce("loadTimeout"),ce("maxTimeout"),le(l,e,u))}),2*e.loadDeferredImagesMaxIdleTime),await ae(l,e,u),l.observe(ee,{subtree:!0,childList:!0,attributes:!0}),se(t,c),se(s,m),function(e){e.loadDeferredImagesBlockCookies&&n(new i("single-file-block-cookies-start")),e.loadDeferredImagesBlockStorage&&n(new i("single-file-block-storage-start")),e.loadDeferredImagesKeepZoomLevel?n(new i("single-file-load-deferred-images-keep-zoom-level-start")):n(new i("single-file-load-deferred-images-start"))}(e)}))}(e)}}async function re(e,t,s){await de("loadTimeout",(()=>le(e,t,s)),t.loadDeferredImagesMaxIdleTime)}async function ae(e,t,s){await de("maxTimeout",(async()=>{await ce("loadTimeout"),await le(e,t,s)}),10*t.loadDeferredImagesMaxIdleTime)}async function le(e,t,s){await ce("idleTimeout"),function(e){e.loadDeferredImagesBlockCookies&&n(new i("single-file-block-cookies-end")),e.loadDeferredImagesBlockStorage&&n(new i("single-file-block-storage-end")),e.loadDeferredImagesKeepZoomLevel?n(new i("single-file-load-deferred-images-keep-zoom-level-end")):n(new i("single-file-load-deferred-images-end"))}(t),await de("endTimeout",(async()=>{await ce("maxTimeout"),s()}),t.loadDeferredImagesMaxIdleTime/2),e.disconnect()}async function de(e,t,s){if(Z&&Z.runtime&&Z.runtime.sendMessage){if(!ne.get(e)||!ne.get(e).pending){const o={callback:t,pending:!0};ne.set(e,o),await Z.runtime.sendMessage({method:"singlefile.lazyTimeout.setTimeout",type:e,delay:s}),o.pending=!1}}else{const o=ne.get(e);o&&globalThis.clearTimeout(o),ne.set(e,t),globalThis.setTimeout(t,s)}}async function ce(e){if(Z&&Z.runtime&&Z.runtime.sendMessage)await Z.runtime.sendMessage({method:"singlefile.lazyTimeout.clearTimeout",type:e});else{const t=ne.get(e);ne.delete(e),t&&globalThis.clearTimeout(t)}}Z&&Z.runtime&&Z.runtime.onMessage&&Z.runtime.onMessage.addListener&&Z.runtime.onMessage.addListener((e=>{if("singlefile.lazyTimeout.onTimeout"==e.method){const t=ne.get(e.type);t&&(ne.delete(e.type),t.callback())}}));const me={ON_BEFORE_CAPTURE_EVENT_NAME:h,ON_AFTER_CAPTURE_EVENT_NAME:p,WIN_ID_ATTRIBUTE_NAME:"data-single-file-win-id",waitForUserScript:U,preProcessDoc:V,serialize:Y,postProcessDoc:j,getShadowRoot:H},ue="__frameTree__::",ge='iframe, frame, object[type="text/html"][data]',fe="singlefile.frameTree.initRequest",he="singlefile.frameTree.ackInitRequest",pe="singlefile.frameTree.cleanupRequest",be="singlefile.frameTree.initResponse",Ee=".",we=globalThis.window==globalThis.top,ye=globalThis.browser,Te=globalThis.top,Ae=globalThis.MessageChannel,Ie=globalThis.document,ve=new Map;let Se;function Re(){return globalThis.crypto.getRandomValues(new Uint32Array(32)).join("")}async function Fe(e){const t=me.waitForUserScript,s=e.sessionId;we||(Se=globalThis.frameId=e.windowId),ke(Ie,e.options,Se,s),we||(e.options.userScriptEnabled&&t.callback&&await t.callback(me.ON_BEFORE_CAPTURE_EVENT_NAME),qe({frames:[Le(Ie,globalThis,Se,e.options)],sessionId:s,requestedFrameId:Ie.documentElement.dataset.requestedFrameId&&Se}),e.options.userScriptEnabled&&t.callback&&await t.callback(me.ON_AFTER_CAPTURE_EVENT_NAME),delete Ie.documentElement.dataset.requestedFrameId)}function Ne(e){const t=e.sessionId;Pe(Oe(Ie),e.windowId,t)}function Ce(e){e.frames.forEach((t=>Me("responseTimeouts",e.sessionId,t.windowId)));const t=ve.get(e.sessionId);if(t){e.requestedFrameId&&(t.requestedFrameId=e.requestedFrameId),e.frames.forEach((e=>{let s=t.frames.find((t=>e.windowId==t.windowId));s||(s={windowId:e.windowId},t.frames.push(s)),s.processed||(s.content=e.content,s.baseURI=e.baseURI,s.title=e.title,s.canvases=e.canvases,s.fonts=e.fonts,s.stylesheets=e.stylesheets,s.images=e.images,s.posters=e.posters,s.usedFonts=e.usedFonts,s.shadowRoots=e.shadowRoots,s.imports=e.imports,s.processed=e.processed)}));t.frames.filter((e=>!e.processed)).length||(t.frames=t.frames.sort(((e,t)=>t.windowId.split(Ee).length-e.windowId.split(Ee).length)),t.resolve&&(t.requestedFrameId&&t.frames.forEach((e=>{e.windowId==t.requestedFrameId&&(e.requestedFrame=!0)})),t.resolve(t.frames)))}}function ke(e,t,s,o){const n=Oe(e);!function(e,t,s,o,n){const i=[];let r;ve.get(n)?r=ve.get(n).requestTimeouts:(r={},ve.set(n,{requestTimeouts:r}));t.forEach(((e,t)=>{const s=o+Ee+t;e.setAttribute(me.WIN_ID_ATTRIBUTE_NAME,s),i.push({windowId:s})})),qe({frames:i,sessionId:n,requestedFrameId:e.documentElement.dataset.requestedFrameId&&o}),t.forEach(((e,t)=>{const i=o+Ee+t;try{xe(e.contentWindow,{method:fe,windowId:i,sessionId:n,options:s})}catch(e){}r[i]=globalThis.setTimeout((()=>qe({frames:[{windowId:i,processed:!0}],sessionId:n})),750)})),delete e.documentElement.dataset.requestedFrameId}(e,n,t,s,o),n.length&&function(e,t,s,o,n){const i=[];t.forEach(((e,t)=>{const r=o+Ee+t;let a;try{a=e.contentDocument}catch(e){}if(a)try{const t=e.contentWindow;t.stop(),Me("requestTimeouts",n,r),ke(a,s,r,n),i.push(Le(a,t,r,s))}catch(e){i.push({windowId:r,processed:!0})}})),qe({frames:i,sessionId:n,requestedFrameId:e.documentElement.dataset.requestedFrameId&&o}),delete e.documentElement.dataset.requestedFrameId}(e,n,t,s,o)}function Me(e,t,s){const o=ve.get(t);if(o&&o[e]){const t=o[e][s];t&&(globalThis.clearTimeout(t),delete o[e][s])}}function _e(e,t){const s=ve.get(e);s&&s.responseTimeouts&&(s.responseTimeouts[t]=globalThis.setTimeout((()=>qe({frames:[{windowId:t,processed:!0}],sessionId:e})),1e4))}function Pe(e,t,s){e.forEach(((e,o)=>{const n=t+Ee+o;e.removeAttribute(me.WIN_ID_ATTRIBUTE_NAME);try{xe(e.contentWindow,{method:pe,windowId:n,sessionId:s})}catch(e){}})),e.forEach(((e,o)=>{const n=t+Ee+o;let i;try{i=e.contentDocument}catch(e){}if(i)try{Pe(Oe(i),n,s)}catch(e){}}))}function qe(e){e.method=be;try{Te.frameTree.initResponse(e)}catch(t){xe(Te,e,!0)}}function xe(e,t,s){if(e==Te&&ye&&ye.runtime&&ye.runtime.sendMessage)ye.runtime.sendMessage(t);else if(s){const s=new Ae;e.postMessage(ue+JSON.stringify({method:t.method,sessionId:t.sessionId}),"*",[s.port2]),s.port1.postMessage(t)}else e.postMessage(ue+JSON.stringify(t),"*")}function Le(e,t,s,o){const n=me.preProcessDoc(e,t,o),i=me.serialize(e);me.postProcessDoc(e,n.markedElements);return{windowId:s,content:i,baseURI:e.baseURI.split("#")[0],title:e.title,canvases:n.canvases,fonts:n.fonts,stylesheets:n.stylesheets,images:n.images,posters:n.posters,usedFonts:n.usedFonts,shadowRoots:n.shadowRoots,imports:n.imports,processed:!0}}function Oe(e){let t=Array.from(e.querySelectorAll(ge));return e.querySelectorAll("*").forEach((e=>{const s=me.getShadowRoot(e);s&&(t=t.concat(...s.querySelectorAll(ge)))})),t}we&&(Se="0",ye&&ye.runtime&&ye.runtime.onMessage&&ye.runtime.onMessage.addListener&&ye.runtime.onMessage.addListener((e=>e.method==be?(Ce(e),Promise.resolve({})):e.method==he?(Me("requestTimeouts",e.sessionId,e.windowId),_e(e.sessionId,e.windowId),Promise.resolve({})):void 0))),((e,t,s)=>{globalThis.addEventListener(e,t,s)})("message",(async e=>{if("string"==typeof e.data&&e.data.startsWith(ue)){e.preventDefault(),e.stopPropagation();const t=JSON.parse(e.data.substring(ue.length));if(t.method==fe)e.source&&xe(e.source,{method:he,windowId:t.windowId,sessionId:t.sessionId}),we||(globalThis.stop(),t.options.loadDeferredImages&&ie(t.options),await Fe(t));else if(t.method==he)Me("requestTimeouts",t.sessionId,t.windowId),_e(t.sessionId,t.windowId);else if(t.method==pe)Ne(t);else if(t.method==be&&ve.get(t.sessionId)){e.ports[0].onmessage=e=>Ce(e.data)}}}),!0);const De={frameTree:Object.freeze({__proto__:null,getAsync:function(e){const t=Re();return e=JSON.parse(JSON.stringify(e)),new Promise((s=>{ve.set(t,{frames:[],requestTimeouts:{},responseTimeouts:{},resolve:e=>{e.sessionId=t,s(e)}}),Fe({windowId:Se,sessionId:t,options:e})}))},getSync:function(e){const t=Re();e=JSON.parse(JSON.stringify(e)),ve.set(t,{frames:[],requestTimeouts:{},responseTimeouts:{}}),function(e){const t=me.waitForUserScript,s=e.sessionId;we||(Se=globalThis.frameId=e.windowId);ke(Ie,e.options,Se,s),we||(e.options.userScriptEnabled&&t.callback&&t.callback(me.ON_BEFORE_CAPTURE_EVENT_NAME),qe({frames:[Le(Ie,globalThis,Se,e.options)],sessionId:s,requestedFrameId:Ie.documentElement.dataset.requestedFrameId&&Se}),e.options.userScriptEnabled&&t.callback&&t.callback(me.ON_AFTER_CAPTURE_EVENT_NAME),delete Ie.documentElement.dataset.requestedFrameId)}({windowId:Se,sessionId:t,options:e});const s=ve.get(t).frames;return s.sessionId=t,s},cleanup:function(e){ve.delete(e),Ne({windowId:Se,sessionId:e,options:{sessionId:e}})},initResponse:Ce,TIMEOUT_INIT_REQUEST_MESSAGE:750})},Ue={COMMENT_HEADER:"Page saved with SingleFile",COMMENT_HEADER_LEGACY:"Archive processed by SingleFile",ON_BEFORE_CAPTURE_EVENT_NAME:h,ON_AFTER_CAPTURE_EVENT_NAME:p,waitForUserScript:U,preProcessDoc:V,postProcessDoc:j,serialize:Y,getShadowRoot:H};e.helper=Ue,e.processors=De,Object.defineProperty(e,"__esModule",{value:!0})}));