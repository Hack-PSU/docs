"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[532],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(n),u=a,v=s["".concat(p,".").concat(u)]||s[u]||m[u]||o;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5076:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2,id:"getting-started"},i="Getting Started",l={unversionedId:"admin-web-app/getting-started",id:"admin-web-app/getting-started",title:"Getting Started",description:"To install dependencies you will need the latest version of Node. The project is configured",source:"@site/docs/admin-web-app/02-Getting Started.md",sourceDirName:"admin-web-app",slug:"/admin-web-app/getting-started",permalink:"/docs/admin-web-app/getting-started",draft:!1,editUrl:"https://github.com/Hack-PSU/docs/docs/admin-web-app/02-Getting Started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"getting-started"},sidebar:"mobileApp",previous:{title:"Overview",permalink:"/docs/admin-web-app/overview"},next:{title:"Form Handling",permalink:"/docs/admin-web-app/form-handling"}},p={},d=[{value:"Local Development",id:"local-development",level:2},{value:"Code Style",id:"code-style",level:3},{value:"Environment Variables",id:"environment-variables",level:3}],c={toc:d};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"To install dependencies you will need the latest version of ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node"),". The project is configured\nto use ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," version >=2.0.0."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," can be downloaded through ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," after downloading node."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g yarn\n")),(0,a.kt)("h2",{id:"local-development"},"Local Development"),(0,a.kt)("p",null,"Clone the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Hack-PSU/admin-web-app"},"repo")," into your current directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:Hack-PSU/admin-web-app.git \\\ncd admin-web-app\n")),(0,a.kt)("p",null,"Install dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn\n")),(0,a.kt)("p",null,"To start a local development server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn dev\n")),(0,a.kt)("h3",{id:"code-style"},"Code Style"),(0,a.kt)("p",null,"To maintain code style and consistency in a larger project like this, configure your editor to use the eslint\nand prettier configurations found in the repo. ",(0,a.kt)("inlineCode",{parentName:"p"},"husky")," is also configured in this project, which will enforce the\neslint and prettier configurations on ",(0,a.kt)("inlineCode",{parentName:"p"},"git commit"),"."),(0,a.kt)("h3",{id:"environment-variables"},"Environment Variables"),(0,a.kt)("p",null,"There are a number of set environment variables for each development environment. To be able to load them into the\ndevelopment server create a local ",(0,a.kt)("inlineCode",{parentName:"p"},".env.local")," file, which is not included in git."),(0,a.kt)("p",null,"For a dev environment, copy all the variables from ",(0,a.kt)("inlineCode",{parentName:"p"},".env.development")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},".env.local")," file and prefix all the\nvariables with ",(0,a.kt)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NEXT_PUBLIC_<variable name>=<variable value>\n")),(0,a.kt)("p",null,"For a prod environment, copy all the variables from ",(0,a.kt)("inlineCode",{parentName:"p"},".env.production")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},".env.local"),", overriding any existing\nduplicate variables and repeat the step above."))}s.isMDXComponent=!0}}]);