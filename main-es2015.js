(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _session_session_details_session_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session/session-details/session-details.component */ "./src/app/session/session-details/session-details.component.ts");






const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "./src/app/auth/auth.module.ts")).then((m) => m.AuthModule),
    },
    {
        path: 'sessions/:sessionId',
        component: _session_session_details_session_details_component__WEBPACK_IMPORTED_MODULE_3__["SessionDetailsComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function AppComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome back, ", user_r5.display_name, "!");
} }
function AppComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_8_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AppComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "To take advantage of rogue beats, you need to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_13_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "authorize the app");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " through Spotify.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_13_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
        this.navbarOpen = false;
    }
    ngOnInit() {
        this.loggedIn$ = this.authService.authorized$;
        this.authService.checkAuthStatus();
        this.authorizedUser$ = this.authService.authorized$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((authorized) => (authorized ? this.userService.getUser() : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null))));
    }
    login() {
        this.authService.authorize();
    }
    logout() {
        this.authService.logout();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["rbc-root"]], decls: 16, vars: 11, consts: [[1, "wrapper"], ["id", "content"], [1, "navbar", "navbar-expand-lg"], ["src", "../../assets//images/rogue-beats-white.png", "height", "125", "alt", "", 3, "routerLink"], [1, "list-unstyled"], ["id", "welcome-user", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["showLogin", ""], [1, "text-center", "placeholder"], [4, "ngIf"], ["id", "welcome-user"], [1, "btn", "btn-filled", "accent", 3, "click"], [3, "click"], [1, "button", "mt-2", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_li_5_Template, 3, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_ng_container_8_Template, 3, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_ng_template_10_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_div_13_Template, 9, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, ctx.authorizedUser$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, ctx.loggedIn$))("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 9, ctx.loggedIn$));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100vw;\n  display: flex;\n  align-items: stretch;\n  background-image: linear-gradient(12deg, rgba(193, 193, 193, 0.05) 0%, rgba(193, 193, 193, 0.05) 2%, rgba(129, 129, 129, 0.05) 2%, rgba(129, 129, 129, 0.05) 27%, rgba(185, 185, 185, 0.05) 27%, rgba(185, 185, 185, 0.05) 66%, rgba(83, 83, 83, 0.05) 66%, rgba(83, 83, 83, 0.05) 100%), linear-gradient(321deg, rgba(240, 240, 240, 0.05) 0%, rgba(240, 240, 240, 0.05) 13%, rgba(231, 231, 231, 0.05) 13%, rgba(231, 231, 231, 0.05) 34%, rgba(139, 139, 139, 0.05) 34%, rgba(139, 139, 139, 0.05) 71%, rgba(112, 112, 112, 0.05) 71%, rgba(112, 112, 112, 0.05) 100%), linear-gradient(236deg, rgba(189, 189, 189, 0.05) 0%, rgba(189, 189, 189, 0.05) 47%, rgba(138, 138, 138, 0.05) 47%, rgba(138, 138, 138, 0.05) 58%, rgba(108, 108, 108, 0.05) 58%, rgba(108, 108, 108, 0.05) 85%, rgba(143, 143, 143, 0.05) 85%, rgba(143, 143, 143, 0.05) 100%), linear-gradient(96deg, rgba(53, 53, 53, 0.05) 0%, rgba(53, 53, 53, 0.05) 53%, rgba(44, 44, 44, 0.05) 53%, rgba(44, 44, 44, 0.05) 82%, rgba(77, 77, 77, 0.05) 82%, rgba(77, 77, 77, 0.05) 98%, rgba(8, 8, 8, 0.05) 98%, rgba(8, 8, 8, 0.05) 100%), linear-gradient(334deg, #00334e, #050505);\n}\n\n#content[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 20px;\n  min-height: 100vh;\n  transition: all 0.3s;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  margin: 15px;\n}\n\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n}\n\nli[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n#welcome-user[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 2rem;\n  display: none;\n}\n\n@media only screen and (min-width: 600px) {\n  #welcome-user[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHVsQ0FBQTtBQURKOztBQWdEQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQTdDSjs7QUFnREE7RUFDSSw4QkFBQTtFQUNBLFlBQUE7QUE3Q0o7O0FBZ0RBO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0FBN0NKOztBQWdEQTtFQUNJLHFCQUFBO0FBN0NKOztBQWdEQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBN0NKOztBQWdEQTtFQUNJO0lBQ0kscUJBQUE7RUE3Q047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgIDEyZGVnLFxyXG4gICAgICAgICAgICByZ2JhKDE5MywgMTkzLCAxOTMsIDAuMDUpIDAlLFxyXG4gICAgICAgICAgICByZ2JhKDE5MywgMTkzLCAxOTMsIDAuMDUpIDIlLFxyXG4gICAgICAgICAgICByZ2JhKDEyOSwgMTI5LCAxMjksIDAuMDUpIDIlLFxyXG4gICAgICAgICAgICByZ2JhKDEyOSwgMTI5LCAxMjksIDAuMDUpIDI3JSxcclxuICAgICAgICAgICAgcmdiYSgxODUsIDE4NSwgMTg1LCAwLjA1KSAyNyUsXHJcbiAgICAgICAgICAgIHJnYmEoMTg1LCAxODUsIDE4NSwgMC4wNSkgNjYlLFxyXG4gICAgICAgICAgICByZ2JhKDgzLCA4MywgODMsIDAuMDUpIDY2JSxcclxuICAgICAgICAgICAgcmdiYSg4MywgODMsIDgzLCAwLjA1KSAxMDAlXHJcbiAgICAgICAgKSxcclxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgIDMyMWRlZyxcclxuICAgICAgICAgICAgcmdiYSgyNDAsIDI0MCwgMjQwLCAwLjA1KSAwJSxcclxuICAgICAgICAgICAgcmdiYSgyNDAsIDI0MCwgMjQwLCAwLjA1KSAxMyUsXHJcbiAgICAgICAgICAgIHJnYmEoMjMxLCAyMzEsIDIzMSwgMC4wNSkgMTMlLFxyXG4gICAgICAgICAgICByZ2JhKDIzMSwgMjMxLCAyMzEsIDAuMDUpIDM0JSxcclxuICAgICAgICAgICAgcmdiYSgxMzksIDEzOSwgMTM5LCAwLjA1KSAzNCUsXHJcbiAgICAgICAgICAgIHJnYmEoMTM5LCAxMzksIDEzOSwgMC4wNSkgNzElLFxyXG4gICAgICAgICAgICByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMDUpIDcxJSxcclxuICAgICAgICAgICAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjA1KSAxMDAlXHJcbiAgICAgICAgKSxcclxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgIDIzNmRlZyxcclxuICAgICAgICAgICAgcmdiYSgxODksIDE4OSwgMTg5LCAwLjA1KSAwJSxcclxuICAgICAgICAgICAgcmdiYSgxODksIDE4OSwgMTg5LCAwLjA1KSA0NyUsXHJcbiAgICAgICAgICAgIHJnYmEoMTM4LCAxMzgsIDEzOCwgMC4wNSkgNDclLFxyXG4gICAgICAgICAgICByZ2JhKDEzOCwgMTM4LCAxMzgsIDAuMDUpIDU4JSxcclxuICAgICAgICAgICAgcmdiYSgxMDgsIDEwOCwgMTA4LCAwLjA1KSA1OCUsXHJcbiAgICAgICAgICAgIHJnYmEoMTA4LCAxMDgsIDEwOCwgMC4wNSkgODUlLFxyXG4gICAgICAgICAgICByZ2JhKDE0MywgMTQzLCAxNDMsIDAuMDUpIDg1JSxcclxuICAgICAgICAgICAgcmdiYSgxNDMsIDE0MywgMTQzLCAwLjA1KSAxMDAlXHJcbiAgICAgICAgKSxcclxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgIDk2ZGVnLFxyXG4gICAgICAgICAgICByZ2JhKDUzLCA1MywgNTMsIDAuMDUpIDAlLFxyXG4gICAgICAgICAgICByZ2JhKDUzLCA1MywgNTMsIDAuMDUpIDUzJSxcclxuICAgICAgICAgICAgcmdiYSg0NCwgNDQsIDQ0LCAwLjA1KSA1MyUsXHJcbiAgICAgICAgICAgIHJnYmEoNDQsIDQ0LCA0NCwgMC4wNSkgODIlLFxyXG4gICAgICAgICAgICByZ2JhKDc3LCA3NywgNzcsIDAuMDUpIDgyJSxcclxuICAgICAgICAgICAgcmdiYSg3NywgNzcsIDc3LCAwLjA1KSA5OCUsXHJcbiAgICAgICAgICAgIHJnYmEoOCwgOCwgOCwgMC4wNSkgOTglLFxyXG4gICAgICAgICAgICByZ2JhKDgsIDgsIDgsIDAuMDUpIDEwMCVcclxuICAgICAgICApLFxyXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgzMzRkZWcsICR0ZXJ0aWFyeSwgaHNsKDI0NywgMCUsIDIlKSk7XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbiN3ZWxjb21lLXVzZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgI3dlbGNvbWUtdXNlciB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rbc-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _session_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./session/add-category/add-category.component */ "./src/app/session/add-category/add-category.component.ts");
/* harmony import */ var _session_add_pick_add_pick_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./session/add-pick/add-pick.component */ "./src/app/session/add-pick/add-pick.component.ts");
/* harmony import */ var _session_add_session_add_session_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./session/add-session/add-session.component */ "./src/app/session/add-session/add-session.component.ts");
/* harmony import */ var _session_join_session_join_session_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./session/join-session/join-session.component */ "./src/app/session/join-session/join-session.component.ts");
/* harmony import */ var _session_session_details_session_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./session/session-details/session-details.component */ "./src/app/session/session-details/session-details.component.ts");
/* harmony import */ var _session_show_all_categories_show_all_categories_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./session/show-all-categories/show-all-categories.component */ "./src/app/session/show-all-categories/show-all-categories.component.ts");
/* harmony import */ var _session_show_all_sessions_show_all_sessions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./session/show-all-sessions/show-all-sessions.component */ "./src/app/session/show-all-sessions/show-all-sessions.component.ts");
/* harmony import */ var _phase_open_phase_open_phase_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./phase/open-phase/open-phase.component */ "./src/app/phase/open-phase/open-phase.component.ts");
/* harmony import */ var _phase_started_phase_started_phase_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./phase/started-phase/started-phase.component */ "./src/app/phase/started-phase/started-phase.component.ts");
/* harmony import */ var _phase_voting_phase_voting_phase_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./phase/voting-phase/voting-phase.component */ "./src/app/phase/voting-phase/voting-phase.component.ts");
/* harmony import */ var _phase_reveal_phase_reveal_phase_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./phase/reveal-phase/reveal-phase.component */ "./src/app/phase/reveal-phase/reveal-phase.component.ts");
/* harmony import */ var _session_session_admin_session_admin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./session/session-admin/session-admin.component */ "./src/app/session/session-admin/session-admin.component.ts");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
        _session_add_session_add_session_component__WEBPACK_IMPORTED_MODULE_11__["AddSessionComponent"],
        _session_show_all_sessions_show_all_sessions_component__WEBPACK_IMPORTED_MODULE_15__["ShowAllSessionsComponent"],
        _session_session_details_session_details_component__WEBPACK_IMPORTED_MODULE_13__["SessionDetailsComponent"],
        _session_join_session_join_session_component__WEBPACK_IMPORTED_MODULE_12__["JoinSessionComponent"],
        _session_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_9__["AddCategoryComponent"],
        _session_show_all_categories_show_all_categories_component__WEBPACK_IMPORTED_MODULE_14__["ShowAllCategoriesComponent"],
        _session_add_pick_add_pick_component__WEBPACK_IMPORTED_MODULE_10__["AddPickComponent"],
        _phase_open_phase_open_phase_component__WEBPACK_IMPORTED_MODULE_16__["OpenPhaseComponent"],
        _phase_started_phase_started_phase_component__WEBPACK_IMPORTED_MODULE_17__["StartedPhaseComponent"],
        _phase_voting_phase_voting_phase_component__WEBPACK_IMPORTED_MODULE_18__["VotingPhaseComponent"],
        _phase_reveal_phase_reveal_phase_component__WEBPACK_IMPORTED_MODULE_19__["RevealPhaseComponent"],
        _session_session_admin_session_admin_component__WEBPACK_IMPORTED_MODULE_20__["SessionAdminComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
                    _session_add_session_add_session_component__WEBPACK_IMPORTED_MODULE_11__["AddSessionComponent"],
                    _session_show_all_sessions_show_all_sessions_component__WEBPACK_IMPORTED_MODULE_15__["ShowAllSessionsComponent"],
                    _session_session_details_session_details_component__WEBPACK_IMPORTED_MODULE_13__["SessionDetailsComponent"],
                    _session_join_session_join_session_component__WEBPACK_IMPORTED_MODULE_12__["JoinSessionComponent"],
                    _session_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_9__["AddCategoryComponent"],
                    _session_show_all_categories_show_all_categories_component__WEBPACK_IMPORTED_MODULE_14__["ShowAllCategoriesComponent"],
                    _session_add_pick_add_pick_component__WEBPACK_IMPORTED_MODULE_10__["AddPickComponent"],
                    _phase_open_phase_open_phase_component__WEBPACK_IMPORTED_MODULE_16__["OpenPhaseComponent"],
                    _phase_started_phase_started_phase_component__WEBPACK_IMPORTED_MODULE_17__["StartedPhaseComponent"],
                    _phase_voting_phase_voting_phase_component__WEBPACK_IMPORTED_MODULE_18__["VotingPhaseComponent"],
                    _phase_reveal_phase_reveal_phase_component__WEBPACK_IMPORTED_MODULE_19__["RevealPhaseComponent"],
                    _session_session_admin_session_admin_component__WEBPACK_IMPORTED_MODULE_20__["SessionAdminComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/__ivy_ngcc__/fesm2015/ngx-webstorage-service.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_scopes_builder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/scopes-builder */ "./src/app/auth/models/scopes-builder.ts");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./token.service */ "./src/app/auth/token.service.ts");











class AuthService {
    constructor(http, token, storage) {
        this.http = http;
        this.token = token;
        this.storage = storage;
        this.requestAuthUrl = 'https://accounts.spotify.com/authorize';
        this.tokenUrl = 'https://accounts.spotify.com/api/token';
        // tslint:disable: variable-name
        this._authorized = new rxjs__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"]();
        this.authorized$ = this._authorized.asObservable();
    }
    authorize() {
        this.fullAuthFlow();
    }
    logout() {
        this.token.clearToken();
        this._authorized.next(false);
    }
    getAccessToken(code, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (state !== this.storage.get('state')) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])('Invalid state');
                return;
            }
            const payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .append('client_id', src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].spotifyClientId)
                .append('grant_type', 'authorization_code')
                .append('code', code)
                .append('redirect_uri', src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].spotifyRedirect)
                .append('code_verifier', this.storage.get('codeVerifier'));
            const response = yield this.requestToken(payload);
            this.setRefreshTimer(response.expires_in);
            this._authorized.next(true);
        });
    }
    checkAuthStatus() {
        if (!this.token.refreshToken) {
            this._authorized.next(false);
        }
        else if (this.token.expired) {
            this.refreshToken();
        }
        else {
            this._authorized.next(true);
        }
    }
    refreshToken() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .append('grant_type', 'refresh_token')
                .append('refresh_token', this.token.refreshToken)
                .append('client_id', src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].spotifyClientId);
            const response = yield this.requestToken(payload);
            this.setRefreshTimer(response.expires_in);
            this._authorized.next(true);
            return;
        });
    }
    fullAuthFlow() {
        const state = this.strRandom(40);
        const codeVerifier = this.strRandom(128);
        this.storage.set('state', state);
        this.storage.set('codeVerifier', codeVerifier);
        const codeVerifierHash = crypto_js__WEBPACK_IMPORTED_MODULE_3__["SHA256"](codeVerifier).toString(crypto_js__WEBPACK_IMPORTED_MODULE_3__["enc"].Base64);
        const codeChallenge = codeVerifierHash.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
        const params = [
            'client_id=' + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].spotifyClientId,
            'response_type=code',
            'redirect_uri=' + encodeURIComponent(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].spotifyRedirect),
            'code_challenge_method=S256',
            'code_challenge=' + codeChallenge,
            'state=' + state,
            'scope=' + new _models_scopes_builder__WEBPACK_IMPORTED_MODULE_7__["ScopesBuilder"]().build(),
        ];
        window.location.href = this.requestAuthUrl + '?' + params.join('&');
    }
    setRefreshTimer(expiresIn) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(expiresIn * 1000).subscribe(() => {
                console.log('Token expiring, refreshing');
                this.refreshToken();
            });
        });
    }
    requestToken(payload) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const options = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            };
            const response = yield this.http.post(this.tokenUrl, payload, options).toPromise();
            this.token.setAuthToken(response);
            return response;
        });
    }
    strRandom(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_8__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _token_service__WEBPACK_IMPORTED_MODULE_8__["TokenService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/models/scopes-builder.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/models/scopes-builder.ts ***!
  \***********************************************/
/*! exports provided: ScopesBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopesBuilder", function() { return ScopesBuilder; });
class ScopesBuilder {
    constructor() {
        this.scopes = [
            ScopesBuilder.USERS,
            ScopesBuilder.PLAYLISTS
        ];
    }
    /**
     *
     * @param args [] means no particular scopes or public only
     */
    withScopes(...args) {
        this.scopes = args;
        return this;
    }
    build() {
        const buffer = [];
        this.scopes.forEach(scope => {
            if (typeof (scope) === 'string') {
                buffer.push(scope);
            }
            else {
                Object.keys(scope).forEach((property) => buffer.push(scope[property]));
            }
        });
        return buffer.join(' ');
    }
}
ScopesBuilder.USERS = {
    READ_PRIVATE: 'user-read-private',
    READ_EMAIL: 'user-read-email'
};
ScopesBuilder.PLAYLISTS = {
    READ_PRIVATE: 'playlist-read-private',
    MODIFY_PRIVATE: 'playlist-modify-private',
    MODIFY_PPUBLIC: 'playlist-modify-public',
    READ_COLLABORATIVE: 'playlist-read-collaborative'
};
ScopesBuilder.HISTORY = {
    TOP_READ: 'user-top-read',
    READ_RECENTLY_PLAYED: 'user-read-recently-played'
};
ScopesBuilder.LIBRARY = {
    READ: 'user-library-read',
    MODIFY: 'user-library-modify'
};
ScopesBuilder.CONNECT = {
    READ_CURRENTLY_PLAYING: 'user-read-currently-playing',
    MODIFY_PLAYBACK_STATE: 'user-modify-playback-state',
    READ_PLAYBACK_STATE: 'user-read-playback-state'
};
ScopesBuilder.FOLLOW = {
    READ: 'user-follow-read',
    MODIFY: 'user-follow-modify'
};
ScopesBuilder.PLAYBACK = {
    STREAMING: 'streaming'
};


/***/ }),

