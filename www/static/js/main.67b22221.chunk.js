(this["webpackJsonpraraph84-website"]=this["webpackJsonpraraph84-website"]||[]).push([[0],{28:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var s=n(4),r=n(5),c=n(7),i=n(6),a=n(1),o=n.n(a),u=n(21),l=n.n(u),j=n(11),d=n(2),h=(n(28),n(0)),b=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return document.title="Accueil | Raraph84",Object(h.jsxs)("div",{className:"home",children:[Object(h.jsx)("div",{className:"title",children:"Accueil"}),Object(h.jsx)("div",{className:"subtitle",children:"Salut !"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("div",{children:"Je suis d\xe9veloppeur :"}),Object(h.jsx)("li",{children:"JavaScript (Front : React, Back/Bot Discord : NodeJS)"}),Object(h.jsx)("li",{children:"Java (Plugins Minecraft)"}),Object(h.jsx)("li",{children:"Bash (Linux)"}),Object(h.jsx)("li",{children:"HTML/CSS"})]}),Object(h.jsx)("div",{className:"subtitle",children:"Mes projets"}),Object(h.jsxs)("div",{className:"projects",children:[Object(h.jsx)(p,{link:"https://eclipsia.fr/",name:"Eclipsia",imageUrl:"/imgs/logo-eclipsia.png",description:"Eclipsia est un serveur Minecraft Mini-Jeux cr\xe9\xe9 par des amis."}),Object(h.jsx)(p,{link:"https://discord.gg/AKMzGb9",name:"DommiossGroup",imageUrl:"/imgs/logo-dommiossgroup.png",description:"Le DommiossGroup est un groupe de projets web et Minecraft fond\xe9 en 2018, d\xe9veloppant actuellement un CMS et un serveur Minecraft Roleplay."}),Object(h.jsx)(p,{link:"https://discord.gg/5vZxSUy",name:"Cubik Market",imageUrl:"/imgs/logo-cubik-market.png",description:"Le Cubik Market est un market pour le serveur Minecraft Paladium enti\xe8rement r\xe9alis\xe9 et automatis\xe9 sur Discord."}),Object(h.jsx)(p,{link:"https://discord.gg/HQKUWDe",name:"Discord Colonies",imageUrl:"/imgs/logo-discord-colonies.png",description:"Discord Colonies est un serveur Discord o\xf9 l'on peut cr\xe9er son pays, farmer des ressources, coloniser etc."}),Object(h.jsx)(p,{link:"https://discord.gg/GWFzTcN",name:"Pala's Fun",imageUrl:"/imgs/logo-palas-fun.png",description:"Pala's Fun est un Bot Discord en rapport avec le serveur Minecraft Paladium."})]}),Object(h.jsx)("div",{className:"subtitle",children:"Mes liens"}),Object(h.jsxs)("div",{className:"links",children:[Object(h.jsxs)("div",{children:["Mon serveur Discord : ",Object(h.jsx)("a",{href:"https://discord.gg/MRjDxpx",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("span",{className:"link",children:"https://discord.gg/MRjDxpx"})})]}),Object(h.jsxs)("div",{children:["Mon GitHub : ",Object(h.jsx)("a",{href:"https://github.com/Raraph84",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("span",{className:"link",children:"https://github.com/Raraph84"})})]}),Object(h.jsxs)("div",{children:["Ma cha\xeene Youtube : ",Object(h.jsx)("a",{href:"https://youtube.com/channel/UCA0z90EeHObZqVu-Yx-SKeQ",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("span",{className:"link",children:"https://youtube.com/channel/UCA0z90EeHObZqVu-Yx-SKeQ"})})]}),Object(h.jsxs)("div",{children:["Mon adresse Email : ",Object(h.jsx)("a",{href:"mailto:raraph84@gmail.com",children:Object(h.jsx)("span",{className:"link",children:"raraph84@gmail.com"})})]})]})]})}}]),n}(a.Component),p=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("a",{href:this.props.link,target:"_blank",rel:"noreferrer",className:"box project",children:[Object(h.jsx)("div",{className:"title link",children:this.props.name}),Object(h.jsx)("img",{alt:"Logo "+this.props.name,src:this.props.imageUrl}),Object(h.jsx)("div",{className:"description",children:this.props.description})]})}}]),n}(a.Component),m=n(23),O=n(10),f=n.n(O),x=n(14),g="https://api.raraph.fr",v=function(){var e=Object(x.a)(f.a.mark((function e(t,n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,s){fetch(g+"/login",{method:"POST",body:JSON.stringify({username:t,password:n})}).then((function(t){t.ok?t.json().then((function(t){return e(t.token)})).catch((function(e){return s(e)})):t.json().then((function(e){return s(e.message)})).catch((function(e){return s(e)}))})).catch((function(e){return s(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(x.a)(f.a.mark((function e(t,n,s,r){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,c){fetch(g+"/createAccount",{method:"POST",body:JSON.stringify({username:t,email:n,password:s,acceptCgu:r})}).then((function(t){t.ok?t.json().then((function(t){return e(t.token)})).catch((function(e){return c(e)})):t.json().then((function(e){return c(e.message)})).catch((function(e){return c(e)}))})).catch((function(e){return c(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,s,r){return e.apply(this,arguments)}}(),y=function(){var e=Object(x.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){fetch(g+"/logout",{method:"POST",headers:{authorization:localStorage.getItem("token")}}).then(function(){var n=Object(x.a)(f.a.mark((function n(s){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s.ok?e():s.json().then((function(e){return t(e.message)})).catch((function(e){return t(e)}));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch((function(e){return t(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(x.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){fetch(g+"/users/"+t,{method:"GET",headers:{authorization:localStorage.getItem("token")}}).then(function(){var t=Object(x.a)(f.a.mark((function t(s){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s.ok?s.json().then((function(t){var n=Object(m.a)({},t);delete n.code,e(n)})).catch((function(e){return n(e)})):s.json().then((function(e){return n(e.message)})).catch((function(e){return n(e)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){return n(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={user:null,menu:!1},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;localStorage.getItem("token")&&N("@me").then((function(t){return e.setState({user:t})})).catch((function(e){"You must be logged"===e&&(localStorage.removeItem("token"),document.location.assign("/"))}))}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"header",children:[Object(h.jsxs)(j.b,{to:"/home",className:"logo",children:[Object(h.jsx)("img",{src:"/imgs/logo.png",alt:"Logo"}),Object(h.jsx)("span",{className:"link",children:"Raraph84"})]}),this.state.user?Object(h.jsxs)("div",{className:"menu",onClick:function(){return e.setState({menu:!e.state.menu})},children:[Object(h.jsxs)("div",{className:"user",children:[Object(h.jsx)("img",{src:this.state.user.avatarUrl,alt:" "}),Object(h.jsx)("span",{children:this.state.user.username})]}),this.state.menu?Object(h.jsxs)("div",{children:[Object(h.jsx)(j.b,{to:"/account",children:"Mon compte"}),Object(h.jsx)(j.b,{to:"/logout",style:{color:"red"},children:"Se d\xe9connecter"})]}):null]}):Object(h.jsx)(j.b,{className:"login",to:"/login",children:"Se connecter"})]})}}]),n}(a.Component),S=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"footer"})}}]),n}(a.Component),C=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return document.title="Page introuvable | Raraph84",Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"title",children:"Tu es perdu ?"}),Object(h.jsx)("div",{className:"subtitle",children:"Cette page n'existe pas (ou pas encore)"}),Object(h.jsx)(j.b,{to:"/home",children:Object(h.jsx)("button",{children:"Revenir sur la page principale"})})]})}}]),n}(a.Component),M=(a.Component,function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"info",style:{backgroundColor:this.props.color||"rgba(255, 0, 0, 0.25)"},children:this.props.children})}}]),n}(a.Component)),_=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"loading",children:Object(h.jsx)("i",{className:"fas fa-spinner"})})}}]),n}(a.Component),R=(n(36),function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).username=Object(a.createRef)(),r.password=Object(a.createRef)(),r.state={requesting:!1,info:null},r}return Object(r.a)(n,[{key:"render",value:function(){var e=this;document.title="Connexion | Raraph84";var t=function(){localStorage.getItem("token")?e.setState({info:Object(h.jsx)(M,{children:"Vous \xeates d\xe9j\xe0 connect\xe9 !"})}):(e.setState({requesting:!0,info:null}),v(e.username.current.value,e.password.current.value).then((function(e){localStorage.setItem("token",e),document.location.assign("/")})).catch((function(t){return e.setState({requesting:!1,info:{missing_username:Object(h.jsx)(M,{children:"Veuillez saisir un nom d'utilisateur ou une adresse email !"}),missing_password:Object(h.jsx)(M,{children:"Veuillez saisir un mot de passe !"}),too_many_login_fails:Object(h.jsx)(M,{children:"Trop d'essais de connexion, r\xe9essayez plus tard !"}),invalid_username_or_password:Object(h.jsx)(M,{children:"Le nom d'utilisateur ou le mot de passe est incorrect !"})}["string"===typeof t?t.toLowerCase().replace(/ /g,"_"):""]||Object(h.jsx)(M,{children:"Un probl\xe8me est survenu !"})})})))};return Object(h.jsxs)("div",{className:"login",children:[Object(h.jsx)("div",{className:"title",children:"Connexion"}),this.state.requesting?Object(h.jsx)(_,{}):null,this.state.info,Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"hint",children:"Nom d'utilisateur/Email :"}),Object(h.jsx)("input",{type:"text",ref:this.username,autoFocus:!0,disabled:this.state.requesting,onKeyPress:function(t){"Enter"===t.code&&e.password.current.focus()}})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"hint",children:"Mot de passe :"}),Object(h.jsx)("input",{type:"password",ref:this.password,disabled:this.state.requesting,onKeyPress:function(e){"Enter"===e.code&&t()}})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{disabled:this.state.requesting,onClick:t,children:"Se connecter"})}),Object(h.jsx)(j.b,{to:"/register",children:Object(h.jsx)("span",{className:"link",children:"Je n'ai pas de compte"})})]})}}]),n}(a.Component)),q=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).username=Object(a.createRef)(),r.email=Object(a.createRef)(),r.password=Object(a.createRef)(),r.passwordVerify=Object(a.createRef)(),r.cgu=Object(a.createRef)(),r.state={requesting:!1,info:null},r}return Object(r.a)(n,[{key:"render",value:function(){var e=this;document.title="Cr\xe9er un compte | Raraph84";return Object(h.jsxs)("div",{className:"login",children:[Object(h.jsx)("div",{className:"title",children:"Cr\xe9er un compte"}),this.state.requesting?Object(h.jsx)(_,{}):null,this.state.info,Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"hint",children:"Nom d'utilisateur :"}),Object(h.jsx)("input",{type:"text",ref:this.username,autoFocus:!0,disabled:this.state.requesting,maxLength:25})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"hint",children:"Email :"}),Object(h.jsx)("input",{type:"text",ref:this.email,disabled:this.state.requesting})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"hint",children:"Mot de passe :"}),Object(h.jsx)("input",{type:"password",ref:this.password,disabled:this.state.requesting})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"hint",children:"Retaper le mot de passe :"}),Object(h.jsx)("input",{type:"password",ref:this.passwordVerify,disabled:this.state.requesting})]}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"hint",children:["J'ai lu et accept\xe9 les ",Object(h.jsx)(j.b,{to:"/cgu",children:Object(h.jsx)("span",{className:"link",children:"conditions g\xe9n\xe9rales d'utilisation"})})," :"]}),Object(h.jsx)("input",{type:"checkbox",ref:this.cgu,disabled:this.state.requesting})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:function(){localStorage.getItem("token")?e.setState({info:Object(h.jsx)(M,{children:"Vous \xeates d\xe9j\xe0 connect\xe9 !"})}):e.password.current.value===e.passwordVerify.current.value?(e.setState({requesting:!0,info:null}),k(e.username.current.value,e.email.current.value,e.password.current.value,e.cgu.current.checked).then((function(e){localStorage.setItem("token",e),document.location.assign("/")})).catch((function(t){return e.setState({requesting:!1,info:{missing_username:Object(h.jsx)(M,{children:"Veuillez saisir un nom d'utilisateur !"}),missing_email:Object(h.jsx)(M,{children:"Veuillez saisir une adresse email !"}),invalid_email:Object(h.jsx)(M,{children:"Veuillez saisir une adresse email valide !"}),missing_password:Object(h.jsx)(M,{children:"Veuillez saisir un mot de passe !"}),you_must_accept_cgu:Object(h.jsx)(M,{children:"Vous devez lire et accepter les conditions g\xe9n\xe9rales d'utilisation !"}),too_many_account_creations:Object(h.jsx)(M,{children:"Trop de cr\xe9ations de comptes, r\xe9essaye plus tard !"}),username_already_exists:Object(h.jsx)(M,{children:"Ce nom d'utilisateur est d\xe9j\xe0 utilis\xe9 !"}),email_already_exists:Object(h.jsx)(M,{children:"Cette adresse email est d\xe9j\xe0 utilis\xe9 !"})}["string"===typeof t?t.toLowerCase().replace(/ /g,"_"):""]||Object(h.jsx)(M,{children:"Un probl\xe8me est survenu !"})})}))):e.setState({info:Object(h.jsx)(M,{children:"Les mots de passe ne correspondent pas !"})})},children:"Cr\xe9er le compte"})}),Object(h.jsx)(j.b,{to:"/login",children:Object(h.jsx)("span",{className:"link",children:"J'ai d\xe9j\xe0 un compte"})})]})}}]),n}(a.Component),D=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={requesting:!1,info:null},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;localStorage.getItem("token")?(this.setState({requesting:!0}),y().then((function(){localStorage.removeItem("token"),document.location.assign("/")})).catch((function(){return e.setState({requesting:!1,info:Object(h.jsx)(M,{children:"Un probl\xe8me est survenu !"})})}))):this.setState({info:Object(h.jsx)(M,{children:"Vous n'\xeates d\xe9j\xe0 pas connect\xe9 !"})})}},{key:"render",value:function(){return document.title="D\xe9connexion | Raraph84",Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"title",children:"D\xe9connexion..."}),this.state.requesting?Object(h.jsx)(_,{}):null,this.state.info]})}}]),n}(a.Component),V=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).username=Object(a.createRef)(),r.email=Object(a.createRef)(),r.password=Object(a.createRef)(),r.passwordVerify=Object(a.createRef)(),r.avatar=Object(a.createRef)(),r.state={requesting:!1,info:null,me:null,editing:!1},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;N("@me").then((function(t){return e.setState({me:t})})).catch((function(t){"You must be logged"===t?(localStorage.removeItem("token"),document.location.assign("/")):e.setState({requesting:!1,info:Object(h.jsx)(M,{children:"Un probl\xe8me est survenu !"})})}))}},{key:"render",value:function(){return document.title="Mon compte | Raraph84",Object(h.jsxs)("div",{className:"account",children:[Object(h.jsx)("div",{className:"title",children:"Mon compte"}),this.state.requesting?Object(h.jsx)(_,{}):null,this.state.info,this.state.me?Object(h.jsx)("div",{children:"En d\xe9veloppement !"}):null]})}}]),n}(a.Component),P=(n(37),function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(j.a,{children:[Object(h.jsx)(w,{}),Object(h.jsx)("div",{className:"content",children:Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{exact:!0,path:"/",children:Object(h.jsx)(b,{})}),Object(h.jsx)(d.a,{exact:!0,path:"/home",children:Object(h.jsx)(b,{})}),Object(h.jsx)(d.a,{exact:!0,path:"/login",children:Object(h.jsx)(R,{})}),Object(h.jsx)(d.a,{exact:!0,path:"/logout",children:Object(h.jsx)(D,{})}),Object(h.jsx)(d.a,{exact:!0,path:"/register",children:Object(h.jsx)(q,{})}),Object(h.jsx)(d.a,{exact:!0,path:"/account",children:Object(h.jsx)(V,{})}),Object(h.jsx)(d.a,{path:"*",children:Object(h.jsx)(C,{})})]})}),Object(h.jsx)(S,{})]})}}]),n}(o.a.Component));l.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.67b22221.chunk.js.map