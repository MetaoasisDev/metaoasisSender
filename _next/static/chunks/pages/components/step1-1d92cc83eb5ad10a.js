(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[351],{3415:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});n(7294);var r=n(5005),a=n(4105),i=n(9521),s=n(8209),o=n(5893);function l(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw i}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=i.ZP.div.withConfig({displayName:"excel__Box",componentId:"sc-t5a7kr-0"})(["display:flex;align-items:center;.file{position:relative;text-decoration:none;text-indent:0;line-height:20px;width:200px;height:40px;svg{margin-right:10px;}input{position:absolute;font-size:100px;right:0;top:0;opacity:0;width:200px;height:40px;}}"]),c=i.ZP.div.withConfig({displayName:"excel__Tips",componentId:"sc-t5a7kr-1"})(["margin-left:20px;opacity:0.6;"]);function d(e){return(0,o.jsxs)(p,{children:[(0,o.jsxs)(r.Z,{variant:"flat",className:"file",children:[(0,o.jsx)(s.Z,{}),(0,o.jsx)("span",{children:"Import Addresses"}),(0,o.jsx)("input",{type:"file",accept:".xlsx, .xls, .csv",onChange:function(t){var n=t.target.files,r=new FileReader;r.readAsBinaryString(n[0]),r.onload=function(t){try{var n=t.target.result,r=a.ij(n,{type:"binary"}),i=[];for(var s in r.Sheets)if(r.Sheets.hasOwnProperty(s)){var o,u=a.P6.sheet_to_csv(r.Sheets[s],{blankrows:!1}).split("\n"),p=[],c=l(u);try{for(c.s();!(o=c.n()).done;){var d=o.value.split(","),f=d[0],y=d[1];p.push([f,y])}}catch(m){c.e(m)}finally{c.f()}i=p}console.log("Upload file successful!"),e.getChildrenMsg(i)}catch(h){console.error("Unsupported file type!")}}}})]}),(0,o.jsx)(c,{children:"Supported file formats: .xlsx, .xls, .csv,"}),(0,o.jsx)("strong",{onClick:function(){e.getChildrenMsg([{address:"<addresss>",amount:"<amount>"},{address:"0x0000000000000000000000000000000000000000",amount:"1"},{address:"0x0000000000000000000000000000000000000001",amount:"2"}])},children:"Example"})]})}},472:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var r=n(29),a=n(7794),i=n.n(a),s=n(1608),o=n(1555),l=n(4119),u=n(1358),p=n(7338),c=n(5005),d=n(9521),f=n(7294),y=n(4463),m=n(3415),h=n(7922),v=n(6076),b=n(9485),x=n(820),g=n(8864),w=n(5893);function T(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw i}}}}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var j=d.ZP.div.withConfig({displayName:"step1__Box",componentId:"sc-2clox2-0"})(['.height50{height:200px;}.upload{svg{margin-right:10px;}}label[for="Addresses"]{background:#fff;height:33px;width:99%;line-height:4px;margin:7.5px 0 0 1px;opacity:1!important;color:#aaa;}']),F=d.ZP.div.withConfig({displayName:"step1__TipsBox",componentId:"sc-2clox2-1"})(["margin-bottom:20px;"]);function S(e){var t=(0,y.$)(),n=t.dispatch,a=t.state,d=a.account,A=a.web3Provider,S=(0,f.useState)("0x000000000000000000000000000000000000bEEF"),C=S[0],N=S[1],O=(0,f.useState)(18),_=O[0],k=O[1],I=(0,f.useState)(""),E=I[0],Z=I[1],M=(0,f.useState)(!0),P=M[0],B=M[1],R=(0,f.useState)(""),D=R[0],z=R[1],U=(0,f.useState)(null),$=U[0],V=U[1];(0,f.useEffect)((function(){B(!(d&&""!==d&&E&&C))}),[d,E,C,_]),(0,f.useEffect)((function(){if(null!=A){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t,n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("0x000000000000000000000000000000000000bEEF"!==C){e.next=2;break}return e.abrupt("return");case 2:return t=new v.CH(C,x,A),e.prev=3,e.next=6,null===t||void 0===t?void 0:t.decimals();case 6:n=e.sent,k(n),z(""),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),z((null===(r=e.t0.data)||void 0===r?void 0:r.message)||e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}();e()}}),[C,A]),(0,f.useEffect)((function(){J()}),[]);var J=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.getNetwork();case 2:t=e.sent,n=t.chainId,g.filter((function(e){return e.chainId===n})).length?V(!0):(z("Unsupported network!!!!"),V(!1));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"token":N(r);break;case"amounts":Z(r)}},X=function(){var t=(0,r.Z)(i().mark((function t(){var r,a,s,o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=E.split("\n"),a=[],s="",r.map((function(e){var t=e.split(",")[0],n=e.split(",")[1];a.push({address:t,amount:n});var r=b.UJ(t);console.log(isNaN(parseFloat(n))),r&&!isNaN(parseFloat(n))&&(s+="".concat(t,",").concat(parseFloat(n)," \n"))})),n({type:h.U.STORE_IMPORT,payload:a}),e.handleNext(2),o={amounts:s,tokenAddress:C,decimals:_},n({type:h.U.STORE_FIRST,payload:o});case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,w.jsxs)(j,{children:[(0,w.jsxs)(s.Z,{children:[(0,w.jsx)(o.Z,{md:9,children:(0,w.jsx)(l.Z,{controlId:"Token",label:"Token",className:"mb-3",children:(0,w.jsx)(u.Z.Control,{type:"text",name:"token",placeholder:"Token",value:C,onChange:function(e){return L(e)}})})}),(0,w.jsx)(o.Z,{md:3,children:(0,w.jsx)(l.Z,{controlId:"Decimals",label:"Decimals",className:"mb-3",children:(0,w.jsx)(u.Z.Control,{type:"text",name:"decimals",placeholder:"Decimals",value:_,readOnly:!0})})})]}),(0,w.jsx)("div",{className:"mb-3",children:(0,w.jsx)(m.default,{getChildrenMsg:function(e){var t,n="",r=T(e);try{for(r.s();!(t=r.n()).done;){var a=t.value,i=[];for(var s in a)i.push(a[s]);n+=i.join(","),n+="\n"}}catch(o){r.e(o)}finally{r.f()}Z(n)}})}),(0,w.jsx)(s.Z,{children:(0,w.jsx)(o.Z,{md:12,children:(0,w.jsx)(l.Z,{controlId:"Addresses",label:"Addresses with Amounts",className:"mb-3 addressLabel",children:(0,w.jsx)(u.Z.Control,{placeholder:"Addresses with Amounts",as:"textarea",name:"amounts",className:"height50",value:E,onChange:function(e){return L(e)}})})})}),(0,w.jsx)(F,{children:!!D.length&&(0,w.jsx)(p.Z,{variant:"danger",children:D})}),(0,w.jsx)("div",{children:(0,w.jsx)(c.Z,{variant:"flat",onClick:function(){return X()},disabled:!$||P,children:"Next"})})]})}},213:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/step1",function(){return n(472)}])},8209:function(e,t,n){"use strict";var r=n(7294),a=n(5697),i=n.n(a),s=["color","size","title"];function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=(0,r.forwardRef)((function(e,t){var n=e.color,a=e.size,i=e.title,u=l(e,s);return r.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:a,height:a,fill:n},u),i?r.createElement("title",null,i):null,r.createElement("path",{fillRule:"evenodd",d:"M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"}),r.createElement("path",{fillRule:"evenodd",d:"M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"}))}));u.propTypes={color:i().string,size:i().oneOfType([i().string,i().number]),title:i().string},u.defaultProps={color:"currentColor",size:"1em",title:null},t.Z=u},1608:function(e,t,n){"use strict";var r=n(4184),a=n.n(r),i=n(7294),s=n(6792),o=n(5893);const l=i.forwardRef((({bsPrefix:e,className:t,as:n="div",...r},i)=>{const l=(0,s.vE)(e,"row"),u=(0,s.pi)(),p=(0,s.zG)(),c=`${l}-cols`,d=[];return u.forEach((e=>{const t=r[e];let n;delete r[e],null!=t&&"object"===typeof t?({cols:n}=t):n=t;const a=e!==p?`-${e}`:"";null!=n&&d.push(`${c}${a}-${n}`)})),(0,o.jsx)(n,{ref:i,...r,className:a()(t,l,...d)})}));l.displayName="Row",t.Z=l},67:function(){},2061:function(){},820:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},8864:function(e){"use strict";e.exports=JSON.parse('[{"chainId":1,"name":"mainnet","sender":"0xB1F6912AA552bdd7Fd228F8f36278DA642f9CF79"},{"chainId":56,"name":"bsc","sender":"0xB1F6912AA552bdd7Fd228F8f36278DA642f9CF79"},{"chainId":97,"name":"bsctest","sender":"0xB1F6912AA552bdd7Fd228F8f36278DA642f9CF79"},{"chainId":137,"name":"polygon","sender":"0xB1F6912AA552bdd7Fd228F8f36278DA642f9CF79"},{"chainId":43113,"name":"fuji","sender":"0xB1F6912AA552bdd7Fd228F8f36278DA642f9CF79"},{"chainId":43114,"name":"cchain","sender":"0xB1F6912AA552bdd7Fd228F8f36278DA642f9CF79"}]')}},function(e){e.O(0,[251,521,917,79,774,888,179],(function(){return t=213,e(e.s=t);var t}));var t=e.O();_N_E=t}]);