/***/ "./src/app/auth/token.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth/token.service.ts ***!
  \***************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/__ivy_ngcc__/fesm2015/ngx-webstorage-service.js");



class TokenService {
    constructor(storage) {
        this.storage = storage;
    }
    get accessToken() {
        return this.access ? this.access : this.storage.get('access');
    }
    get refreshToken() {
        return this.refresh ? this.refresh : this.storage.get('refresh');
    }
    get expired() {
        const expiresIn = this.expireTime ? this.expireTime : this.storage.get('expire_time');
        return expiresIn < new Date().getTime();
    }
    clearToken() {
        this.access = null;
        this.refresh = null;
        this.storage.clear();
    }
    get authHeader() {
        return this.access ? { Authorization: `Bearer ${this.access}` } : {};
    }
    setAuthToken(spotifyResponse) {
        if (spotifyResponse.access_token && spotifyResponse.refresh_token) {
            this.storage.set('access', spotifyResponse.access_token);
            this.access = spotifyResponse.access_token;
            this.storage.set('refresh', spotifyResponse.refresh_token);
            this.refresh = spotifyResponse.refresh_token;
            const timeObj = new Date();
            timeObj.setSeconds(timeObj.getSeconds() + spotifyResponse.expires_in);
            this.storage.set('expire_time', timeObj.getTime());
            this.expireTime = timeObj.getTime();
        }
    }
}
TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"])); };
TokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenService, factory: TokenService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _session_add_session_add_session_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../session/add-session/add-session.component */ "./src/app/session/add-session/add-session.component.ts");
/* harmony import */ var _session_join_session_join_session_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../session/join-session/join-session.component */ "./src/app/session/join-session/join-session.component.ts");









function HomeComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rbc-add-session");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rbc-join-session");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Rogue Beats is a thing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "and to use it, you should do some things");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "and then everyone is happy.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "active": a0 }; };
function HomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Main Menu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.activePanel = "create"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create Session");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_0_div_7_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_0_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.activePanel = "join"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Join Session");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_div_0_div_10_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.activePanel = "howTo"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "How to Play");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_div_0_div_13_Template, 7, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r0.activePanel === "create"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.activePanel === "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r0.activePanel === "join"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.activePanel === "join");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r0.activePanel === "howTo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.activePanel === "howTo");
} }
class HomeComponent {
    constructor(auth, userService) {
        this.auth = auth;
        this.userService = userService;
    }
    ngOnInit() {
        this.authorizedUser$ = this.auth.authorized$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((authorized) => (authorized ? this.userService.getUser() : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null))));
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["rbc-home"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "rbc-card"], [1, "card-label"], [1, "accordion-container", "card-content"], [1, "accordion", 3, "ngClass", "click"], ["class", "panel", 4, "ngIf"], [1, "panel"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 14, 12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.authorizedUser$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _session_add_session_add_session_component__WEBPACK_IMPORTED_MODULE_6__["AddSessionComponent"], _session_join_session_join_session_component__WEBPACK_IMPORTED_MODULE_7__["JoinSessionComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rbc-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/models/session.ts":
/*!***********************************!*\
  !*** ./src/app/models/session.ts ***!
  \***********************************/
/*! exports provided: Session, SessionPhase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Session", function() { return Session; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionPhase", function() { return SessionPhase; });
class Session {
    constructor(name, phase, admin) {
        this.name = name;
        this.admin = admin;
        this.phase = phase;
    }
}
var SessionPhase;
(function (SessionPhase) {
    SessionPhase[SessionPhase["Open"] = 0] = "Open";
    SessionPhase[SessionPhase["Started"] = 1] = "Started";
    SessionPhase[SessionPhase["Voting"] = 2] = "Voting";
    SessionPhase[SessionPhase["Reveal"] = 3] = "Reveal";
})(SessionPhase || (SessionPhase = {}));


/***/ }),

