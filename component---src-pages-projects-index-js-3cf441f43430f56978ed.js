"use strict";(self.webpackChunkmogonzal_website=self.webpackChunkmogonzal_website||[]).push([[216],{8032:function(e,t,a){a.d(t,{G:function(){return P},L:function(){return h},M:function(){return C},P:function(){return E},_:function(){return o},a:function(){return l},b:function(){return m},c:function(){return c},g:function(){return u},h:function(){return i}});var r=a(7294),n=(a(2369),a(5697)),s=a.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const i=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function m(e,t,a,r,n){return void 0===n&&(n={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,s,o,i){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),i&&(c.objectPosition=i);const d=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const g=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,a=o(e,g);return r.createElement(r.Fragment,null,r.createElement(p,l({},a)),t,null)},y=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:i}=e,c=o(e,y);return r.createElement("img",l({},c,{decoding:"async",loading:n,src:i?t:void 0,"data-src":i?void 0:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,alt:s}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=o(e,f);const i=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(b,l({},s,t,{sizes:i,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:i})})),c):c};var w;b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const x=["fallback"],E=function(e){let{fallback:t}=e,a=o(e,x);return t?r.createElement(v,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(w=v.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const C=function(e){return r.createElement(r.Fragment,null,r.createElement(v,l({},e)),r.createElement("noscript",null,r.createElement(v,l({},e,{shouldLoad:!0}))))};C.displayName="MainImage",C.propTypes=v.propTypes;const N=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],k=["style","className"],L=e=>e.replace(/\n/g,""),S=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},T={image:s().object.isRequired,alt:S},I=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],O=new Set;let z,_;const q=function(e){let{as:t="div",image:n,style:s,backgroundColor:c,className:m,class:u,onStartLoad:g,onLoad:p,onError:h}=e,y=o(e,I);const{width:f,height:b,layout:v}=n,w=d(f,b,v),{style:x,className:E}=w,C=o(w,j),N=(0,r.useRef)(),k=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);u&&(m=u);const L=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,f,b);return(0,r.useEffect)((()=>{z||(z=Promise.all([a.e(774),a.e(731)]).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return _=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=N.current.querySelector("[data-gatsby-image-ssr]");if(e&&i())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void O.add(k);if(_&&O.has(k))return;let t,r;return z.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;N.current&&(N.current.innerHTML=a(l({isLoading:!0,isLoaded:O.has(k),image:n},y)),O.has(k)||(t=requestAnimationFrame((()=>{N.current&&(r=o(N.current,k,O,s,g,p,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{O.has(k)&&_&&(N.current.innerHTML=_(l({isLoading:O.has(k),isLoaded:O.has(k),image:n},y)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,l({},C,{style:l({},x,s,{backgroundColor:c}),className:E+(m?" "+m:""),ref:N,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},P=(0,r.memo)((function(e){return e.image?(0,r.createElement)(q,e):null}));P.propTypes=T,P.displayName="GatsbyImage";const A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function F(e){return function(t){let{src:a,__imageData:n,__error:s}=t,i=o(t,A);return s&&console.warn(s),n?r.createElement(e,l({image:n},i)):(console.warn("Image not loaded",a),null)}}const M=F((function(e){let{as:t="div",className:a,class:n,style:s,image:i,loading:c="lazy",imgClassName:g,imgStyle:p,backgroundColor:y,objectFit:f,objectPosition:b}=e,v=o(e,N);if(!i)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),p=l({objectFit:f,objectPosition:b,backgroundColor:y},p);const{width:w,height:x,layout:S,images:T,placeholder:I,backgroundColor:j}=i,O=d(w,x,S),{style:z,className:_}=O,q=o(O,k),P={fallback:void 0,sources:[]};return T.fallback&&(P.fallback=l({},T.fallback,{srcSet:T.fallback.srcSet?L(T.fallback.srcSet):void 0})),T.sources&&(P.sources=T.sources.map((e=>l({},e,{srcSet:L(e.srcSet)})))),r.createElement(t,l({},q,{style:l({},z,s,{backgroundColor:y}),className:_+(a?" "+a:"")}),r.createElement(h,{layout:S,width:w,height:x},r.createElement(E,l({},u(I,!1,S,w,x,j,f,b))),r.createElement(C,l({"data-gatsby-image-ssr":"",className:g},v,m("eager"===c,!1,P,c,p)))))})),R=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),D={src:s().string.isRequired,alt:S,width:R,height:R,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};M.displayName="StaticImage",M.propTypes=D;const G=F(P);G.displayName="StaticImage",G.propTypes=D},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const s=e[n];t&&/[a-zA-Z]/.test(s)&&s.toUpperCase()===s?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(s)&&s.toLowerCase()===s?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=s.toLowerCase()===s&&s.toUpperCase()!==s,r=a,a=s.toUpperCase()===s&&s.toLowerCase()!==s)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},8678:function(e,t,a){var r=a(7294),n=a(5347);t.Z=e=>{let{pageTitle:t,date:a=null,children:s}=e;return r.createElement("div",{className:"flex flex-col h-screen"},r.createElement(n.Z,{pageTitle:t}),r.createElement("header",{id:"header",className:"text-gray-800 py-4 sm:py-6 px-4 sm:px-6 space-y-2 shadow"},r.createElement("p",{className:"text-center text-2xl sm:text-3xl font-bold tracking-tight"},t),null!=a&&r.createElement("p",{className:"text-center text-sm sm:text-base font-bold tracking-tight"},a)),r.createElement("main",{id:"main",className:""},r.createElement("div",{className:"py-4 sm:py-6 px-4 sm:px-6 text-gray-800 flex justify-center"},s)),r.createElement("footer",{id:"footer",className:"text-gray-400 py-4 px-8 mt-auto"},r.createElement("p",{className:"text-center text-[0.5rem] sm:text-sm"},"© ",(new Date).getFullYear()," Michael Gonzalez. All rights reserved.")))}},6945:function(e,t,a){a.r(t),a.d(t,{Head:function(){return h},default:function(){return y}});var r=a(7294),n=a(8678),s=a(1883),l=a(8032),o=a(5462);const i={coding:"bg-green-400 text-white",mechanical:"bg-gray-500 text-gray-100",personal:"bg-red-800 text-white",caltech:"bg-orange-500 text-orange-100",misc:"bg-green-800 text-black"};function c(e){return e in i?i[e.toLowerCase()]:"bg-gray-200 text-black"}var d=e=>{let{text:t}=e;return r.createElement("div",{className:(0,o.bn)(c(t),"rounded-md text-xs sm:text-sm mx-[1px] my-[1px]")},r.createElement("p",{className:"px-1"},t))},m=a(9417),u=a(982);var g=e=>{let{data:t,active:a}=e;const n=(0,l.c)(t.frontmatter.thumbnail),i=a?"grayscale-0":"grayscale opacity-50";return r.createElement("div",null,r.createElement("div",{className:(0,o.bn)(i,"overflow-hidden rounded-lg bg-gray-100 border-gray-300 border transition ease-in-out shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-[1.05] hover:opacity-100")},r.createElement(s.Link,{to:"/projects/"+t.frontmatter.slug},r.createElement("div",{className:"shadow"},r.createElement(l.G,{image:n,alt:t.frontmatter.thumnbnail_alt,className:"h-full w-full object-cover",imgClassName:""})),r.createElement("div",{className:"text-gray-800 py-1 sm:py-2 px-1 sm:px-2 shadow"},r.createElement("p",{className:"text-center text-sm sm:text-lg text-wrap font-bold tracking-tight"},t.frontmatter.title)),r.createElement("div",{className:"py-1 sm:py-2 px-2 sm:px-4 flex items-center shadow text-gray-800"},r.createElement(u.G,{icon:m.tho}),r.createElement("div",{className:"w-full h-full flex flex-wrap items-center pl-2"},t.frontmatter.tags.map((e=>r.createElement(d,{text:e}))))))))};var p=e=>{let{placeholderText:t,onChangeFunc:a,macroClasses:n=""}=e;return r.createElement("div",{className:n},r.createElement("div",{className:"relative shadow-sm"},r.createElement("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-800"},r.createElement(u.G,{icon:m.Y$T})),r.createElement("input",{type:"text",name:"search",className:"block w-full rounded-lg border-gray-300 text-gray-800 pl-9 pr-12 focus:border-gray-300 focus:shadow-sm focus:ring-0 sm:text-sm",onChange:a,placeholder:t})))};const h=()=>r.createElement("title",null,"Projects");var y=e=>{let{data:t}=e;const{0:a,1:s}=(0,r.useState)([]),{0:l,1:i}=(0,r.useState)([]),c=e=>!(a.length+l.length)||(!!a.some((t=>e.frontmatter.title.toLowerCase().includes(t.toLowerCase())))||!!l.some((t=>(0,o.q3)(t,e.frontmatter.tags))));return r.createElement(r.Fragment,null,r.createElement(n.Z,{pageTitle:"Projects"},r.createElement("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6"},r.createElement("div",{className:"col-span-2 sm:col-span-1 sm:row-span-6 space-y-2 sm:space-y-3"},r.createElement(p,{onChangeFunc:e=>{console.log(a),s(e.target.value.split(/,| /).filter(Boolean))},placeholderText:"search by name"}),r.createElement(p,{onChangeFunc:e=>{console.log(a),i(e.target.value.split(/,| /).filter(Boolean))},placeholderText:"search by tag"})),t.allMdx.nodes.filter((e=>c(e))).map((e=>r.createElement(g,{data:e,active:!0}))),t.allMdx.nodes.filter((e=>!c(e))).map((e=>r.createElement(g,{data:e,active:!1}))))))}}}]);
//# sourceMappingURL=component---src-pages-projects-index-js-3cf441f43430f56978ed.js.map