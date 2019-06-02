define(["react","prop-types"],function(e,t){"use strict";var r="default"in e?e.default:e;t=t&&t.hasOwnProperty("default")?t.default:t;var n=function(e,t,r){var n=Object.keys(e);return!0===r&&n.sort(),n.map(function(r){return t(e[r],r)})},o=function(e){return Object.keys(e).sort().join(",")},s=function(e){return Object.prototype.toString.call(e).replace(/^\[object\s(.*)\]$/,"$1")},a=function(e){return e[Object.keys(e)[0]]},c=function(e){for(var t=1;t<e.length;t++)if(e[t]!==e[0])return!1;return!0},l=n,u=s,i=a,p=function(e){if("Array"===s(e)&&e.length>1&&"Object"===s(a(e))){var t=n(e,function(e){return"Object"===s(e)?o(e):""});return t.length>1&&t[0].length>1&&c(t)}return!1},y=function(e){if("Object"===s(e)&&Object.keys(e).length>1&&"Object"===s(a(e))){var t=n(e,function(e){return"Object"===s(e)?o(e):""});return t.length>1&&t[0].length>1&&c(t)}return!1},d=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},f=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},m=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},v=function(e){function t(e,r){return d(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r))}return h(t,e),f(t,[{key:"r",value:function(){switch(u(this.props.value)){case"String":return r.createElement("span",{style:{color:"rgb(255, 65, 60)"}},'"'+this.props.value+'"');case"Boolean":return r.createElement("span",{style:{color:"rgb(31, 48, 255)"}},""+this.props.value);case"Number":return r.createElement("span",{style:{color:"rgb(31, 49, 255)"}},""+this.props.value);case"Undefined":return r.createElement("i",{style:{color:"#777777"}},"undefined");case"Null":return r.createElement("i",{style:{color:"#777777"}},"null");case"Date":return r.createElement("i",{style:{color:"#007bc7"}},""+JSON.stringify(this.props.value));default:return r.createElement("span",{style:{color:"rgb(31, 49, 255)"}},""+this.props.value)}}},{key:"render",value:function(){return r.createElement("span",null,this.r())}}]),t}(e.Component);v.propTypes={value:t.any},v.defaultProps={};var E=function(e){function t(){return d(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,e),f(t,[{key:"renderHeaderByKeys",value:function(e,t){var n=this;return r.createElement("thead",this.props.theadProps,r.createElement("tr",this.props.trProps,function(){if("addExtra"===t)return r.createElement("th",b({},n.props.thProps,{style:n.constructor.styles.td}),r.createElement("span",{style:{color:"rgb(111, 11, 11)"}}))}(),e.map(function(e,t){return r.createElement("th",b({},n.props.tdProps,{key:t,style:n.constructor.styles.td}),r.createElement("span",{style:{color:"rgb(111, 11, 11)"}},e))})))}},{key:"objToTable",value:function(e){var t=this;return"{}"===JSON.stringify(e)?"{ }":r.createElement("table",this.props.tableProps,this.renderHeaderByKeys(Object.keys(e)),r.createElement("tbody",null,r.createElement("tr",this.props.trProps,l(e,function(e,r){return t.renderTd(e,r)}))))}},{key:"arrayToTable",value:function(e){var t=this;return"Array"===u(e)&&0===e.length?"[ ]":r.createElement("table",this.props.tableProps,r.createElement("tbody",null,l(e,function(e,n){return r.createElement("tr",b({key:n},t.props.trProps),r.createElement("td",b({},t.props.tdProps,{style:t.constructor.styles.td}),""+n),t.renderTd(e,n))})))}},{key:"oobToTable",value:function(e){var t=this;return r.createElement("table",this.props.tableProps,this.renderHeaderByKeys(Object.keys(i(e)),"addExtra"),r.createElement("tbody",null,l(e,function(n,o){return r.createElement("tr",b({},t.props.trProps,{key:o}),r.createElement("td",b({},t.props.tdProps,{style:t.constructor.styles.td}),r.createElement(v,{value:o})),l(i(e),function(e,r){return t.renderTd(n[r],r)}))})))}},{key:"renderTd",value:function(e,t){return r.createElement("td",b({},this.props.tdProps,{key:t,style:this.constructor.styles.td}),this.decideAndRender(e))}},{key:"decideAndRender",value:function(e){return"Array"===u(e)?p(e)?this.aobToTable(e):this.arrayToTable(e):"Object"===u(e)?y(e)?this.oobToTable(e):this.objToTable(e):r.createElement(v,{value:e})}},{key:"aobToTable",value:function(e){var t=this;return r.createElement("table",this.props.tableProps,this.renderHeaderByKeys(Object.keys(i(e))),r.createElement("tbody",this.props.tbodyProps,l(e,function(n,o){return r.createElement("tr",b({},t.props.trProps,{key:o}),l(i(e),function(e,r){return t.renderTd(n[r],r)}))})))}},{key:"render",value:function(){return r.createElement("div",null,this.decideAndRender(this.props.json))}}]),t}(e.Component);return E.propTypes={json:t.any.isRequired,tableProps:t.object,trProps:t.object,tdProps:t.object,thProps:t.object,tbodyProps:t.object,theadProps:t.object},E.styles={td:{border:"1px solid #cccccc",textAlign:"left",margin:0,padding:"6px 13px"},th:{border:"1px solid #cccccc",textAlign:"left",margin:0,padding:"6px 13px",fontWeight:"bold"}},E.defaultProps={},E});