/***/ "./src/app/phase/open-phase/open-phase.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/phase/open-phase/open-phase.component.ts ***!
  \**********************************************************/
/*! exports provided: OpenPhaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenPhaseComponent", function() { return OpenPhaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _session_show_all_categories_show_all_categories_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../session/show-all-categories/show-all-categories.component */ "./src/app/session/show-all-categories/show-all-categories.component.ts");



class OpenPhaseComponent {
    constructor() { }
    ngOnInit() { }
}
OpenPhaseComponent.ɵfac = function OpenPhaseComponent_Factory(t) { return new (t || OpenPhaseComponent)(); };
OpenPhaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OpenPhaseComponent, selectors: [["rbc-open-phase"]], inputs: { sessionId: "sessionId" }, decls: 6, vars: 1, consts: [[1, "category-section", "rbc-card"], [1, "card-column", "card-label"], [1, "card-column", "card-content"], [3, "sessionId"]], template: function OpenPhaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Categories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rbc-show-all-categories", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sessionId", ctx.sessionId);
    } }, directives: [_session_show_all_categories_show_all_categories_component__WEBPACK_IMPORTED_MODULE_1__["ShowAllCategoriesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BoYXNlL29wZW4tcGhhc2Uvb3Blbi1waGFzZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpenPhaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rbc-open-phase',
                templateUrl: './open-phase.component.html',
                styleUrls: ['./open-phase.component.scss'],
            }]
    }], function () { return []; }, { sessionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/phase/reveal-phase/reveal-phase.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/phase/reveal-phase/reveal-phase.component.ts ***!
  \**************************************************************/
/*! exports provided: RevealPhaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevealPhaseComponent", function() { return RevealPhaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RevealPhaseComponent {
    constructor() { }
    ngOnInit() {
    }
}
RevealPhaseComponent.ɵfac = function RevealPhaseComponent_Factory(t) { return new (t || RevealPhaseComponent)(); };
RevealPhaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RevealPhaseComponent, selectors: [["rbc-reveal-phase"]], decls: 2, vars: 0, template: function RevealPhaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "reveal-phase works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BoYXNlL3JldmVhbC1waGFzZS9yZXZlYWwtcGhhc2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RevealPhaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rbc-reveal-phase',
                templateUrl: './reveal-phase.component.html',
                styleUrls: ['./reveal-phase.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/phase/started-phase/started-phase.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/phase/started-phase/started-phase.component.ts ***!
  \****************************************************************/
/*! exports provided: StartedPhaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartedPhaseComponent", function() { return StartedPhaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StartedPhaseComponent {
    constructor() { }
    ngOnInit() {
    }
}
StartedPhaseComponent.ɵfac = function StartedPhaseComponent_Factory(t) { return new (t || StartedPhaseComponent)(); };
StartedPhaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartedPhaseComponent, selectors: [["rbc-started-phase"]], decls: 2, vars: 0, template: function StartedPhaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "started-phase works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BoYXNlL3N0YXJ0ZWQtcGhhc2Uvc3RhcnRlZC1waGFzZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartedPhaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rbc-started-phase',
                templateUrl: './started-phase.component.html',
                styleUrls: ['./started-phase.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/phase/voting-phase/voting-phase.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/phase/voting-phase/voting-phase.component.ts ***!
  \**************************************************************/
/*! exports provided: VotingPhaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotingPhaseComponent", function() { return VotingPhaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class VotingPhaseComponent {
    constructor() { }
    ngOnInit() {
    }
}
VotingPhaseComponent.ɵfac = function VotingPhaseComponent_Factory(t) { return new (t || VotingPhaseComponent)(); };
VotingPhaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VotingPhaseComponent, selectors: [["rbc-voting-phase"]], decls: 2, vars: 0, template: function VotingPhaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "voting-phase works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BoYXNlL3ZvdGluZy1waGFzZS92b3RpbmctcGhhc2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VotingPhaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rbc-voting-phase',
                templateUrl: './voting-phase.component.html',
                styleUrls: ['./voting-phase.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.service */ "./src/app/search/search.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = ["searchBox"];
function SearchComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Failed to search spotify. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_div_5_div_1_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const item_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.pickSong(item_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r5.preview_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" by ", item_r5.artists[0].name, " ");
} }
function SearchComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComponent_div_5_div_1_Template, 5, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", result_r3.tracks.items);
} }
class SearchComponent {
    constructor(searchService, change) {
        this.searchService = searchService;
        this.change = change;
        this.pick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngAfterViewInit() {
        //this.searchInput.nativeElement.focus();
        (this.result$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.searchInput.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((event) => event.target.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(250), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((term) => term), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => (this.loading = true)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((query) => this.searchService.search(query)
        // .pipe(
        //     timeout(2500),
        //     catchError((err) => {
        //         this.errored = true;
        //         timer(2000).subscribe(() => (this.errored = false));
        //         return of(null);
        //     })
        ))),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => (this.loading = false));
        this.change.detectChanges();
    }
    pickSong(songId) {
        this.pick.emit(songId);
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["rbc-search"]], viewQuery: function SearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
    } }, outputs: { pick: "pick" }, decls: 7, vars: 4, consts: [["type", "text", "placeholder", "Search ...", 1, "input", "is-large", "is-info"], ["searchBox", ""], ["class", "error is-error", 4, "ngIf"], ["class", "search-results", 4, "ngIf"], [1, "error", "is-error"], [1, "search-results"], [4, "ngFor", "ngForOf"], ["type", "button", "value", "Pick", 3, "click"], ["target", "_blank", 3, "href"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchComponent_div_4_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errored);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.result$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".search-results[_ngcontent-%COMP%] {\n  padding-top: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGdCQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbi5zZWFyY2gtcmVzdWx0cyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rbc-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss'],
            }]
    }], function () { return [{ type: _search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { searchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchBox']
        }], pick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/search/search.service.ts":
/*!******************************************!*\
  !*** ./src/app/search/search.service.ts ***!
  \******************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/token.service */ "./src/app/auth/token.service.ts");






class SearchService {
    constructor(http, token) {
        this.http = http;
        this.token = token;
        this.requestAuthUrl = 'https://api.spotify.com/v1/search?type=track&q=';
    }
    search(query) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const options = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    Authorization: 'Bearer ' + this.token.accessToken,
                }),
            };
            // want%20it%20that%20way
            return this.http
                .get(this.requestAuthUrl + encodeURI(query), options)
                .toPromise();
        });
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"])); };
SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _auth_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/firebase/firebase.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/firebase/firebase.service.ts ***!
  \*******************************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class FirebaseService {
    constructor(http) {
        this.http = http;
        this.url = 'https://rogue-beats-b003b.firebaseio.com';
    }
    post(route, data) {
        return this.http.post(`${this.url}/${route}`, data);
    }
    put(route, data) {
        return this.http.put(`${this.url}/${route}`, data);
    }
    get(route) {
        return this.http.get(`${this.url}/${route}`);
    }
}
FirebaseService.ɵfac = function FirebaseService_Factory(t) { return new (t || FirebaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FirebaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FirebaseService, factory: FirebaseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirebaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/token.service */ "./src/app/auth/token.service.ts");






class UserService {
    constructor(http, token) {
        this.http = http;
        this.token = token;
        this.requestAuthUrl = 'https://api.spotify.com/v1/me';
    }
    getUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const options = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    Authorization: 'Bearer ' + this.token.accessToken,
                }),
            };
            if (!this.user) {
                this.user = yield this.http.get(this.requestAuthUrl, options).toPromise();
            }
            return this.user;
        });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _auth_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/session/add-category/add-category.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/session/add-category/add-category.component.ts ***!
  \****************************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AddCategoryComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
} }
class AddCategoryComponent {
    constructor(session, change) {
        this.session = session;
        this.change = change;
        this.errorMessage = '';
        this.category = '';
    }
    ngOnInit() { }
    addCategory() {
        const result = this.session.addCategory(this.sessionId, { category: this.category });
        console.log(this.session);
        this.category = '';
        this.change.detectChanges();
    }
}
AddCategoryComponent.ɵfac = function AddCategoryComponent_Factory(t) { return new (t || AddCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
AddCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddCategoryComponent, selectors: [["rbc-add-category"]], inputs: { sessionId: "sessionId" }, decls: 8, vars: 2, consts: [["type", "text", "placeholder", "Category Description", 3, "ngModel", "ngModelChange"], ["categoryInput", ""], [4, "ngIf"], ["type", "submit", 1, "btn", "btn-outline", "accent", 3, "click"]], template: function AddCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCategoryComponent_Template_input_ngModelChange_2_listener($event) { return ctx.category = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddCategoryComponent_div_4_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCategoryComponent_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); ctx.addCategory(); return _r0.value = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb24vYWRkLWNhdGVnb3J5L2FkZC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rbc-add-category',
                templateUrl: './add-category.component.html',
                styleUrls: ['./add-category.component.scss'],
            }]
    }], function () { return [{ type: _session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { sessionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/session/add-pick/add-pick.component.ts":
/*!********************************************************!*\
  !*** ./src/app/session/add-pick/add-pick.component.ts ***!
  \********************************************************/
/*! exports provided: AddPickComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPickComponent", function() { return AddPickComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../search/search.component */ "./src/app/search/search.component.ts");







function AddPickComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddPickComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " You've submitted a pick for this question. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddPickComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "rbc-search", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pick", function AddPickComponent_div_2_div_2_Template_rbc_search_pick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.pickSong($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddPickComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddPickComponent_div_2_div_1_Template, 3, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddPickComponent_div_2_div_2_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.pickExists);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.pickExists);
} }
class AddPickComponent {
    constructor(sessionService, userService, changeRef) {
        this.sessionService = sessionService;
        this.userService = userService;
        this.changeRef = changeRef;
        this.pickExists = false;
    }
    ngOnInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            this.user = yield this.userService.getUser();
            const songPicks = yield this.sessionService.getSongPicks(this.sessionId);
            for (const key in songPicks) {
                if (Object.prototype.hasOwnProperty.call(songPicks, key)) {
                    const value = songPicks[key];
                    if ((value === null || value === void 0 ? void 0 : value.questionId) === this.questionId && ((_a = value === null || value === void 0 ? void 0 : value.user) === null || _a === void 0 ? void 0 : _a.id) === this.user.id) {
                        this.pickExists = true;
                    }
                }
            }
            this.loading = false;
            this.changeRef.detectChanges();
        });
    }
    get isLoading() {
        return this.loading;
    }
    set isLoading(loading) {
        this.loading = loading;
    }
    pickSong(songId) {
        this.sessionService.addSongPick(this.sessionId, { questionId: this.questionId, songId: songId, user: this.user });
        this.pickExists = true;
    }
}
AddPickComponent.ɵfac = function AddPickComponent_Factory(t) { return new (t || AddPickComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
AddPickComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddPickComponent, selectors: [["rbc-add-pick"]], inputs: { sessionId: "sessionId", questionId: "questionId" }, decls: 3, vars: 2, consts: [[1, "add-pick"], [4, "ngIf"], [3, "pick"]], template: function AddPickComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddPickComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddPickComponent_div_2_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading == false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb24vYWRkLXBpY2svYWRkLXBpY2suY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddPickComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'rbc-add-pick',
                templateUrl: './add-pick.component.html',
                styleUrls: ['./add-pick.component.scss'],
            }]
    }], function () { return [{ type: _session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"] }, { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { sessionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], questionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/session/add-session/add-session.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/session/add-session/add-session.component.ts ***!
  \**************************************************************/
/*! exports provided: AddSessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSessionComponent", function() { return AddSessionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _models_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/session */ "./src/app/models/session.ts");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function AddSessionComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Session Link: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r0.sessionLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.sessionLink);
} }
class AddSessionComponent {
    constructor(sessionService, userService, change) {
        this.sessionService = sessionService;
        this.userService = userService;
        this.change = change;
        this.addSessionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    ngOnInit() { }
    createSession() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const admin = yield this.userService.getUser();
            const session = new _models_session__WEBPACK_IMPORTED_MODULE_3__["Session"](this.addSessionForm.value.name, _models_session__WEBPACK_IMPORTED_MODULE_3__["SessionPhase"].Open, admin);
            const response = yield this.sessionService.createSession(session);
            this.sessionLink = `http://localhost:4432/sessions/${response}`;
            this.change.detectChanges();
        });
    }
}
AddSessionComponent.ɵfac = function AddSessionComponent_Factory(t) { return new (t || AddSessionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
AddSessionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddSessionComponent, selectors: [["rbc-add-session"]], decls: 8, vars: 3, consts: [[1, "mb-4", 3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "name"], ["type", "submit", 1, "btn", "button", 3, "disabled"], ["class", "mt-4", 4, "ngIf"], [1, "mt-4"], [3, "href"]], template: function AddSessionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddSessionComponent_Template_form_ngSubmit_0_listener() { return ctx.createSession(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Create Session");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AddSessionComponent_p_7_Template, 4, 2, "p", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.addSessionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.addSessionForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sessionLink);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".button[_ngcontent-%COMP%] {\n  background: #ee6f57 !important;\n  color: #f6f5f5 !important;\n  font-weight: 500;\n  border-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vzc2lvbi9hZGQtc2Vzc2lvbi9hZGQtc2Vzc2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBREYiLCJmaWxlIjoic3JjL2FwcC9zZXNzaW9uL2FkZC1zZXNzaW9uL2FkZC1zZXNzaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLXNhbG1vbi1iZXJyeSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAkY29sb3ItZG9tZXN0aWMtcGVhY2UgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddSessionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'rbc-add-session',
                templateUrl: './add-session.component.html',
                styleUrls: ['./add-session.component.scss'],
            }]
    }], function () { return [{ type: _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }, { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/session/join-session/join-session.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/session/join-session/join-session.component.ts ***!
  \****************************************************************/
/*! exports provided: JoinSessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinSessionComponent", function() { return JoinSessionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function JoinSessionComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
} }
class JoinSessionComponent {
    constructor(sessionService, userService, router, changeRef) {
        this.sessionService = sessionService;
        this.userService = userService;
        this.router = router;
        this.changeRef = changeRef;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.errorMessage = '';
            if (this.form.valid) {
                const sessionId = this.form.value.code;
                try {
                    const user = yield this.userService.getUser();
                    yield this.sessionService.addParticipant(sessionId, user);
                    this.router.navigate(['sessions/', sessionId]);
                }
                catch (error) {
                    this.errorMessage = error;
                }
                this.changeRef.detectChanges();
            }
        });
    }
}
JoinSessionComponent.ɵfac = function JoinSessionComponent_Factory(t) { return new (t || JoinSessionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
JoinSessionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: JoinSessionComponent, selectors: [["rbc-join-session"]], decls: 6, vars: 3, consts: [[1, "mb-4", 3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "code", "placeholder", "Session Code"], ["type", "submit", 1, "btn", "button", 3, "disabled"], ["class", "error", 4, "ngIf"], [1, "error"]], template: function JoinSessionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function JoinSessionComponent_Template_form_ngSubmit_0_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Join Session");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, JoinSessionComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".button[_ngcontent-%COMP%] {\n  background: #ee6f57 !important;\n  color: #f6f5f5 !important;\n  font-weight: 500;\n  border-radius: 2px;\n}\n\n.error[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vzc2lvbi9qb2luLXNlc3Npb24vam9pbi1zZXNzaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNJLGFBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb24vam9pbi1zZXNzaW9uL2pvaW4tc2Vzc2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcbi5idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1zYWxtb24tYmVycnkgIWltcG9ydGFudDtcclxuICBjb2xvcjogJGNvbG9yLWRvbWVzdGljLXBlYWNlICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JoinSessionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'rbc-join-session',
                templateUrl: './join-session.component.html',
                styleUrls: ['./join-session.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
            }]
    }], function () { return [{ type: _session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] }, { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/session/session-admin/session-admin.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/session/session-admin/session-admin.component.ts ***!
  \******************************************************************/
/*! exports provided: SessionAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionAdminComponent", function() { return SessionAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-category/add-category.component */ "./src/app/session/add-category/add-category.component.ts");



class SessionAdminComponent {
    constructor() { }
    ngOnInit() {
    }
}
SessionAdminComponent.ɵfac = function SessionAdminComponent_Factory(t) { return new (t || SessionAdminComponent)(); };
SessionAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SessionAdminComponent, selectors: [["rbc-session-admin"]], inputs: { sessionId: "sessionId" }, decls: 6, vars: 1, consts: [[1, "admin-section", "rbc-card"], [1, "card-column", "card-label"], [1, "card-column", "card-content"], [1, "add-category"], [3, "sessionId"]], template: function SessionAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rbc-add-category", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sessionId", ctx.sessionId);
    } }, directives: [_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_1__["AddCategoryComponent"]], styles: [".rbc-card[_ngcontent-%COMP%] {\n  margin: 2em auto;\n  max-width: 600px;\n  text-align: left;\n}\n\n.card-label[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.5rem;\n  background-color: #162125;\n  margin-bottom: 0.5rem;\n  text-transform: uppercase;\n  box-shadow: 0 4.5px 3.6px rgba(0, 0, 0, 0.017), 0 12.5px 10px rgba(0, 0, 0, 0.025), 0 30.1px 24.1px rgba(0, 0, 0, 0.033), 0 100px 80px rgba(0, 0, 0, 0.05);\n}\n\n.card-content[_ngcontent-%COMP%] {\n  padding: 1rem 1rem 1rem 1rem;\n  background-color: #151a1c;\n  box-shadow: 0 4.5px 3.6px rgba(0, 0, 0, 0.017), 0 12.5px 10px rgba(0, 0, 0, 0.025), 0 30.1px 24.1px rgba(0, 0, 0, 0.033), 0 100px 80px rgba(0, 0, 0, 0.05);\n}\n\n@media only screen and (min-width: 600px) {\n  .card-label[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 1rem;\n    background-color: #1a2e37;\n    margin-bottom: unset;\n  }\n\n  .card-content[_ngcontent-%COMP%] {\n    padding: 1rem 2rem 1.5rem 2rem;\n  }\n\n  .rbc-card[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 125px auto;\n    gap: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vzc2lvbi9zZXNzaW9uLWFkbWluL3Nlc3Npb24tYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBKQUFBO0FBQ0Y7O0FBR0E7RUFDRSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEpBQUE7QUFBRjs7QUFJQTtFQUNFO0lBQ0ksa0JBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0lBQ0Esb0JBQUE7RUFESjs7RUFJQTtJQUNJLDhCQUFBO0VBREo7O0VBSUE7SUFDSSxhQUFBO0lBQ0EsaUNBQUE7SUFDQSxTQUFBO0VBREo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb24vc2Vzc2lvbi1hZG1pbi9zZXNzaW9uLWFkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJiYy1jYXJkIHtcclxuICBtYXJnaW46IDJlbSBhdXRvO1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmNhcmQtbGFiZWwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MjEyNTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBib3gtc2hhZG93OiAwIDQuNXB4IDMuNnB4IHJnYmEoMCwgMCwgMCwgMC4wMTcpLCAwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wMjUpLFxyXG4gICAgICAwIDMwLjFweCAyNC4xcHggcmdiYSgwLCAwLCAwLCAwLjAzMyksIDAgMTAwcHggODBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTFhMWM7XHJcbiAgYm94LXNoYWRvdzogMCA0LjVweCAzLjZweCByZ2JhKDAsIDAsIDAsIDAuMDE3KSwgMCAxMi41cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDI1KSxcclxuICAgICAgMCAzMC4xcHggMjQuMXB4IHJnYmEoMCwgMCwgMCwgMC4wMzMpLCAwIDEwMHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gIC5jYXJkLWxhYmVsIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMmUzNztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogdW5zZXQ7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogMXJlbSAycmVtIDEuNXJlbSAycmVtO1xyXG4gIH1cclxuXHJcbiAgLnJiYy1jYXJkIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMjVweCBhdXRvO1xyXG4gICAgICBnYXA6IDEwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rbc-session-admin',
                templateUrl: './session-admin.component.html',
                styleUrls: ['./session-admin.component.scss']
            }]
    }], function () { return []; }, { sessionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/session/session-details/session-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/session/session-details/session-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: SessionDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionDetailsComponent", function() { return SessionDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/session */ "./src/app/models/session.ts");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _session_admin_session_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../session-admin/session-admin.component */ "./src/app/session/session-admin/session-admin.component.ts");
/* harmony import */ var _phase_open_phase_open_phase_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../phase/open-phase/open-phase.component */ "./src/app/phase/open-phase/open-phase.component.ts");
/* harmony import */ var _phase_started_phase_started_phase_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../phase/started-phase/started-phase.component */ "./src/app/phase/started-phase/started-phase.component.ts");
/* harmony import */ var _phase_voting_phase_voting_phase_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../phase/voting-phase/voting-phase.component */ "./src/app/phase/voting-phase/voting-phase.component.ts");
/* harmony import */ var _phase_reveal_phase_reveal_phase_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../phase/reveal-phase/reveal-phase.component */ "./src/app/phase/reveal-phase/reveal-phase.component.ts");













