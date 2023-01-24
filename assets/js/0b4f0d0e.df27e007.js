"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[256],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(t),c=r,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return t?a.createElement(h,l(l({ref:n},d),{},{components:t})):a.createElement(h,l({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7672:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:3,id:"form-handling"},l="Form Handling",i={unversionedId:"admin-web-app/form-handling",id:"admin-web-app/form-handling",title:"Form Handling",description:"The admin web app relies heavily on form handling and managing form states. To simplify this, there are some",source:"@site/docs/admin-web-app/03-Form Handling.md",sourceDirName:"admin-web-app",slug:"/admin-web-app/form-handling",permalink:"/docs/admin-web-app/form-handling",draft:!1,editUrl:"https://github.com/Hack-PSU/docs/docs/admin-web-app/03-Form Handling.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"form-handling"},sidebar:"mobileApp",previous:{title:"Getting Started",permalink:"/docs/admin-web-app/getting-started"},next:{title:"API",permalink:"/docs/admin-web-app/api"}},p={},s=[{value:"Variants",id:"variants",level:2},{value:"Base Input",id:"base-input",level:3},{value:"Labelled Input",id:"labelled-input",level:3},{value:"Generating Types",id:"generating-types",level:4},{value:"Building a Labelled Input",id:"building-a-labelled-input",level:4},{value:"Controlled Input",id:"controlled-input",level:3},{value:"Generating Types",id:"generating-types-1",level:4},{value:"Building a Controlled Input",id:"building-a-controlled-input",level:4},{value:"Polymorphic Components",id:"polymorphic-components",level:4},{value:"Using Controlled Forms",id:"using-controlled-forms",level:4}],d={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"form-handling"},"Form Handling"),(0,r.kt)("p",null,"The admin web app relies heavily on form handling and managing form states. To simplify this, there are some\nabstractions built into designing handling a complex form that can multiple pages, conditionally showing form fields,\nand building simple forms quickly."),(0,r.kt)("p",null,"Every form type (text fields, select fields, checkboxes, etc.) has three variants. These three variants have specific\ntype generics to provide easy integration to building new form types."),(0,r.kt)("h2",{id:"variants"},"Variants"),(0,r.kt)("h3",{id:"base-input"},"Base Input"),(0,r.kt)("p",null,"The base input variant is the basis of the form type. This is an implementation of an input element that applies\nthe default styles and functionalities; it should be generic and extensible. For this documentation we will assume\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseInputProps")," is the type used for the input element props and ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseInput")," is the name of the component."),(0,r.kt)("h3",{id:"labelled-input"},"Labelled Input"),(0,r.kt)("p",null,"The labelled input variant is built with the addition of an input label. Labelled inputs show custom error messages\nsurrounding the input element."),(0,r.kt)("h4",{id:"generating-types"},"Generating Types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type LabelledBaseInputProps = WithLabelledProps<BaseInputProps>\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"WithLabelledProps")," type generic will include default props for a labelled input."),(0,r.kt)("h4",{id:"building-a-labelled-input"},"Building a Labelled Input"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const LabelledBaseInput: FC<LabelledBaseInputProps> = ({ id, label, showError, error, ...props }) => {\n  return (\n    <>\n      <InputLabel id={id} showError={showError} label={label} error={error} />\n      <Box mt={0.6}>\n        <BaseInput error={error} {...props} />\n      </Box>\n    </>\n  );\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"InputLabel")," component is a generic component to display an error and a label for a given input element. "),(0,r.kt)("h3",{id:"controlled-input"},"Controlled Input"),(0,r.kt)("p",null,"The controlled input is a variant that uses ",(0,r.kt)("inlineCode",{parentName:"p"},"react-hook-form")," to manage states of form input into a single source\nof truth. It exposes a React context that provides the ability to watch for values, react to changes, and\nrender input elements deep within an element tree."),(0,r.kt)("h4",{id:"generating-types-1"},"Generating Types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type ControlledBaseInputProps = WithControllerProps<\n  BaseInputProps & Partial<InputLabelProps>\n>;\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ControlledBaseInputProps")," combines the functionalities of a ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseInput")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"LabelledBaseInput"),"."),(0,r.kt)("h4",{id:"building-a-controlled-input"},"Building a Controlled Input"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const ControlledBaseInput: FC<ControlledBaseInputProps> = ({  \n  as: Component,\n  name,\n  rules,\n  defaultValue,\n  ...props\n}) => {\n  const {\n    field: { onChange, onBlur, value },\n    fieldState: { error }\n  } = useController({ name, rules, defaultValue });\n  \n  if (Component) {\n    return (\n      <Component \n        onChange={onChange}\n        onBlur={onBlur}\n        value={value}\n        error={error?.message ?? ""}\n        {...props}\n      />\n    );\n  } \n  \n  return (\n    <BaseInput\n      onChange={onChange}\n      onBlur={onBlur}\n      value={value}\n      error={error?.message ?? ""}\n      {...props}\n    />\n  );\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ControlledBaseInput")," uses a ",(0,r.kt)("inlineCode",{parentName:"p"},"useController")," hook from ",(0,r.kt)("inlineCode",{parentName:"p"},"react-hook-form")," to attach itself into the global form\nhandling context."),(0,r.kt)("h4",{id:"polymorphic-components"},"Polymorphic Components"),(0,r.kt)("p",null,"In addition to the context approach of managing states, a controlled input can also accept the styles or functionality\nof other similar input elements. This approach is called ",(0,r.kt)("strong",{parentName:"p"},"Polymorphic")," components and is done through the\n",(0,r.kt)("inlineCode",{parentName:"p"},"as")," prop in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ControlledBaseInput")," component."),(0,r.kt)("p",null,"If we have a component called ",(0,r.kt)("inlineCode",{parentName:"p"},"StyledInput")," that is implemented using ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseInput"),", we can render ",(0,r.kt)("inlineCode",{parentName:"p"},"ControlledBaseInput"),"\nusing ",(0,r.kt)("inlineCode",{parentName:"p"},"StyledInput")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseInput"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const StyledInput: FC<BaseInputProps> = (props) => {\n  return (\n    <BaseInput\n      {/* other styling props */}\n      {...props}\n    />\n  );\n}\n\n// In main form page\n<ControlledBaseInput\n  as={StyledInput}\n  {...props}\n/>\n")),(0,r.kt)("h4",{id:"using-controlled-forms"},"Using Controlled Forms"),(0,r.kt)("p",null,"To use a controlled form, there needs to be a ",(0,r.kt)("a",{parentName:"p",href:"https://react-hook-form.com/api/formprovider"},(0,r.kt)("inlineCode",{parentName:"a"},"FormProvider"))," present\nwithin the form page. "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When creating forms that span multiple pages, for example a stepper or multistep form designs, use separate\n",(0,r.kt)("inlineCode",{parentName:"p"},"FormProvider")," and opt for a global state management -- we use ",(0,r.kt)("inlineCode",{parentName:"p"},"zustand")," in this project.")),(0,r.kt)("p",null,"Set up the ",(0,r.kt)("inlineCode",{parentName:"p"},"FormProvider")," integration using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,r.kt)("inlineCode",{parentName:"p"},"react-hook-form"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const methods = useForm({\n  defaultValues: {\n    //...insert default fields and their values\n    //...make sure default fields match their controlled input names\n  }\n});\n\n<FormProvider {...methods}>\n  {/* insert controlled form components */}\n</FormProvider>\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Like any other React context, we can wrap ",(0,r.kt)("inlineCode",{parentName:"p"},"FormProvider")," around the entire page and not only the controlled form\ncomponents.")))}u.isMDXComponent=!0}}]);