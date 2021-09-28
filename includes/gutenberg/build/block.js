(()=>{"use strict";var e={20:e=>{var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),a=new RegExp("("+t+")+","gi");function n(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),a=e.slice(t);return Array.prototype.concat.call([],n(r),n(a))}function o(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r),a=1;a<t.length;a++)t=(e=n(t,a).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},r=a.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var n=o(r[0]);n!==r[0]&&(t[r[0]]=n)}r=a.exec(e)}t["%C2"]="�";for(var s=Object.keys(t),i=0;i<s.length;i++){var l=s[i];e=e.replace(new RegExp(l,"g"),t[l])}return e}(e)}}},806:e=>{e.exports=function(e,t){for(var r={},a=Object.keys(e),n=Array.isArray(t),o=0;o<a.length;o++){var s=a[o],i=e[s];(n?-1!==t.indexOf(s):t(s,i,e))&&(r[s]=i)}return r}},563:(e,t,r)=>{const a=r(610),n=r(20),o=r(500),s=r(806);function i(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(e,t){return t.encode?t.strict?a(e):encodeURIComponent(e):e}function p(e,t){return t.decode?n(e):e}function u(e){return Array.isArray(e)?e.sort():"object"==typeof e?u(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function c(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function m(e){const t=(e=c(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function d(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function f(e,t){i((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,a)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===a[e]&&(a[e]={}),a[e][t[1]]=r):a[e]=r};case"bracket":return(e,r,a)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==a[e]?a[e]=[].concat(a[e],r):a[e]=[r]:a[e]=r};case"comma":case"separator":return(t,r,a)=>{const n="string"==typeof r&&r.includes(e.arrayFormatSeparator),o="string"==typeof r&&!n&&p(r,e).includes(e.arrayFormatSeparator);r=o?p(r,e):r;const s=n||o?r.split(e.arrayFormatSeparator).map((t=>p(t,e))):null===r?r:p(r,e);a[t]=s};case"bracket-separator":return(t,r,a)=>{const n=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!n)return void(a[t]=r?p(r,e):r);const o=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>p(t,e)));void 0!==a[t]?a[t]=[].concat(a[t],o):a[t]=o};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),a=Object.create(null);if("string"!=typeof e)return a;if(!(e=e.trim().replace(/^[?#&]/,"")))return a;for(const n of e.split("&")){if(""===n)continue;let[e,s]=o(t.decode?n.replace(/\+/g," "):n,"=");s=void 0===s?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?s:p(s,t),r(p(e,t),s,a)}for(const e of Object.keys(a)){const r=a[e];if("object"==typeof r&&null!==r)for(const e of Object.keys(r))r[e]=d(r[e],t);else a[e]=d(r,t)}return!1===t.sort?a:(!0===t.sort?Object.keys(a).sort():Object.keys(a).sort(t.sort)).reduce(((e,t)=>{const r=a[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=u(r):e[t]=r,e}),Object.create(null))}t.extract=m,t.parse=f,t.stringify=(e,t)=>{if(!e)return"";i((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],a=function(e){switch(e.arrayFormat){case"index":return t=>(r,a)=>{const n=r.length;return void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?r:null===a?[...r,[l(t,e),"[",n,"]"].join("")]:[...r,[l(t,e),"[",l(n,e),"]=",l(a,e)].join("")]};case"bracket":return t=>(r,a)=>void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?r:null===a?[...r,[l(t,e),"[]"].join("")]:[...r,[l(t,e),"[]=",l(a,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(a,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?a:(n=null===n?"":n,0===a.length?[[l(r,e),t,l(n,e)].join("")]:[[a,l(n,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,a)=>void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?r:null===a?[...r,l(t,e)]:[...r,[l(t,e),"=",l(a,e)].join("")]}}(t),n={};for(const t of Object.keys(e))r(t)||(n[t]=e[t]);const o=Object.keys(n);return!1!==t.sort&&o.sort(t.sort),o.map((r=>{const n=e[r];return void 0===n?"":null===n?l(r,t):Array.isArray(n)?0===n.length&&"bracket-separator"===t.arrayFormat?l(r,t)+"[]":n.reduce(a(r),[]).join("&"):l(r,t)+"="+l(n,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,a]=o(e,"#");return Object.assign({url:r.split("?")[0]||"",query:f(m(e),t)},t&&t.parseFragmentIdentifier&&a?{fragmentIdentifier:p(a,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0},r);const a=c(e.url).split("?")[0]||"",n=t.extract(e.url),o=t.parse(n,{sort:!1}),s=Object.assign(o,e.query);let i=t.stringify(s,r);i&&(i=`?${i}`);let p=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(p=`#${l(e.fragmentIdentifier,r)}`),`${a}${i}${p}`},t.pick=(e,r,a)=>{a=Object.assign({parseFragmentIdentifier:!0},a);const{url:n,query:o,fragmentIdentifier:i}=t.parseUrl(e,a);return t.stringifyUrl({url:n,query:s(o,r),fragmentIdentifier:i},a)},t.exclude=(e,r,a)=>{const n=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,n,a)}},500:e=>{e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},610:e=>{e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,r),o.exports}(()=>{var e=r(563),t=lodash.isEmpty,a=wp.components.BaseControl;const n=(0,wp.compose.withInstanceId)((function(e){var r=e.label,n=e.selected,o=e.help,s=e.instanceId,i=e.onChange,l=e.disabled,p=e.options,u=void 0===p?[]:p,c="inspector-radio-image-control-".concat(s),m=function(e){return i(e.target.value)};return!t(u)&&wp.element.createElement(a,{label:r,id:c,help:o,className:"components-radio-image-control"},wp.element.createElement("div",{className:"components-radio-image-control__container"},u.map((function(e,t){return wp.element.createElement("div",{key:"".concat(c,"-").concat(t),className:"components-radio-image-control__option"},wp.element.createElement("input",{id:"".concat(c,"-").concat(t),className:"components-radio-image-control__input",type:"radio",name:c,value:e.value,onChange:m,checked:e.value===n,"aria-describedby":o?"".concat(c,"__help"):void 0,disabled:l}),wp.element.createElement("label",{htmlFor:"".concat(c,"-").concat(t),title:e.label},wp.element.createElement("img",{src:e.src}),wp.element.createElement("span",{class:"image-clickable"})))}))))}));function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var c=wp.i18n.__,m=wp.blockEditor||wp.editor,d=m.InspectorControls,f=m.MediaUpload,h=wp.element,y=h.Component,b=(h.Fragment,wp.components),g=b.BaseControl,v=b.ExternalLink,w=b.PanelBody,k=b.RangeControl,E=b.TextControl,T=b.Button,C=b.ToggleControl,x=b.SelectControl,z=b.ResponsiveWrapper;const O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(h,e);var t,r,a,o,m=(a=h,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=u(a);if(o){var r=u(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return p(this,e)});function h(){return s(this,h),m.apply(this,arguments)}return t=h,(r=[{key:"render",value:function(){var e=this,t="";return"https"===this.props.attributes.http&&(t+=c("Please verify that the images exist on HTTPS.")),wp.element.createElement(d,{key:"inspector"},0!==this.props.attributes.status&&wp.element.createElement(w,null,wp.element.createElement(E,{label:c("Feed Source"),className:"feedzy-source",value:this.props.attributes.feeds,onChange:this.props.edit.onChangeFeed}),wp.element.createElement(T,{isLarge:!0,isPrimary:!0,type:"submit",onClick:this.props.edit.loadFeed,className:"loadFeed"},c("Load Feed"))),"fetched"===this.props.state.route&&[wp.element.createElement(w,{title:c("Feed Settings"),initialOpen:!0,className:"feedzy-options"},wp.element.createElement(k,{label:c("Number of Items"),value:Number(this.props.attributes.max)||5,onChange:this.props.edit.onChangeMax,min:1,max:this.props.attributes.feedData.items.length||10,beforeIcon:"sort",className:"feedzy-max"}),wp.element.createElement(k,{label:c("Ignore first N items"),value:Number(this.props.attributes.offset)||0,onChange:this.props.edit.onChangeOffset,min:0,max:this.props.attributes.feedData.items.length,beforeIcon:"sort",className:"feedzy-offset"}),null!==this.props.attributes.feedData.channel&&wp.element.createElement(C,{label:c("Display feed title?"),checked:!!this.props.attributes.feed_title,onChange:this.props.edit.onToggleFeedTitle,className:"feedzy-title"}),wp.element.createElement(C,{label:c("Lazy load feed?"),checked:!!this.props.attributes.lazy,onChange:this.props.edit.onToggleLazy,className:"feedzy-lazy",help:c("Only on the front end.")}),wp.element.createElement(x,{label:c("Feed Caching Time"),value:this.props.attributes.refresh,options:[{label:c("1 Hour"),value:"1_hours"},{label:c("2 Hours"),value:"3_hours"},{label:c("12 Hours"),value:"12_hours"},{label:c("1 Day"),value:"1_days"},{label:c("3 Days"),value:"3_days"},{label:c("15 Days"),value:"15_days"}],onChange:this.props.edit.onRefresh,className:"feedzy-refresh"}),wp.element.createElement(x,{label:c("Sorting Order"),value:this.props.attributes.sort,options:[{label:c("Default"),value:"default"},{label:c("Date Descending"),value:"date_desc"},{label:c("Date Ascending"),value:"date_asc"},{label:c("Title Descending"),value:"title_desc"},{label:c("Title Ascending"),value:"title_asc"}],onChange:this.props.edit.onSort,className:"feedzy-sort"})),wp.element.createElement(w,{title:c("Item Options"),initialOpen:!1,className:"feedzy-item-options"},wp.element.createElement(x,{label:c("Open Links In"),value:this.props.attributes.target,options:[{label:c("New Tab"),value:"_blank"},{label:c("Same Tab"),value:"_self"}],onChange:this.props.edit.onTarget}),wp.element.createElement(E,{label:c("Title Character Limit"),help:c("Leave empty to show full title."),type:"number",value:this.props.attributes.title,onChange:this.props.edit.onTitle,className:"feedzy-title-length",min:0}),wp.element.createElement(g,null,wp.element.createElement(E,{label:feedzyjs.isPro?c("Should we display additional meta fields out of author, date, time or categories? (comma-separated list, in order of display)."):c("Should we display additional meta fields out of author, date or time? (comma-separated list, in order of display)."),help:c('Leave empty to display all and "no" to display nothing.'),placeholder:feedzyjs.isPro?c("(eg: author, date, time, tz=local, categories)"):c("(eg: author, date, time, tz=local)"),value:this.props.attributes.metafields,onChange:this.props.edit.onChangeMeta,className:"feedzy-meta"}),wp.element.createElement(E,{label:c("When using multiple sources, should we display additional meta fields? - source (comma-separated list)."),placeholder:c("(eg: source)"),value:this.props.attributes.multiple_meta,onChange:this.props.edit.onChangeMultipleMeta,className:"feedzy-multiple-meta"}),wp.element.createElement(v,{href:"https://docs.themeisle.com/article/1089-how-to-display-author-date-or-time-from-the-feed"},c("You can find more info about available meta field values here."))),wp.element.createElement(C,{label:c("Display post description?"),checked:!!this.props.attributes.summary,onChange:this.props.edit.onToggleSummary,className:"feedzy-summary"}),this.props.attributes.summary&&wp.element.createElement(E,{label:c("Description Character Limit"),help:c("Leave empty to show full description."),type:"number",value:this.props.attributes.summarylength,onChange:this.props.edit.onSummaryLength,className:"feedzy-summary-length",min:0}),feedzyjs.isPro&&[wp.element.createElement(E,{label:c("Only display if selected field contains:"),help:c("Use comma(,) and plus(+) keyword"),value:this.props.attributes.keywords_title,onChange:this.props.edit.onKeywordsTitle,className:"feedzy-include"}),wp.element.createElement(x,{label:c("Select a field if you want to inc keyword."),value:this.props.attributes.keywords_inc_on,options:[{label:c("Title"),value:"title"},{label:c("Author"),value:"author"},{label:c("Description"),value:"description"}],onChange:this.props.edit.onKeywordsIncludeOn}),wp.element.createElement(E,{label:c("Exclude if selected field contains:"),help:c("Use comma(,) and plus(+) keyword"),value:this.props.attributes.keywords_ban,onChange:this.props.edit.onKeywordsBan,className:"feedzy-ban"}),wp.element.createElement(x,{label:c("Select a field if you want to exc keyword."),value:this.props.attributes.keywords_exc_on,options:[{label:c("Title"),value:"title"},{label:c("Author"),value:"author"},{label:c("Description"),value:"description"}],onChange:this.props.edit.onKeywordsExcludeOn}),wp.element.createElement("p",null,c("Filter feed item by date range.")),wp.element.createElement(E,{type:"datetime-local",label:c("From:"),value:this.props.attributes.from_datetime,onChange:this.props.edit.onFromDateTime}),wp.element.createElement(E,{type:"datetime-local",label:c("To:"),value:this.props.attributes.to_datetime,onChange:this.props.edit.onToDateTime})]),wp.element.createElement(w,{title:c("Item Image Options"),initialOpen:!1,className:"feedzy-image-options"},wp.element.createElement(x,{label:c("Display first image if available?"),value:this.props.attributes.thumb,options:[{label:c("Yes (without  a fallback image)"),value:"auto"},{label:c("Yes (with a fallback image)"),value:"yes"},{label:c("No"),value:"no"}],onChange:this.props.edit.onThumb,className:"feedzy-thumb"}),"no"!==this.props.attributes.thumb&&["auto"!==this.props.attributes.thumb&&wp.element.createElement("div",{className:"feedzy-blocks-base-control"},wp.element.createElement("label",{className:"blocks-base-control__label",for:"inspector-media-upload"},c("Fallback image if no image is found.")),wp.element.createElement(f,{type:"image",id:"inspector-media-upload",value:this.props.attributes.default,onSelect:this.props.edit.onDefault,render:function(t){var r=t.open;return[void 0!==e.props.attributes.default&&[wp.element.createElement(z,{naturalWidth:e.props.attributes.default.width,naturalHeight:e.props.attributes.default.height},wp.element.createElement("img",{src:e.props.attributes.default.url,alt:c("Featured image")})),wp.element.createElement(T,{isLarge:!0,isSecondary:!0,onClick:function(){return e.props.setAttributes({default:void 0})},style:{marginTop:"10px"}},c("Remove Image"))],wp.element.createElement(T,{isLarge:!0,isPrimary:!0,onClick:r,style:{marginTop:"10px"},className:void 0===e.props.attributes.default&&"feedzy_image_upload"},c("Upload Image"))]}})),wp.element.createElement(E,{label:c("Thumbnails dimension."),type:"number",value:this.props.attributes.size,onChange:this.props.edit.onSize}),wp.element.createElement(x,{label:c("How should we treat HTTP images?"),value:this.props.attributes.http,options:[{label:c("Show with HTTP link"),value:"auto"},{label:c("Force HTTPS"),value:"https"},{label:c("Ignore and show the default image instead"),value:"default"}],onChange:this.props.edit.onHTTP,className:"feedzy-http",help:t})]),feedzyjs.isPro&&wp.element.createElement(w,{title:c("Pro Features"),initialOpen:!1,className:"feedzy-pro-options"},wp.element.createElement(C,{label:c("Display price if available?"),help:this.props.attributes.price&&"default"===this.props.attributes.template?c("Choose a different template for this to work."):null,checked:!!this.props.attributes.price,onChange:this.props.edit.onTogglePrice,className:"feedzy-pro-price"}),wp.element.createElement(E,{label:c("Referral URL parameters."),help:c('Without ("?")'),placeholder:_("(eg. promo_code=feedzy_is_awesome)"),value:this.props.attributes.referral_url,onChange:this.props.edit.onReferralURL}),wp.element.createElement(k,{label:c("Columns"),help:c("How many columns we should use to display the feed items?"),value:this.props.attributes.columns||1,onChange:this.props.edit.onColumns,min:1,max:6,beforeIcon:"sort",allowReset:!0}),wp.element.createElement(n,{label:c("Feed Template"),selected:this.props.attributes.template,options:[{label:c("Default"),src:feedzyjs.imagepath+"feedzy-default-template.jpg",value:"default"},{label:c("Style 1"),src:feedzyjs.imagepath+"feedzy-style1-template.jpg",value:"style1"},{label:c("Style 2"),src:feedzyjs.imagepath+"feedzy-style2-template.jpg",value:"style2"}],onChange:this.props.edit.onTemplate,className:"feedzy-pro-template"}))])}}])&&i(t.prototype,r),h}(y);var S=function(e){var t=document.createElement("div");return t.innerHTML=e,void 0!==t.innerText?t.innerText:t.textContent},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t="",r=[];return""!==e&&e.replace(/[^a-zA-Z]/g,"").length<=500&&(e.split(",").forEach((function(e){""!==(e=e.trim())&&(e=e.split("+").map((function(e){return"(?=.*"+(e=e.trim())+")"})),r.push(e.join("")))})),t="^"+(t=r.join("|"))+".*$",t=new RegExp(t,"i")),t};function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function R(e,t,r,a,n,o,s){try{var i=e[o](s),l=i.value}catch(e){return void r(e)}i.done?t(l):Promise.resolve(l).then(a,n)}function A(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function s(e){R(o,a,n,s,i,"next",e)}function i(e){R(o,a,n,s,i,"throw",e)}s(void 0)}))}}function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?U(e):t}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var B=wp.i18n.__,K=wp,H=(K.apiFetch,K.apiRequest),$=wp.element,Y=$.Component,V=($.Fragment,wp.components),q=V.ExternalLink,W=V.Placeholder,X=V.TextControl,Q=V.Button,Z=V.Spinner;wp.date.date;const G=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(p,t);var r,a,n,o,s,i,l=(s=p,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(s);if(i){var r=M(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return I(this,e)});function p(){var e;return D(this,p),(e=l.apply(this,arguments)).loadFeed=e.loadFeed.bind(U(e)),e.loadCategories=e.loadCategories.bind(U(e)),e.metaExists=e.metaExists.bind(U(e)),e.multipleMetaExists=e.multipleMetaExists.bind(U(e)),e.getImageURL=e.getImageURL.bind(U(e)),e.getValidateURL=e.getValidateURL.bind(U(e)),e.onChangeFeed=e.onChangeFeed.bind(U(e)),e.onChangeMax=e.onChangeMax.bind(U(e)),e.onChangeOffset=e.onChangeOffset.bind(U(e)),e.onToggleFeedTitle=e.onToggleFeedTitle.bind(U(e)),e.onRefresh=e.onRefresh.bind(U(e)),e.onSort=e.onSort.bind(U(e)),e.onTarget=e.onTarget.bind(U(e)),e.onTitle=e.onTitle.bind(U(e)),e.onChangeMeta=e.onChangeMeta.bind(U(e)),e.onChangeMultipleMeta=e.onChangeMultipleMeta.bind(U(e)),e.onToggleSummary=e.onToggleSummary.bind(U(e)),e.onToggleLazy=e.onToggleLazy.bind(U(e)),e.onSummaryLength=e.onSummaryLength.bind(U(e)),e.onKeywordsTitle=e.onKeywordsTitle.bind(U(e)),e.onKeywordsBan=e.onKeywordsBan.bind(U(e)),e.onThumb=e.onThumb.bind(U(e)),e.onDefault=e.onDefault.bind(U(e)),e.onSize=e.onSize.bind(U(e)),e.onHTTP=e.onHTTP.bind(U(e)),e.onReferralURL=e.onReferralURL.bind(U(e)),e.onColumns=e.onColumns.bind(U(e)),e.onTemplate=e.onTemplate.bind(U(e)),e.onTogglePrice=e.onTogglePrice.bind(U(e)),e.onKeywordsIncludeOn=e.onKeywordsIncludeOn.bind(U(e)),e.onKeywordsExcludeOn=e.onKeywordsExcludeOn.bind(U(e)),e.onFromDateTime=e.onFromDateTime.bind(U(e)),e.onToDateTime=e.onToDateTime.bind(U(e)),e.state={route:e.props.attributes.route,loading:!1,error:!1},e}return r=p,(a=[{key:"componentDidMount",value:(o=A(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadFeed(),void 0===this.props.attributes.categories&&(this.props.attributes.meta||this.props.setAttributes({meta:!0,metafields:"no"}),this.loadCategories());case 2:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"componentDidUpdate",value:(n=A(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"reload"===this.state.route&&this.loadFeed();case 1:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"loadFeed",value:function(){var t=this,r=this.props.attributes.feeds;if(void 0!==r){if(function(e,t){if(void 0===t)return!1;for(var r=!1,a=0;a<t.length;a++)if(t[a]===e){r=!0;break}return r}(r,this.props.attributes.categories)){var a=r;r=e.stringify({category:a},{arrayFormat:"bracket"})}else r=r.replace(/\s/g,"").split(",").filter((function(e){return""!==e})),r=e.stringify({url:r},{arrayFormat:"bracket"});this.setState({route:"home",loading:!0}),H({path:"/feedzy/v1/feed?".concat(r),method:"POST",data:this.props.attributes}).then((function(e){return t.unmounting?e:e.error?(t.setState({route:"home",loading:!1,error:!0}),e):(t.props.setAttributes({feedData:e}),t.setState({route:"fetched",loading:!1}),e)})).fail((function(e){return t.setState({route:"home",loading:!1,error:!0}),e}))}}},{key:"loadCategories",value:function(){var e=this;H({path:"/wp/v2/feedzy_categories"}).then((function(t){if(e.unmounting)return t;var r=0,a=[];t.forEach((function(e){a[r]=e.slug,r+=1}));var n=e;n.props.setAttributes({categories:a}),jQuery(".feedzy-source input").autocomplete({source:a,select:function(e,t){n.props.setAttributes({feeds:t.item.label})}})})).fail((function(e){return e}))}},{key:"metaExists",value:function(e){return 0<=this.props.attributes.metafields.replace(/\s/g,"").split(",").indexOf(e)||""===this.props.attributes.metafields}},{key:"multipleMetaExists",value:function(e){return 0<=this.props.attributes.multiple_meta.replace(/\s/g,"").split(",").indexOf(e)||""===this.props.attributes.multiple_meta}},{key:"getImageURL",value:function(e,t){var r=e.thumbnail?e.thumbnail:this.props.attributes.default?this.props.attributes.default.url:feedzyjs.imagepath+"feedzy.svg";switch(this.props.attributes.http){case"default":-1===r.indexOf("https")&&0===r.indexOf("http")&&(r=this.props.attributes.default?this.props.attributes.default.url:feedzyjs.imagepath+"feedzy.svg");break;case"https":r=r.replace(/http:/g,"https:")}return t&&(r="url("+r+")"),r}},{key:"onChangeFeed",value:function(e){this.props.setAttributes({feeds:e})}},{key:"onChangeMax",value:function(e){this.props.setAttributes({max:e?Number(e):5})}},{key:"onChangeOffset",value:function(e){this.props.setAttributes({offset:Number(e)})}},{key:"onToggleFeedTitle",value:function(e){this.props.setAttributes({feed_title:!this.props.attributes.feed_title})}},{key:"onRefresh",value:function(e){this.props.setAttributes({refresh:e})}},{key:"onSort",value:function(e){this.props.setAttributes({sort:e})}},{key:"onTarget",value:function(e){this.props.setAttributes({target:e})}},{key:"onTitle",value:function(e){this.props.setAttributes({title:Number(e)})}},{key:"onChangeMeta",value:function(e){this.props.setAttributes({metafields:e})}},{key:"onChangeMultipleMeta",value:function(e){this.props.setAttributes({multiple_meta:e})}},{key:"onToggleSummary",value:function(e){this.props.setAttributes({summary:!this.props.attributes.summary})}},{key:"onToggleLazy",value:function(e){this.props.setAttributes({lazy:!this.props.attributes.lazy})}},{key:"onSummaryLength",value:function(e){this.props.setAttributes({summarylength:Number(e)})}},{key:"onKeywordsTitle",value:function(e){this.props.setAttributes({keywords_title:e})}},{key:"onKeywordsBan",value:function(e){this.props.setAttributes({keywords_ban:e})}},{key:"onThumb",value:function(e){this.props.setAttributes({thumb:e})}},{key:"onDefault",value:function(e){this.props.setAttributes({default:e}),this.setState({route:"reload"})}},{key:"onSize",value:function(e){this.props.setAttributes({size:e?Number(e):150})}},{key:"onHTTP",value:function(e){this.props.setAttributes({http:e}),this.setState({route:"reload"})}},{key:"onReferralURL",value:function(e){this.props.setAttributes({referral_url:e})}},{key:"onColumns",value:function(e){this.props.setAttributes({columns:e})}},{key:"onTemplate",value:function(e){this.props.setAttributes({template:e})}},{key:"onTogglePrice",value:function(e){this.props.setAttributes({price:!this.props.attributes.price})}},{key:"onKeywordsIncludeOn",value:function(e){this.props.setAttributes({keywords_inc_on:e})}},{key:"onKeywordsExcludeOn",value:function(e){this.props.setAttributes({keywords_exc_on:e})}},{key:"onFromDateTime",value:function(e){this.props.setAttributes({from_datetime:e})}},{key:"onToDateTime",value:function(e){this.props.setAttributes({to_datetime:e})}},{key:"getValidateURL",value:function(){var e="https://validator.w3.org/feed/";return this.props.attributes.feeds&&(e+="check.cgi?url="+this.props.attributes.feeds),e}},{key:"render",value:function(){var e,t,r,a,n,o,s,i,l,p,u=this;return["fetched"===this.state.route&&wp.element.createElement(O,j({edit:this,state:this.state},this.props)),"home"===this.state.route&&wp.element.createElement("div",{className:this.props.className},wp.element.createElement(W,{key:"placeholder",icon:"rss",label:B("Feedzy RSS Feeds")},this.state.loading?wp.element.createElement("div",{key:"loading",className:"wp-block-embed is-loading"},wp.element.createElement(Z,null),wp.element.createElement("p",null,B("Fetching..."))):[wp.element.createElement(X,{type:"url",className:"feedzy-source",placeholder:B("Enter URL or category of your feed here..."),onChange:this.onChangeFeed,value:this.props.attributes.feeds}),wp.element.createElement(Q,{isLarge:!0,isPrimary:!0,type:"submit",onClick:this.loadFeed},B("Load Feed")),wp.element.createElement(q,{href:this.getValidateURL(),title:B("Validate Feed ")},B("Validate ")),this.state.error&&wp.element.createElement("div",null,B("Feed URL is invalid. Invalid feeds will NOT display items."))])),!("fetched"!==this.state.route||void 0===this.props.attributes.feedData)&&wp.element.createElement("div",{className:"feedzy-rss"},this.props.attributes.feed_title&&null!==this.props.attributes.feedData.channel&&wp.element.createElement("div",{className:"rss_header"},wp.element.createElement("h2",null,wp.element.createElement("a",{className:"rss_title"},S(this.props.attributes.feedData.channel.title)),wp.element.createElement("span",{className:"rss_description"}," "+S(this.props.attributes.feedData.channel.description)))),wp.element.createElement("ul",{className:"feedzy-".concat(this.props.attributes.template)},(e=this.props.attributes.feedData.items,t=this.props.attributes.sort,r=N(this.props.attributes.keywords_title),a=N(this.props.attributes.keywords_ban),n=this.props.attributes.max,o=this.props.attributes.offset,s=this.props.attributes.keywords_inc_on,i=this.props.attributes.keywords_exc_on,l=this.props.attributes.from_datetime,p=this.props.attributes.to_datetime,s="author"===s?"creator":s,i="author"===i?"creator":i,l=moment(l).format("X"),p=moment(p).format("X"),e=Array.from(e).sort((function(e,r){var a,n;return"date_desc"===t||"date_asc"===t?(a=e.pubDate,n=r.pubDate):"title_desc"!==t&&"title_asc"!==t||(a=e.title.toUpperCase(),n=r.title.toUpperCase()),a<n?"date_desc"===t||"title_desc"===t?1:-1:a>n?"date_desc"===t||"title_desc"===t?-1:1:0})).filter((function(e){return!r||r.test(e[s])})).filter((function(e){return!a||!a.test(e[i])})).filter((function(e){var t=e.date+" "+e.time;return t=moment(new Date(t)).format("X"),!l||!p||l<=t&&t<=p})).slice(o,n+o)).map((function(e,t){var r=(e.date||"")+" "+(e.time||"")+" UTC +0000",a=S(e.date)||"",n=S(e.time)||"",o=S(e.categories)||"";if(u.metaExists("tz=local")){var s=new Date(r);s=s.toUTCString(),a=moment.utc(s).format("MMMM D, YYYY"),n=moment.utc(s).format("h:mm A")}var i=e.creator&&u.metaExists("author")?e.creator:"";""!==u.props.attributes.multiple_meta&&"no"!==u.props.attributes.multiple_meta&&((u.multipleMetaExists("source")||u.multipleMetaExists("yes"))&&""!==i&&""!==e.source?i=i+" ("+e.source+")":(u.multipleMetaExists("source")||u.multipleMetaExists("yes"))&&""!==e.source&&(i=e.source)),""===e.thumbnail&&"auto"===u.props.attributes.thumb&&(e.thumbnail=e.default_img);var l=new Object;return l.author=B("by")+" "+i,l.date=B("on")+" "+S(a),l.time=B("at")+" "+S(n),l.categories=B("in")+" "+S(o),wp.element.createElement("li",{key:t,style:{padding:"15px 0 25px"},className:"rss_item feedzy-rss-col-".concat(u.props.attributes.columns)},(e.thumbnail&&"auto"===u.props.attributes.thumb||"yes"===u.props.attributes.thumb)&&wp.element.createElement("div",{className:"rss_image",style:{width:u.props.attributes.size+"px",height:u.props.attributes.size+"px"}},wp.element.createElement("a",{title:S(e.title),style:{width:u.props.attributes.size+"px",height:u.props.attributes.size+"px"}},wp.element.createElement("span",{className:"fetched",style:{width:u.props.attributes.size+"px",height:u.props.attributes.size+"px",backgroundImage:u.getImageURL(e,!0)},title:S(e.title)}))),wp.element.createElement("div",{className:"rss_content_wrap"},wp.element.createElement("span",{className:"title"},wp.element.createElement("a",null,u.props.attributes.title&&S(e.title).length>u.props.attributes.title?S(e.title).substring(0,u.props.attributes.title)+"...":S(e.title))),wp.element.createElement("div",{className:"rss_content"},"no"!==u.props.attributes.metafields&&wp.element.createElement("small",{className:"meta"},function(e,t){var r="";""===t&&(t="author, date, time");for(var a=t.replace(/\s/g,"").split(","),n=0;n<a.length;n++)void 0!==e[a[n]]&&(r=r+" "+e[a[n]]);return r}(l,u.props.attributes.metafields)),u.props.attributes.summary&&wp.element.createElement("p",{className:"description"},u.props.attributes.summarylength&&S(e.description).length>u.props.attributes.summarylength?S(e.description).substring(0,u.props.attributes.summarylength)+" [...]":S(e.description)),feedzyjs.isPro&&e.media&&e.media.src&&wp.element.createElement("audio",{controls:!0,controlsList:"nodownload"},wp.element.createElement("source",{src:e.media.src,type:e.media.type}),B("Your browser does not support the audio element. But you can check this for the original link: "),wp.element.createElement("a",{href:e.media.src},e.media.src)),feedzyjs.isPro&&u.props.attributes.price&&e.price&&"default"!==u.props.attributes.template&&wp.element.createElement("div",{className:"price-wrap"},wp.element.createElement("a",null,wp.element.createElement("button",{className:"price"},e.price))))))}))))]}}])&&L(r.prototype,a),p}(Y);var J=wp.i18n.__;(0,wp.blocks.registerBlockType)("feedzy-rss-feeds/feedzy-block",{title:J("Feedzy RSS Feeds"),category:"common",icon:"rss",keywords:[J("Feedzy RSS Feeds"),J("RSS"),J("Feeds")],supports:{html:!1},attributes:{feeds:{type:"string"},max:{type:"number",default:5},offset:{type:"number",default:0},feed_title:{type:"boolean",default:!0},refresh:{type:"string",default:"12_hours"},sort:{type:"string",default:"default"},target:{type:"string",default:"_blank"},title:{type:"number"},meta:{type:"boolean",default:!0},lazy:{type:"boolean",default:!1},metafields:{type:"string",default:""},multiple_meta:{type:"string",default:""},summary:{type:"boolean",default:!0},summarylength:{type:"number"},keywords_title:{type:"string"},keywords_inc_on:{type:"string"},keywords_ban:{type:"string"},keywords_exc_on:{type:"string"},thumb:{type:"string",default:"auto"},default:{type:"object"},size:{type:"number",default:150},http:{type:"string"},referral_url:{type:"string"},columns:{type:"number",default:1},template:{type:"string",default:"default"},price:{type:"boolean",default:!0},route:{type:"string",default:"home"},feedData:{type:"object"},categories:{type:"object"},from_datetime:{type:"string"},to_datetime:{type:"string"}},edit:G,save:function(){return null}})})()})();