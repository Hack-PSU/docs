"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[231],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(a),y=r,m=c["".concat(i,".").concat(y)]||c[y]||d[y]||o;return a?n.createElement(m,p(p({ref:t},s),{},{components:a})):n.createElement(m,p({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:r,p[1]=l;for(var u=2;u<o;u++)p[u]=a[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},2589:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:5,id:"page-layout"},p="Page Layout",l={unversionedId:"admin-web-app/page-layout",id:"admin-web-app/page-layout",title:"Page Layout",description:"NextJS allows pages to have nested layouts that will wrap around the page when it is rendered.",source:"@site/docs/admin-web-app/05-Page Layout.md",sourceDirName:"admin-web-app",slug:"/admin-web-app/page-layout",permalink:"/docs/admin-web-app/page-layout",draft:!1,editUrl:"https://github.com/Hack-PSU/docs/docs/admin-web-app/05-Page Layout.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"page-layout"},sidebar:"mobileApp",previous:{title:"Table",permalink:"/docs/admin-web-app/components/table"},next:{title:"Hooks",permalink:"/docs/category/hooks"}},i={},u=[{value:"Default Layout",id:"default-layout",level:2},{value:"Usage",id:"usage",level:3}],s={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"page-layout"},"Page Layout"),(0,r.kt)("p",null,"NextJS allows pages to have nested layouts that will wrap around the page when it is rendered."),(0,r.kt)("h2",{id:"default-layout"},"Default Layout"),(0,r.kt)("p",null,"The most common layout that each page should use except those without a logged-in state, is the Default Layout.\nAn ",(0,r.kt)("em",{parentName:"p"},"HOC")," is used to render the required components and integrate it within the page."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type withDefaultLayout = <TProps>(page: NextPageLayout<TProps>) => NextPageLayout<TProps>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"withDefaultLayout")," takes a page component and renders out the required layout components."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const Page: NextPage<Props> = () => {\n  return (\n    <PageContent />\n  );\n};\n\nexport default withDefaultLayout(Page);\n")))}c.isMDXComponent=!0}}]);