(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c);n(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(4),i=n(1),u=function(e){var t=e.value,n=e.onClick,a=t?"squares ".concat(t):"squares";return r.a.createElement("button",{className:a,onClick:n},t)},s=function(e){var t=e.squares,n=e.onClick;return r.a.createElement("div",{className:"board"},t.map((function(e,t){return r.a.createElement(u,{key:t,value:e,onClick:function(){return n(t)}})})))};var m=function(){var e=Object(a.useState)([Array(9).fill(null)]),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(0),u=Object(i.a)(o,2),m=u[0],v=u[1],f=Object(a.useState)(!0),h=Object(i.a)(f,2),E=h[0],b=h[1],d=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(i.a)(t[n],3),r=a[0],c=a[1],o=a[2];if(e[r]&&e[r]===e[c]&&e[r]===e[o])return e[r]}return null}(n[m]),k=E?"X":"O";return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"React Tic Tac Toe -with Hooks"),r.a.createElement(s,{squares:n[m],onClick:function(e){var t=n.slice(0,m+1),a=t[m],r=Object(l.a)(a);d||r[e]||(r[e]=k,c([].concat(Object(l.a)(t),[r])),v(t.length),b(!E))}}),r.a.createElement("div",{className:"info-wrapper"},r.a.createElement("div",null,r.a.createElement("h3",null,"history"),void n.map((function(e,t){var n=t?"Go to move #".concat(t):"Go to start";return r.a.createElement("li",{key:t},r.a.createElement("button",{onClick:function(){return function(e){v(e),b(e%2===0)}(t)}},n))}))),r.a.createElement("h3",null,d?"Winner: "+d:"Next Player:"+k)))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.9fa18c14.chunk.js.map