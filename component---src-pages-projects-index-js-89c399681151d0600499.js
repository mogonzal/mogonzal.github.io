"use strict";(self.webpackChunkmogonzal_website=self.webpackChunkmogonzal_website||[]).push([[216],{1366:function(e,t,a){a.r(t),a.d(t,{Head:function(){return g},default:function(){return f}});var l=a(7294),r=a(1883),n=a(8678),s=a(8032),c=a(9373),o=a(5462),m=a(9417),i=a(982);var d=e=>{let{data:t,active:a}=e;const n=(0,s.c)(t.frontmatter.thumbnail),d=a?"grayscale-0":"grayscale opacity-50";return l.createElement("div",null,l.createElement("div",{className:(0,o.b)(d,"overflow-hidden rounded-lg bg-gray-100 border-gray-300 border transition ease-in-out shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-[1.05] hover:opacity-100")},l.createElement(r.rU,{to:"/projects/"+t.frontmatter.slug},l.createElement("div",{className:"shadow"},l.createElement(s.G,{image:n,alt:t.frontmatter.thumnbnail_alt,className:"h-full w-full object-cover",imgClassName:""})),l.createElement("div",{className:"text-gray-800 py-1 sm:py-2 px-1 sm:px-2 shadow"},l.createElement("p",{className:"text-center text-sm sm:text-lg text-wrap font-bold tracking-tight"},t.frontmatter.title)),l.createElement("div",{className:"py-1 sm:py-2 px-2 sm:px-4 flex items-center shadow text-gray-800"},l.createElement(i.G,{icon:m.tho}),l.createElement("div",{className:"w-full h-full flex flex-wrap items-center pl-2"},t.frontmatter.tags.map((e=>l.createElement(c.Z,{text:e}))))))))},p=a(251);const g=()=>l.createElement("title",null,"Projects");var f=e=>{let{data:t}=e;const{0:a,1:r}=(0,l.useState)([]),{0:s,1:c}=(0,l.useState)([]),m=e=>!(a.length+s.length)||(!!a.some((t=>e.frontmatter.title.toLowerCase().includes(t.toLowerCase())))||!!s.some((t=>(0,o.q)(t,e.frontmatter.tags))));return l.createElement(l.Fragment,null,l.createElement(n.Z,{pageTitle:"Projects"},l.createElement("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6"},l.createElement("div",{className:"col-span-2 sm:col-span-1 sm:row-span-6 space-y-2 sm:space-y-3"},l.createElement(p.Z,{onChangeFunc:e=>{console.log(a),r(e.target.value.split(/,| /).filter(Boolean))},placeholderText:"search by name"}),l.createElement(p.Z,{onChangeFunc:e=>{console.log(a),r(e.target.value.split(/,| /).filter(Boolean))},placeholderText:"search by tag"})),t.allMdx.nodes.filter((e=>m(e))).map((e=>l.createElement(d,{data:e,active:!0}))),t.allMdx.nodes.filter((e=>!m(e))).map((e=>l.createElement(d,{data:e,active:!1}))),t.allMdx.nodes.filter((e=>m(e))).map((e=>l.createElement(d,{data:e,active:!0}))),t.allMdx.nodes.filter((e=>!m(e))).map((e=>l.createElement(d,{data:e,active:!1}))),t.allMdx.nodes.filter((e=>m(e))).map((e=>l.createElement(d,{data:e,active:!0}))),t.allMdx.nodes.filter((e=>!m(e))).map((e=>l.createElement(d,{data:e,active:!1}))),t.allMdx.nodes.filter((e=>m(e))).map((e=>l.createElement(d,{data:e,active:!0}))),t.allMdx.nodes.filter((e=>!m(e))).map((e=>l.createElement(d,{data:e,active:!1}))))))}}}]);
//# sourceMappingURL=component---src-pages-projects-index-js-89c399681151d0600499.js.map