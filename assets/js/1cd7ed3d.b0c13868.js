"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[753],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),s=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),m=s(r),d=o,y=m["".concat(c,".").concat(d)]||m[d]||l[d]||i;return r?n.createElement(y,a(a({ref:e},u),{},{components:r})):n.createElement(y,a({ref:e},u))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p.mdxType="string"==typeof t?t:o,a[1]=p;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4375:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],p={id:"typeScript-support",title:"TypeScript Support",slug:"/typeScript-support",sidebar_label:"TypeScript Support"},c="TypeScript Support",s={unversionedId:"typeScript-support",id:"typeScript-support",title:"TypeScript Support",description:"- Understanding of TypeScript syntax and terms",source:"@site/docs/04-typescript.md",sourceDirName:".",slug:"/typeScript-support",permalink:"/docs/typeScript-support",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"typeScript-support",title:"TypeScript Support",slug:"/typeScript-support",sidebar_label:"TypeScript Support"},sidebar:"defaultSidebar",previous:{title:"Redux DevTools",permalink:"/docs/redux-devtools"},next:{title:"Advanced Uses",permalink:"/docs/advanced-uses"}},u=[{value:"Overview",id:"overview",children:[],level:2}],l={toc:u};function m(t){var e=t.components,r=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"typescript-support"},"TypeScript Support"),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Prerequisites")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Understanding of ",(0,i.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"},"TypeScript syntax and terms")),(0,i.kt)("li",{parentName:"ul"},"Familiarity with TypeScript concepts like ",(0,i.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/2/generics.html"},"generics")," and ",(0,i.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/utility-types.html"},"utility types")),(0,i.kt)("li",{parentName:"ul"},"Knowledge of ",(0,i.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-intro.html"},"React Hooks"))))),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. ",(0,i.kt)("inlineCode",{parentName:"p"},"poly-state")," is written in TypeScript and provides first-class TypeScript support."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"/**\n * counter.ts\n * TypeScript example for React\n */\nimport { createStore } from '@poly-state/poly-state';\nimport { useStore } from '@poly-state/react';\n\ntype Item = {\n    id: number;\n    name: string;\n};\n\ntype CartStore = {\n    count: number;\n    items: Item[];\n};\n\nconst initialState: CartStore = {\n    count: 0,\n    items: [\n        { id: 1, name: 'Item 1' },\n        { id: 2, name: 'Item 2' },\n    ],\n};\n\nexport const cartStore = createStore(initialState);\nexport const useCartStore = () => useStore(cartStore);\n\nexport const cartActions = {\n    countIncBy(value: CartStore['count']) {\n        cartStore.setCount((prev) => prev + value);\n    },\n    addItem(item: Item) {\n        cartStore.setItems((prev) => [...prev, item]);\n    },\n    updateStore(newCount: CartStore['count'], item: Item) {\n        cartStore.setState((prev) => ({\n            count: prev.count + newCount,\n            items: [...prev.items, item],\n        }));\n    },\n};\n")))}m.isMDXComponent=!0}}]);