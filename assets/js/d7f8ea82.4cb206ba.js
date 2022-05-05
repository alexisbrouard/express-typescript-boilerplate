"use strict";(self.webpackChunkhome_control=self.webpackChunkhome_control||[]).push([[3764],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return t?r.createElement(f,s(s({ref:n},u),{},{components:t})):r.createElement(f,s({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2482:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),s=["components"],i={sidebar_position:4},c="Sensor",l={unversionedId:"Models/sensor",id:"Models/sensor",title:"Sensor",description:"This model allows you to add sensors to your house.",source:"@site/docs/Models/sensor.md",sourceDirName:"Models",slug:"/Models/sensor",permalink:"/docs/Models/sensor",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Models/sensor.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Actuator",permalink:"/docs/Models/actuator"},next:{title:"Controllers",permalink:"/docs/category/controllers"}},u={},p=[{value:"Create the model",id:"create-the-model",level:2},{value:"Conclusion",id:"conclusion",level:2}],m={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sensor"},"Sensor"),(0,a.kt)("p",null,"This model allows you to add sensors to your house."),(0,a.kt)("h2",{id:"create-the-model"},"Create the model"),(0,a.kt)("p",null,"We have different types of sensors, so first of all, we create an enum for the type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const { Schema } = mongoose;\n\nenum SensorType {\n  TEMPERATURE = "TEMPERATURE",\n  HUMIDITY = "HUMIDITY",\n  BARO = "BARO",\n  PROXIMITY = "PROXIMITY",\n}\n')),(0,a.kt)("p",null,"Then, we can create the schema."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const sensorSchema = new Schema({\n  type: {\n    type: String,\n    enum: ["TEMPERATURE", "HUMIDITY", "BARO", "PROXIMITY"],\n  },\n  designation: String,\n  rawValue: Number,\n});\n')),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you want to have ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"_id"),", you can add this line :"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"sensorSchema.set('toJSON', { virtuals: true });\n")))),(0,a.kt)("p",null,"To export, you have ton ",(0,a.kt)("strong",{parentName:"p"},"convert your shema into a model"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const sensor = mongoose.model("Sensor", sensorSchema);\n')),(0,a.kt)("p",null,"Then, export with an ",(0,a.kt)("inlineCode",{parentName:"p"},"export default"),"."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"You are supposed to have a ",(0,a.kt)("inlineCode",{parentName:"p"},"sensor.ts")," file like this :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Actuator.ts"',title:'"Actuator.ts"'},'import mongoose from "mongoose";\n\nconst { Schema } = mongoose;\n\nenum SensorType {\n  TEMPERATURE = "TEMPERATURE",\n  HUMIDITY = "HUMIDITY",\n  BARO = "BARO",\n  PROXIMITY = "PROXIMITY",\n}\n\nconst sensorSchema = new Schema({\n  type: {\n    type: String,\n    enum: ["TEMPERATURE", "HUMIDITY", "BARO", "PROXIMITY"],\n  },\n  designation: String,\n  rawValue: Number,\n});\n\nsensorSchema.set("toJSON", { virtuals: true });\nconst sensor = mongoose.model("Sensor", sensorSchema);\n\nexport default sensor;\n\n')))}d.isMDXComponent=!0}}]);