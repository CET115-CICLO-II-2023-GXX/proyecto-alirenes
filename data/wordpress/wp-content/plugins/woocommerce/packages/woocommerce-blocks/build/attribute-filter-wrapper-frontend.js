(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[14,77],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));var r=n(45);const c=(e=[],t,n,c="")=>{const o=e.filter((e=>e.attribute===n.taxonomy)),a=o.length?o[0]:null;if(!(a&&a.slug&&Array.isArray(a.slug)&&a.slug.includes(c)))return;const l=a.slug.filter((e=>e!==c)),s=e.filter((e=>e.attribute!==n.taxonomy));l.length>0&&(a.slug=l.sort(),s.push(a)),t(Object(r.a)(s).asc("attribute"))},o=(e=[],t,n,c=[],o="in")=>{if(!n||!n.taxonomy)return[];const a=e.filter((e=>e.attribute!==n.taxonomy));return 0===c.length?t(a):(a.push({attribute:n.taxonomy,operator:o,slug:c.map((({slug:e})=>e)).sort()}),t(Object(r.a)(a).asc("attribute"))),a}},117:function(e,t){},118:function(e,t){},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var r=n(2);n(140),n(5);const c=Object(r.getSetting)("attributes",[]).reduce(((e,t)=>{const n=(r=t)&&r.attribute_name?{id:parseInt(r.attribute_id,10),name:r.attribute_name,taxonomy:"pa_"+r.attribute_name,label:r.attribute_label}:null;var r;return n&&n.id&&e.push(n),e}),[]),o=e=>{if(e)return c.find((t=>t.id===e))},a=e=>{if(e)return c.find((t=>t.taxonomy===e))}},125:function(e){e.exports=JSON.parse('{"name":"woocommerce/attribute-filter","version":"1.0.0","title":"Filter by Attribute Controls","description":"Enable customers to filter the product grid by selecting one or more attributes, such as color.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"color":{"text":true,"background":false},"inserter":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"attributeId":{"type":"number","default":0},"showCounts":{"type":"boolean","default":false},"queryType":{"type":"string","default":"or"},"headingLevel":{"type":"number","default":3},"displayStyle":{"type":"string","default":"list"},"showFilterButton":{"type":"boolean","default":false},"selectType":{"type":"string","default":"multiple"},"isPreview":{"type":"boolean","default":false}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},135:function(e,t){},136:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),c=n(44),o=n(20),a=n(45),l=n(27),s=n(31),u=n(53),i=n(22);const b=({queryAttribute:e,queryPrices:t,queryStock:n,queryRating:b,queryState:d,isEditor:f=!1})=>{let m=Object(i.a)();m=`${m}-collection-data`;const[p]=Object(s.a)(m),[O,j]=Object(s.b)("calculate_attribute_counts",[],m),[g,y]=Object(s.b)("calculate_price_range",null,m),[h,v]=Object(s.b)("calculate_stock_status_counts",null,m),[w,E]=Object(s.b)("calculate_rating_counts",null,m),_=Object(l.a)(e||{}),k=Object(l.a)(t),S=Object(l.a)(n),x=Object(l.a)(b);Object(r.useEffect)((()=>{"object"==typeof _&&Object.keys(_).length&&(O.find((e=>Object(o.b)(_,"taxonomy")&&e.taxonomy===_.taxonomy))||j([...O,_]))}),[_,O,j]),Object(r.useEffect)((()=>{g!==k&&void 0!==k&&y(k)}),[k,y,g]),Object(r.useEffect)((()=>{h!==S&&void 0!==S&&v(S)}),[S,v,h]),Object(r.useEffect)((()=>{w!==x&&void 0!==x&&E(x)}),[x,E,w]);const[C,N]=Object(r.useState)(f),[A]=Object(c.a)(C,200);C||N(!0);const T=Object(r.useMemo)((()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=Object(a.a)(e.calculate_attribute_counts.map((({taxonomy:e,queryType:t})=>({taxonomy:e,query_type:t})))).asc(["taxonomy","query_type"])),t})(p)),[p]);return Object(u.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...d,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...T},shouldSelect:A})}},140:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return l}));var r=n(20);const c=e=>Object(r.b)(e,"count")&&Object(r.b)(e,"description")&&Object(r.b)(e,"id")&&Object(r.b)(e,"name")&&Object(r.b)(e,"parent")&&Object(r.b)(e,"slug")&&"number"==typeof e.count&&"string"==typeof e.description&&"number"==typeof e.id&&"string"==typeof e.name&&"number"==typeof e.parent&&"string"==typeof e.slug,o=e=>Array.isArray(e)&&e.every(c),a=e=>Object(r.b)(e,"attribute")&&Object(r.b)(e,"operator")&&Object(r.b)(e,"slug")&&"string"==typeof e.attribute&&"string"==typeof e.operator&&Array.isArray(e.slug)&&e.slug.every((e=>"string"==typeof e)),l=e=>Array.isArray(e)&&e.every(a)},160:function(e,t,n){"use strict";var r=n(0),c=n(1),o=n(27),a=n(54),l=n(31),s=n(53),u=n(136),i=n(55),b=n(62),d=n(63),f=n(14),m=n.n(f),p=n(23),O=n(2),j=n(15),g=n(64),y=n(29),h=n(20),v=n(140),w=n(76),E=n(153),_=n(67),k=n(85),S=n(61),x=n(4),C=n.n(x),N=n(119),A=n(110);const T=[{value:"preview-1",formattedValue:"preview-1",name:"Blue",label:Object(r.createElement)(i.a,{name:"Blue",count:3}),textLabel:"Blue (3)"},{value:"preview-2",formattedValue:"preview-2",name:"Green",label:Object(r.createElement)(i.a,{name:"Green",count:3}),textLabel:"Green (3)"},{value:"preview-3",formattedValue:"preview-3",name:"Red",label:Object(r.createElement)(i.a,{name:"Red",count:2}),textLabel:"Red (2)"}],L={count:0,has_archives:!0,id:0,label:"Preview",name:"preview",order:"menu_order",parent:0,taxonomy:"preview",type:""};n(229);var R=n(51),F=n(86),q=({isLoading:e=!1,options:t,checked:n,onChange:c})=>e?Object(r.createElement)(r.Fragment,null,Object(r.createElement)("span",{className:"is-loading"}),Object(r.createElement)("span",{className:"is-loading"})):Object(r.createElement)(F.a,{className:"wc-block-attribute-filter-list",options:t,checked:n,onChange:c,isLoading:e,isDisabled:e}),I=n(48);t.a=({attributes:e,isEditor:t=!1,getNotice:n=(()=>null)})=>{const f=Object(O.getSettingWithCoercion)("hasFilterableProducts",!1,g.a),x=Object(O.getSettingWithCoercion)("isRenderingPhpTemplate",!1,g.a),F=Object(O.getSettingWithCoercion)("pageUrl",window.location.href,y.a),[$,Q]=Object(r.useState)(!1),P=e.isPreview&&!e.attributeId?L:Object(N.a)(e.attributeId),V=Object(r.useMemo)((()=>Object(R.e)(P)),[P]),[B,M]=Object(r.useState)(V),[D,W]=Object(r.useState)(Object(R.d)()),[z,U]=Object(r.useState)(e.isPreview&&!e.attributeId?T:[]),[Y]=Object(l.a)(),[K,Z]=Object(l.b)("attributes",[]),{results:J,isLoading:G}=Object(s.a)({namespace:"/wc/store/v1",resourceName:"products/attributes/terms",resourceValues:[(null==P?void 0:P.id)||0],shouldSelect:e.attributeId>0}),{results:H,isLoading:X}=Object(u.a)({queryAttribute:{taxonomy:(null==P?void 0:P.taxonomy)||"",queryType:e.queryType},queryState:{...Y},isEditor:t}),ee=Object(r.useCallback)((e=>Object(h.b)(H,"attribute_counts")&&Array.isArray(H.attribute_counts)?H.attribute_counts.find((({term:t})=>t===e)):null),[H]);Object(r.useEffect)((()=>{if(G||X)return;if(!Array.isArray(J))return;const t=J.map((t=>{const n=ee(t.id);if(!(n||B.includes(t.slug)||(c=t.slug,null!=Y&&Y.attributes&&Y.attributes.some((({attribute:e,slug:t=[]})=>e===(null==P?void 0:P.taxonomy)&&t.includes(c))))))return null;var c;const o=n?n.count:0;return{formattedValue:Object(R.c)(t.slug),value:t.slug,name:Object(p.decodeEntities)(t.name),label:Object(r.createElement)(i.a,{name:Object(p.decodeEntities)(t.name),count:e.showCounts?o:null}),textLabel:e.showCounts?`${Object(p.decodeEntities)(t.name)} (${o})`:Object(p.decodeEntities)(t.name)}})).filter((e=>!!e));U(t),W(Object(R.d)())}),[null==P?void 0:P.taxonomy,J,G,e.showCounts,X,ee,B,Y.attributes]);const te=Object(r.useCallback)((e=>Array.isArray(J)?J.reduce(((t,n)=>(e.includes(n.slug)&&t.push(n),t)),[]):[]),[J]),ne=Object(r.useCallback)(((e,t=!1)=>{if(e=e.map((e=>({...e,slug:e.slug.map((e=>decodeURIComponent(e)))}))),t){if(null==P||!P.taxonomy)return;const t=Object.keys(Object(j.getQueryArgs)(window.location.href)),n=Object(R.h)(P.taxonomy),r=t.reduce(((e,t)=>t.includes(_.b+n)||t.includes(_.a+n)?Object(j.removeQueryArgs)(e,t):e),window.location.href),c=Object(R.b)(r,e);Object(_.c)(c)}else{const t=Object(R.b)(F,e),n=Object(j.getQueryArgs)(window.location.href),r=Object(j.getQueryArgs)(t);Object(R.f)(n,r)||Object(_.c)(t)}}),[F,null==P?void 0:P.taxonomy]),re=t=>{const n=Object(A.b)(K,Z,P,te(t),"or"===e.queryType?"in":"and");ne(n,0===t.length)},ce=Object(r.useCallback)(((n,r=!1)=>{t||(M(n),!r&&e.showFilterButton||Object(A.b)(K,Z,P,te(n),"or"===e.queryType?"in":"and"))}),[t,M,K,Z,P,te,e.queryType,e.showFilterButton]),oe=Object(r.useMemo)((()=>Object(v.a)(K)?K.filter((({attribute:e})=>e===(null==P?void 0:P.taxonomy))).flatMap((({slug:e})=>e)):[]),[K,null==P?void 0:P.taxonomy]),ae=Object(o.a)(oe),le=Object(a.a)(ae);Object(r.useEffect)((()=>{!le||m()(le,ae)||m()(B,ae)||ce(ae)}),[B,ae,le,ce]);const se="single"!==e.selectType,ue=Object(r.useCallback)((e=>{const t=B.includes(e);let n;se?(n=B.filter((t=>t!==e)),t||(n.push(e),n.sort())):n=t?[]:[e],ce(n)}),[B,se,ce]);Object(r.useEffect)((()=>{P&&!e.showFilterButton&&(Object(R.a)({currentCheckedFilters:B,hasSetFilterDefaultsFromUrl:$})?ne(K,!0):ne(K,!1))}),[$,ne,K,P,B,e.showFilterButton]),Object(r.useEffect)((()=>{if(!$&&!G)return V.length>0?(Q(!0),void ce(V,!0)):void(x||Q(!0))}),[P,$,G,ce,V,x]);const ie=Object(I.b)();if(!f)return ie(!1),null;if(!P)return t?n("noAttributes"):(ie(!1),null);if(0===z.length&&!G&&t)return n("noProducts");const be=`h${e.headingLevel}`,de=!e.isPreview&&G,fe=!e.isPreview&&X,me=(de||fe)&&0===z.length;if(!me&&0===z.length)return ie(!1),null;const pe=se?!me&&B.length<z.length:!me&&0===B.length,Oe=Object(r.createElement)(be,{className:"wc-block-attribute-filter__title"},e.heading),je=me?Object(r.createElement)(S.a,null,Oe):Oe;return ie(!0),Object(r.createElement)(r.Fragment,null,!t&&e.heading&&je,Object(r.createElement)("div",{className:C()("wc-block-attribute-filter",`style-${e.displayStyle}`)},"dropdown"===e.displayStyle?Object(r.createElement)(r.Fragment,null,Object(r.createElement)(k.a,{key:D,className:C()({"single-selection":!se,"is-loading":me}),suggestions:z.filter((e=>!B.includes(e.value))).map((e=>e.formattedValue)),disabled:me,placeholder:Object(c.sprintf)(/* translators: %s attribute name. */
Object(c.__)("Select %s","woocommerce"),P.label),onChange:e=>{!se&&e.length>1&&(e=[e[e.length-1]]);const t=[e=e.map((e=>{const t=z.find((t=>t.formattedValue===e));return t?t.value:e})),B].reduce(((e,t)=>e.filter((e=>!t.includes(e)))));if(1===t.length)return ue(t[0]);const n=[B,e].reduce(((e,t)=>e.filter((e=>!t.includes(e)))));1===n.length&&ue(n[0])},value:B,displayTransform:e=>{const t=z.find((t=>[t.value,t.formattedValue].includes(e)));return t?t.textLabel:e},saveTransform:R.c,messages:{added:Object(c.sprintf)(/* translators: %s is the attribute label. */
Object(c.__)("%s filter added.","woocommerce"),P.label),removed:Object(c.sprintf)(/* translators: %s is the attribute label. */
Object(c.__)("%s filter removed.","woocommerce"),P.label),remove:Object(c.sprintf)(/* translators: %s is the attribute label. */
Object(c.__)("Remove %s filter.","woocommerce"),P.label.toLocaleLowerCase()),__experimentalInvalid:Object(c.sprintf)(/* translators: %s is the attribute label. */
Object(c.__)("Invalid %s filter.","woocommerce"),P.label.toLocaleLowerCase())}}),pe&&Object(r.createElement)(w.a,{icon:E.a,size:30})):Object(r.createElement)(q,{options:z,checked:B,onChange:ue,isLoading:me,isDisabled:me})),Object(r.createElement)("div",{className:"wc-block-attribute-filter__actions"},(B.length>0||t)&&!me&&Object(r.createElement)(b.a,{onClick:()=>{M([]),W(Object(R.d)()),$&&re([])},screenReaderLabel:Object(c.__)("Reset attribute filter","woocommerce")}),e.showFilterButton&&Object(r.createElement)(d.a,{className:"wc-block-attribute-filter__button",isLoading:me,disabled:(()=>{if(de||fe)return!0;const e=Object(R.e)(P);return e.length===B.length&&B.every((t=>e.includes(t)))})(),onClick:()=>re(B)})))}},19:function(e,t,n){"use strict";var r=n(0),c=n(4),o=n.n(c);t.a=({label:e,screenReaderLabel:t,wrapperElement:n,wrapperProps:c={}})=>{let a;const l=null!=e,s=null!=t;return!l&&s?(a=n||"span",c={...c,className:o()(c.className,"screen-reader-text")},Object(r.createElement)(a,{...c},t)):(a=n||r.Fragment,l&&s&&e!==t?Object(r.createElement)(a,{...c},Object(r.createElement)("span",{"aria-hidden":"true"},e),Object(r.createElement)("span",{className:"screen-reader-text"},t)):Object(r.createElement)(a,{...c},e))}},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));var r=n(38);const c=e=>!Object(r.a)(e)&&e instanceof Object&&e.constructor===Object;function o(e,t){return c(e)&&t in e}},22:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);const c=Object(r.createContext)("page"),o=()=>Object(r.useContext)(c);c.Provider},229:function(e,t){},27:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),c=n(14),o=n.n(c);function a(e){const t=Object(r.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e},r.apply(this,arguments)};Object.create,Object.create},287:function(e,t,n){"use strict";function r(e){return e.toLowerCase()}n.d(t,"a",(function(){return a}));var c=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],o=/[^A-Z0-9]+/gi;function a(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,a=void 0===n?c:n,s=t.stripRegexp,u=void 0===s?o:s,i=t.transform,b=void 0===i?r:i,d=t.delimiter,f=void 0===d?" ":d,m=l(l(e,a,"$1\0$2"),u,"\0"),p=0,O=m.length;"\0"===m.charAt(p);)p++;for(;"\0"===m.charAt(O-1);)O--;return m.slice(p,O).split("\0").map(b).join(f)}function l(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>"string"==typeof e},290:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(286),c=n(287);function o(e,t){return void 0===t&&(t={}),function(e,t){return void 0===t&&(t={}),Object(c.a)(e,Object(r.a)({delimiter:"."},t))}(e,Object(r.a)({delimiter:"-"},t))}},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(4),c=n.n(r),o=n(20),a=n(29),l=n(290),s=n(132);function u(e={}){const t={};return Object(s.getCSSRules)(e,{selector:""}).forEach((e=>{t[e.key]=e.value})),t}function i(e,t){return e&&t?`has-${Object(l.a)(t)}-${e}`:""}const b=e=>{const t=(e=>{const t=Object(o.a)(e)?e:{style:{}};let n=t.style;return Object(a.a)(n)&&(n=JSON.parse(n)||{}),Object(o.a)(n)||(n={}),{...t,style:n}})(e),n=function(e){var t,n,r,a,l,s,b;const{backgroundColor:d,textColor:f,gradient:m,style:p}=e,O=i("background-color",d),j=i("color",f),g=function(e){if(e)return`has-${e}-gradient-background`}(m),y=g||(null==p||null===(t=p.color)||void 0===t?void 0:t.gradient);return{className:c()(j,g,{[O]:!y&&!!O,"has-text-color":f||(null==p||null===(n=p.color)||void 0===n?void 0:n.text),"has-background":d||(null==p||null===(r=p.color)||void 0===r?void 0:r.background)||m||(null==p||null===(a=p.color)||void 0===a?void 0:a.gradient),"has-link-color":Object(o.a)(null==p||null===(l=p.elements)||void 0===l?void 0:l.link)?null==p||null===(s=p.elements)||void 0===s||null===(b=s.link)||void 0===b?void 0:b.color:void 0}),style:u({color:(null==p?void 0:p.color)||{}})}}(t),r=function(e){var t;const n=(null===(t=e.style)||void 0===t?void 0:t.border)||{};return{className:function(e){var t;const{borderColor:n,style:r}=e,o=n?i("border-color",n):"";return c()({"has-border-color":!!n||!(null==r||null===(t=r.border)||void 0===t||!t.color),[o]:!!o})}(e),style:u({border:n})}}(t),l=function(e){var t;return{className:void 0,style:u({spacing:(null===(t=e.style)||void 0===t?void 0:t.spacing)||{}})}}(t),s=(e=>{const t=Object(o.a)(e.style.typography)?e.style.typography:{},n=Object(a.a)(t.fontFamily)?t.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:n,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:t.fontSize,fontStyle:t.fontStyle,fontWeight:t.fontWeight,letterSpacing:t.letterSpacing,lineHeight:t.lineHeight,textDecoration:t.textDecoration,textTransform:t.textTransform}}})(t);return{className:c()(s.className,n.className,r.className,l.className),style:{...s.style,...n.style,...r.style,...l.style}}}},31:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return f}));var r=n(3),c=n(5),o=n(0),a=n(14),l=n.n(a),s=n(27),u=n(54),i=n(22);const b=e=>{const t=Object(i.a)();e=e||t;const n=Object(c.useSelect)((t=>t(r.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)),[e]),{setValueForQueryContext:a}=Object(c.useDispatch)(r.QUERY_STATE_STORE_KEY);return[n,Object(o.useCallback)((t=>{a(e,t)}),[e,a])]},d=(e,t,n)=>{const a=Object(i.a)();n=n||a;const l=Object(c.useSelect)((c=>c(r.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t)),[n,e]),{setQueryValue:s}=Object(c.useDispatch)(r.QUERY_STATE_STORE_KEY);return[l,Object(o.useCallback)((t=>{s(n,e,t)}),[n,e,s])]},f=(e,t)=>{const n=Object(i.a)();t=t||n;const[r,c]=b(t),a=Object(s.a)(r),d=Object(s.a)(e),f=Object(u.a)(d),m=Object(o.useRef)(!1);return Object(o.useEffect)((()=>{l()(f,d)||(c(Object.assign({},a,d)),m.current=!0)}),[a,d,f,c]),m.current?[r,c]:[e,c]}},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>null===e},489:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(4),o=n.n(c),a=n(291),l=n(29),s=n(160),u=n(51);t.default=e=>{const t=Object(a.a)(e),n=Object(u.g)(e);return Object(r.createElement)("div",{className:o()(Object(l.a)(e.className)?e.className:"",t.className),style:t.style},Object(r.createElement)(s.a,{isEditor:!1,attributes:n}))}},51:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"h",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return b})),n.d(t,"f",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"g",(function(){return m}));var r=n(15),c=n(67),o=n(29),a=n(125);function l(){return Math.floor(Math.random()*Date.now())}const s=e=>e.replace("pa_",""),u=(e,t=[])=>{const n={};t.forEach((e=>{const{attribute:t,slug:r,operator:o}=e,a=s(t),l=r.join(","),u=`${c.b}${a}`,i="in"===o?"or":"and";n[`${c.a}${a}`]=l,n[u]=i}));const o=Object(r.removeQueryArgs)(e,...Object.keys(n));return Object(r.addQueryArgs)(o,n)},i=({currentCheckedFilters:e,hasSetFilterDefaultsFromUrl:t})=>t&&0===e.length,b=e=>{if(e){const t=Object(c.d)(`filter_${e.name}`);return("string"==typeof t?t.split(","):[]).map((e=>encodeURIComponent(e).toLowerCase()))}return[]},d=(e,t)=>{const n=Object.entries(t).reduce(((e,[t,n])=>t.includes("query_type")?e:{...e,[t]:n}),{});return Object.entries(n).reduce(((t,[n,r])=>e[n]===r&&t),!0)},f=e=>e.trim().replace(/\s/g,"-").replace(/_/g,"-").replace(/-+/g,"-").replace(/[^a-zA-Z0-9-]/g,""),m=e=>({className:Object(o.a)(null==e?void 0:e.className)?e.className:"",attributeId:parseInt(Object(o.a)(null==e?void 0:e.attributeId)?e.attributeId:"0",10),showCounts:"true"===(null==e?void 0:e.showCounts),queryType:Object(o.a)(null==e?void 0:e.queryType)&&e.queryType||a.attributes.queryType.default,heading:Object(o.a)(null==e?void 0:e.heading)?e.heading:"",headingLevel:Object(o.a)(null==e?void 0:e.headingLevel)&&parseInt(e.headingLevel,10)||a.attributes.headingLevel.default,displayStyle:Object(o.a)(null==e?void 0:e.displayStyle)&&e.displayStyle||a.attributes.displayStyle.default,showFilterButton:"true"===(null==e?void 0:e.showFilterButton),selectType:Object(o.a)(null==e?void 0:e.selectType)&&e.selectType||a.attributes.selectType.default,isPreview:!1})},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(3),c=n(5),o=n(0),a=n(27);const l=e=>{const{namespace:t,resourceName:n,resourceValues:l=[],query:s={},shouldSelect:u=!0}=e;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");const i=Object(o.useRef)({results:[],isLoading:!0}),b=Object(a.a)(s),d=Object(a.a)(l),f=(()=>{const[,e]=Object(o.useState)();return Object(o.useCallback)((t=>{e((()=>{throw t}))}),[])})(),m=Object(c.useSelect)((e=>{if(!u)return null;const c=e(r.COLLECTIONS_STORE_KEY),o=[t,n,b,d],a=c.getCollectionError(...o);if(a){if(!(a instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");f(a)}return{results:c.getCollection(...o),isLoading:!c.hasFinishedResolution("getCollection",o)}}),[t,n,d,b,u]);return null!==m&&(i.current=m),i.current}},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0);function c(e,t){const n=Object(r.useRef)();return Object(r.useEffect)((()=>{n.current===e||t&&!t(e,n.current)||(n.current=e)}),[e,t]),n.current}},55:function(e,t,n){"use strict";var r=n(0),c=n(1),o=n(19);n(135),t.a=({name:e,count:t})=>Object(r.createElement)(r.Fragment,null,e,null!==t&&Number.isFinite(t)&&Object(r.createElement)(o.a,{label:t.toString(),screenReaderLabel:Object(c.sprintf)(/* translators: %s number of products. */
Object(c._n)("%s product","%s products",t,"woocommerce"),t),wrapperElement:"span",wrapperProps:{className:"wc-filter-element-label-list-count"}}))},61:function(e,t,n){"use strict";var r=n(0);n(89),t.a=({children:e})=>Object(r.createElement)("div",{className:"wc-block-filter-title-placeholder"},e)},62:function(e,t,n){"use strict";var r=n(0),c=n(1),o=n(4),a=n.n(o),l=n(19);n(90),t.a=({className:e,
/* translators: Reset button text for filters. */
label:t=Object(c.__)("Reset","woocommerce"),onClick:n,screenReaderLabel:o=Object(c.__)("Reset filter","woocommerce")})=>Object(r.createElement)("button",{className:a()("wc-block-components-filter-reset-button",e),onClick:n},Object(r.createElement)(l.a,{label:t,screenReaderLabel:o}))},63:function(e,t,n){"use strict";var r=n(0),c=n(1),o=n(4),a=n.n(o),l=n(19);n(91),t.a=({className:e,isLoading:t,disabled:n,
/* translators: Submit button text for filters. */
label:o=Object(c.__)("Apply","woocommerce"),onClick:s,screenReaderLabel:u=Object(c.__)("Apply filter","woocommerce")})=>Object(r.createElement)("button",{type:"submit",className:a()("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":t},e),disabled:n,onClick:s},Object(r.createElement)(l.a,{label:o,screenReaderLabel:u}))},64:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>"boolean"==typeof e},67:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return b}));var r=n(15),c=n(2),o=n(64);const a=Object(c.getSettingWithCoercion)("isRenderingPhpTemplate",!1,o.a),l="query_type_",s="filter_";function u(e){return window?Object(r.getQueryArg)(window.location.href,e):null}function i(e){a?((e=e.replace(/(?:query-(?:\d+-)?page=(\d+))|(?:page\/(\d+))/g,"")).endsWith("?")&&(e=e.slice(0,-1)),window.location.href=e):window.history.replaceState({},"",e)}const b=e=>{const t=Object(r.getQueryArgs)(e);return Object(r.addQueryArgs)(e,t)}},85:function(e,t,n){"use strict";var r=n(0),c=n(127),o=n(4),a=n.n(o);n(117),t.a=({className:e,style:t,suggestions:n,multiple:o=!0,saveTransform:l=(e=>e.trim().replace(/\s/g,"-")),messages:s={},validateInput:u=(e=>n.includes(e)),label:i="",...b})=>Object(r.createElement)("div",{className:a()("wc-blocks-components-form-token-field-wrapper",e,{"single-selection":!o}),style:t},Object(r.createElement)(c.a,{label:i,__experimentalExpandOnFocus:!0,__experimentalShowHowTo:!1,__experimentalValidateInput:u,saveTransform:l,maxLength:o?void 0:1,suggestions:n,messages:s,...b}))},86:function(e,t,n){"use strict";var r=n(0),c=n(1),o=n(4),a=n.n(o),l=n(12);n(118),t.a=({className:e,onChange:t,options:n=[],checked:o=[],isLoading:s=!1,isDisabled:u=!1,limit:i=10})=>{const[b,d]=Object(r.useState)(!1),f=Object(r.useMemo)((()=>[...Array(5)].map(((e,t)=>Object(r.createElement)("li",{key:t,style:{width:Math.floor(75*Math.random())+25+"%"}})))),[]),m=Object(r.useMemo)((()=>{const e=n.length-i;return!b&&Object(r.createElement)("li",{key:"show-more",className:"show-more"},Object(r.createElement)("button",{onClick:()=>{d(!0)},"aria-expanded":!1,"aria-label":Object(c.sprintf)(/* translators: %s is referring the remaining count of options */
Object(c._n)("Show %s more option","Show %s more options",e,"woocommerce"),e)},Object(c.sprintf)(/* translators: %s number of options to reveal. */
Object(c._n)("Show %s more","Show %s more",e,"woocommerce"),e)))}),[n,i,b]),p=Object(r.useMemo)((()=>b&&Object(r.createElement)("li",{key:"show-less",className:"show-less"},Object(r.createElement)("button",{onClick:()=>{d(!1)},"aria-expanded":!0,"aria-label":Object(c.__)("Show less options","woocommerce")},Object(c.__)("Show less","woocommerce")))),[b]),O=Object(r.useMemo)((()=>{const e=n.length>i+5;return Object(r.createElement)(r.Fragment,null,n.map(((n,c)=>Object(r.createElement)(r.Fragment,{key:n.value},Object(r.createElement)("li",{...e&&!b&&c>=i&&{hidden:!0}},Object(r.createElement)(l.CheckboxControl,{id:n.value,className:"wc-block-checkbox-list__checkbox",label:n.label,checked:o.includes(n.value),onChange:()=>{t(n.value)},disabled:u})),e&&c===i-1&&m))),e&&p)}),[n,t,o,b,i,p,m,u]),j=a()("wc-block-checkbox-list","wc-block-components-checkbox-list",{"is-loading":s},e);return Object(r.createElement)("ul",{className:j},s?f:O)}},89:function(e,t){},90:function(e,t){},91:function(e,t){}}]);