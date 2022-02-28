"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[813],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},115:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={id:"installation",title:"Installation",slug:"/installation",sidebar_label:"Installation"},s="Installation",u={unversionedId:"installation",id:"installation",title:"Installation",description:"To install the stable version:",source:"@site/docs/01-installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"installation",title:"Installation",slug:"/installation",sidebar_label:"Installation"},sidebar:"defaultSidebar",next:{title:"Core Features",permalink:"/docs/core-features"}},c=[{value:"npm",id:"npm",children:[],level:4},{value:"yarn",id:"yarn",children:[],level:4},{value:"Requirements",id:"requirements",children:[],level:2},{value:"How does it work?",id:"how-does-it-work",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To install the stable version:"),(0,o.kt)("h4",{id:"npm"},"npm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @poly-state/poly-state\n")),(0,o.kt)("h4",{id:"yarn"},"yarn"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @poly-state/poly-state\n")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You'll need to have Node >= 14 and npm >= 6 on your machine"),(0,o.kt)("li",{parentName:"ul"},"Familiarity with ReactJS ecosystem")),(0,o.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,o.kt)("p",null,"The createStore function takes your initial state and returns an instance of Internal Store class and creating setter methods for each of your properties."),(0,o.kt)("p",null,"By using the setter methods you can change your state's values."),(0,o.kt)("p",null,"Using the useStore hook subscribes to the updates of your state and every time the internal state is changed, the value returned by the useStore hook is also updated, which in turn updates the UI."),(0,o.kt)("p",null,"There is no need to wrap your components with a provider like other state management libraries since the useStore hooks relies on Effect caused by the state updates and cleans up itself on unmount."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This library is at beta stage and API's are subject to change, use at your own risk")))}d.isMDXComponent=!0}}]);