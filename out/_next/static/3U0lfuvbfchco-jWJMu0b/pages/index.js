(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"5Yp1":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("YFqc"),i=n.n(a),l={marginRight:15},u=function(){return o.a.createElement("div",null,o.a.createElement(i.a,{href:"/"},o.a.createElement("a",{style:l},"Home")),o.a.createElement(i.a,{href:"/about"},o.a.createElement("a",{style:l},"About")))};t.a=function(e){return o.a.createElement("div",null,o.a.createElement(u,null),e.children)}},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("YFqc"),i=n.n(a),l=n("5Yp1");n("Dv/5");t.default=function(){return o.a.createElement(l.a,null,o.a.createElement(i.a,{href:"/about",title:"About Page"},o.a.createElement("a",null,"About Page")),o.a.createElement("p",null,"Hello Next.js"))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("KI45"),o=r(n("0iUn")),a=r(n("sLSF")),i=r(n("MI3g")),l=r(n("a7VT")),u=r(n("Tit0")),s=n("5Uuq"),c=n("KI45");t.__esModule=!0,t.default=void 0;var f,p=c(n("LX0d")),h=n("CxY0"),d=s(n("q1tI")),v=(c(n("17x9")),c(n("nOHt"))),m=(n("KA3u"),n("Bu4q"));function w(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var E=new p.default,g=window.IntersectionObserver;function y(){return f||(g?f=new g(function(e){e.forEach(function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),E.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var b=function(e){function t(){var e;return(0,o.default)(this,t),(e=(0,i.default)(this,(0,l.default)(t).apply(this,arguments))).cleanUpListeners=function(){},e.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var i=e(o,a);return t=o,n=a,r=i,i}}(function(e,t){return{href:w(e),as:t?w(t):t}}),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=e.formatUrls(e.props.href,e.props.as),i=a.href,l=a.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var u=window.location.pathname;i=(0,h.resolve)(u,i),l=l?(0,h.resolve)(u,l):i,t.preventDefault();var s=e.props.scroll;null==s&&(s=l.indexOf("#")<0),v.default[e.props.replace?"replace":"push"](i,l,{shallow:e.props.shallow}).then(function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())})}}},e}return(0,u.default)(t,e),(0,a.default)(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.props.prefetch&&g&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=y();return n?(n.observe(e),E.set(e,t),function(){n.unobserve(e),E.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.props.prefetch){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,h.resolve)(e,t);v.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var a=d.Children.only(t),i={ref:function(t){return e.handleRef(t)},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch()},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),d.default.cloneElement(a,i)}}]),t}(d.Component);b.propTypes=void 0,b.defaultProps={prefetch:!0};var k=b;t.default=k},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("RNiq");return{page:e.default||e}}])}},[["vlRD",1,0,2]]]);