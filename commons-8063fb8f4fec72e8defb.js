(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var l,c,s,u;if(Array.isArray(e)){if((l=e.length)!=o.length)return!1;for(c=l;0!=c--;)if(!i(e[c],o[c]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!i(c.value[1],o.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((l=e.length)!=o.length)return!1;for(c=l;0!=c--;)if(e[c]!==o[c])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((l=(s=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!i(e[s[c]],o[s[c]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=e(s.map((function(e){return e.props}))),m.canUseDOM?t(c):n&&(c=n(c))}var m=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){s.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(m,"canUseDOM",l),m}}},4884:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),a=n(5444);var i=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"}))})),o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARkAAAEYCAYAAABoTIKyAAAEtmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMjgwIgogICB0aWZmOkltYWdlV2lkdGg9IjI4MSIKICAgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIKICAgdGlmZjpYUmVzb2x1dGlvbj0iMTUwLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjE1MC8xIgogICBleGlmOlBpeGVsWERpbWVuc2lvbj0iMjgxIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMjgwIgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIw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",l=function(e){e.siteTitle;var t=(0,r.useState)(!1),n=t[0],l=t[1];return r.createElement(r.Fragment,null,r.createElement("div",{className:"bg-blue-900"},r.createElement("div",{className:"max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8"},r.createElement("div",{className:"flex items-center justify-between flex-wrap"},r.createElement("div",{className:"w-0 flex-1 flex items-center"},r.createElement("span",{className:"flex p-2 rounded-md bg-blue-700"},r.createElement(i,{className:"h-6 w-6 text-white","aria-hidden":"true"})),r.createElement("p",{className:"ml-3 font-medium text-white truncate"},r.createElement("span",{className:"md:hidden"},"Singularity is now Apptainer!"),r.createElement("span",{className:"hidden md:inline"},"You're in the right place! Singularity has joined the Linux Foundation and is now Apptainer!"))),r.createElement("div",{className:"order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"},r.createElement(a.Link,{to:"/news/community-announcement-20211130",className:"flex items-center justify-center px-4 py-2 border border-transparent rounded-sm shadow-sm text-sm font-medium text-blue-900 bg-white hover:bg-blue-50"},"Learn more"))))),r.createElement("div",{className:"px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"},r.createElement("div",{className:"relative flex items-center justify-between"},r.createElement("div",{className:"flex items-center"},r.createElement(a.Link,{to:"/","aria-label":"Apptainer",title:"Apptainer",className:"inline-flex items-center mr-10"},r.createElement("img",{src:o,className:"h-14"})),r.createElement("ul",{className:"flex items-center hidden space-x-8 lg:flex"},r.createElement("li",null,r.createElement(a.Link,{to:"/docs","aria-label":"Documentation",title:"Documentation",className:"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-900"},"Documentation")),r.createElement("li",null,r.createElement(a.Link,{to:"/help","aria-label":"Getting Help",title:"Getting Help",className:"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-900"},"Getting Help")),r.createElement("li",null,r.createElement(a.Link,{to:"/news","aria-label":"News",title:"News",className:"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-900"},"News")),r.createElement("li",null,r.createElement(a.Link,{to:"/usecases","aria-label":"Use Cases",title:"Use Cases",className:"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-900"},"Use Cases")),r.createElement("li",null,r.createElement(a.Link,{to:"/talks","aria-label":"Talks",title:"Talks",className:"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-900"},"Talks")))),r.createElement("ul",{className:"flex items-center hidden space-x-8 lg:flex"},r.createElement("li",null,r.createElement(a.Link,{to:"https://github.com/apptainer/apptainer","aria-label":"GitHub",title:"GitHub",className:"text-gray-700 hover:text-blue-900 transition-colors duration-200"},r.createElement("svg",{viewBox:"0 0 24 24",className:"w-6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},r.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})))),r.createElement("li",null,r.createElement(a.Link,{to:"/getting-started",className:"inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-900 hover:bg-blue-800 focus:shadow-outline focus:outline-none","aria-label":"Get Started",title:"Get Started"},"Get Started"))),r.createElement("div",{className:"lg:hidden"},r.createElement("button",{"aria-label":"Open Menu",title:"Open Menu",className:"p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-blue-50 focus:bg-blue-50",onClick:function(){return l(!0)}},r.createElement("svg",{className:"w-5 text-gray-600",viewBox:"0 0 24 24"},r.createElement("path",{fill:"currentColor",d:"M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"}),r.createElement("path",{fill:"currentColor",d:"M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"}),r.createElement("path",{fill:"currentColor",d:"M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"}))),n&&r.createElement("div",{className:"absolute top-0 left-0 w-full z-20"},r.createElement("div",{className:"p-5 bg-white border rounded shadow-sm"},r.createElement("div",{className:"flex items-center justify-between mb-4"},r.createElement("div",null,r.createElement(a.Link,{to:"/","aria-label":"Apptainer",title:"Apptainer",className:"inline-flex items-center mr-10"},r.createElement("img",{src:o,className:"w-10"}),r.createElement("span",{className:"ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"},"Apptainer"))),r.createElement("div",null,r.createElement("button",{"aria-label":"Close Menu",title:"Close Menu",className:"p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",onClick:function(){return l(!1)}},r.createElement("svg",{className:"w-5 text-gray-600",viewBox:"0 0 24 24"},r.createElement("path",{fill:"currentColor",d:"M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"}))))),r.createElement("nav",null,r.createElement("ul",{className:"space-y-4"},r.createElement("li",null,r.createElement(a.Link,{to:"/docs","aria-label":"Documentation",title:"Documentation",className:"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-900"},"Documentation")),r.createElement("li",null,r.createElement(a.Link,{to:"/help","aria-label":"Getting Help",title:"Getting Help",className:"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-900"},"Getting Help")),r.createElement("li",null,r.createElement(a.Link,{to:"/news","aria-label":"News",title:"News",className:"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-900"},"News")),r.createElement("li",null,r.createElement(a.Link,{to:"/usecases","aria-label":"Use Cases",title:"Use Cases",className:"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-900"},"Use Cases")),r.createElement("li",null,r.createElement(a.Link,{to:"/talks","aria-label":"Talks",title:"Talks",className:"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-900"},"Talks")),r.createElement("li",null,r.createElement(a.Link,{to:"/getting-started",className:"inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-900 hover:bg-blue-700 focus:shadow-outline focus:outline-none","aria-label":"Get Started",title:"Get Started"},"Get Started"))))))))))};l.defaultProps={siteTitle:""};var c=l,s=function(){return r.createElement("footer",{className:"bg-white"},r.createElement("div",{className:"max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8"},r.createElement("nav",{className:"-mx-5 -my-2 flex flex-wrap justify-center","aria-label":"Footer"},[{name:"Home",href:"/"},{name:"Security",href:"/security-policy"},{name:"News",href:"/news"},{name:"Getting Help",href:"/help"},{name:"Contact",href:"/contact"},{name:"Technical Charter",href:"/technical-charter"}].map((function(e){return r.createElement("div",{key:e.name,className:"px-5 py-2"},r.createElement(a.Link,{to:e.href,className:"text-base font-medium tracking-wide text-gray-700 hover:text-blue-900"},e.name))}))),r.createElement("p",{className:"mt-8 text-center text-base text-gray-500"},"Copyright © Contributors to the Apptainer project, established as Apptainer a Series of LF Projects LLC."),r.createElement("p",{className:"text-center text-base text-gray-500"},"For website terms of use, trademark policy, privacy policy and other project policies please see ",r.createElement("a",{className:"text-blue-900",href:"https://lfprojects.org/policies"},"https://lfprojects.org/policies"),".")))},u=function(e){var t,n=e.children,i=(0,a.useStaticQuery)("3649515864");return r.createElement(r.Fragment,null,r.createElement(c,{siteTitle:(null===(t=i.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),r.createElement("main",null,n),r.createElement(s,null))}},3751:function(e,t,n){"use strict";n.d(t,{Z:function(){return be}});var r,a,i,o,l=n(7294),c=n(5697),s=n.n(c),u=n(4839),m=n.n(u),f=n(2993),p=n.n(f),d=n(6494),A=n.n(d),h="bodyAttributes",g="htmlAttributes",b="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(y).map((function(e){return y[e]})),"charset"),v="cssText",k="href",E="http-equiv",x="innerHTML",C="itemprop",M="name",T="property",I="rel",j="src",G="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},S="defaultTitle",N="defer",O="encodeSpecialCharacters",D="onChangeClientState",Z="titleTemplate",Y=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),P=[y.NOSCRIPT,y.SCRIPT,y.STYLE],z="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},J=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},R=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},F=function(e){var t=_(e,y.TITLE),n=_(e,Z);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=_(e,S);return t||r||void 0},U=function(e){return _(e,D)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Q({},e,t)}),{})},q=function(e,t){return t.filter((function(e){return void 0!==e[y.BASE]})).map((function(e){return e[y.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},K=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var l=i[o],c=l.toLowerCase();-1===t.indexOf(c)||n===I&&"canonical"===e[n].toLowerCase()||c===I&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(l)||l!==x&&l!==v&&l!==C||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var l=i[o],c=A()({},r[l],a[l]);r[l]=c}return e}),[]).reverse()},_=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,m=e.title,f=e.titleAttributes;ce(y.BODY,r),ce(y.HTML,a),le(m,f);var p={baseTag:se(y.BASE,n),linkTags:se(y.LINK,i),metaTags:se(y.META,o),noscriptTags:se(y.NOSCRIPT,l),scriptTags:se(y.SCRIPT,s),styleTags:se(y.STYLE,u)},d={},A={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(A[e]=p[e].oldTags)})),t&&t(),c(e,d,A)},oe=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ce(y.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(z),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),l=0;l<o.length;l++){var c=o[l],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===a.indexOf(c)&&a.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var m=i.length-1;m>=0;m--)n.removeAttribute(i[m]);a.length===i.length?n.removeAttribute(z):n.getAttribute(z)!==o.join(",")&&n.setAttribute(z,o.join(","))}},se=function(e,t){var n=document.head||document.querySelector(y.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===x)n.innerHTML=t.innerHTML;else if(r===v)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(z,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case y.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[z]=!0,a=me(n,r),[l.createElement(y.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+W(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case g:return{toComponent:function(){return me(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[z]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===x||n===v){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),l.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===x||e===v)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===P.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,m=void 0===u?"":u,f=e.titleAttributes;return{base:fe(y.BASE,t,r),bodyAttributes:fe(h,n,r),htmlAttributes:fe(g,a,r),link:fe(y.LINK,i,r),meta:fe(y.META,o,r),noscript:fe(y.NOSCRIPT,l,r),script:fe(y.SCRIPT,c,r),style:fe(y.STYLE,s,r),title:fe(y.TITLE,{title:m,titleAttributes:f},r)}},de=m()((function(e){return{baseTag:q([k,G],e),bodyAttributes:X(h,e),defer:_(e,N),encode:_(e,O),htmlAttributes:X(g,e),linkTags:K(y.LINK,[I,k],e),metaTags:K(y.META,[M,w,E,T,C],e),noscriptTags:K(y.NOSCRIPT,[x],e),onChangeClientState:U(e),scriptTags:K(y.SCRIPT,[j,x],e),styleTags:K(y.STYLE,[v],e),title:F(e),titleAttributes:X(b,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),pe)((function(){return null})),Ae=(a=de,o=i=function(e){function t(){return B(this,t),V(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:t};case y.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return Q({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Q({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case y.TITLE:return Q({},a,((t={})[r.type]=o,t.titleAttributes=Q({},i),t));case y.BODY:return Q({},a,{bodyAttributes:Q({},i)});case y.HTML:return Q({},a,{htmlAttributes:Q({},i)})}return Q({},a,((n={})[r.type]=Q({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Q({},t);return Object.keys(e).forEach((function(t){var r;n=Q({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return l.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Y[n]||n]=e[n],t}),t)}(R(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=R(e,["children"]),r=Q({},n);return t&&(r=this.mapChildrenToProps(t,r)),l.createElement(a,r)},J(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(l.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);Ae.renderStatic=Ae.rewind;var he=n(5444);function ge(e){var t,n,r=e.description,a=e.lang,i=e.meta,o=e.title,c=(0,he.useStaticQuery)("63159454").site,s=r||c.siteMetadata.description,u=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return l.createElement(Ae,{htmlAttributes:{lang:a},title:o,titleTemplate:u?"%s | "+u:null,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=c.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(i)})}ge.defaultProps={lang:"en",meta:[],description:""};var be=ge}}]);
//# sourceMappingURL=commons-8063fb8f4fec72e8defb.js.map