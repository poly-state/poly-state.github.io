"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[808],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,v=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(v,s(s({ref:t},c),{},{components:r})):n.createElement(v,s({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2515:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],l={id:"redux-devtools",title:"Redux DevTools",slug:"/redux-devtools",sidebar_label:"Redux DevTools"},i="Redux DevTools",u={unversionedId:"React Essentials/redux-devtools",id:"React Essentials/redux-devtools",title:"Redux DevTools",description:"It is possible to debug store changes using the Redux DevTools. It can be used as a browser extension (for Chrome, Edge and Firefox), as a standalone app or as a React component integrated in the client app.",source:"@site/docs/03-React Essentials/02-redux-devtools.md",sourceDirName:"03-React Essentials",slug:"/redux-devtools",permalink:"/docs/redux-devtools",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"redux-devtools",title:"Redux DevTools",slug:"/redux-devtools",sidebar_label:"Redux DevTools"},sidebar:"defaultSidebar",previous:{title:"Quick Start",permalink:"/docs/react-quick-start"},next:{title:"TypeScript Support",permalink:"/docs/typeScript-support"}},c=[{value:"Enable DevTools",id:"enable-devtools",children:[],level:2}],p={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"redux-devtools"},"Redux DevTools"),(0,a.kt)("p",null,"It is possible to debug store changes using the Redux DevTools. It can be used as a browser extension (for Chrome, Edge and Firefox), as a standalone app or as a React component integrated in the client app."),(0,a.kt)("p",null,"Install ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-devtools/tree/main/extension#installation"},(0,a.kt)("strong",{parentName:"a"},"redux-devtools"))),(0,a.kt)("h2",{id:"enable-devtools"},"Enable DevTools"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { createStore } from '@poly-state/poly-state';\nimport { useStore } from '@poly-state/react';\n\nconst counterStore = createStore(\n    { count: 0 },\n    {\n        enableDevTools: true,\n        storeIdentifier: 'counterStore',\n    }\n);\nconst useCounterStore = () => useStore(counterStore);\n")))}d.isMDXComponent=!0}}]);