function SessionDetailsComponent_div_0_div_17_rbc_session_admin_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "rbc-session-admin", 10);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sessionId", ctx_r3.sessionId);
} }
function SessionDetailsComponent_div_0_div_17_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "rbc-open-phase", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sessionId", ctx_r4.sessionId);
} }
function SessionDetailsComponent_div_0_div_17_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "asks you to submit for the categories (rbc-show-all-categories)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "rbc-started-phase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SessionDetailsComponent_div_0_div_17_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Asks you to vote for who submitted what");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "rbc-voting-phase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SessionDetailsComponent_div_0_div_17_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Shows each submission with your guess and the correct answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "rbc-reveal-phase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SessionDetailsComponent_div_0_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SessionDetailsComponent_div_0_div_17_rbc_session_admin_1_Template, 1, 1, "rbc-session-admin", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SessionDetailsComponent_div_0_div_17_div_3_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SessionDetailsComponent_div_0_div_17_div_4_Template, 4, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SessionDetailsComponent_div_0_div_17_div_5_Template, 4, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SessionDetailsComponent_div_0_div_17_div_6_Template, 4, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r2.user == null ? null : ctx_r2.user.id) === (session_r1.value == null ? null : session_r1.value.admin == null ? null : session_r1.value.admin.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", session_r1.value.phase);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r2.phase.Started);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r2.phase.Voting);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r2.phase.Reveal);
} }
function SessionDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Session Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Created By:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Session ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SessionDetailsComponent_div_0_div_17_Template, 7, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", session_r1.value.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", session_r1.value.admin == null ? null : session_r1.value.admin.display_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", session_r1.key, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.userLoaded);
} }
class SessionDetailsComponent {
    constructor(sessionService, route, userService) {
        this.sessionService = sessionService;
        this.route = route;
        this.userService = userService;
        this.phase = _models_session__WEBPACK_IMPORTED_MODULE_2__["SessionPhase"];
        this.userLoaded = false;
        this.route.params.subscribe(params => {
            this.sessionId = params.sessionId;
            this.getSession();
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = yield this.userService.getUser();
            //console.log(this.user);
            this.userLoaded = true;
        });
    }
    getSession() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.results = yield this.sessionService.getSession(this.sessionId);
            //console.log(this.results);
        });
    }
}
SessionDetailsComponent.ɵfac = function SessionDetailsComponent_Factory(t) { return new (t || SessionDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
SessionDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SessionDetailsComponent, selectors: [["rbc-details"]], decls: 2, vars: 3, consts: [[4, "ngFor", "ngForOf"], [1, "session-details", "rbc-card"], [1, "card-column", "card-label"], [1, "card-column", "card-content"], [1, "detail-label"], [4, "ngIf"], [3, "sessionId", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchDefault"], [4, "ngSwitchCase"], [3, "sessionId"]], template: function SessionDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SessionDetailsComponent_div_0_Template, 18, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "keyvalue");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.results));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"], _session_admin_session_admin_component__WEBPACK_IMPORTED_MODULE_7__["SessionAdminComponent"], _phase_open_phase_open_phase_component__WEBPACK_IMPORTED_MODULE_8__["OpenPhaseComponent"], _phase_started_phase_started_phase_component__WEBPACK_IMPORTED_MODULE_9__["StartedPhaseComponent"], _phase_voting_phase_voting_phase_component__WEBPACK_IMPORTED_MODULE_10__["VotingPhaseComponent"], _phase_reveal_phase_reveal_phase_component__WEBPACK_IMPORTED_MODULE_11__["RevealPhaseComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["KeyValuePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb24vc2Vzc2lvbi1kZXRhaWxzL3Nlc3Npb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SessionDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'rbc-details',
                templateUrl: './session-details.component.html',
                styleUrls: ['./session-details.component.scss']
            }]
    }], function () { return [{ type: _session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/session/session.service.ts":
/*!********************************************!*\
  !*** ./src/app/session/session.service.ts ***!
  \********************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase/firebase.service */ "./src/app/services/firebase/firebase.service.ts");




class SessionService {
    constructor(firebaseService) {
        this.firebaseService = firebaseService;
        this.route = 'sessions.json';
    }
    createSession(session) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.firebaseService
                .post(this.route, session)
                .toPromise()
                .then((response) => {
                console.log(response);
                this.firebaseResponse = response;
                console.log(this.firebaseResponse);
            });
            return this.firebaseResponse.name;
        });
    }
    // todo:  each different json could/should be its own service.  eg.  games, picks, sessions, categories
    addCategory(sessionId, category) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const route = `games/${sessionId}/categories.json`;
            yield this.firebaseService
                .post(route, category)
                .toPromise()
                .then((response) => {
                this.firebaseResponse = response;
            });
            return this.firebaseResponse.name;
        });
    }
    addSongPick(sessionId, songPick) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const route = `games/${sessionId}/picks.json`;
            yield this.firebaseService
                .post(route, songPick)
                .toPromise()
                .then((response) => {
                this.firebaseResponse = response;
            });
            return this.firebaseResponse.name;
        });
    }
    addParticipant(sessionId, participant) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const validSess = yield this.getSession(sessionId);
            if (validSess[sessionId]) {
                const route = `games/${sessionId}/participants.json`;
                return this.firebaseService.post(route, participant).toPromise();
            }
            else {
                throw new Error(('Session not found'));
            }
        });
    }
    getSessions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.firebaseService.get(this.route).toPromise();
        });
    }
    getCategories(sessionId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const route = `games/${sessionId}/categories.json`;
            return yield this.firebaseService.get(route).toPromise();
        });
    }
    getSongPicks(sessionId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const route = `games/${sessionId}/picks.json`;
            return yield this.firebaseService.get(route).toPromise();
        });
    }
    getSession(sessionId) {
        const route = `${this.route}?orderBy="$key"&startAt="${sessionId}"&endAt="${sessionId}"&print=pretty`;
        return this.firebaseService.get(route).toPromise();
    }
}
SessionService.ɵfac = function SessionService_Factory(t) { return new (t || SessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"])); };
SessionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SessionService, factory: SessionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SessionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/session/show-all-categories/show-all-categories.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/session/show-all-categories/show-all-categories.component.ts ***!
  \******************************************************************************/
/*! exports provided: ShowAllCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAllCategoriesComponent", function() { return ShowAllCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _add_pick_add_pick_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-pick/add-pick.component */ "./src/app/session/add-pick/add-pick.component.ts");






function ShowAllCategoriesComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "rbc-add-pick", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](session_r2.value.category ? session_r2.value.category : "**Empty**");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sessionId", ctx_r1.sessionId)("questionId", session_r2.key);
} }
function ShowAllCategoriesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ShowAllCategoriesComponent_div_1_div_1_Template, 4, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r0.categories));
} }
class ShowAllCategoriesComponent {
    constructor(sessionService, change) {
        this.sessionService = sessionService;
        this.change = change;
        this.searched = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.categories = yield this.sessionService.getCategories(this.sessionId);
            this.searched = true;
            this.change.detectChanges();
        });
    }
}
ShowAllCategoriesComponent.ɵfac = function ShowAllCategoriesComponent_Factory(t) { return new (t || ShowAllCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
ShowAllCategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShowAllCategoriesComponent, selectors: [["rbc-show-all-categories"]], inputs: { sessionId: "sessionId" }, decls: 2, vars: 1, consts: [["class", "all-sessions", 4, "ngIf"], [1, "all-sessions"], ["class", "category", 4, "ngFor", "ngForOf"], [1, "category"], [1, "category-label"], [3, "sessionId", "questionId"]], template: function ShowAllCategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ShowAllCategoriesComponent_div_1_Template, 3, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.searched);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _add_pick_add_pick_component__WEBPACK_IMPORTED_MODULE_4__["AddPickComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"]], styles: [".category-label[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #214457;\n  padding: 0.5rem;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vzc2lvbi9zaG93LWFsbC1jYXRlZ29yaWVzL3Nob3ctYWxsLWNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL2Fic3RyYWN0cy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtFQUNBLHlCQ1U0QjtFRFQ1QixlQUFBO0VBQ0Esa0JBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb24vc2hvdy1hbGwtY2F0ZWdvcmllcy9zaG93LWFsbC1jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbi5jYXRlZ29yeS1sYWJlbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcGxlYXNhbnQtbmF2eS1oaWdobGlnaHQ7XHJcbiAgICBwYWRkaW5nOiAuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4iLCIvL0ZPTlRTXHJcbiRmb250LWhlYWRlcjogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kZm9udC10ZXh0OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcblxyXG4vLyBDT0xPUlNcclxuJGNvbG9yLWRvbWVzdGljLXBlYWNlOiAjZjZmNWY1O1xyXG4kY29sb3ItcGxlYXNhbnQtbmF2eTogIzE0NTM3NDtcclxuJGNvbG9yLW1pZG5pZ2h0LWJsdWU6ICMwMDMzNGU7XHJcbiRjb2xvci1zYWxtb24tYmVycnk6ICNlZTZmNTc7XHJcbiRjb2xvci1kYW5nZXI6ICNmZjUwNTA7XHJcblxyXG4vLyBDVVNUT00gQ09MT1JTXHJcbiRjb2xvci1kYXJrLW5hdnk6ICMxODIxMjY7XHJcbiRjb2xvci1saWdodC1uYXZ5OiAjMjc0MjRkOTE7XHJcbiRjb2xvci1wbGVhc2FudC1uYXZ5LWhpZ2hsaWdodDogIzIxNDQ1NztcclxuJGNvbG9yLWRlZXAtc2VhLWdyZWVuOiAjMTcyQzM2O1xyXG4kY29sb3ItYm90dG9tLW9mLXRoZS1vY2VhbjogIzE1MWExYztcclxuXHJcbi8vIFRIRU1FXHJcbiRwcmltYXJ5OiAkY29sb3ItZG9tZXN0aWMtcGVhY2U7XHJcbiRzZWNvbmRhcnk6ICRjb2xvci1wbGVhc2FudC1uYXZ5O1xyXG4kdGVydGlhcnk6ICRjb2xvci1taWRuaWdodC1ibHVlO1xyXG4kYWNjZW50OiAkY29sb3Itc2FsbW9uLWJlcnJ5O1xyXG4kZGFuZ2VyOiAkY29sb3ItZGFuZ2VyO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShowAllCategoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'rbc-show-all-categories',
                templateUrl: './show-all-categories.component.html',
                styleUrls: ['./show-all-categories.component.scss'],
            }]
    }], function () { return [{ type: _session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { sessionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/session/show-all-sessions/show-all-sessions.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/session/show-all-sessions/show-all-sessions.component.ts ***!
  \**************************************************************************/
/*! exports provided: ShowAllSessionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAllSessionsComponent", function() { return ShowAllSessionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ShowAllSessionsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowAllSessionsComponent_div_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.getSessions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Get All Sessions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ShowAllSessionsComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "/sessions/", session_r5.key, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \"", session_r5.value.category, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Created by ", session_r5.value.admin == null ? null : session_r5.value.admin.display_name, " ");
} }
function ShowAllSessionsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ShowAllSessionsComponent_div_1_div_1_Template, 5, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r1.results));
} }
class ShowAllSessionsComponent {
    constructor(sessionService) {
        this.sessionService = sessionService;
        this.searched = false;
    }
    ngOnInit() { }
    getSessions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // The type of results:  <{ [id: string]: Session }>
            this.results = yield this.sessionService.getSessions();
            this.searched = true;
        });
    }
}
ShowAllSessionsComponent.ɵfac = function ShowAllSessionsComponent_Factory(t) { return new (t || ShowAllSessionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"])); };
ShowAllSessionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShowAllSessionsComponent, selectors: [["rbc-show-all-sessions"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "all-sessions", 4, "ngIf"], [1, "btn", "button", 3, "click"], [1, "all-sessions"], [4, "ngFor", "ngForOf"], [3, "href"]], template: function ShowAllSessionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ShowAllSessionsComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ShowAllSessionsComponent_div_1_Template, 3, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.searched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.searched);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"]], styles: [".button[_ngcontent-%COMP%] {\n  background: #ee6f57 !important;\n  color: #f6f5f5 !important;\n  font-weight: 500;\n  border-radius: 2px;\n}\n\n.all-sessions[_ngcontent-%COMP%] {\n  width: 60%;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vzc2lvbi9zaG93LWFsbC1zZXNzaW9ucy9zaG93LWFsbC1zZXNzaW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFERiIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb24vc2hvdy1hbGwtc2Vzc2lvbnMvc2hvdy1hbGwtc2Vzc2lvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcblxyXG4uYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3Itc2FsbW9uLWJlcnJ5ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICRjb2xvci1kb21lc3RpYy1wZWFjZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4uYWxsLXNlc3Npb25zIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShowAllSessionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'rbc-show-all-sessions',
                templateUrl: './show-all-sessions.component.html',
                styleUrls: ['./show-all-sessions.component.scss'],
            }]
    }], function () { return [{ type: _session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    spotifyClientId: '47b78bc5a97140f485f0a5ead97a2145',
    spotifyRedirect: 'http://localhost:4432/login/authorized'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\StompingGrounds\rogue-beats\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map