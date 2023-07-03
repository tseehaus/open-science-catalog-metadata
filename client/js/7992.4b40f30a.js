"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[7992],{18090:function(r,t,e){e.d(t,{Z:function(){return u}});var n=function(){var r=this,t=r._self._c;return Array.isArray(r.roles)?t("div",{staticClass:"roles ml-1"},r._l(r.roles,(function(e){return t("b-badge",{key:e,staticClass:"ml-1 mb-1",attrs:{variant:"secondary"}},[r._v(" "+r._s(r.displayRole(e))+" ")])})),1):r._e()},i=[],o={name:"ProviderRoles",props:{roles:{type:Array,default:null}},methods:{displayRole(r){let t=`providers.role.${r}`;return this.$te(t)?this.$t(t):r}}},s=o,a=e(1001),l=(0,a.Z)(s,n,i,!1,null,"3c9cfbc0",null),u=l.exports},7992:function(r,t,e){e.r(t),e.d(t,{default:function(){return f}});var n=function(){var r=this,t=r._self._c;return t("section",{staticClass:"providers mb-4"},[t("h2",[r._v(r._s(r.$tc("providers.title",r.count)))]),r.isSimple?t("b-list-group",r._l(r.providers,(function(e,n){return t("b-list-group-item",{key:n,staticClass:"provider",attrs:{href:e.url,disabled:!e.url,target:"_blank",variant:"provider"}},[r._v(" "+r._s(e.name)+" "),t("ProviderRoles",{attrs:{roles:e.roles}})],1)})),1):t("div",{staticClass:"accordion",attrs:{role:"tablist"}},r._l(r.providers,(function(r,e){return t("Provider",{key:e,attrs:{id:String(e),provider:r}})})),1)],1)},i=[],o=e(70322),s=e(88367),a=e(18090),l=e(79879),u={name:"Providers",components:{BListGroup:o.N,BListGroupItem:s.f,Provider:()=>e.e(7711).then(e.bind(e,27711)),ProviderRoles:a.Z},props:{providers:{type:Array,required:!0}},computed:{count(){return l.ZP.size(this.providers)},isSimple(){return!this.providers.find((r=>{const t=["url","name","roles"];return Object.keys(r).filter((r=>!t.includes(r))).length>0}))}}},c=u,p=e(1001),d=(0,p.Z)(c,n,i,!1,null,null,null),f=d.exports},88367:function(r,t,e){e.d(t,{f:function(){return m}});var n=e(1915),i=e(69558),o=e(94689),s=e(12299),a=e(11572),l=e(26410),u=e(67040),c=e(20451),p=e(30488),d=e(67347);function f(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function b(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?f(Object(e),!0).forEach((function(t){v(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function v(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var h=["a","router-link","button","b-link"],y=(0,u.CE)(d.NQ,["event","routerTag"]);delete y.href.default,delete y.to.default;var g=(0,c.y2)((0,u.GE)(b(b({},y),{},{action:(0,c.pi)(s.U5,!1),button:(0,c.pi)(s.U5,!1),tag:(0,c.pi)(s.N0,"div"),variant:(0,c.pi)(s.N0)})),o.KT),m=(0,n.l7)({name:o.KT,functional:!0,props:g,render:function(r,t){var e,n=t.props,o=t.data,s=t.children,u=n.button,f=n.variant,b=n.active,g=n.disabled,m=(0,p.u$)(n),_=u?"button":m?d.we:n.tag,O=!!(n.action||m||u||(0,a.kI)(h,n.tag)),P={},j={};return(0,l.YR)(_,"button")?(o.attrs&&o.attrs.type||(P.type="button"),n.disabled&&(P.disabled=!0)):j=(0,c.uj)(y,n),r(_,(0,i.b)(o,{attrs:P,props:j,staticClass:"list-group-item",class:(e={},v(e,"list-group-item-".concat(f),f),v(e,"list-group-item-action",O),v(e,"active",b),v(e,"disabled",g),e)}),s)}})},70322:function(r,t,e){e.d(t,{N:function(){return p}});var n=e(1915),i=e(69558),o=e(94689),s=e(12299),a=e(33284),l=e(20451);function u(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var c=(0,l.y2)({flush:(0,l.pi)(s.U5,!1),horizontal:(0,l.pi)(s.gL,!1),tag:(0,l.pi)(s.N0,"div")},o.DX),p=(0,n.l7)({name:o.DX,functional:!0,props:c,render:function(r,t){var e=t.props,n=t.data,o=t.children,s=""===e.horizontal||e.horizontal;s=!e.flush&&s;var l={staticClass:"list-group",class:u({"list-group-flush":e.flush,"list-group-horizontal":!0===s},"list-group-horizontal-".concat(s),(0,a.HD)(s))};return r(e.tag,(0,i.b)(n,l),o)}})}}]);
//# sourceMappingURL=7992.4b40f30a.js.map