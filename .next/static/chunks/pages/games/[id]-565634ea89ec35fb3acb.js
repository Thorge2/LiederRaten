_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"20a2":function(e,a,t){e.exports=t("nOHt")},"65eO":function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),i=t.n(c),l=t("q1tI"),o=t.n(l),s=t("vUet"),d=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.variant,l=e.pill,d=e.className,u=e.as,b=void 0===u?"span":u,f=Object(n.a)(e,["bsPrefix","variant","pill","className","as"]),v=Object(s.a)(t,"badge");return o.a.createElement(b,Object(r.a)({ref:a},f,{className:i()(d,v,l&&v+"-pill",c&&v+"-"+c)}))}));d.displayName="Badge",d.defaultProps={pill:!1},a.a=d},"6xyR":function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),i=t.n(c),l=t("q1tI"),o=t.n(l),s=t("vUet"),d=t("YdCC"),u=t("U1MP"),b=t("Wzyw"),f=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,l=e.variant,d=e.as,u=void 0===d?"img":d,b=Object(n.a)(e,["bsPrefix","className","variant","as"]),f=Object(s.a)(t,"card-img");return o.a.createElement(u,Object(r.a)({ref:a,className:i()(l?f+"-"+l:f,c)},b))}));f.displayName="CardImg",f.defaultProps={variant:null};var v=f,j=Object(u.a)("h5"),m=Object(u.a)("h6"),O=Object(d.a)("card-body"),x=Object(d.a)("card-title",{Component:j}),y=Object(d.a)("card-subtitle",{Component:m}),p=Object(d.a)("card-link",{Component:"a"}),h=Object(d.a)("card-text",{Component:"p"}),w=Object(d.a)("card-header"),g=Object(d.a)("card-footer"),N=Object(d.a)("card-img-overlay"),C=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,d=e.bg,u=e.text,f=e.border,v=e.body,j=e.children,m=e.as,x=void 0===m?"div":m,y=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),p=Object(s.a)(t,"card"),h=Object(l.useMemo)((function(){return{cardHeaderBsPrefix:p+"-header"}}),[p]);return o.a.createElement(b.a.Provider,{value:h},o.a.createElement(x,Object(r.a)({ref:a},y,{className:i()(c,p,d&&"bg-"+d,u&&"text-"+u,f&&"border-"+f)}),v?o.a.createElement(O,null,j):j))}));C.displayName="Card",C.defaultProps={body:!1},C.Img=v,C.Title=x,C.Subtitle=y,C.Body=O,C.Link=p,C.Text=h,C.Header=w,C.Footer=g,C.ImgOverlay=N;a.a=C},F9IU:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r).a.createContext(null);n.displayName="NavContext",a.a=n},ILyh:function(e,a,t){"use strict";t.d(a,"b",(function(){return c}));var r=t("q1tI"),n=t.n(r).a.createContext(null),c=function(e,a){return void 0===a&&(a=null),null!=e?String(e):a||null};a.a=n},U1MP:function(e,a,t){"use strict";var r=t("wx14"),n=t("q1tI"),c=t.n(n),i=t("TSYQ"),l=t.n(i);a.a=function(e){return c.a.forwardRef((function(a,t){return c.a.createElement("div",Object(r.a)({},a,{ref:t,className:l()(a.className,e)}))}))}},VWqr:function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),i=t.n(c),l=t("q1tI"),o=t.n(l),s=t("ZCiN"),d=(t("2W6z"),t("F9IU")),u=t("ILyh"),b=o.a.forwardRef((function(e,a){var t=e.active,c=e.className,b=e.eventKey,f=e.onSelect,v=e.onClick,j=e.as,m=Object(n.a)(e,["active","className","eventKey","onSelect","onClick","as"]),O=Object(u.b)(b,m.href),x=Object(l.useContext)(u.a),y=Object(l.useContext)(d.a),p=t;if(y){m.role||"tablist"!==y.role||(m.role="tab");var h=y.getControllerId(O),w=y.getControlledId(O);m["data-rb-event-key"]=O,m.id=h||m.id,m["aria-controls"]=w||m["aria-controls"],p=null==t&&null!=O?y.activeKey===O:t}"tab"===m.role&&(m.disabled&&(m.tabIndex=-1,m["aria-disabled"]=!0),m["aria-selected"]=p);var g=Object(s.a)((function(e){v&&v(e),null!=O&&(f&&f(O,e),x&&x(O,e))}));return o.a.createElement(j,Object(r.a)({},m,{ref:a,onClick:g,className:i()(c,p&&"active")}))}));b.defaultProps={disabled:!1},a.a=b},n5Vf:function(e,a,t){"use strict";t.r(a);var r=t("nKUr"),n=t("20a2"),c=t("6xyR"),i=t("65eO"),l=t("sjrs"),o=t("LcK6");a.default=function(){var e=Object(n.useRouter)(),a=Object(o.c)(e.query.id),t=a.loading,s=(a.error,a.data);return Object(r.jsx)(c.a,{children:t?Object(r.jsx)("h1",{children:"Loading..."}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(c.a.Header,{children:Object(r.jsxs)(c.a.Title,{children:[Object(r.jsxs)("h1",{children:[s.game.name,"  ",Object(r.jsx)(i.a,{variant:"primary",children:s.game.id})]}),Object(r.jsxs)("p",{children:["Datum: ",new Date(parseInt(s.game.date)).toLocaleDateString()," | ",new Date(parseInt(s.game.date)).toLocaleTimeString()]})]})}),Object(r.jsx)(c.a.Body,{children:Object(r.jsx)(l.a,{variant:"flush",children:s.game.players.map((function(e,a){return Object(r.jsx)(l.a.Item,{children:Object(r.jsxs)("h2",{children:[e.name,"  ",Object(r.jsx)(i.a,{style:{backgroundColor:e.color},children:e.score})]})},a)}))})})]})})}},rQNl:function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=Function.prototype.bind.call(Function.prototype.call,[].slice);var i=t("q1tI"),l=t.n(i);var o=t("lcWJ"),s=t("F9IU"),d=t("ILyh"),u=l.a.createContext(null),b=function(){},f=l.a.forwardRef((function(e,a){var t,f,v=e.as,j=void 0===v?"ul":v,m=e.onSelect,O=e.activeKey,x=e.role,y=e.onKeyDown,p=Object(n.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),h=Object(i.useReducer)((function(e){return!e}),!1)[1],w=Object(i.useRef)(!1),g=Object(i.useContext)(d.a),N=Object(i.useContext)(u);N&&(x=x||"tablist",O=N.activeKey,t=N.getControlledId,f=N.getControllerId);var C=Object(i.useRef)(null),I=function(e){var a=C.current;if(!a)return null;var t,r=(t="[data-rb-event-key]:not(.disabled)",c(a.querySelectorAll(t))),n=a.querySelector(".active");if(!n)return null;var i=r.indexOf(n);if(-1===i)return null;var l=i+e;return l>=r.length&&(l=0),l<0&&(l=r.length-1),r[l]},P=function(e,a){null!=e&&(m&&m(e,a),g&&g(e,a))};Object(i.useEffect)((function(){if(C.current&&w.current){var e=C.current.querySelector("[data-rb-event-key].active");e&&e.focus()}w.current=!1}));var E=Object(o.a)(a,C);return l.a.createElement(d.a.Provider,{value:P},l.a.createElement(s.a.Provider,{value:{role:x,activeKey:Object(d.b)(O),getControlledId:t||b,getControllerId:f||b}},l.a.createElement(j,Object(r.a)({},p,{onKeyDown:function(e){var a;switch(y&&y(e),e.key){case"ArrowLeft":case"ArrowUp":a=I(-1);break;case"ArrowRight":case"ArrowDown":a=I(1);break;default:return}a&&(e.preventDefault(),P(a.dataset.rbEventKey,e),w.current=!0,h())},ref:E,role:x}))))}));a.a=f},sjrs:function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),i=t.n(c),l=t("q1tI"),o=t.n(l),s=(t("2W6z"),t("JCAc")),d=t("vUet"),u=t("rQNl"),b=t("VWqr"),f=t("ILyh"),v={variant:void 0,active:!1,disabled:!1},j=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.active,s=e.disabled,u=e.className,v=e.variant,j=e.action,m=e.as,O=e.eventKey,x=e.onClick,y=Object(n.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);t=Object(d.a)(t,"list-group-item");var p=Object(l.useCallback)((function(e){if(s)return e.preventDefault(),void e.stopPropagation();x&&x(e)}),[s,x]);return s&&void 0===y.tabIndex&&(y.tabIndex=-1,y["aria-disabled"]=!0),o.a.createElement(b.a,Object(r.a)({ref:a},y,{eventKey:Object(f.b)(O,y.href),as:m||(j?y.href?"a":"button":"div"),onClick:p,className:i()(u,t,c&&"active",s&&"disabled",v&&t+"-"+v,j&&t+"-action")}))}));j.defaultProps=v,j.displayName="ListGroupItem";var m=j,O={variant:void 0,horizontal:void 0},x=o.a.forwardRef((function(e,a){var t,c=Object(s.a)(e,{activeKey:"onSelect"}),l=c.className,b=c.bsPrefix,f=c.variant,v=c.horizontal,j=c.as,m=void 0===j?"div":j,O=Object(n.a)(c,["className","bsPrefix","variant","horizontal","as"]),x=Object(d.a)(b,"list-group");return t=v?!0===v?"horizontal":"horizontal-"+v:null,o.a.createElement(u.a,Object(r.a)({ref:a},O,{as:m,className:i()(l,x,f&&x+"-"+f,t&&x+"-"+t)}))}));x.defaultProps=O,x.displayName="ListGroup",x.Item=m;a.a=x},wPL6:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/[id]",function(){return t("n5Vf")}])}},[["wPL6",0,1,2,3,5]]]);