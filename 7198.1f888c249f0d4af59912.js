"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7198],{57198:function(n,e,r){r.r(e),r.d(e,{default:function(){return un}});var t=r(67294),o=r(95998),i=r(45697),a=r.n(i),c=r(93379),l=r.n(c),A=r(7795),s=r.n(A),u=r(90569),p=r.n(u),d=r(3565),f=r.n(d),b=r(19216),m=r.n(b),y=r(44589),C=r.n(y),v=r(78207),g={};g.styleTagTransform=C(),g.setAttributes=f(),g.insert=p().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=m(),l()(v.Z,g);var h=v.Z&&v.Z.locals?v.Z.locals:void 0,E=r(72584),x=r(85893);function B(){return(0,x.jsx)("p",{className:h.floatingMessage,children:"Click on a key to add it to the combo"})}function j(n){var e=n.keyPositions,r=n.onUpdate;return(0,x.jsxs)("div",{className:h.comboInputMap,children:[(0,x.jsx)(E.Z,{value:e,onUpdate:r}),e.length<2&&(0,x.jsx)(B,{})]})}j.propTypes={onUpdate:a().func.isRequired,keyPositions:a().arrayOf(a().number).isRequired};var w=j,k=r(82607),O=r(27926),S=r(41051),N=r(2968),I=r(86015),Z={};Z.styleTagTransform=C(),Z.setAttributes=f(),Z.insert=p().bind(null,"head"),Z.domAPI=s(),Z.insertStyleElement=m(),l()(I.Z,Z);var P=I.Z&&I.Z.locals?I.Z.locals:void 0,Y=r(56803);function X(n){return X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},X(n)}function U(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function R(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?U(Object(r),!0).forEach((function(e){q(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function q(n,e,r){return(e=function(n){var e=function(n,e){if("object"!==X(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var t=r.call(n,"string");if("object"!==X(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"===X(e)?e:String(e)}(e))in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function D(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function K(n){var e,r,o=n.value,i=n.validate,a=n.required,c=n.render,l=n.onUpdate,A=(0,t.useRef)(),s=(e=(0,t.useState)({value:o,editing:!1,attemptedEmpty:!1}),r=2,function(n){if(Array.isArray(n))return n}(e)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,o,i,a,c=[],l=!0,A=!1;try{if(i=(r=r.call(n)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(t=i.call(r)).done)&&(c.push(t.value),c.length!==e);l=!0);}catch(n){A=!0,o=n}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(A)throw o}}return c}}(e,r)||function(n,e){if(n){if("string"==typeof n)return D(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(n,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=s[0],p=s[1],d=u.attemptedEmpty?"cannot be empty":i&&i(u.value),f=(0,t.useCallback)((function(n){n&&(n.focus(),n.select())}),[]),b=(0,t.useCallback)((function(){p((function(n){return R(R({},n),{},{editing:!1})}))}),[p]),m=(0,t.useCallback)((function(n){A.current&&!A.current.contains(n.target)&&b()}),[A,b]);return(0,t.useEffect)((function(){return document.addEventListener("click",m),function(){return document.removeEventListener("click",m)}}),[m]),u.editing?(0,x.jsxs)("span",{className:P.container,ref:A,children:[(0,x.jsx)("input",{ref:f,value:u.value,onChange:function(n){return p(R(R({},u),{},{attemptedEmpty:!1,value:n.target.value}))},onKeyDown:(0,Y.w)({Enter:function(){u.editing&&(""===u.value&&a?p(R(R({},u),{},{attemptedEmpty:!0})):(d||l(u.value),p(R(R({},u),{},{value:u.value,editing:!1}))))},Escape:b})}),d&&(0,x.jsx)("span",{className:P.error,children:d})]}):c((0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("span",{children:o}),(0,x.jsx)(S.Z,{name:"pencil",className:P.edit,onClick:(0,Y.s)((function(){return p(R(R({},u),{},{editing:!0}))}))})]}))}K.propTypes={value:a().string.isRequired,validate:a().func,required:a().bool.isRequired,render:a().func.isRequired,onUpdate:a().func.isRequired},K.defaultProps={required:!0};var z=K,W=r(81485),F=r(57557),J=r.n(F),Q=r(64261),T=r(96186),M=r(80736);function G(n){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},G(n)}function L(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function V(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?L(Object(r),!0).forEach((function(e){_(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function _(n,e,r){return(e=function(n){var e=function(n,e){if("object"!==G(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var t=r.call(n,"string");if("object"!==G(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"===G(e)?e:String(e)}(e))in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function H(n,e){if(n){if("string"==typeof n)return $(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?$(n,e):void 0}}function $(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function nn(n){var e=n.selected,r=n.options,t=n.onUpdate;return(0,x.jsx)("ul",{className:h.layerList,children:r.map((function(n,r){return(0,x.jsx)("li",{"data-selected":e.includes(r),onClick:function(){return o=r,void t(e.includes(o)?e.filter((function(n){return n!==o})):[].concat((n=e,function(n){if(Array.isArray(n))return $(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||H(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),[o]));var n,o},children:n},r)}))})}var en=function(n){var e,r,i,a,c,l=n.combo,A=n.onUpdate,s=(0,o.v9)(M.vl),u=(a=(0,t.useState)(l),c=2,function(n){if(Array.isArray(n))return n}(a)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,o,i,a,c=[],l=!0,A=!1;try{if(i=(r=r.call(n)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(t=i.call(r)).done)&&(c.push(t.value),c.length!==e);l=!0);}catch(n){A=!0,o=n}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(A)throw o}}return c}}(a,c)||H(a,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),p=u[0],d=u[1],f=s.map((function(n){return n.name}));return(0,x.jsx)(Q.Z,{children:(0,x.jsxs)(T.Z,{onDismiss:function(){A(p)},children:[(0,x.jsxs)("h2",{children:["Customize [",(0,x.jsx)("code",{children:l.name}),"]"]}),(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{className:h.field,children:[(0,x.jsx)("label",{htmlFor:"customize-combo-timeout",children:"Timeout (ms)"}),(0,x.jsx)("input",{id:"customize-combo-timeout",type:"number",placeholder:"Default",value:(null===(e=p.properties["timeout-ms"])||void 0===e?void 0:e.parsed)||"",onChange:function(n){var e=Number(n.target.value);d((function(r){return V(V({},r),{},{properties:""!==n.target.value?V(V({},r.properties),{},{"timeout-ms":{parsed:e}}):V({},J()(r.properties,"timeout-ms"))})}))}})]}),(0,x.jsxs)("div",{className:h.field,children:[(0,x.jsx)("label",{htmlFor:"customize-combo-slow-release",children:"Slow Release"}),(0,x.jsx)("input",{id:"customize-combo-slow-release",type:"checkbox",checked:(null===(r=p.properties["slow-release"])||void 0===r?void 0:r.parsed)||!1,onChange:function(n){return d((function(e){return V(V({},e),{},{properties:V(V({},e.properties),{},{"slow-release":{parsed:n.target.checked}})})}))}})]}),(0,x.jsxs)("div",{className:h.field,children:[(0,x.jsx)("label",{children:"Layers"}),(0,x.jsx)(nn,{selected:(null===(i=p.properties.layers)||void 0===i?void 0:i.parsed)||[],options:f,onUpdate:function(n){return d((function(e){return V(V({},e),{},{properties:V(V({},e.properties),{},{layers:{parsed:n}})})}))}})]})]})]})})},rn=r(62417),tn=r(2732);function on(n){return on="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},on(n)}function an(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function cn(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?an(Object(r),!0).forEach((function(e){ln(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):an(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function ln(n,e,r){return(e=function(n){var e=function(n,e){if("object"!==on(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var t=r.call(n,"string");if("object"!==on(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"===on(e)?e:String(e)}(e))in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function An(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function sn(n){var e,r,i=(0,t.useContext)(W.c).identifiers,a=(0,o.v9)(tn.DP),c=(0,o.I0)(),l=(e=(0,t.useState)(null),r=2,function(n){if(Array.isArray(n))return n}(e)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,o,i,a,c=[],l=!0,A=!1;try{if(i=(r=r.call(n)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(t=i.call(r)).done)&&(c.push(t.value),c.length!==e);l=!0);}catch(n){A=!0,o=n}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(A)throw o}}return c}}(e,r)||function(n,e){if(n){if("string"==typeof n)return An(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?An(n,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),A=l[0],s=l[1];function u(n){return(0,rn.G3)(n)||(i.includes(n)?'Cannot use existing identifier "'.concat(n,'"'):null)}return(0,x.jsxs)("div",{className:h.main,children:[null!==A&&(0,x.jsx)(en,{combo:a[A],onUpdate:function(n){return e=A,r=n,s(null),void c((0,tn.SD)({index:e,combo:r}));var e,r}}),(0,x.jsx)("div",{className:h.header,children:(0,x.jsxs)(N.Z,{external:!0,href:"https://zmk.dev/docs/features/combos",children:[(0,x.jsx)(S.Z,{name:"book"})," ZMK Docs: Combos"]})}),(0,x.jsx)("div",{className:h.comboPanel,children:a.map((function(n,e){return(0,x.jsxs)("div",{className:h.combo,children:[(0,x.jsxs)("div",{className:h.heading,children:[(0,x.jsx)(z,{value:n.name,validate:u,render:function(n){return(0,x.jsx)("h5",{children:(0,x.jsx)("code",{children:n})})},onUpdate:function(n){return function(n,e){c((0,tn.l3)({index:n,name:e}))}(e,n)}}),(0,x.jsxs)("div",{className:h.actions,children:[(0,x.jsx)(S.Z,{name:"wrench",className:"".concat(h.action),onClick:function(){return s(e)}}),(0,x.jsx)(S.Z,{name:"trash-can",className:"".concat(h.action," ").concat(h.remove),onClick:function(){return n=e,void c((0,tn.pd)({index:n}));var n}})]})]}),(0,x.jsxs)("div",{className:h.detail,children:[(0,x.jsx)("div",{className:h.comboOutput,children:(0,x.jsx)(k.Z,cn(cn({},n.properties.bindings.parsed[0]),{},{onUpdate:function(n){!function(n,e){c((0,tn.ij)({comboIndex:n,bindings:[e]}))}(e,n)}}))}),(0,x.jsx)(w,{keyPositions:n.properties["key-positions"].parsed,onUpdate:function(n){return function(n,e){c((0,tn.nJ)({comboIndex:n,keyPositions:e}))}(e,n)}})]})]},e)}))}),(0,x.jsx)("div",{className:h.footer,children:(0,x.jsx)(O.Z,{onClick:function(){c((0,tn.CG)())},children:"Add New Combo"})})]})}sn.propTypes={};var un=sn},56803:function(n,e,r){function t(n){return function(e){e.stopPropagation(),n()}}function o(n){return function(e){n[e.key]&&n[e.key]()}}r.d(e,{s:function(){return t},w:function(){return o}})},86015:function(n,e,r){var t=r(87537),o=r.n(t),i=r(23645),a=r.n(i)()(o());a.push([n.id,".ho3CuFFjX1VFNZJiAyVs {\n  position: relative;\n}\n\n.u9J3v5ZrIbuVICzNBkRw {\n  padding: 5px;\n  cursor: pointer;\n  opacity: 0.5;\n  color: var(--key-color-base);\n}\n.u9J3v5ZrIbuVICzNBkRw:hover {\n  opacity: 1;\n}\n\n.wmqWaOx7XyKADh7Kv4RZ {\n  position: absolute;\n  z-index: 10;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%, 100%);\n  max-width: 250px;\n  width: 100%;\n\n  border-radius: 4px;\n  padding: 3px 5px;\n\n  color: white;\n  background-color: var(--error-highlight);\n  font-size: 85%;\n  font-family: sans-serif;\n\n  opacity: 0.9;\n}\n.wmqWaOx7XyKADh7Kv4RZ::before {\n  position: absolute;\n  display: block;\n  content: ' ';\n  z-index: -1;\n\n  left: 50%;\n  width: 10px;\n  height: 10px;\n\n  background-color: var(--error-highlight);\n  transform: translate(-50%, -7px) rotate(45deg);\n}\n","",{version:3,sources:["webpack://./src/Common/editablefield.module.css"],names:[],mappings:"AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,4BAA4B;AAC9B;AACA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,SAAS;EACT,gCAAgC;EAChC,gBAAgB;EAChB,WAAW;;EAEX,kBAAkB;EAClB,gBAAgB;;EAEhB,YAAY;EACZ,wCAAwC;EACxC,cAAc;EACd,uBAAuB;;EAEvB,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,cAAc;EACd,YAAY;EACZ,WAAW;;EAEX,SAAS;EACT,WAAW;EACX,YAAY;;EAEZ,wCAAwC;EACxC,8CAA8C;AAChD",sourcesContent:[".container {\n  position: relative;\n}\n\n.edit {\n  padding: 5px;\n  cursor: pointer;\n  opacity: 0.5;\n  color: var(--key-color-base);\n}\n.edit:hover {\n  opacity: 1;\n}\n\n.error {\n  position: absolute;\n  z-index: 10;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%, 100%);\n  max-width: 250px;\n  width: 100%;\n\n  border-radius: 4px;\n  padding: 3px 5px;\n\n  color: white;\n  background-color: var(--error-highlight);\n  font-size: 85%;\n  font-family: sans-serif;\n\n  opacity: 0.9;\n}\n.error::before {\n  position: absolute;\n  display: block;\n  content: ' ';\n  z-index: -1;\n\n  left: 50%;\n  width: 10px;\n  height: 10px;\n\n  background-color: var(--error-highlight);\n  transform: translate(-50%, -7px) rotate(45deg);\n}\n"],sourceRoot:""}]),a.locals={container:"ho3CuFFjX1VFNZJiAyVs",edit:"u9J3v5ZrIbuVICzNBkRw",error:"wmqWaOx7XyKADh7Kv4RZ"},e.Z=a},78207:function(n,e,r){var t=r(87537),o=r.n(t),i=r(23645),a=r.n(i)()(o());a.push([n.id,'.pwXbGORsYKqyOPBm9_dW {\n  padding-bottom: 60px;\n}\n\n.FDsUz791VURN5GgqawOQ, .MhI51kJR50XISY6jcLAw {\n  width: 550px;\n  margin: 1px auto;\n}\n.MhI51kJR50XISY6jcLAw {\n  text-align: center;\n  margin-top: 10px;\n  padding-top: 20px;\n  border-top: 2px solid var(--key-bg-base);\n}\n\n.Gy0KZGCgOeVminAfggFQ {\n  cursor: pointer;\n  background-color: var(--key-bg-base);\n}\n.Gy0KZGCgOeVminAfggFQ:hover {\n  border: 4px solid var(--selection);\n  box-sizing: border-box;\n}\n\n.Ld9cVdtpS_DpbEifyX9Y {\n  background-color: var(--selection);\n}\n.Ld9cVdtpS_DpbEifyX9Y:hover {\n  background-color: var(--hover-selection);\n}\n\n.mqpJ7uHAMKxvORoOIPFK {\n  max-width: 450px;\n  margin: 0 auto;\n}\n\n.BVucwy4AZCyl7GyivzMn {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 2px solid var(--key-bg-base);\n  margin: 5px 0;\n}\n\n.U6g0njWjBrtb_I3XhAeV {\n  cursor: pointer;\n  padding: 5px;\n  opacity: 0.6;\n}\n.U6g0njWjBrtb_I3XhAeV:hover {\n  opacity: 1;\n}\n\n.CROhsBLtunQ2BbfWdkQw {\n  margin: 10px 0 40px;\n}\n\n.CROhsBLtunQ2BbfWdkQw .MhA4fXXuaZ1iPvv05w4m {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.CROhsBLtunQ2BbfWdkQw h5 {\n  margin: 0;\n}\n\n.vujYcgQjiN4BGp37FMUH {\n  color: var(--key-color-base);\n}\n\n.uh2yPWyfEOZtgXo2_KtU {\n  color: var(--delete);\n}\n\n.NAB1EN6_pcYIy5Db9XnC {\n  display: none !important;\n}\n.NAB1EN6_pcYIy5Db9XnC:hover {\n  color: white;\n  cursor: pointer;\n}\n.kYn8brsFgEaf61oQyv4d:hover .NAB1EN6_pcYIy5Db9XnC {\n  display: flex !important;\n  position: absolute;\n  right: -48px;\n  transform: scale(0.5);\n}\n\n.NGxnhfSJaJ9FNu3hlBfc.NAB1EN6_pcYIy5Db9XnC,\n.NGxnhfSJaJ9FNu3hlBfc.GXgG_IaQTricqThqzsKe > * {\n  background-color: sandybrown;\n  color: white;\n}\n.NGxnhfSJaJ9FNu3hlBfc.NAB1EN6_pcYIy5Db9XnC {\n  display: flex;\n}\n\n.fljdvcebOv1gbKZpf0vW {\n  margin: 10px 0;\n  display: flex;\n}\n\n.fljdvcebOv1gbKZpf0vW label {\n  display: inline-block;\n  width: 120px;\n  text-align: right;\n  margin-right: 10px;\n}\n\n.bnN6JCit0RcjdQiqzw8w {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n.bnN6JCit0RcjdQiqzw8w li {\n  cursor: pointer;\n  display: inline-block;\n  padding: 5px 10px;\n  margin: 5px;\n  border-radius: 30px;\n  background-color: var(--key-bg-base);\n}\n.bnN6JCit0RcjdQiqzw8w li[data-selected="true"] {\n  background-color: var(--selection);\n  color: var(--key-color-hover);\n}\n.bnN6JCit0RcjdQiqzw8w li:hover {\n  background-color: var(--hover-selection);\n  color: var(--key-color-hover);\n}\n\n.NpLEYrC32KQ4rUx9hUFJ {\n  background-color: var(--key-bg-base);\n  border-radius: 30px;\n  color: var(--key-color-base);\n  font-size: 80%;\n  text-align: center;\n  padding: 5px;\n  position: absolute;\n  bottom: -40px;\n  left: 50%;\n  transform: translate(-50%, 0);\n  width: 110%;\n\n  pointer-events: none;\n  transition: opacity ease-in-out .5s;\n}\n\n.l2gtE1XKS63R5TM5unip { position: relative }\n.l2gtE1XKS63R5TM5unip:hover .NpLEYrC32KQ4rUx9hUFJ { opacity: 0.25 }\n',"",{version:3,sources:["webpack://./src/Keyboard/Combos/styles.module.css"],names:[],mappings:"AAAA;EACE,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,wCAAwC;AAC1C;;AAEA;EACE,eAAe;EACf,oCAAoC;AACtC;AACA;EACE,kCAAkC;EAClC,sBAAsB;AACxB;;AAEA;EACE,kCAAkC;AACpC;AACA;EACE,wCAAwC;AAC1C;;AAEA;EACE,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,2CAA2C;EAC3C,aAAa;AACf;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,YAAY;AACd;AACA;EACE,UAAU;AACZ;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,wBAAwB;AAC1B;AACA;EACE,YAAY;EACZ,eAAe;AACjB;AACA;EACE,wBAAwB;EACxB,kBAAkB;EAClB,YAAY;EACZ,qBAAqB;AACvB;;AAEA;;EAEE,4BAA4B;EAC5B,YAAY;AACd;AACA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,SAAS;EACT,UAAU;AACZ;AACA;EACE,eAAe;EACf,qBAAqB;EACrB,iBAAiB;EACjB,WAAW;EACX,mBAAmB;EACnB,oCAAoC;AACtC;AACA;EACE,kCAAkC;EAClC,6BAA6B;AAC/B;AACA;EACE,wCAAwC;EACxC,6BAA6B;AAC/B;;AAEA;EACE,oCAAoC;EACpC,mBAAmB;EACnB,4BAA4B;EAC5B,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,SAAS;EACT,6BAA6B;EAC7B,WAAW;;EAEX,oBAAoB;EACpB,mCAAmC;AACrC;;AAEA,wBAAiB,mBAAmB;AACpC,oDAAwC,cAAc",sourcesContent:['.main {\n  padding-bottom: 60px;\n}\n\n.header, .footer {\n  width: 550px;\n  margin: 1px auto;\n}\n.footer {\n  text-align: center;\n  margin-top: 10px;\n  padding-top: 20px;\n  border-top: 2px solid var(--key-bg-base);\n}\n\n.selectable {\n  cursor: pointer;\n  background-color: var(--key-bg-base);\n}\n.selectable:hover {\n  border: 4px solid var(--selection);\n  box-sizing: border-box;\n}\n\n.highlight {\n  background-color: var(--selection);\n}\n.highlight:hover {\n  background-color: var(--hover-selection);\n}\n\n.comboPanel {\n  max-width: 450px;\n  margin: 0 auto;\n}\n\n.heading {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 2px solid var(--key-bg-base);\n  margin: 5px 0;\n}\n\n.action {\n  cursor: pointer;\n  padding: 5px;\n  opacity: 0.6;\n}\n.action:hover {\n  opacity: 1;\n}\n\n.combo {\n  margin: 10px 0 40px;\n}\n\n.combo .detail {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.combo h5 {\n  margin: 0;\n}\n\n.edit {\n  color: var(--key-color-base);\n}\n\n.remove {\n  color: var(--delete);\n}\n\n.addComboInput {\n  display: none !important;\n}\n.addComboInput:hover {\n  color: white;\n  cursor: pointer;\n}\n.comboInputList:hover .addComboInput {\n  display: flex !important;\n  position: absolute;\n  right: -48px;\n  transform: scale(0.5);\n}\n\n.active.addComboInput,\n.active.comboInput > * {\n  background-color: sandybrown;\n  color: white;\n}\n.active.addComboInput {\n  display: flex;\n}\n\n.field {\n  margin: 10px 0;\n  display: flex;\n}\n\n.field label {\n  display: inline-block;\n  width: 120px;\n  text-align: right;\n  margin-right: 10px;\n}\n\n.layerList {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n.layerList li {\n  cursor: pointer;\n  display: inline-block;\n  padding: 5px 10px;\n  margin: 5px;\n  border-radius: 30px;\n  background-color: var(--key-bg-base);\n}\n.layerList li[data-selected="true"] {\n  background-color: var(--selection);\n  color: var(--key-color-hover);\n}\n.layerList li:hover {\n  background-color: var(--hover-selection);\n  color: var(--key-color-hover);\n}\n\n.floatingMessage {\n  background-color: var(--key-bg-base);\n  border-radius: 30px;\n  color: var(--key-color-base);\n  font-size: 80%;\n  text-align: center;\n  padding: 5px;\n  position: absolute;\n  bottom: -40px;\n  left: 50%;\n  transform: translate(-50%, 0);\n  width: 110%;\n\n  pointer-events: none;\n  transition: opacity ease-in-out .5s;\n}\n\n.comboInputMap { position: relative }\n.comboInputMap:hover .floatingMessage { opacity: 0.25 }\n'],sourceRoot:""}]),a.locals={main:"pwXbGORsYKqyOPBm9_dW",header:"FDsUz791VURN5GgqawOQ",footer:"MhI51kJR50XISY6jcLAw",selectable:"Gy0KZGCgOeVminAfggFQ",highlight:"Ld9cVdtpS_DpbEifyX9Y",comboPanel:"mqpJ7uHAMKxvORoOIPFK",heading:"BVucwy4AZCyl7GyivzMn",action:"U6g0njWjBrtb_I3XhAeV",combo:"CROhsBLtunQ2BbfWdkQw",detail:"MhA4fXXuaZ1iPvv05w4m",edit:"vujYcgQjiN4BGp37FMUH",remove:"uh2yPWyfEOZtgXo2_KtU",addComboInput:"NAB1EN6_pcYIy5Db9XnC",comboInputList:"kYn8brsFgEaf61oQyv4d",active:"NGxnhfSJaJ9FNu3hlBfc",comboInput:"GXgG_IaQTricqThqzsKe",field:"fljdvcebOv1gbKZpf0vW",layerList:"bnN6JCit0RcjdQiqzw8w",floatingMessage:"NpLEYrC32KQ4rUx9hUFJ",comboInputMap:"l2gtE1XKS63R5TM5unip"},e.Z=a}}]);
//# sourceMappingURL=7198.1f888c249f0d4af59912.js.map