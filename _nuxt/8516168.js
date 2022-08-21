(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{311:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,n=(o=r(313))&&o.__esModule?o:{default:o};var l=function(t,e,r){return(0,n.default)(t,(function(t){e(t)}),(function(t){if(!r)throw new Error("g-sheets-api error: ".concat(t));r(t)}))};t.exports=l;var c=l;e.default=c},313:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,n=(o=r(314))&&o.__esModule?o:{default:o};function l(t,filter,e){return t.filter((function(t){var r=null,o=[];return!(void 0===t||t.length<=0||Object.keys(t).length<=0)&&(Object.keys(filter).forEach((function(r){var n=filter[r],l=Object.keys(t).find((function(t){return t.toLowerCase().trim()===r.toLowerCase().trim()})),c=t[l];o.push(function(t,e,r){try{if(void 0!==t){if(t=t.toLowerCase().trim(),e=e.toLowerCase().trim(),"strict"===r)return t===e;if("loose"===r)return t.includes(e)||t==e}}catch(t){return console.log("error in matchValues: ".concat(t.message)),!1}return!1}(c,n,e.matching||"loose"))})),"or"===e.operator&&(r=o.some((function(t){return!0===t}))),"and"===e.operator&&(r=o.every((function(t){return!0===t}))),r)}))}var c=function(t,e,r){var o=t.apiKey,c=t.sheetId,d=t.sheetName,f=t.sheetNumber,h=t.returnAllResults,filter=t.filter,y=t.filterOptions;if(!t.apiKey||void 0===t.apiKey)throw new Error("Missing Sheets API key");return(0,n.default)({apiKey:o,sheetId:c,sheetName:d,sheetNumber:f}).then((function(t){var r=function(t,e,filter,r){for(var data=t.values,o=[{}],n={},i=0;i<data.length;i++)for(var c=data[i],d=0;d<c.length;d++){var f=c[d],h=n[d];i<1?n[d]=f:(void 0===o[i]&&(o[i]={}),void 0!==h&&h.length>0&&(o[i][h]=f))}return o=o.filter((function(t){return Object.keys(t).length})),e||!filter?o:l(o,filter,r)}(t,h||!1,filter||!1,y||{operator:"or",matching:"loose"});e(r)})).catch((function(t){return r(t.message)}))};e.default=c},314:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,n=(o=r(315))&&o.__esModule?o:{default:o};var l=function(t){var e=t.apiKey,r=t.sheetId,o=t.sheetName,l=t.sheetNumber,c=void 0===l?1:l;try{var d=o&&""!==o?encodeURIComponent(o):"Sheet".concat(c),f="https://sheets.googleapis.com/v4/spreadsheets/".concat(r,"/values/").concat(d,"?dateTimeRenderOption=FORMATTED_STRING&majorDimension=ROWS&valueRenderOption=FORMATTED_VALUE&key=").concat(e);return(0,n.default)(f).then((function(t){if(!t.ok)throw console.log("there is an error in the gsheets response"),new Error("Error fetching GSheet");return t.json()})).then((function(data){return data})).catch((function(t){throw new Error("Failed to fetch from GSheets API. Check your Sheet Id and the public availability of your GSheet.")}))}catch(t){throw new Error("General error when fetching GSheet: ".concat(t))}};e.default=l},315:function(t,e){var r="undefined"!=typeof self?self:this,o=function(){function t(){this.fetch=!1,this.DOMException=r.DOMException}return t.prototype=r,new t}();!function(t){!function(e){var r="URLSearchParams"in t,o="Symbol"in t&&"iterator"in Symbol,n="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),l="FormData"in t,c="ArrayBuffer"in t;if(c)var d=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],f=ArrayBuffer.isView||function(t){return t&&d.indexOf(Object.prototype.toString.call(t))>-1};function h(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function y(t){return"string"!=typeof t&&(t=String(t)),t}function v(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return o&&(e[Symbol.iterator]=function(){return e}),e}function m(t){this.map={},t instanceof m?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(header){this.append(header[0],header[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function _(body){if(body.bodyUsed)return Promise.reject(new TypeError("Already read"));body.bodyUsed=!0}function w(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function x(t){var e=new FileReader,r=w(e);return e.readAsArrayBuffer(t),r}function E(t){if(t.slice)return t.slice(0);var view=new Uint8Array(t.byteLength);return view.set(new Uint8Array(t)),view.buffer}function O(){return this.bodyUsed=!1,this._initBody=function(body){var t;this._bodyInit=body,body?"string"==typeof body?this._bodyText=body:n&&Blob.prototype.isPrototypeOf(body)?this._bodyBlob=body:l&&FormData.prototype.isPrototypeOf(body)?this._bodyFormData=body:r&&URLSearchParams.prototype.isPrototypeOf(body)?this._bodyText=body.toString():c&&n&&((t=body)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=E(body.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):c&&(ArrayBuffer.prototype.isPrototypeOf(body)||f(body))?this._bodyArrayBuffer=E(body):this._bodyText=body=Object.prototype.toString.call(body):this._bodyText="",this.headers.get("content-type")||("string"==typeof body?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(body)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n&&(this.blob=function(){var t=_(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?_(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(x)}),this.text=function(){var t,e,r,o=_(this);if(o)return o;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=w(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var view=new Uint8Array(t),e=new Array(view.length),i=0;i<view.length;i++)e[i]=String.fromCharCode(view[i]);return e.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},l&&(this.formData=function(){return this.text().then(D)}),this.json=function(){return this.text().then(JSON.parse)},this}m.prototype.append=function(t,e){t=h(t),e=y(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},m.prototype.delete=function(t){delete this.map[h(t)]},m.prototype.get=function(t){return t=h(t),this.has(t)?this.map[t]:null},m.prototype.has=function(t){return this.map.hasOwnProperty(h(t))},m.prototype.set=function(t,e){this.map[h(t)]=y(e)},m.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},m.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),v(t)},m.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),v(t)},m.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),v(t)},o&&(m.prototype[Symbol.iterator]=m.prototype.entries);var A=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function C(input,t){var e,r,body=(t=t||{}).body;if(input instanceof C){if(input.bodyUsed)throw new TypeError("Already read");this.url=input.url,this.credentials=input.credentials,t.headers||(this.headers=new m(input.headers)),this.method=input.method,this.mode=input.mode,this.signal=input.signal,body||null==input._bodyInit||(body=input._bodyInit,input.bodyUsed=!0)}else this.url=String(input);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new m(t.headers)),this.method=(e=t.method||this.method||"GET",r=e.toUpperCase(),A.indexOf(r)>-1?r:e),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&body)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(body)}function D(body){var form=new FormData;return body.trim().split("&").forEach((function(t){if(t){var e=t.split("="),r=e.shift().replace(/\+/g," "),o=e.join("=").replace(/\+/g," ");form.append(decodeURIComponent(r),decodeURIComponent(o))}})),form}function T(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new m(e.headers),this.url=e.url||"",this._initBody(t)}C.prototype.clone=function(){return new C(this,{body:this._bodyInit})},O.call(C.prototype),O.call(T.prototype),T.prototype.clone=function(){return new T(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new m(this.headers),url:this.url})},T.error=function(){var t=new T(null,{status:0,statusText:""});return t.type="error",t};var S=[301,302,303,307,308];T.redirect=function(t,e){if(-1===S.indexOf(e))throw new RangeError("Invalid status code");return new T(null,{status:e,headers:{location:t}})},e.DOMException=t.DOMException;try{new e.DOMException}catch(t){e.DOMException=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}function R(input,t){return new Promise((function(r,o){var l=new C(input,t);if(l.signal&&l.signal.aborted)return o(new e.DOMException("Aborted","AbortError"));var c=new XMLHttpRequest;function d(){c.abort()}c.onload=function(){var t,e,o={status:c.status,statusText:c.statusText,headers:(t=c.getAllResponseHeaders()||"",e=new m,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(line){var t=line.split(":"),r=t.shift().trim();if(r){var o=t.join(":").trim();e.append(r,o)}})),e)};o.url="responseURL"in c?c.responseURL:o.headers.get("X-Request-URL");var body="response"in c?c.response:c.responseText;r(new T(body,o))},c.onerror=function(){o(new TypeError("Network request failed"))},c.ontimeout=function(){o(new TypeError("Network request failed"))},c.onabort=function(){o(new e.DOMException("Aborted","AbortError"))},c.open(l.method,l.url,!0),"include"===l.credentials?c.withCredentials=!0:"omit"===l.credentials&&(c.withCredentials=!1),"responseType"in c&&n&&(c.responseType="blob"),l.headers.forEach((function(t,e){c.setRequestHeader(e,t)})),l.signal&&(l.signal.addEventListener("abort",d),c.onreadystatechange=function(){4===c.readyState&&l.signal.removeEventListener("abort",d)}),c.send(void 0===l._bodyInit?null:l._bodyInit)}))}R.polyfill=!0,t.fetch||(t.fetch=R,t.Headers=m,t.Request=C,t.Response=T),e.Headers=m,e.Request=C,e.Response=T,e.fetch=R,Object.defineProperty(e,"__esModule",{value:!0})}({})}(o),o.fetch.ponyfill=!0,delete o.fetch.polyfill;var n=o;(e=n.fetch).default=n.fetch,e.fetch=n.fetch,e.Headers=n.Headers,e.Request=n.Request,e.Response=n.Response,t.exports=e},322:function(t,e,r){var content=r(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("5e6317ea",content,!0,{sourceMap:!1})},325:function(t,e,r){"use strict";r.r(e);r(49),r(200),r(13),r(28),r(201),r(202),r(203),r(204),r(205),r(206),r(207),r(208),r(209),r(210),r(211),r(212),r(213),r(29),r(36),r(26),r(326),r(122),r(35),r(25),r(78),r(327),r(79);var o=r(311),n={name:"DownloadCounts",props:{apiKey:{type:String,required:!0},sheetId:{type:String,required:!0},sheetName:{type:String,required:!0}},data:function(){return{downloadCounts:{totalDownloads:"-",monthlyDownloads:"-",weeklyDownloads:"-",dailyDownloads:"-"},error:!1,errorMessage:""}},mounted:function(){var t=this;o({apiKey:this.apiKey,sheetId:this.sheetId,sheetName:this.sheetName,returnAllResults:!1},(function(e){var r=new Map;e.forEach((function(t){r.set(t.name,t.value)})),t.downloadCounts=Object.fromEntries(r)}),(function(e){t.errorMessage=e,t.error=!0}))},methods:{nFormatter:function(t,e){try{t=parseInt(t)}catch(e){return t}var r=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}].slice().reverse().find((function(e){return t>=e.value}));return r?(t/r.value).toFixed(e).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+r.symbol:"0"},commasFormatter:function(t){try{t=parseInt(t)}catch(e){return t}for(var e=t.toString(),r="",o=0;o<e.length;o++){var i=e.length-1-o;0!==o&&o%3==0&&(r=","+r),r=e.charAt(i)+r}return r}}},l=(r(329),r(64)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row",staticStyle:{color:"#eee"}},[t.error?t._e():e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"circleDiv tooltip-cover2"},[t._v("\n            "+t._s(t.nFormatter(t.downloadCounts.totalDownloads,3))+"\n            "),e("span",{staticClass:"tooltiptext2"},[t._v(t._s(t.commasFormatter(t.downloadCounts.totalDownloads)))])]),t._v(" "),e("h2",{staticClass:"downloads_title"},[t._v(t._s(t.$t("downloads_count_total")))])]),t._v(" "),t.error?t._e():e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"circleDiv tooltip-cover2"},[t._v("\n            "+t._s(t.nFormatter(t.downloadCounts.monthlyDownloads,3))+"\n            "),e("span",{staticClass:"tooltiptext2"},[t._v(t._s(t.commasFormatter(t.downloadCounts.monthlyDownloads)))])]),t._v(" "),e("h2",{staticClass:"downloads_title"},[t._v(t._s(t.$t("downloads_count_monthly")))])]),t._v(" "),t.error?t._e():e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"circleDiv tooltip-cover2"},[t._v("\n            "+t._s(t.nFormatter(t.downloadCounts.weeklyDownloads,3))+"\n            "),e("span",{staticClass:"tooltiptext2"},[t._v(t._s(t.commasFormatter(t.downloadCounts.weeklyDownloads)))])]),t._v(" "),e("h2",{staticClass:"downloads_title"},[t._v(t._s(t.$t("downloads_count_weekly")))])]),t._v(" "),t.error?t._e():e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"circleDiv tooltip-cover2"},[t._v("\n            "+t._s(t.nFormatter(t.downloadCounts.dailyDownloads,3))+"\n            "),e("span",{staticClass:"tooltiptext2"},[t._v(" "+t._s(t.commasFormatter(t.downloadCounts.dailyDownloads))+" ")])]),t._v(" "),e("h2",{staticClass:"downloads_title"},[t._v(t._s(t.$t("downloads_count_daily")))])]),t._v(" "),t.error?e("div",{staticClass:"col-lg-12"},[e("i",{staticClass:"fa fa-exclamation-triangle",staticStyle:{"font-size":"32px",color:"#F33"},attrs:{"aria-hidden":"true"}}),t._v(" "),e("br"),t._v(" "),e("span",{staticStyle:{"font-size":"20px"}},[t._v("\n            "+t._s(t.$t("downloads_error_statistic"))+"\n            "),e("a",{attrs:{href:"https://github.com/gkbm2013/tinker-IO/issues"}},[t._v(t._s(t.$t("downloads_error_statistic_report")))])]),t._v(" "),e("br"),t._v(" "),e("span",{staticStyle:{"font-size":"16px"}},[t._v("\n            "+t._s("".concat(t.$t("downloads_error_statistic_error_msg")," ").concat(t.errorMessage))+"\n        ")])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},326:function(t,e,r){var o=r(2),n=r(19),l=r(66);o({target:"Object",stat:!0},{fromEntries:function(t){var e={};return n(t,(function(t,r){l(e,t,r)}),{AS_ENTRIES:!0}),e}})},327:function(t,e,r){"use strict";var o=r(2),n=r(4),l=r(65),c=r(328),d=r(199),f=r(3),h=RangeError,y=String,v=Math.floor,m=n(d),_=n("".slice),w=n(1..toFixed),x=function(t,e,r){return 0===e?r:e%2==1?x(t,e-1,r*t):x(t*t,e/2,r)},E=function(data,t,e){for(var r=-1,o=e;++r<6;)o+=t*data[r],data[r]=o%1e7,o=v(o/1e7)},O=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=v(r/t),r=r%t*1e7},A=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=y(data[t]);s=""===s?e:s+m("0",7-e.length)+e}return s};o({target:"Number",proto:!0,forced:f((function(){return"0.000"!==w(8e-5,3)||"1"!==w(.9,0)||"1.25"!==w(1.255,2)||"1000000000000000128"!==w(0xde0b6b3a7640080,0)}))||!f((function(){w({})}))},{toFixed:function(t){var e,r,o,n,d=c(this),f=l(t),data=[0,0,0,0,0,0],v="",w="0";if(f<0||f>20)throw h("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return y(d);if(d<0&&(v="-",d=-d),d>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(d*x(2,69,1))-69)<0?d*x(2,-e,1):d/x(2,e,1),r*=4503599627370496,(e=52-e)>0){for(E(data,0,r),o=f;o>=7;)E(data,1e7,0),o-=7;for(E(data,x(10,o,1),0),o=e-1;o>=23;)O(data,1<<23),o-=23;O(data,1<<o),E(data,1,1),O(data,2),w=A(data)}else E(data,0,r),E(data,1<<-e,0),w=A(data)+m("0",f);return w=f>0?v+((n=w.length)<=f?"0."+m("0",f-n)+w:_(w,0,n-f)+"."+_(w,n-f)):v+w}})},328:function(t,e,r){var o=r(4);t.exports=o(1..valueOf)},329:function(t,e,r){"use strict";r(322)},330:function(t,e,r){var o=r(55)(!1);o.push([t.i,'.tooltip-cover2{position:relative!important}.tooltip-cover2 .tooltiptext2{font-size:16px;line-height:16px;visibility:hidden;width:120px;background-color:#000;color:#fff;text-align:center;border-radius:6px;padding:10px;position:absolute;z-index:1;top:75%;left:50%;margin-left:-60px}.tooltip-cover2 .tooltiptext2:after{content:"";position:absolute;bottom:100%;left:50%;margin-left:-5px;border:5px solid transparent;border-bottom-color:#000}.tooltip-cover2:hover .tooltiptext2{visibility:visible}',""]),t.exports=o}}]);