import{b as ve}from"./banner-37990763.js";import{_ as Y,a as _e,b as pe}from"./table-dbc59bdc.js";import{g as ge,U as me,d as we}from"./User-89531140.js";import{D as j,z as F,j as O,E as re,B as V,u as R,o as p,c as g,f as n,d as _,h as A,m as M,F as $,S as P,A as te,_ as W,y as se,l as be,G as xe,p as ne,e as ae,t as C,n as T,H as U,r as Q,g as Ce}from"./index-3b4078e1.js";import{R as Ee}from"./index-6c1991f7.js";const ie=""+new URL("钱包-bd6dc5dd.svg",import.meta.url).href,le=""+new URL("../icon/流量.svg",import.meta.url).href,Me=""+new URL("关闭-d61fed39.svg",import.meta.url).href;/*!
 * qrcode.vue v3.4.1
 * A Vue.js component to generate QRCode.
 * © 2017-2023 @scopewu(https://github.com/scopewu)
 * MIT License.
 */var G=function(){return G=Object.assign||function(a){for(var h,l=1,f=arguments.length;l<f;l++){h=arguments[l];for(var d in h)Object.prototype.hasOwnProperty.call(h,d)&&(a[d]=h[d])}return a},G.apply(this,arguments)};var z;(function(c){var a=function(){function r(e,t,o,s){if(this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<r.MIN_VERSION||e>r.MAX_VERSION)throw new RangeError("Version value out of range");if(s<-1||s>7)throw new RangeError("Mask value out of range");this.size=e*4+17;for(var i=[],u=0;u<this.size;u++)i.push(!1);for(var u=0;u<this.size;u++)this.modules.push(i.slice()),this.isFunction.push(i.slice());this.drawFunctionPatterns();var v=this.addEccAndInterleave(o);if(this.drawCodewords(v),s==-1)for(var m=1e9,u=0;u<8;u++){this.applyMask(u),this.drawFormatBits(u);var x=this.getPenaltyScore();x<m&&(s=u,m=x),this.applyMask(u)}f(0<=s&&s<=7),this.mask=s,this.applyMask(s),this.drawFormatBits(s),this.isFunction=[]}return r.encodeText=function(e,t){var o=c.QrSegment.makeSegments(e);return r.encodeSegments(o,t)},r.encodeBinary=function(e,t){var o=c.QrSegment.makeBytes(e);return r.encodeSegments([o],t)},r.encodeSegments=function(e,t,o,s,i,u){if(o===void 0&&(o=1),s===void 0&&(s=40),i===void 0&&(i=-1),u===void 0&&(u=!0),!(r.MIN_VERSION<=o&&o<=s&&s<=r.MAX_VERSION)||i<-1||i>7)throw new RangeError("Invalid value");var v,m;for(v=o;;v++){var x=r.getNumDataCodewords(v,t)*8,E=d.getTotalBits(e,v);if(E<=x){m=E;break}if(v>=s)throw new RangeError("Data too long")}for(var b=0,y=[r.Ecc.MEDIUM,r.Ecc.QUARTILE,r.Ecc.HIGH];b<y.length;b++){var S=y[b];u&&m<=r.getNumDataCodewords(v,S)*8&&(t=S)}for(var w=[],k=0,B=e;k<B.length;k++){var I=B[k];h(I.mode.modeBits,4,w),h(I.numChars,I.mode.numCharCountBits(v),w);for(var D=0,H=I.getData();D<H.length;D++){var fe=H[D];w.push(fe)}}f(w.length==m);var K=r.getNumDataCodewords(v,t)*8;f(w.length<=K),h(0,Math.min(4,K-w.length),w),h(0,(8-w.length%8)%8,w),f(w.length%8==0);for(var J=236;w.length<K;J^=253)h(J,8,w);for(var q=[];q.length*8<w.length;)q.push(0);return w.forEach(function(he,ee){return q[ee>>>3]|=he<<7-(ee&7)}),new r(v,t,q,i)},r.prototype.getModule=function(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]},r.prototype.getModules=function(){return this.modules},r.prototype.drawFunctionPatterns=function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var t=this.getAlignmentPatternPositions(),o=t.length,e=0;e<o;e++)for(var s=0;s<o;s++)e==0&&s==0||e==0&&s==o-1||e==o-1&&s==0||this.drawAlignmentPattern(t[e],t[s]);this.drawFormatBits(0),this.drawVersion()},r.prototype.drawFormatBits=function(e){for(var t=this.errorCorrectionLevel.formatBits<<3|e,o=t,s=0;s<10;s++)o=o<<1^(o>>>9)*1335;var i=(t<<10|o)^21522;f(i>>>15==0);for(var s=0;s<=5;s++)this.setFunctionModule(8,s,l(i,s));this.setFunctionModule(8,7,l(i,6)),this.setFunctionModule(8,8,l(i,7)),this.setFunctionModule(7,8,l(i,8));for(var s=9;s<15;s++)this.setFunctionModule(14-s,8,l(i,s));for(var s=0;s<8;s++)this.setFunctionModule(this.size-1-s,8,l(i,s));for(var s=8;s<15;s++)this.setFunctionModule(8,this.size-15+s,l(i,s));this.setFunctionModule(8,this.size-8,!0)},r.prototype.drawVersion=function(){if(!(this.version<7)){for(var e=this.version,t=0;t<12;t++)e=e<<1^(e>>>11)*7973;var o=this.version<<12|e;f(o>>>18==0);for(var t=0;t<18;t++){var s=l(o,t),i=this.size-11+t%3,u=Math.floor(t/3);this.setFunctionModule(i,u,s),this.setFunctionModule(u,i,s)}}},r.prototype.drawFinderPattern=function(e,t){for(var o=-4;o<=4;o++)for(var s=-4;s<=4;s++){var i=Math.max(Math.abs(s),Math.abs(o)),u=e+s,v=t+o;0<=u&&u<this.size&&0<=v&&v<this.size&&this.setFunctionModule(u,v,i!=2&&i!=4)}},r.prototype.drawAlignmentPattern=function(e,t){for(var o=-2;o<=2;o++)for(var s=-2;s<=2;s++)this.setFunctionModule(e+s,t+o,Math.max(Math.abs(s),Math.abs(o))!=1)},r.prototype.setFunctionModule=function(e,t,o){this.modules[t][e]=o,this.isFunction[t][e]=!0},r.prototype.addEccAndInterleave=function(e){var t=this.version,o=this.errorCorrectionLevel;if(e.length!=r.getNumDataCodewords(t,o))throw new RangeError("Invalid argument");for(var s=r.NUM_ERROR_CORRECTION_BLOCKS[o.ordinal][t],i=r.ECC_CODEWORDS_PER_BLOCK[o.ordinal][t],u=Math.floor(r.getNumRawDataModules(t)/8),v=s-u%s,m=Math.floor(u/s),x=[],E=r.reedSolomonComputeDivisor(i),b=0,y=0;b<s;b++){var S=e.slice(y,y+m-i+(b<v?0:1));y+=S.length;var w=r.reedSolomonComputeRemainder(S,E);b<v&&S.push(0),x.push(S.concat(w))}for(var k=[],B=function(I){x.forEach(function(D,H){(I!=m-i||H>=v)&&k.push(D[I])})},b=0;b<x[0].length;b++)B(b);return f(k.length==u),k},r.prototype.drawCodewords=function(e){if(e.length!=Math.floor(r.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var t=0,o=this.size-1;o>=1;o-=2){o==6&&(o=5);for(var s=0;s<this.size;s++)for(var i=0;i<2;i++){var u=o-i,v=(o+1&2)==0,m=v?this.size-1-s:s;!this.isFunction[m][u]&&t<e.length*8&&(this.modules[m][u]=l(e[t>>>3],7-(t&7)),t++)}}f(t==e.length*8)},r.prototype.applyMask=function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var t=0;t<this.size;t++)for(var o=0;o<this.size;o++){var s=void 0;switch(e){case 0:s=(o+t)%2==0;break;case 1:s=t%2==0;break;case 2:s=o%3==0;break;case 3:s=(o+t)%3==0;break;case 4:s=(Math.floor(o/3)+Math.floor(t/2))%2==0;break;case 5:s=o*t%2+o*t%3==0;break;case 6:s=(o*t%2+o*t%3)%2==0;break;case 7:s=((o+t)%2+o*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][o]&&s&&(this.modules[t][o]=!this.modules[t][o])}},r.prototype.getPenaltyScore=function(){for(var e=0,t=0;t<this.size;t++){for(var o=!1,s=0,i=[0,0,0,0,0,0,0],u=0;u<this.size;u++)this.modules[t][u]==o?(s++,s==5?e+=r.PENALTY_N1:s>5&&e++):(this.finderPenaltyAddHistory(s,i),o||(e+=this.finderPenaltyCountPatterns(i)*r.PENALTY_N3),o=this.modules[t][u],s=1);e+=this.finderPenaltyTerminateAndCount(o,s,i)*r.PENALTY_N3}for(var u=0;u<this.size;u++){for(var o=!1,v=0,i=[0,0,0,0,0,0,0],t=0;t<this.size;t++)this.modules[t][u]==o?(v++,v==5?e+=r.PENALTY_N1:v>5&&e++):(this.finderPenaltyAddHistory(v,i),o||(e+=this.finderPenaltyCountPatterns(i)*r.PENALTY_N3),o=this.modules[t][u],v=1);e+=this.finderPenaltyTerminateAndCount(o,v,i)*r.PENALTY_N3}for(var t=0;t<this.size-1;t++)for(var u=0;u<this.size-1;u++){var m=this.modules[t][u];m==this.modules[t][u+1]&&m==this.modules[t+1][u]&&m==this.modules[t+1][u+1]&&(e+=r.PENALTY_N2)}for(var x=0,E=0,b=this.modules;E<b.length;E++){var y=b[E];x=y.reduce(function(k,B){return k+(B?1:0)},x)}var S=this.size*this.size,w=Math.ceil(Math.abs(x*20-S*10)/S)-1;return f(0<=w&&w<=9),e+=w*r.PENALTY_N4,f(0<=e&&e<=2568888),e},r.prototype.getAlignmentPatternPositions=function(){if(this.version==1)return[];for(var e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,o=[6],s=this.size-7;o.length<e;s-=t)o.splice(1,0,s);return o},r.getNumRawDataModules=function(e){if(e<r.MIN_VERSION||e>r.MAX_VERSION)throw new RangeError("Version number out of range");var t=(16*e+128)*e+64;if(e>=2){var o=Math.floor(e/7)+2;t-=(25*o-10)*o-55,e>=7&&(t-=36)}return f(208<=t&&t<=29648),t},r.getNumDataCodewords=function(e,t){return Math.floor(r.getNumRawDataModules(e)/8)-r.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*r.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]},r.reedSolomonComputeDivisor=function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var t=[],o=0;o<e-1;o++)t.push(0);t.push(1);for(var s=1,o=0;o<e;o++){for(var i=0;i<t.length;i++)t[i]=r.reedSolomonMultiply(t[i],s),i+1<t.length&&(t[i]^=t[i+1]);s=r.reedSolomonMultiply(s,2)}return t},r.reedSolomonComputeRemainder=function(e,t){for(var o=t.map(function(m){return 0}),s=function(m){var x=m^o.shift();o.push(0),t.forEach(function(E,b){return o[b]^=r.reedSolomonMultiply(E,x)})},i=0,u=e;i<u.length;i++){var v=u[i];s(v)}return o},r.reedSolomonMultiply=function(e,t){if(e>>>8||t>>>8)throw new RangeError("Byte out of range");for(var o=0,s=7;s>=0;s--)o=o<<1^(o>>>7)*285,o^=(t>>>s&1)*e;return f(o>>>8==0),o},r.prototype.finderPenaltyCountPatterns=function(e){var t=e[1];f(t<=this.size*3);var o=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(o&&e[0]>=t*4&&e[6]>=t?1:0)+(o&&e[6]>=t*4&&e[0]>=t?1:0)},r.prototype.finderPenaltyTerminateAndCount=function(e,t,o){return e&&(this.finderPenaltyAddHistory(t,o),t=0),t+=this.size,this.finderPenaltyAddHistory(t,o),this.finderPenaltyCountPatterns(o)},r.prototype.finderPenaltyAddHistory=function(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)},r.MIN_VERSION=1,r.MAX_VERSION=40,r.PENALTY_N1=3,r.PENALTY_N2=3,r.PENALTY_N3=40,r.PENALTY_N4=10,r.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],r.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],r}();c.QrCode=a;function h(r,e,t){if(e<0||e>31||r>>>e)throw new RangeError("Value out of range");for(var o=e-1;o>=0;o--)t.push(r>>>o&1)}function l(r,e){return(r>>>e&1)!=0}function f(r){if(!r)throw new Error("Assertion error")}var d=function(){function r(e,t,o){if(this.mode=e,this.numChars=t,this.bitData=o,t<0)throw new RangeError("Invalid argument");this.bitData=o.slice()}return r.makeBytes=function(e){for(var t=[],o=0,s=e;o<s.length;o++){var i=s[o];h(i,8,t)}return new r(r.Mode.BYTE,e.length,t)},r.makeNumeric=function(e){if(!r.isNumeric(e))throw new RangeError("String contains non-numeric characters");for(var t=[],o=0;o<e.length;){var s=Math.min(e.length-o,3);h(parseInt(e.substring(o,o+s),10),s*3+1,t),o+=s}return new r(r.Mode.NUMERIC,e.length,t)},r.makeAlphanumeric=function(e){if(!r.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");var t=[],o;for(o=0;o+2<=e.length;o+=2){var s=r.ALPHANUMERIC_CHARSET.indexOf(e.charAt(o))*45;s+=r.ALPHANUMERIC_CHARSET.indexOf(e.charAt(o+1)),h(s,11,t)}return o<e.length&&h(r.ALPHANUMERIC_CHARSET.indexOf(e.charAt(o)),6,t),new r(r.Mode.ALPHANUMERIC,e.length,t)},r.makeSegments=function(e){return e==""?[]:r.isNumeric(e)?[r.makeNumeric(e)]:r.isAlphanumeric(e)?[r.makeAlphanumeric(e)]:[r.makeBytes(r.toUtf8ByteArray(e))]},r.makeEci=function(e){var t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)h(e,8,t);else if(e<16384)h(2,2,t),h(e,14,t);else if(e<1e6)h(6,3,t),h(e,21,t);else throw new RangeError("ECI assignment value out of range");return new r(r.Mode.ECI,0,t)},r.isNumeric=function(e){return r.NUMERIC_REGEX.test(e)},r.isAlphanumeric=function(e){return r.ALPHANUMERIC_REGEX.test(e)},r.prototype.getData=function(){return this.bitData.slice()},r.getTotalBits=function(e,t){for(var o=0,s=0,i=e;s<i.length;s++){var u=i[s],v=u.mode.numCharCountBits(t);if(u.numChars>=1<<v)return 1/0;o+=4+v+u.bitData.length}return o},r.toUtf8ByteArray=function(e){e=encodeURI(e);for(var t=[],o=0;o<e.length;o++)e.charAt(o)!="%"?t.push(e.charCodeAt(o)):(t.push(parseInt(e.substring(o+1,o+3),16)),o+=2);return t},r.NUMERIC_REGEX=/^[0-9]*$/,r.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,r.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",r}();c.QrSegment=d})(z||(z={}));(function(c){(function(a){var h=function(){function l(f,d){this.ordinal=f,this.formatBits=d}return l.LOW=new l(0,1),l.MEDIUM=new l(1,0),l.QUARTILE=new l(2,3),l.HIGH=new l(3,2),l}();a.Ecc=h})(c.QrCode||(c.QrCode={}))})(z||(z={}));(function(c){(function(a){var h=function(){function l(f,d){this.modeBits=f,this.numBitsCharCount=d}return l.prototype.numCharCountBits=function(f){return this.numBitsCharCount[Math.floor((f+7)/17)]},l.NUMERIC=new l(1,[10,12,14]),l.ALPHANUMERIC=new l(2,[9,11,13]),l.BYTE=new l(4,[8,16,16]),l.KANJI=new l(8,[8,10,12]),l.ECI=new l(7,[0,0,0]),l}();a.Mode=h})(c.QrSegment||(c.QrSegment={}))})(z||(z={}));var L=z,ce="H",X={L:L.QrCode.Ecc.LOW,M:L.QrCode.Ecc.MEDIUM,Q:L.QrCode.Ecc.QUARTILE,H:L.QrCode.Ecc.HIGH},ye=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function ue(c){return c in X}function de(c,a){a===void 0&&(a=0);var h=[];return c.forEach(function(l,f){var d=null;l.forEach(function(r,e){if(!r&&d!==null){h.push("M".concat(d+a," ").concat(f+a,"h").concat(e-d,"v1H").concat(d+a,"z")),d=null;return}if(e===l.length-1){if(!r)return;d===null?h.push("M".concat(e+a,",").concat(f+a," h1v1H").concat(e+a,"z")):h.push("M".concat(d+a,",").concat(f+a," h").concat(e+1-d,"v1H").concat(d+a,"z"));return}r&&d===null&&(d=e)})}),h.join("")}var Z={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:ce,validator:function(c){return ue(c)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},Se=G(G({},Z),{renderAs:{type:String,required:!1,default:"canvas",validator:function(c){return["canvas","svg"].indexOf(c)>-1}}}),Re=j({name:"QRCodeSvg",props:Z,setup:function(c){var a=O(0),h=O(""),l=function(){var f=c.value,d=c.level,r=c.margin,e=L.QrCode.encodeText(f,X[d]).getModules();a.value=e.length+r*2,h.value=de(e,r)};return l(),re(l),function(){return F("svg",{width:c.size,height:c.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(a.value," ").concat(a.value)},[F("path",{fill:c.background,d:"M0,0 h".concat(a.value,"v").concat(a.value,"H0z")}),F("path",{fill:c.foreground,d:h.value})])}}}),$e=j({name:"QRCodeCanvas",props:Z,setup:function(c){var a=O(null),h=function(){var l=c.value,f=c.level,d=c.size,r=c.margin,e=c.background,t=c.foreground,o=a.value;if(o){var s=o.getContext("2d");if(s){var i=L.QrCode.encodeText(l,X[f]).getModules(),u=i.length+r*2,v=window.devicePixelRatio||1,m=d/u*v;o.height=o.width=d*v,s.scale(m,m),s.fillStyle=e,s.fillRect(0,0,u,u),s.fillStyle=t,ye?s.fill(new Path2D(de(i,r))):i.forEach(function(x,E){x.forEach(function(b,y){b&&s.fillRect(y+r,E+r,1,1)})})}}};return V(h),re(h),function(){return F("canvas",{ref:a,style:{width:"".concat(c.size,"px"),height:"".concat(c.size,"px")}})}}}),ke=j({name:"Qrcode",render:function(){var c=this.$props,a=c.renderAs,h=c.value,l=c.size,f=c.margin,d=c.level,r=c.background,e=c.foreground,t=l>>>0,o=f>>>0,s=ue(d)?d:ce;return F(a==="svg"?Re:$e,{value:h,size:t,margin:o,level:s,background:r,foreground:e})},props:Se});const Ae={class:"w-64 p-4 m-auto shadow-lg rounded-2xl bg-gray-800"},Ne={class:"w-full h-full text-center"},Ie={class:"flex flex-col justify-between h-full"},Pe={key:0,class:"flex flex-col items-center"},ze=["href"],Be=["href"],Le=["href"],Fe=["href"],Oe=["href"],De={__name:"imp",props:{is_imp:Boolean},emits:["update:is_imp"],setup(c,{emit:a}){const h=()=>{a("update:is_imp",!1)},l=R(),f=navigator.userAgent,d=()=>window.btoa(l.Subscribe.subscribe_url);return(r,e)=>(p(),g("div",Ae,[n("div",Ne,[n("div",Ie,[_(l).Subscribe!==void 0?(p(),g("div",Pe,[A(ke,{class:"rounded-lg",value:_(l).Subscribe.subscribe_url,level:"L"},null,8,["value"]),_(f).indexOf("Macintosh")!==-1?(p(),g("a",{key:0,class:"mt-2 rounded-lg w-full bg-slate-900 p-2",href:"clash://install-config/?url="+_(l).Subscribe.subscribe_url},"ClashX",8,ze)):M("",!0),_(f).indexOf("iPhone")!==-1?(p(),g($,{key:1},[n("a",{class:"mt-2 rounded-lg w-full bg-slate-900 p-2",href:"shadowrocket://add/sub://"+d()},"shadowrocket",8,Be),n("a",{class:"mt-2 rounded-lg w-full bg-slate-900 p-2",href:"surge:///install-config?url=?url="+_(l).Subscribe.subscribe_url},"surge",8,Le)],64)):M("",!0),_(f).indexOf("Windows")!==-1?(p(),g("a",{key:2,class:"mt-2 rounded-lg w-full bg-slate-900 p-2",href:"clash://install-config/?url="+_(l).Subscribe.subscribe_url},"Clash",8,Fe)):M("",!0),_(f).indexOf("Android")!==-1?(p(),g("a",{key:3,class:"mt-2 rounded-lg w-full bg-slate-900 p-2",href:"clash://install-config/?url="+_(l).Subscribe.subscribe_url},"Clash",8,Oe)):M("",!0)])):M("",!0),n("div",{class:"flex items-center justify-between w-full gap-4 mt-3"},[n("button",{onClick:h,type:"button",class:"py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"}," 关闭 ")])])])]))}},Te={class:"fixed left-0 right-0 bottom-0 top-0"},Ue={class:"w-64 p-4 border border-slate-500 z-50 top-0 bottom-0 fixed right-0 left-0 m-auto inline-table shadow-lg rounded-2xl bg-gray-800"},Qe={class:"w-full h-full text-center"},He={class:"flex flex-col justify-between h-full"},qe=n("svg",{width:"40",height:"40",class:"w-12 h-12 m-auto mt-4 text-indigo-500",fill:"currentColor",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"},[n("path",{d:"M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"})],-1),Ge=n("p",{class:"mt-4 text-xl font-bold text-gray-200"}," 重置订阅链接 ",-1),Ye=n("p",{class:"px-6 py-2 text-xs text-gray-400"}," 如果您的订阅地址或信息发生泄露可以执行此操作。重置后您的 UUID 及订阅将会变更，需要重新导入订阅。 ",-1),Ve={class:"flex items-center justify-between w-full gap-4 mt-8"},Ke={__name:"restart",props:{renode:Function},setup(c){const a=c,h=()=>{ge().then(l=>{P("重置成功","重新导入订阅链接才能正常使用哦～",200,5e3),a.renode()}).catch(()=>{P("重置失败","联系客服～",400,5e3)})};return(l,f)=>(p(),g("div",Te,[n("div",Ue,[n("div",Qe,[n("div",He,[qe,Ge,Ye,n("div",Ve,[n("button",{onClick:f[0]||(f[0]=(...d)=>a.renode&&a.renode(...d)),type:"button",class:"py-2 px-4 bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"}," 取消 "),n("button",{onClick:h,type:"button",class:"py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"}," 确定 ")])])])])]))}},oe=()=>{const a=F(Ke,{renode:()=>{te(null,document.getElementById("Popup"))}});te(a,document.getElementById("Popup"))};const je=c=>(ne("data-v-d3dd2390"),c=c(),ae(),c),We=je(()=>n("label",{for:"switch"},[n("span",{class:"switch-x-text"},"流量/到期邮箱提醒")],-1)),Xe={__name:"email_ll",setup(c){const a=R(),h=se(()=>a.Info.remind_traffic===1),l=f=>{me(f,f).then(d=>{P("修改成功拉",null,200)}).catch(d=>{P("修改失败拉","请重新尝试",400)}).finally(()=>{we().then(d=>{a.Info=d.data.data})})};return(f,d)=>_(a).Info!==void 0?(p(),g("div",{key:0,class:"checkbox-wrapper-35",onClick:d[1]||(d[1]=r=>l(_(a).Info.remind_traffic===1?0:1))},[be(n("input",{value:"private",name:"switch",id:"switch",type:"checkbox","onUpdate:modelValue":d[0]||(d[0]=r=>h.value=r),class:"switch"},null,512),[[xe,h.value]]),We])):M("",!0)}},Ze=W(Xe,[["__scopeId","data-v-d3dd2390"]]);const N=c=>(ne("data-v-f6666f8c"),c=c(),ae(),c),Je={class:"relative flex flex-col gap-5 bg-[#17171a] shadow-slate-800 shadow-lg border-gray-800 border rounded-2xl pt-2 pb-4 text-white"},et=N(()=>n("div",{class:"absolute -top-16 left-0 right-0 m-auto w-24 h-24"},[n("div",{class:"tx"}),n("img",{class:"absolute z-10 overflow-hidden w-24 h-24 rounded-full object-cover",src:_e,alt:""})],-1)),tt={class:"absolute -top-12 right-0 text-white cursor-pointer"},ot={class:"flex gap-3 text-center p-2 mx-2 rounded-lg"},rt={class:"flex-1 flex flex-col rounded-xl"},st={key:0},nt=N(()=>n("div",{class:"text-neutral-300 text-sm flex justify-center gap-1 items-center"},[n("img",{src:ie,alt:""}),n("p",null,"账户余额")],-1)),at={class:"flex-1 flex flex-col rounded-xl"},it={key:0},lt=N(()=>n("div",{class:"text-neutral-300 text-sm flex justify-center gap-1 items-center"},[n("img",{src:ie,alt:""}),n("p",null,"账户佣金")],-1)),ct={class:"flex relative gap-3 text-center p-2 h-16 mx-2 bg-[#17171a] shadow-slate-800 shadow-lg rounded-lg"},ut={class:"flex-1 flex flex-col rounded-xl"},dt=N(()=>n("div",{class:"text-neutral-300 text-sm flex justify-center gap-1 items-center"},[n("img",{class:"w-6",src:le,alt:""}),n("p",{class:"text-slate-400"},"流量")],-1)),ft={class:"flex-1 rounded-xl"},ht=N(()=>n("div",{class:"text-neutral-300 text-sm flex justify-center gap-1 items-center"},[n("img",{class:"w-6",src:le,alt:""}),n("p",{class:"text-slate-400"},"已用流量")],-1)),vt={class:"flex-1 rounded-xl"},_t={class:"text-neutral-300 text-sm flex justify-center gap-1 items-center"},pt=N(()=>n("img",{class:"w-6",src:Me,alt:""},null,-1)),gt={class:"flex gap-5 justify-around"},mt=["onClick"],wt={class:"flex justify-around items-center"},bt=N(()=>n("p",{class:"text-[12px] text-neutral-400"},"Tg讨论群",-1)),xt=N(()=>n("svg",{t:"1694751608470",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4060",width:"16",height:"16"},[n("path",{d:"M679.424 746.862l84.005-395.996c7.424-34.852-12.581-48.567-35.438-40.009L234.277 501.138c-33.72 13.13-33.134 32-5.706 40.558l126.282 39.424 293.156-184.576c13.714-9.143 26.295-3.986 16.018 5.157L426.898 615.973l-9.143 130.304c13.13 0 18.871-5.706 25.71-12.581l61.696-59.429 128 94.282c23.442 13.129 40.01 6.29 46.3-21.724zM1024 512c0 282.843-229.157 512-512 512S0 794.843 0 512 229.157 0 512 0s512 229.157 512 512z",fill:"#1296DB","p-id":"4061"})],-1)),Ct=[bt,xt],Et={key:0,class:"absolute top-0 z-20 right-0 left-0"},Mt={__name:"progress",setup(c){const a=R(),h=O(!1),l=se(()=>{const e=new Date(a.Subscribe.expired_at*1e3),t=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${t}/${o}/${s}`}),f=()=>{window.open(a.Comm_config.telegram_discuss_link,"_blank")},d=e=>{e===1?h.value=!0:navigator.clipboard.writeText(a.Subscribe.subscribe_url).then(()=>{P("复制成功",null,200)}).catch(()=>{P("复制到粘贴板时出错",null,400)})},r=()=>{let e=document.querySelector(".tx"),t=a.Subscribe.d,o=a.Subscribe.transfer_enable,s=(o-t)/o*360;console.log(s);let i=0;const u=setInterval(()=>{i++,e.style.background=`conic-gradient(#30cb30 ${i}deg, black 0deg)`,i>=s&&clearInterval(u)},5)};return V(()=>{const e=setInterval(()=>{a.Subscribe!==void 0&&(a.Subscribe.plan!==null&&r(),clearInterval(e))},1e3)}),(e,t)=>(p(),g($,null,[n("div",Je,[et,n("div",tt,[n("button",{onClick:t[0]||(t[0]=(...o)=>_(oe)&&_(oe)(...o)),class:"p-1 rounded-xl bg-[#e5df72] text-black",type:"button"},"重置订阅")]),n("div",ot,[n("div",rt,[_(a).Info!==void 0?(p(),g("p",st,C((_(a).Info.balance/100).toFixed(2))+"¥",1)):M("",!0),nt]),n("div",at,[_(a).Info!==void 0?(p(),g("p",it,C((_(a).Info.commission_balance/100).toFixed(2))+"¥",1)):M("",!0),lt])]),n("div",ct,[_(a).Subscribe!==void 0?(p(),g($,{key:0},[_(a).Subscribe.plan!==null?(p(),g($,{key:0},[n("div",ut,[n("p",null,C((_(a).Subscribe.transfer_enable/1024/1024/1024).toFixed(2))+"G",1),dt]),n("div",ft,[n("p",null,C((_(a).Subscribe.d/1024/1024/1024).toFixed(2))+"G",1),ht]),n("div",vt,[n("p",{class:T(Date.now()>_(a).Subscribe.expired_at*1e3?"text-red-500 font-bold":"")},C(l.value),3),n("div",_t,[pt,n("p",{class:T(["text-slate-400",Date.now()>_(a).Subscribe.expired_at*1e3?"text-red-500 font-bold":""])},"到期",2)])])],64)):(p(),U(Y,{key:1,title:"暂未订阅！"}))],64)):M("",!0)]),n("div",gt,[(p(),g($,null,Q(["订阅链接","一键导入"],(o,s)=>n("button",{type:"button",onClick:i=>d(s),class:"rounded-xl bg-[#5747f7] text-white w-full mx-3 py-3 cursor-pointer hover:scale-105 hover:transform"},C(o),9,mt)),64))]),n("div",wt,[A(Ze),_(a).Comm_config!==void 0?(p(),g("div",{key:0,class:"flex gap-1 cursor-pointer",onClick:f},Ct)):M("",!0),n("div",null,[n("p",{onClick:t[1]||(t[1]=o=>_(Ee)(!0)),class:"cursor-pointer text-[12px] text-stone-400"},"修改密码")])])]),h.value?(p(),g("div",Et,[A(De,{is_imp:h.value,"onUpdate:is_imp":t[2]||(t[2]=o=>h.value=o)},null,8,["is_imp"])])):M("",!0)],64))}},yt=W(Mt,[["__scopeId","data-v-f6666f8c"]]),St={key:0,class:"flex flex-col gap-4"},Rt={class:"flex gap-3 items-center p-2 bg-slate-800 rounded-lg justify-around"},$t={class:"whitespace-nowrap w-[5rem] overflow-ellipsis overflow-hidden"},kt={class:"whitespace-nowrap overflow-ellipsis overflow-hidden"},At={key:0,class:"border-4 border-green-500 w-0 h-0 rounded-full"},Nt={key:1,class:"border-4 border-red-200 w-0 h-0 rounded-full"},It={__name:"jiedian",setup(c){const a=R();return V(()=>{}),(h,l)=>_(a).ServerList!==void 0&&_(a).ServerList.length>0?(p(),g("div",St,[(p(!0),g($,null,Q(_(a).ServerList,f=>(p(),g("div",Rt,[n("p",$t,C(f.name),1),n("p",kt,C(f.type),1),f.is_online===1?(p(),g("p",At)):(p(),g("p",Nt))]))),256))])):(p(),U(Y,{key:1,title:"暂无订阅"}))}},Pt={class:"flex flex-col gap-5 w-full p-3 rounded-xl h-full"},zt={class:"sticky flex top-0 p-2 shadow-gray-700 shadow-lg text-white rounded-xl gap-5 items-center w-full"},Bt=n("svg",{t:"1692840375669",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5277",width:"32",height:"32"},[n("path",{d:"M509.184 513.1264m-450.816 0a450.816 450.816 0 1 0 901.632 0 450.816 450.816 0 1 0-901.632 0Z",fill:"#FFBC42","p-id":"5278"}),n("path",{d:"M588.2368 253.5424a50.32448 50.32448 0 0 0-49.2032-2.3552L326.3488 356.608H240.2304c-27.904 0-50.6368 22.7328-50.6368 50.6368v200.0896c0 27.904 22.7328 50.6368 50.6368 50.6368h86.2208l212.9408 103.5264c7.0656 3.4304 14.6432 5.12 22.1696 5.12 9.3184 0 18.5856-2.6112 26.8288-7.7312a50.2784 50.2784 0 0 0 23.7568-42.9056V296.5504c0-17.6128-8.9088-33.6896-23.9104-43.008z m-222.0544 318.6688a33.28 33.28 0 1 1-66.56 0V444.928a33.28 33.28 0 1 1 66.56 0v127.2832zM669.44 370.432c-11.264 0-22.2208-5.6832-28.4672-16.0256-9.5232-15.7184-4.5568-36.1984 11.1616-45.7216l68.4032-41.5744c15.7184-9.5232 36.1984-4.5568 45.7216 11.1616 9.5232 15.7184 4.5568 36.1984-11.1616 45.7216l-68.4032 41.5744c-5.376 3.2768-11.3664 4.864-17.2544 4.864zM773.632 539.392h-77.9264a33.28 33.28 0 1 1 0-66.56h77.9264a33.28 33.28 0 1 1 0 66.56zM737.792 752.2304a32.8192 32.8192 0 0 1-16.9984-4.7104l-68.4032-40.704c-15.8208-9.3696-20.992-29.7984-11.5712-45.6192a33.28 33.28 0 0 1 45.6192-11.5712l68.4032 40.704c15.8208 9.3696 20.992 29.7984 11.5712 45.6192a33.1264 33.1264 0 0 1-28.6208 16.2816z",fill:"#FFFFFF","p-id":"5279"})],-1),Lt={class:"indent-4 overflow-scroll h-full"},Ft=["innerHTML"],Ot={class:"flex justify-center gap-5"},Dt=["onClick"],Tt={__name:"bulletin",setup(c){const a=O(0);return R().Bulletin,(h,l)=>(p(),g("div",Pt,[_(R)().Bulletin!==void 0?(p(),g($,{key:0},[n("h1",zt,[Bt,Ce(" "+C(_(R)().Bulletin[a.value].title),1)]),n("div",Lt,[n("div",{innerHTML:_(R)().Bulletin[a.value].content},null,8,Ft)]),n("div",Ot,[(p(!0),g($,null,Q(_(R)().Bulletin,(f,d)=>(p(),g("span",{class:T(["border-[6px] rounded-2xl cursor-pointer",d===a.value?"border-blue-600":""]),onClick:r=>a.value=d},null,10,Dt))),256))])],64)):(p(),U(Y,{key:1,title:h.暂无公告},null,8,["title"]))]))}};const Ut={key:0,class:"w-full h-full relative"},Qt={class:"flex absolute top-0 bottom-0 left-0 right-0 m-auto"},Ht={class:"flex flex-col gap-5 whitespace-nowrap overflow-scroll"},qt={class:"a1 items-center"},Gt={class:"w-[6rem] overflow-ellipsis overflow-hidden"},Yt={class:"w-[8rem] ml-5 overflow-ellipsis overflow-hidden"},Vt={class:"w-[4rem] ml-5 overflow-ellipsis overflow-hidden"},Kt=["onClick"],jt={__name:"oderlist",setup(c){const a=R();V(()=>{});const h=l=>{let f=a.OderList[l].trade_no;navigator.clipboard.writeText(f).then(()=>{P("复制成功",null,200)})};return(l,f)=>_(a).OderList!==void 0&&_(a).OderList.length>0?(p(),g("div",Ut,[n("div",Qt,[n("div",Ht,[(p(!0),g($,null,Q(_(a).OderList,(d,r)=>(p(),g("div",qt,[n("p",{class:T(["px-1 text-sm mr-5 text-center rounded-[5px] w-[5rem]",d.status===0?"text-yellow-600 cursor-pointer  bg-yellow-200":d.status===2?"text-red-600 cursor-no-drop bg-red-200":"text-green-600  bg-green-200"]),style:{"line-height":"25px"}},C(d.status===0?"待支付":d.status===2?"支付取消":"支付成功"),3),n("p",Gt,C(d.plan.name),1),n("p",Yt,C(d.trade_no),1),n("p",Vt,C((d.total_amount/100).toFixed(2)),1),n("span",{onClick:e=>h(r),class:"p-2 ml-5 bg-[#5747f7] rounded-lg cursor-pointer"},"复制订单",8,Kt)]))),256))])])])):(p(),U(Y,{key:1,title:"暂无订单"}))}},Wt=W(jt,[["__scopeId","data-v-01a846f2"]]),Xt={class:"flex gap-10 justify-between h-full overflow-y-scroll overflow-x-hidden flex-col lg:flex-row"},Zt={class:"left mt-20 lg:w-[23rem] lg:p-2"},Jt={class:"relative"},eo={class:"mt-5 h-[19rem] bg-[#17171a] rounded-xl border border-gray-800"},to={class:"right w-full lg:w-2/3"},oo={class:"flex sm:flex-row sm:gap-12 gap-5 flex-col mt-20 lg:h-[21rem] bg-[#17171a] p-5 rounded-xl"},ro={class:"left lg:w-1/3 rounded-xl"},so=n("h1",{class:"px-4 py-2 shadow-gray-700 shadow-lg rounded-2xl"},"节点在线情况 ",-1),no={class:"mt-5 relative w-full h-[15rem] lg:h-[80%] overflow-y-scroll"},ao={class:"right lg:w-2/3 flex-auto flex flex-col"},io={class:"flex gap-10"},lo=["onClick"],co={class:"h-[16rem] mt-5 w-full overflow-hidden"},uo={key:1,class:"relative w-full h-full"},fo={class:"flex absolute top-0 bottom-0 left-0 right-0 m-auto"},mo={__name:"Home",setup(c){const a=O(0);return(h,l)=>(p(),g("div",Xt,[n("div",Zt,[n("div",Jt,[A(yt)]),n("div",eo,[A(Tt)])]),n("div",to,[A(ve),n("div",oo,[n("div",ro,[so,n("div",no,[A(It)])]),n("div",ao,[n("div",io,[(p(),g($,null,Q(["订单详情","工单"],(f,d)=>n("p",{onClick:r=>a.value=d,class:T([a.value===d?"shadow-gray-700 shadow-lg ":"","rounded-2xl px-4 py-2 cursor-pointer"])},C(f),11,lo)),64))]),n("div",co,[a.value===0?(p(),U(Wt,{key:0})):(p(),g("div",uo,[n("div",fo,[A(pe)])]))])])])])]))}};export{mo as default};