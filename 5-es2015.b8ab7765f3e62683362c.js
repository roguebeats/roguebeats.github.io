(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Yj9t:function(t,e,r){"use strict";r.r(e),r.d(e,"AuthModule",(function(){return d}));var i=r("ofXK"),o=r("tyNb"),n=r("fXoL"),c=r("qXBG");let s=(()=>{class t{constructor(t){this.auth=t}ngOnInit(){}login(){this.auth.authorize()}}return t.\u0275fac=function(e){return new(e||t)(n.Hb(c.a))},t.\u0275cmp=n.Bb({type:t,selectors:[["rbc-login"]],decls:6,vars:0,consts:[[3,"click"]],template:function(t,e){1&t&&(n.Mb(0,"div"),n.Mb(1,"p"),n.kc(2,"To take advantage of rogue beats, you need to "),n.Mb(3,"a",0),n.Tb("click",(function(){return e.login()})),n.kc(4,"login"),n.Lb(),n.kc(5," through Spotify."),n.Lb(),n.Lb())},styles:[""]}),t})();var a=r("pLZG"),u=r("SX+u");const b=[{path:"",component:s},{path:"authorized",component:(()=>{class t{constructor(t,e,r,i){this.authService=t,this.activatedRoute=e,this.router=r,this.storage=i}ngOnInit(){this.redirectUri=this.storage.get("redirect_uri"),this.storage.remove("redirect_uri"),this.activatedRoute.queryParams.subscribe(t=>{t.code&&this.authService.getAccessToken(t.code,t.state)}),this.authService.authorized$.pipe(Object(a.a)(t=>t)).subscribe(t=>{var e;const r=null!==(e=this.redirectUri)&&void 0!==e?e:"/";this.router.navigate([r])})}}return t.\u0275fac=function(e){return new(e||t)(n.Hb(c.a),n.Hb(o.a),n.Hb(o.b),n.Hb(u.a))},t.\u0275cmp=n.Bb({type:t,selectors:[["rbc-spotify-auth"]],decls:2,vars:0,template:function(t,e){1&t&&(n.Mb(0,"h3"),n.kc(1,"Authorizing\u2026"),n.Lb())},styles:[""]}),t})()}];let h=(()=>{class t{}return t.\u0275mod=n.Fb({type:t}),t.\u0275inj=n.Eb({factory:function(e){return new(e||t)},imports:[[o.d.forChild(b)],o.d]}),t})(),d=(()=>{class t{}return t.\u0275mod=n.Fb({type:t}),t.\u0275inj=n.Eb({factory:function(e){return new(e||t)},imports:[[i.c,h]]}),t})()}}]);