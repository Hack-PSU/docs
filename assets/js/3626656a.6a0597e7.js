"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[637],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return t?o.createElement(f,l(l({ref:n},u),{},{components:t})):o.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},480:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=t(7462),a=(t(7294),t(3905));const r={sidebar_position:2,id:"use-column-def"},l="useColumnDef",i={unversionedId:"admin-web-app/hooks/use-column-def",id:"admin-web-app/hooks/use-column-def",title:"useColumnDef",description:"The useColumnDef hook provides a typed format to defining columns and customizing the cells shown in the Table.",source:"@site/docs/admin-web-app/hooks/02-useColumnDef.md",sourceDirName:"admin-web-app/hooks",slug:"/admin-web-app/hooks/use-column-def",permalink:"/docs/admin-web-app/hooks/use-column-def",draft:!1,editUrl:"https://github.com/Hack-PSU/docs/docs/admin-web-app/hooks/02-useColumnDef.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"use-column-def"},sidebar:"mobileApp",previous:{title:"useTable",permalink:"/docs/admin-web-app/hooks/use-table"}},s={},p=[{value:"Options",id:"options",level:2},{value:"<code>columns</code>",id:"columns",level:3},{value:"<code>useRowSelection</code>",id:"userowselection",level:3},{value:"<code>usePageRowSelection</code>",id:"usepagerowselection",level:3}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usecolumndef"},"useColumnDef"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useColumnDef")," hook provides a typed format to defining columns and customizing the cells shown in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Table"),".\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"Table")," component provides defaults for cells showing an input field and text field, but a custom cell can be\ncreated using the hook in which the ",(0,a.kt)("inlineCode",{parentName:"p"},"Table")," will respect given a user-defined cell component. "),(0,a.kt)("p",null,"The hook returns an object of metadata information for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Table")," and should all be included in the ",(0,a.kt)("inlineCode",{parentName:"p"},"useTable")," hook."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type useColumnDef = <TData extends RowData>(\n  options: UseColumnDefOptions<TData>\n) => UseColumnDefReturn<TData>\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"columns"},(0,a.kt)("inlineCode",{parentName:"h3"},"columns")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'type TableColumnDef<TData extends RowData> = ColumnDef<TData> & {\n  type: "input" | "text" | "custom";\n  format?: (value: unknown) => string;\n  inputName?: string;\n  placeholder?: string;\n}\n\ncolumns: TableColumnDef<TData>[];\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"columns")," option extends the ",(0,a.kt)("a",{parentName:"p",href:"https://tanstack.com/table/v8/docs/api/core/column-def"},"ColumnDef")," type from\nReact Table by providing an interface for default cell components. The ",(0,a.kt)("inlineCode",{parentName:"p"},"format")," field in a column definition sets\nthe column's ",(0,a.kt)("a",{parentName:"p",href:"/docs/admin-web-app/hooks/use-table#formatter"},"formatter"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"inputName")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"placeholder")," is only required\nwhen the ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," field is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"input"),"."),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"input")," type also requires a ",(0,a.kt)("inlineCode",{parentName:"p"},"FormProvider")," to work properly\n(see ",(0,a.kt)("a",{parentName:"p",href:"/docs/admin-web-app/form-handling"},"form handling"),")."),(0,a.kt)("h3",{id:"userowselection"},(0,a.kt)("inlineCode",{parentName:"h3"},"useRowSelection")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"useRowSelection?: boolean\n")),(0,a.kt)("p",null,"Toggles whether row selection should be used. By default, a row selection action will be available on all default\nrow configurations. This flag does not differentiate between different pages -- row selections will span across multiple\ntable pages. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("h3",{id:"usepagerowselection"},(0,a.kt)("inlineCode",{parentName:"h3"},"usePageRowSelection")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"usePageRowSelection?: boolean\n")),(0,a.kt)("p",null,"Toggles whether the header row selection action should select rows per table page. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"There is a bug when using this in which the header row checkbox is not able to deselect selected rows when all rows\nare selected. This is why ",(0,a.kt)("inlineCode",{parentName:"p"},"useRowSelection")," is set as the default.")))}c.isMDXComponent=!0}}]);