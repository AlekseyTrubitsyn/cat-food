(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(17)},17:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(3),i=a.n(l),r=a(8),s=a(4),o=a(5),m=a(9),u=a(6),d=a(1),h=a(10),g=a(7),v=function(e){var t=e.data,a=void 0===t?{}:t,n=e.selected,l=e.onSelect,i=a.header,r=void 0===i?"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e":i,s=a.headerSelectedHovered,o=void 0===s?"\u041a\u043e\u0442\u044d \u043d\u0435 \u043e\u0434\u043e\u0431\u0440\u044f\u0435\u0442?":s,m=a.title,u=a.subtitle,d=a.features,h=a.size,v=a.footer,_=a.disabled,f=a.image,E=function(e){_?(e.classList.add("shake"),setTimeout(function(){e&&e.classList.remove("shake")},400)):l()},p="catalog-item"+(_?" disabled":"")+(n?" selected":"");return c.a.createElement("article",{className:p,onClick:function(e){return E(e.currentTarget)},onMouseEnter:function(e){return t=e.currentTarget,void(_||t.classList.add("hovered"));var t},onMouseLeave:function(e){e.currentTarget.classList.remove("hovered")}},c.a.createElement("header",{className:"catalog-item__header"},c.a.createElement("div",{className:"catalog-item-header__corner"}),c.a.createElement("div",{className:"catalog-item-header__text-container"},c.a.createElement("p",{className:"catalog-item-header__text catalog-item-header__text--default"},r),n&&c.a.createElement("p",{className:"catalog-item-header__text catalog-item-header__text--hover"},o))),c.a.createElement("div",{className:"catalog-item__main"},c.a.createElement("h2",{className:"catalog-item__title"},m),c.a.createElement("h3",{className:"catalog-item__subtitle"},u),d&&c.a.createElement("ul",{className:"catalog-item__features"},d.map(function(e,t){return c.a.createElement("li",{key:t,className:"catalog-item__feature"},e.split(" ").map(function(e){return isNaN(e)?e+" ":c.a.createElement("b",null,e)}).reduce(function(e,t){return[].concat(Object(g.a)(e),[" ",t])},[]))})),c.a.createElement("div",{className:"catalog-item__image-container"},c.a.createElement("img",{className:"catalog-item__image",src:f.source,alt:f.alt,width:"auto",height:"auto"})),c.a.createElement("div",{className:"catalog-item__size"},c.a.createElement("p",{className:"catalog-item__amount"},h.value),c.a.createElement("p",{className:"catalog-item__unit"},h.unit))),c.a.createElement("footer",{className:"catalog-item__footer"},_?c.a.createElement("p",null,"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, ",u," \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f."):n?c.a.createElement("p",null,v):c.a.createElement("p",null,"\u0427\u0435\u0433\u043e \u0441\u0438\u0434\u0438\u0448\u044c? \u041f\u043e\u0440\u0430\u0434\u0443\u0439 \u043a\u043e\u0442\u044d, ",c.a.createElement("button",{className:"catalog-item__link",onClick:E},"\u043a\u0443\u043f\u0438."))))},_=function(){return c.a.createElement("div",{className:"triple-spinner"})},f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={items:[],dataIsFetching:!0},a.handleItemSelected=a.handleItemSelected.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({items:[{header:"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e",headerSelectedHovered:"\u041a\u043e\u0442\u044d \u043d\u0435 \u043e\u0434\u043e\u0431\u0440\u044f\u0435\u0442?",title:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",subtitle:"\u0441 \u0444\u0443\u0430-\u0433\u0440\u0430",features:["10 \u043f\u043e\u0440\u0446\u0438\u0439","\u043c\u044b\u0448\u044c \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a"],size:{value:"0,5",unit:"\u043a\u0433"},footer:"\u041f\u0435\u0447\u0435\u043d\u044c \u0443\u0442\u043a\u0438 \u0440\u0430\u0437\u0432\u0430\u0440\u043d\u0430\u044f \u0441 \u0430\u0440\u0442\u0438\u0448\u043e\u043a\u0430\u043c\u0438.",disabled:!1,image:{source:"./assets/images/cat.png",alt:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430 \u0441 \u0444\u0443\u0430-\u0433\u0440\u0430"}},{header:"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e",headerSelectedHovered:"\u041a\u043e\u0442\u044d \u043d\u0435 \u043e\u0434\u043e\u0431\u0440\u044f\u0435\u0442?",title:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",subtitle:"\u0441 \u0440\u044b\u0431\u043e\u0439",features:["40 \u043f\u043e\u0440\u0446\u0438\u0439","2 \u043c\u044b\u0448\u0438 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a"],size:{value:"2",unit:"\u043a\u0433"},footer:"\u0413\u043e\u043b\u043e\u0432\u044b \u0449\u0443\u0447\u044c\u0438 \u0441 \u0447\u0435\u0441\u043d\u043e\u043a\u043e\u043c \u0434\u0430 \u0441\u0432\u0435\u0436\u0430\u0439\u0448\u0430\u044f \u0441\u0451\u043c\u0433\u0443\u0448\u043a\u0430.",disabled:!1,image:{source:"./assets/images/cat.png",alt:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430 \u0441 \u0444\u0443\u0430-\u0433\u0440\u0430"}},{header:"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e",headerSelectedHovered:"\u041a\u043e\u0442\u044d \u043d\u0435 \u043e\u0434\u043e\u0431\u0440\u044f\u0435\u0442?",title:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",subtitle:"\u0441 \u043a\u0443\u0440\u043e\u0439",features:["100 \u043f\u043e\u0440\u0446\u0438\u0439","5 \u043c\u044b\u0448\u0435\u0439 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a","\u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a \u0434\u043e\u0432\u043e\u043b\u0435\u043d"],size:{value:"5",unit:"\u043a\u0433"},footer:"\u0424\u0438\u043b\u0435 \u0438\u0437 \u0446\u044b\u043f\u043b\u044f\u0442 \u0441 \u0442\u0440\u044e\u0444\u0435\u043b\u044f\u043c\u0438 \u0432 \u0431\u0443\u043b\u044c\u043e\u043d\u0435.",disabled:!0,image:{source:"./assets/images/cat.png",alt:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430 \u0441 \u0444\u0443\u0430-\u0433\u0440\u0430"}}],dataIsFetching:!1})},1e3)}},{key:"handleItemSelected",value:function(e){var t=this.state.items.map(function(t,a){return a===e&&t!==t.disabled?Object(r.a)({},t,{selected:!t.selected}):t});this.setState({items:t})}},{key:"render",value:function(){var e=this,t=this.state,a=t.items;return t.dataIsFetching?c.a.createElement("div",{className:"catalog"},c.a.createElement(_,null)):c.a.createElement("div",{className:"catalog"},a.map(function(t,a){return c.a.createElement(v,{key:a,data:t,onSelect:function(){return e.handleItemSelected(a)},selected:t.selected})}))}}]),t}(n.Component),E=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"title"},"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043f\u043e\u043a\u043e\u0440\u043c\u0438\u043b \u043a\u043e\u0442\u0430?"),c.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.cdac1656.chunk.js.map