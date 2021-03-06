(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"],{

/***/ "./src/app/authentication/authentication-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/authentication/authentication-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function() { return AuthenticationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/authentication/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/authentication/forgot-password/forgot-password.component.ts");
/* harmony import */ var _locked_locked_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locked/locked.component */ "./src/app/authentication/locked/locked.component.ts");
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page404/page404.component */ "./src/app/authentication/page404/page404.component.ts");
/* harmony import */ var _page500_page500_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page500/page500.component */ "./src/app/authentication/page500/page500.component.ts");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client/client.component */ "./src/app/authentication/client/client.component.ts");
/* harmony import */ var _domain_domain_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./domain/domain.component */ "./src/app/authentication/domain/domain.component.ts");












const routes = [
    {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
    },
    {
        path: 'signin',
        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"]
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
    },
    {
        path: 'client',
        component: _client_client_component__WEBPACK_IMPORTED_MODULE_8__["ClientComponent"]
    },
    {
        path: 'domain',
        component: _domain_domain_component__WEBPACK_IMPORTED_MODULE_9__["DomainComponent"]
    },
    {
        path: 'forgot-password',
        component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"]
    },
    {
        path: 'locked',
        component: _locked_locked_component__WEBPACK_IMPORTED_MODULE_5__["LockedComponent"]
    },
    {
        path: 'page404',
        component: _page404_page404_component__WEBPACK_IMPORTED_MODULE_6__["Page404Component"]
    },
    {
        path: 'page500',
        component: _page500_page500_component__WEBPACK_IMPORTED_MODULE_7__["Page500Component"]
    }
];
class AuthenticationRoutingModule {
}
AuthenticationRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AuthenticationRoutingModule });
AuthenticationRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AuthenticationRoutingModule_Factory(t) { return new (t || AuthenticationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AuthenticationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthenticationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication-routing.module */ "./src/app/authentication/authentication-routing.module.ts");
/* harmony import */ var _page500_page500_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page500/page500.component */ "./src/app/authentication/page500/page500.component.ts");
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page404/page404.component */ "./src/app/authentication/page404/page404.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/authentication/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");
/* harmony import */ var _locked_locked_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./locked/locked.component */ "./src/app/authentication/locked/locked.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/authentication/landing/landing.component.ts");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./client/client.component */ "./src/app/authentication/client/client.component.ts");
/* harmony import */ var _super_admin_signup_super_admin_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./super-admin-signup/super-admin-signup.component */ "./src/app/authentication/super-admin-signup/super-admin-signup.component.ts");
/* harmony import */ var _domain_domain_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./domain/domain.component */ "./src/app/authentication/domain/domain.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/authentication/forgot-password/forgot-password.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../services/auth.guard */ "./src/app/services/auth.guard.ts");























class AuthenticationModule {
}
AuthenticationModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AuthenticationModule });
AuthenticationModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AuthenticationModule_Factory(t) { return new (t || AuthenticationModule)(); }, providers: [_services_client_service__WEBPACK_IMPORTED_MODULE_19__["ClientService"],
        _services_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthenticationRoutingModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AuthenticationModule, { declarations: [_page500_page500_component__WEBPACK_IMPORTED_MODULE_4__["Page500Component"],
        _page404_page404_component__WEBPACK_IMPORTED_MODULE_5__["Page404Component"],
        _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
        _locked_locked_component__WEBPACK_IMPORTED_MODULE_8__["LockedComponent"],
        _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__["ForgotPasswordComponent"],
        _landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"],
        _client_client_component__WEBPACK_IMPORTED_MODULE_10__["ClientComponent"],
        _super_admin_signup_super_admin_signup_component__WEBPACK_IMPORTED_MODULE_11__["SuperAdminSignupComponent"],
        _domain_domain_component__WEBPACK_IMPORTED_MODULE_12__["DomainComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthenticationRoutingModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthenticationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _page500_page500_component__WEBPACK_IMPORTED_MODULE_4__["Page500Component"],
                    _page404_page404_component__WEBPACK_IMPORTED_MODULE_5__["Page404Component"],
                    _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"],
                    _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
                    _locked_locked_component__WEBPACK_IMPORTED_MODULE_8__["LockedComponent"],
                    _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__["ForgotPasswordComponent"],
                    _landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"],
                    _client_client_component__WEBPACK_IMPORTED_MODULE_10__["ClientComponent"],
                    _super_admin_signup_super_admin_signup_component__WEBPACK_IMPORTED_MODULE_11__["SuperAdminSignupComponent"],
                    _domain_domain_component__WEBPACK_IMPORTED_MODULE_12__["DomainComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthenticationRoutingModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"]
                ],
                providers: [_services_client_service__WEBPACK_IMPORTED_MODULE_19__["ClientService"],
                    _services_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/authentication/client/client.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/client/client.component.ts ***!
  \***********************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/client.service */ "./src/app/authentication/services/client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function ClientComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r1.success, " ");
} }
function ClientComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r2.error.name, " ");
} }
function ClientComponent_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r3.error.schema_name, " ");
} }
const _c0 = function (a0) { return { "focused": a0 }; };
class Errors {
    constructor(schema_name, name, description, non_field_errors) {
        this.schema_name = schema_name;
        this.name = name;
        this.description = description;
        this.non_field_errors = non_field_errors;
    }
}
class ClientComponent {
    constructor(route, router, clientService) {
        this.route = route;
        this.router = router;
        this.clientService = clientService;
        this.user = new _services_client_service__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.client = new _services_client_service__WEBPACK_IMPORTED_MODULE_1__["Client"]();
        this.error = new Errors();
        this.success = "";
        route.params.subscribe(params => { this.user.id = params['id']; });
    }
    ngOnInit() { }
    createClient() {
        this.clientService.createClient(this.client.schema_name, this.client.name, this.client.description).subscribe((res) => {
            // this.router.navigateByUrl('/create-domain/' + `${res.id}`);
            console.log("client successfully created");
            this.createDomain(res.id);
            console.log(res);
        }, (error) => {
            console.error(error);
            this.error = error.error;
        });
    }
    createDomain(tenant) {
        this.clientService.createDomain(this.client.schema_name + ".localhost", "true", tenant).subscribe((res) => {
            // this.router.navigateByUrl('/super-admin-signup/' + `${res.domain}`);
            console.log("domain successfully created");
            this.editUserSubdomain();
            console.log(res);
        }, (error) => {
            console.error(error);
            this.error = error.error;
        });
    }
    editUserSubdomain() {
        this.clientService.editUserSubdomain(
        // user_subdomain,
        this.user.id, this.client.schema_name).subscribe((res) => {
            this.router.navigateByUrl('/create/done/' + `${this.client.name}`);
            this.success = `${this.client.name} instance has been successfully created`;
            console.log("successfully updated user subdomain");
            console.log(res);
            // console.log("successfully logged in");
            // this.success = res;
            // this.success = "Your super admin account has been successfully created"
        }, (error) => {
            console.error(error);
            // this.error = error.error;
        });
    }
}
ClientComponent.??fac = function ClientComponent_Factory(t) { return new (t || ClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"])); };
ClientComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ClientComponent, selectors: [["app-client"]], decls: 56, vars: 11, consts: [[1, "section", "section-shaped", "section-lg"], [1, "shape", "shape-style-1", "bg-gradient-default"], [1, "container", "pt-lg-md"], [1, "row", "justify-content-center"], [1, "col-lg-5"], [1, "card", "bg-secondary", "shadow", "border-0"], [1, "card-header", "bg-white", "pb-5"], [1, "text-muted", "text-center", "mb-3"], [1, "card-body", "px-lg-5", "py-lg-5"], ["role", "form", 3, "ngSubmit"], ["f", "ngForm"], ["class", "error", 4, "ngIf"], [1, "form-group", 3, "ngClass"], [1, "input-group", "input-group-alternative", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "ni", "ni-email-83"], ["placeholder", "School Name", "type", "text", "name", "client name", 1, "form-control", 3, "ngModel", "focus", "ngModelChange", "blur"], [1, "ni", "ni-hat-3"], ["placeholder", "Desired Url", "type", "text", "name", "schema name", 1, "form-control", 3, "ngModel", "focus", "ngModelChange", "blur"], [1, "row", "my-4"], [1, "col-12"], [1, "custom-control", "custom-control-alternative", "custom-checkbox"], ["id", "customCheckRegister", "type", "checkbox", 1, "custom-control-input"], ["for", "customCheckRegister", 1, "custom-control-label"], ["href", "javascript:void(0)"], [1, "text-center"], ["type", "submit", 1, "btn", "btn-primary", "mt-4"], [1, "error"]], template: function ClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Create New SmartSchool360 App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "form", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ClientComponent_Template_form_ngSubmit_21_listener() { return ctx.createClient(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, ClientComponent_span_24_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, ClientComponent_span_26_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("focus", function ClientComponent_Template_input_focus_32_listener() { return ctx.focus1 = true; })("ngModelChange", function ClientComponent_Template_input_ngModelChange_32_listener($event) { return ctx.client.name = $event; })("blur", function ClientComponent_Template_input_blur_32_listener() { return ctx.focus1 = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, ClientComponent_span_34_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("focus", function ClientComponent_Template_input_focus_40_listener() { return ctx.focus = true; })("ngModelChange", function ClientComponent_Template_input_ngModelChange_40_listener($event) { return ctx.client.schema_name = $event; })("blur", function ClientComponent_Template_input_blur_40_listener() { return ctx.focus = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " .smartschool360.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "I agree with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.error.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](7, _c0, ctx.focus1 === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.client.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.error.schema_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](9, _c0, ctx.focus === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.client.schema_name);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".error[_ngcontent-%COMP%] {\r\n  color: red\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vY2xpZW50L2NsaWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0NBT0M7O0FBRUQ7RUFDRTs7QUFFRiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NsaWVudC9jbGllbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5uZy12YWxpZDpub3QoZm9ybSkgIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0MkE5NDg7IFxyXG4gIH1cclxuICBcclxuLm5nLWludmFsaWQ6bm90KGZvcm0pICB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYTk0NDQyOyBcclxufVxyXG4qL1xyXG5cclxuLmVycm9yIHtcclxuICBjb2xvcjogcmVkXHJcbiAgXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ClientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-client',
                templateUrl: './client.component.html',
                styleUrls: ['./client.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/domain/domain.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/domain/domain.component.ts ***!
  \***********************************************************/
/*! exports provided: DomainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainComponent", function() { return DomainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/client.service */ "./src/app/authentication/services/client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function DomainComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r1.error.domain, " ");
} }
const _c0 = function (a0) { return { "focused": a0 }; };
class Errors {
    constructor(domain, non_field_errors) {
        this.domain = domain;
        this.non_field_errors = non_field_errors;
    }
}
class DomainComponent {
    constructor(route, router, clientService) {
        this.route = route;
        this.router = router;
        this.clientService = clientService;
        this.domain = new _services_client_service__WEBPACK_IMPORTED_MODULE_1__["Domain"]();
        this.error = new Errors();
        route.params.subscribe(params => { this.domain.tenant = params['id']; });
        this.domain.is_primary = true;
    }
    ngOnInit() {
    }
    createDomain() {
        this.clientService.createDomain(this.domain.domain, this.domain.is_primary, this.domain.tenant).subscribe((res) => {
            this.router.navigateByUrl('/super-admin-signup/' + `${res.domain}`);
            console.log(res);
            console.log("successfully created");
        }, (error) => {
            console.error(error);
            this.error = error.error;
        });
    }
}
DomainComponent.??fac = function DomainComponent_Factory(t) { return new (t || DomainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"])); };
DomainComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DomainComponent, selectors: [["app-domain"]], decls: 56, vars: 5, consts: [[1, "section", "section-shaped", "section-lg"], [1, "shape", "shape-style-1", "bg-gradient-default"], [1, "container", "pt-lg-md"], [1, "row", "justify-content-center"], [1, "col-lg-5"], [1, "card", "bg-secondary", "shadow", "border-0"], [1, "card-header", "bg-white", "pb-5"], [1, "text-muted", "text-center", "mb-3"], [1, "text-center"], ["href", "javascript:void(0)", 1, "btn", "btn-neutral", "btn-icon", "mr-4"], [1, "btn-inner--icon"], ["src", "./assets/img/icons/common/github.svg"], [1, "btn-inner--text"], ["href", "javascript:void(0)", 1, "btn", "btn-neutral", "btn-icon"], ["src", "./assets/img/icons/common/google.svg"], [1, "card-body", "px-lg-5", "py-lg-5"], [1, "text-center", "text-muted", "mb-4"], ["role", "form", 3, "ngSubmit"], ["f", "ngForm"], ["class", "error", 4, "ngIf"], [1, "form-group", 3, "ngClass"], [1, "input-group", "input-group-alternative", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "ni", "ni-hat-3"], ["placeholder", "Domain name", "type", "text", "name", "domain name", 1, "form-control", 3, "ngModel", "focus", "ngModelChange", "blur"], [1, "row", "my-4"], [1, "col-12"], [1, "custom-control", "custom-control-alternative", "custom-checkbox"], ["id", "customCheckRegister", "type", "checkbox", 1, "custom-control-input"], ["for", "customCheckRegister", 1, "custom-control-label"], ["href", "javascript:void(0)"], ["type", "submit", 1, "btn", "btn-primary", "mt-4"], [1, "error"]], template: function DomainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Sign up with");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Or sign up with credentials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "form", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function DomainComponent_Template_form_ngSubmit_34_listener() { return ctx.createDomain(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, DomainComponent_span_37_Template, 2, 1, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("focus", function DomainComponent_Template_input_focus_43_listener() { return ctx.focus = true; })("ngModelChange", function DomainComponent_Template_input_ngModelChange_43_listener($event) { return ctx.domain.domain = $event; })("blur", function DomainComponent_Template_input_blur_43_listener() { return ctx.focus = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "I agree with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Create a client account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.error.domain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](3, _c0, ctx.focus === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.domain.domain);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".error[_ngcontent-%COMP%] {\r\n    color: red\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vZG9tYWluL2RvbWFpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7O0VBRUYiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9kb21haW4vZG9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3Ige1xyXG4gICAgY29sb3I6IHJlZFxyXG4gICAgXHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DomainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-domain',
                templateUrl: './domain.component.html',
                styleUrls: ['./domain.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/forgot-password/forgot-password.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/authentication/forgot-password/forgot-password.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");











function ForgotPasswordComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Username is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class ForgotPasswordComponent {
    constructor(formBuilder, route, router) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.submitted = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    get f() {
        return this.loginForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        else {
            this.router.navigate(['/dashboard/main']);
        }
    }
}
ForgotPasswordComponent.??fac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ForgotPasswordComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 24, vars: 2, consts: [[1, "limiter"], [1, "container-login100"], [1, "wrap-login100"], [1, "login100-form", "validate-form", 3, "formGroup", "ngSubmit"], [1, "login100-form-title", "p-b-45"], [1, "error-subheader2", "p-t-20", "p-b-15"], [1, "form-group", "mb-5"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "username", "required", ""], ["matSuffix", ""], [4, "ngIf"], [1, "container-login100-form-btn"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "login100-form-btn"], [1, "w-full", "p-t-25", "text-center"], ["routerLink", "/authentication/signin", 1, "txt1"], [1, "login100-more", 2, "background-image", "url('assets/images/pages/bg-02.png')"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Reset Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Enter your registered email address. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, ForgotPasswordComponent_mat_error_15_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Reset My Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Login? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginForm.get("username").hasError("required"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgot-password',
                templateUrl: './forgot-password.component.html',
                styleUrls: ['./forgot-password.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/landing/landing.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/authentication/landing/landing.component.ts ***!
  \*************************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/client.service */ "./src/app/authentication/services/client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = function (a0) { return { "focused": a0 }; };
// import { User } from '../../services/auth.service';
class LandingComponent {
    constructor(route, router, clientService) {
        this.route = route;
        this.router = router;
        this.clientService = clientService;
        this.client = new _services_client_service__WEBPACK_IMPORTED_MODULE_1__["Client"]();
    }
    ngOnInit() { }
    createCourse() {
        this.clientService.createClient(this.client.schema_name, this.client.name, this.client.description).subscribe(() => {
            // this.router.navigateByUrl('/admin/my-org-courses/' + `${this.id}`);
            console.log("successfully created");
        }, (error) => {
            console.error(error);
        });
    }
}
LandingComponent.??fac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"])); };
LandingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 388, vars: 6, consts: [[1, "position-relative"], [1, "section", "section-lg", "section-shaped", "pb-250"], [1, "shape", "shape-style-1", "shape-default"], [1, "container", "py-lg-md", "d-flex"], [1, "col", "px-0"], [1, "row"], [1, "col-lg-6"], [1, "display-3", "text-white"], [1, "lead", "text-white"], [1, "btn-wrapper"], ["href", "https://demos.creative-tim.com/argon-design-system-angular/documentation/alerts?ref=adsa-landing-page", 1, "btn", "btn-info", "btn-icon", "mb-3", "mb-sm-0"], [1, "btn-inner--icon"], [1, "fa", "fa-code"], [1, "btn-inner--text"], ["href", "https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page", 1, "btn", "btn-white", "btn-icon", "mb-3", "mb-sm-0"], [1, "ni", "ni-cloud-download-95"], [1, "separator", "separator-bottom", "separator-skew"], ["x", "0", "y", "0", "viewBox", "0 0 2560 100", "preserveAspectRatio", "none", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["points", "2560 0 2560 100 0 100", 1, "fill-white"], [1, "section", "section-lg", "pt-lg-0", "mt--200"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12"], [1, "row", "row-grid"], [1, "col-lg-4"], [1, "card", "card-lift--hover", "shadow", "border-0"], [1, "card-body", "py-5"], [1, "icon", "icon-shape", "icon-shape-primary", "rounded-circle", "mb-4"], [1, "ni", "ni-check-bold"], [1, "text-primary", "text-uppercase"], [1, "description", "mt-3"], [1, "badge", "badge-pill", "badge-primary"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "mt-4"], [1, "icon", "icon-shape", "icon-shape-success", "rounded-circle", "mb-4"], [1, "ni", "ni-istanbul"], [1, "text-success", "text-uppercase"], [1, "badge", "badge-pill", "badge-success"], ["href", "javascript:void(0)", 1, "btn", "btn-success", "mt-4"], [1, "icon", "icon-shape", "icon-shape-warning", "rounded-circle", "mb-4"], [1, "ni", "ni-planet"], [1, "text-warning", "text-uppercase"], [1, "badge", "badge-pill", "badge-warning"], ["href", "javascript:void(0)", 1, "btn", "btn-warning", "mt-4"], [1, "section", "section-lg"], [1, "row", "row-grid", "align-items-center"], [1, "col-md-6", "order-md-2"], ["src", "./assets/img/theme/promo-1.png", 1, "img-fluid", "floating"], [1, "col-md-6", "order-md-1"], [1, "pr-md-5"], [1, "icon", "icon-lg", "icon-shape", "icon-shape-success", "shadow", "rounded-circle", "mb-5"], [1, "ni", "ni-settings-gear-65"], [1, "list-unstyled", "mt-5"], [1, "py-2"], [1, "d-flex", "align-items-center"], [1, "badge", "badge-circle", "badge-success", "mr-3"], [1, "mb-0"], [1, "ni", "ni-html5"], [1, "ni", "ni-satisfied"], [1, "section", "bg-secondary"], [1, "col-md-6"], [1, "card", "bg-default", "shadow", "border-0"], ["src", "./assets/img/theme/img-1-1200x1000.jpg", 1, "card-img-top"], [1, "card-blockquote"], ["preserveAspectRatio", "none", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 583 95", 1, "svg-bg"], ["points", "0,52 583,95 0,95", 1, "fill-default"], ["points", "0,42 583,95 683,0 0,95", "opacity", ".2", 1, "fill-default"], [1, "display-3", "font-weight-bold", "text-white"], [1, "lead", "text-italic", "text-white"], [1, "pl-md-5"], [1, "icon", "icon-lg", "icon-shape", "icon-shape-warning", "shadow", "rounded-circle", "mb-5"], [1, "ni", "ni-settings"], [1, "lead"], ["href", "javascript:void(0)", 1, "font-weight-bold", "text-warning", "mt-5"], [1, "section", "pb-0", "bg-gradient-warning"], [1, "col-md-6", "order-lg-2", "ml-lg-auto"], [1, "position-relative", "pl-md-5"], ["src", "./assets/img/ill/ill-2.svg", 1, "img-center", "img-fluid"], [1, "col-lg-6", "order-lg-1"], [1, "d-flex", "px-3"], [1, "icon", "icon-lg", "icon-shape", "bg-gradient-white", "shadow", "rounded-circle", "text-primary"], [1, "ni", "ni-building", "text-primary"], [1, "pl-4"], [1, "text-white"], [1, "card", "shadow", "shadow-lg--hover", "mt-5"], [1, "card-body"], [1, "icon", "icon-shape", "bg-gradient-success", "rounded-circle", "text-white"], [1, "title", "text-success"], ["href", "javascript:void(0)", 1, "text-success"], [1, "icon", "icon-shape", "bg-gradient-warning", "rounded-circle", "text-white"], [1, "ni", "ni-active-40"], [1, "title", "text-warning"], ["href", "javascript:void(0)", 1, "text-warning"], [1, "separator", "separator-bottom", "separator-skew", "zindex-100"], [1, "row", "justify-content-center", "text-center", "mb-lg"], [1, "col-lg-8"], [1, "display-3"], [1, "lead", "text-muted"], [1, "col-md-6", "col-lg-3", "mb-5", "mb-lg-0"], [1, "px-4"], ["src", "./assets/img/theme/team-1-800x800.jpg", 1, "rounded-circle", "img-center", "img-fluid", "shadow", "shadow-lg--hover", 2, "width", "200px"], [1, "pt-4", "text-center"], [1, "title"], [1, "d-block", "mb-1"], [1, "h6", "text-muted"], [1, "mt-3"], ["href", "javascript:void(0)", 1, "btn", "btn-warning", "btn-icon-only", "rounded-circle"], [1, "fa", "fa-twitter"], [1, "fa", "fa-facebook"], [1, "fa", "fa-dribbble"], ["src", "./assets/img/theme/team-2-800x800.jpg", 1, "rounded-circle", "img-center", "img-fluid", "shadow", "shadow-lg--hover", 2, "width", "200px"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "btn-icon-only", "rounded-circle"], ["src", "./assets/img/theme/team-3-800x800.jpg", 1, "rounded-circle", "img-center", "img-fluid", "shadow", "shadow-lg--hover", 2, "width", "200px"], ["href", "javascript:void(0)", 1, "btn", "btn-info", "btn-icon-only", "rounded-circle"], ["src", "./assets/img/theme/team-4-800x800.jpg", 1, "rounded-circle", "img-center", "img-fluid", "shadow", "shadow-lg--hover", 2, "width", "200px"], ["href", "javascript:void(0)", 1, "btn", "btn-success", "btn-icon-only", "rounded-circle"], [1, "section", "section-lg", "pt-0"], [1, "card", "bg-gradient-warning", "shadow-lg", "border-0"], [1, "p-5"], [1, "row", "align-items-center"], [1, "lead", "text-white", "mt-3"], [1, "col-lg-3", "ml-lg-auto"], ["href", "https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page", 1, "btn", "btn-lg", "btn-block", "btn-white"], [1, "section", "section-lg", "bg-gradient-default"], [1, "container", "pt-lg", "pb-300"], [1, "row", "text-center", "justify-content-center"], [1, "col-lg-10"], [1, "row", "row-grid", "mt-5"], [1, "ni", "ni-settings", "text-primary"], [1, "text-white", "mt-3"], [1, "ni", "ni-ruler-pencil", "text-primary"], [1, "ni", "ni-atom", "text-primary"], [1, "section", "section-lg", "pt-lg-0", "section-contact-us"], [1, "row", "justify-content-center", "mt--300"], [1, "card", "bg-gradient-secondary", "shadow"], [1, "card-body", "p-lg-5"], [1, "mb-1"], [1, "mt-0"], [1, "form-group", "mt-5", 3, "ngClass"], [1, "input-group", "input-group-alternative"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "ni", "ni-user-run"], ["placeholder", "Your name", "type", "text", 1, "form-control", 3, "focus", "blur"], [1, "form-group", 3, "ngClass"], [1, "ni", "ni-email-83"], ["placeholder", "Email address", "type", "email", 1, "form-control", 3, "focus", "blur"], [1, "form-group", "mb-4"], ["name", "name", "rows", "4", "cols", "80", "placeholder", "Type a message...", 1, "form-control", "form-control-alternative"], ["type", "button", 1, "btn", "btn-default", "btn-round", "btn-block", "btn-lg"], [1, "row", "row-grid", "justify-content-center"], [1, "col-lg-8", "text-center"], [1, "text-success"], ["href", "https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page", 1, "btn", "btn-primary", "mb-3", "mb-sm-0"], [1, "text-center"], [1, "display-4", "mb-5", "mt-5"], [1, "col-lg-2", "col-4"], ["href", "https://www.creative-tim.com/product/argon-design-system?ref=adsa-landing-page", "target", "_blank", "placement", "top", "ngbTooltip", "Bootstrap 4 - Most popular front-end component library"], ["src", "https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg", 1, "img-fluid"], ["href", "https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page", "target", "_blank", "placement", "top", "ngbTooltip", "Angular - One framework. Mobile & desktop"], ["src", "https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg", 1, "img-fluid"], ["href", "https://www.creative-tim.com/product/vue-argon-design-system?ref=adsa-landing-page", "target", "_blank", "placement", "top", "ngbTooltip", "Vue.js - The progressive javascript framework"], ["src", "https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg", 1, "img-fluid"], ["href", "https://www.sketchapp.com/?ref=creative-tim", "target", "_blank", "placement", "top", "ngbTooltip", "[Coming Soon] Sketch - Digital design toolkit"], ["src", "https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg", 1, "img-fluid", "opacity-3"], ["href", "https://www.adobe.com/products/photoshop.html?ref=creative-tim", "target", "_blank", "placement", "top", "ngbTooltip", "[Coming Soon] Adobe Photoshop - Software for digital images manipulation"], ["src", "https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg", 1, "img-fluid", "opacity-3"], ["href", "https://reactjs.org/?ref=creative-tim", "target", "_blank", "placement", "top", "ngbTooltip", "[Coming Soon] React - A JavaScript library for building user interfaces"], ["src", "https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg", 1, "img-fluid", "opacity-3"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "A beautiful Design System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "completed with examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "The design system comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Download Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "polygon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h6", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Download Argon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Argon is a great free UI package based on Angular that includes the most important components and features.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "ng-bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "h6", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Build Something");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Argon is a great free UI package based on Angular that includes the most important components and features.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "vision");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Prepare Launch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Argon is a great free UI package based on Angular that includes the most important components and features.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "launch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "section", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](104, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Awesome features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "ul", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](114, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Carefully crafted components");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](122, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "Amazing page examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](130, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Super friendly support team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "section", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](139, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "blockquote", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "svg", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](142, "polygon", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](143, "polygon", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "h4", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "Design System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](151, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Our customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "p", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "A beautiful UI Kit for impactful websites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "section", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](167, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](172, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "Modern Interface");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "p", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](183, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "h5", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "Awesome Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "a", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](196, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "h5", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "Modular Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "a", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](206, "polygon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "section", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "h2", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "The amazing Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](218, "img", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "h5", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "Ryan Tompson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "small", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "Web Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](227, "i", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](229, "i", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](231, "i", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](234, "img", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "h5", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, "Romina Hadid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "small", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, "Marketing Strategist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "a", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](243, "i", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "a", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](245, "i", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "a", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](247, "i", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](250, "img", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "h5", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](254, "Alexander Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "small", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](256, "UI/UX Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](259, "i", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](261, "i", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](263, "i", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](266, "img", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "h5", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "small", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "Founder and CEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](275, "i", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](277, "i", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](279, "i", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "section", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "h3", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287, "We made website building easier for you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "p", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](289, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "a", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](292, "Download Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "section", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](298, "Build something");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](300, "According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](304, "i", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "h5", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](306, "Building tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "p", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](308, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](311, "i", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "h5", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](313, "Grow your market");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "p", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](315, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](318, "i", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "h5", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](320, "Launch time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "p", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](322, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](323, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](325, "polygon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](326, "section", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "div", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "div", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "h4", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](333, "Want to work with us?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "p", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](335, "Your project is very important to us.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "div", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "span", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](340, "i", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "input", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("focus", function LandingComponent_Template_input_focus_341_listener() { return ctx.focus = true; })("blur", function LandingComponent_Template_input_blur_341_listener() { return ctx.focus = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "div", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "div", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "span", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](346, "i", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](347, "input", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("focus", function LandingComponent_Template_input_focus_347_listener() { return ctx.focus1 = true; })("blur", function LandingComponent_Template_input_blur_347_listener() { return ctx.focus1 = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "div", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](349, "textarea", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](350, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](351, "button", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](352, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "section", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "div", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "div", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "h2", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](358, "Do you love this awesome ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "span", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](360, "Design System for Angular?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "p", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](362, "Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the Design System in Angular. Start a new project or give an old Angular project a new look!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](364, "a", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](365, "Download Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "div", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "h4", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](368, "Available on these technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](370, "div", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "a", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](372, "img", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "div", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](374, "a", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](375, "img", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "div", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](377, "a", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](378, "img", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "div", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](380, "a", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](381, "img", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](382, "div", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "a", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](384, "img", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](385, "div", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](386, "a", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](387, "img", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](336);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](2, _c0, ctx.focus === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](4, _c0, ctx.focus1 === true));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/locked/locked.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/locked/locked.component.ts ***!
  \***********************************************************/
/*! exports provided: LockedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockedComponent", function() { return LockedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");











function LockedComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class LockedComponent {
    constructor(formBuilder, route, router) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.submitted = false;
        this.hide = true;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    get f() {
        return this.loginForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        else {
            this.router.navigate(['/dashboard/main']);
        }
    }
}
LockedComponent.??fac = function LockedComponent_Factory(t) { return new (t || LockedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LockedComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LockedComponent, selectors: [["app-locked"]], decls: 28, vars: 4, consts: [[1, "limiter"], [1, "container-login100"], [1, "wrap-login100"], [1, "login100-form", "validate-form", 3, "formGroup", "ngSubmit"], [1, "login100-form-logo"], [1, "image"], ["src", "assets/images/usrbig.jpg", "alt", "User"], [1, "login100-form-title", "p-b-34", "p-t-27"], [1, "text-center"], [1, "txt1", "p-b-20"], [1, "form-group", "mb-3"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["matSuffix", "", 3, "click"], [4, "ngIf"], [1, "container-login100-form-btn", "p-t-30"], ["mat-flat-button", "", "color", "primary", 1, "login100-form-btn"], [1, "w-full", "p-t-15", "p-b-15", "text-center"], ["href", "#", 1, "txt1"], [1, "login100-more", 2, "background-image", "url('assets/images/pages/bg-01.png')"]], template: function LockedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LockedComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Emily Smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Locked ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LockedComponent_Template_mat_icon_click_17_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, LockedComponent_mat_error_19_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " Need Help? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.hide ? "visibility_off" : "visibility", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginForm.get("password").hasError("required"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvY2tlZC9sb2NrZWQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LockedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-locked',
                templateUrl: './locked.component.html',
                styleUrls: ['./locked.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/page404/page404.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/authentication/page404/page404.component.ts ***!
  \*************************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class Page404Component {
    constructor() { }
    ngOnInit() { }
}
Page404Component.??fac = function Page404Component_Factory(t) { return new (t || Page404Component)(); };
Page404Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 18, vars: 0, consts: [[1, "limiter"], [1, "container-login100"], [1, "wrap-login100"], [1, "login100-form"], [1, "error-header", "p-b-45"], [1, "error-subheader", "p-b-5"], [1, "error-subheader2", "p-b-5"], [1, "container-login100-form-btn", "p-t-30"], ["mat-flat-button", "", "color", "primary", 1, "login100-form-btn"], [1, "w-full", "p-t-15", "p-b-15", "text-center"], ["href", "#", 1, "txt1"], [1, "login100-more", 2, "background-image", "url('assets/images/pages/bg-03.png')"]], template: function Page404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " 404 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Looks Like You're Lost ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " The Page You Are Looking For Not Available! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Go To Home Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Need Help? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3BhZ2U0MDQvcGFnZTQwNC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Page404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page404',
                templateUrl: './page404.component.html',
                styleUrls: ['./page404.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/authentication/page500/page500.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/authentication/page500/page500.component.ts ***!
  \*************************************************************/
/*! exports provided: Page500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page500Component", function() { return Page500Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class Page500Component {
    constructor() { }
    ngOnInit() { }
}
Page500Component.??fac = function Page500Component_Factory(t) { return new (t || Page500Component)(); };
Page500Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Page500Component, selectors: [["app-page500"]], decls: 16, vars: 0, consts: [[1, "limiter"], [1, "container-login100"], [1, "wrap-login100"], [1, "login100-form"], [1, "error-header", "p-b-45"], [1, "error-subheader2", "p-b-5"], [1, "container-login100-form-btn", "p-t-30"], ["mat-flat-button", "", "color", "primary", 1, "login100-form-btn"], [1, "w-full", "p-t-15", "p-b-15", "text-center"], ["href", "#", 1, "txt1"], [1, "login100-more", 2, "background-image", "url('assets/images/pages/bg-03.png')"]], template: function Page500Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " 500 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Oops, Something went wrong. Please try after some times. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Go To Home Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Need Help? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3BhZ2U1MDAvcGFnZTUwMC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Page500Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page500',
                templateUrl: './page500.component.html',
                styleUrls: ['./page500.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/authentication/services/client.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/services/client.service.ts ***!
  \***********************************************************/
/*! exports provided: User, Client, Domain, Signup, Login, ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Domain", function() { return Domain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup", function() { return Signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/global.service */ "./src/app/authentication/services/global.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");








class User {
    constructor(id, username, full_name, email, user_subdomain, phone_number, group) {
        this.id = id;
        this.username = username;
        this.full_name = full_name;
        this.email = email;
        this.user_subdomain = user_subdomain;
        this.phone_number = phone_number;
        this.group = group;
    }
    static create(data) {
        return new User(data.id, data.username, data.full_name, data.email, data.user_subdomain, data.phone_number, data.group);
    }
    static getUser() {
        const userData = localStorage.getItem('tenant.user');
        if (userData) {
            console.log(JSON.parse(userData));
            return User.create(JSON.parse(userData));
        }
        return null;
    }
    static isUser() {
        const user = User.getUser();
        if (user === null) {
            return false;
        }
        return true;
    }
    static isStudent() {
        const user = User.getUser();
        if (user === null) {
            return false;
        }
        console.log(user);
        return user.group === 'STUDENT';
    }
    static isOwner() {
        const user = User.getUser();
        if (user === null) {
            return false;
        }
        return user.group === 'OWNER' || user.group === 'SCHOOL-SUPER-ADMIN';
    }
    static isParent() {
        const user = User.getUser();
        if (user === null) {
            return false;
        }
        return user.group === 'PARENT';
    }
    static isTeacher() {
        const user = User.getUser();
        if (user === null) {
            return false;
        }
        console.log(user.group);
        return user.group === 'TEACHER';
    }
    static isSchoolManager() {
        const user = User.getUser();
        if (user === null) {
            return false;
        }
        console.log(user.group);
        return user.group === 'SCHOOL-MANAGER';
    }
    static isReceptionist() {
        const user = User.getUser();
        if (user === null) {
            return false;
        }
        console.log(user.group);
        return user.group === 'RECEPTIONIST';
    }
    static isAccountant() {
        const user = User.getUser();
        if (user === null) {
            return false;
        }
        console.log(user.group);
        return user.group === 'ACCOUNTANT';
    }
    // ,'SCHOOL-SUPER-ADMIN', 'STUDENT', 'SCHOOL-MANAGER', 'HR-MANAGER', 'RECEPTIONIST', 'TEACHER', 'LIBRARIAN', 'PARENT', 'FRONT-DESK', 'ACCOUNTANT'
    static isHrManager() {
        const user = User.getUser();
        if (user === null) {
            return false;
        }
        console.log(user.group);
        return user.group === 'HR-MANAGER';
    }
    static isLibrarian() {
        const user = User.getUser();
        if (user === null) {
            return false;
        }
        console.log(user.group);
        return user.group === 'LIBRARIAN';
    }
    static isSuperAdmim() {
        const user = User.getUser();
        if (user === null) {
            return false;
        }
        console.log(user.group);
        return user.group === 'SCHOOL-SUPER-ADMIN';
    }
}
class Client {
    constructor(id, schema_name, name, description, created_on) {
        this.id = id;
        this.schema_name = schema_name;
        this.name = name;
        this.description = description;
        this.created_on = created_on;
    }
}
class Domain {
    constructor(id, domain, is_primary, tenant) {
        this.id = id;
        this.domain = domain;
        this.is_primary = is_primary;
        this.tenant = tenant;
    }
}
class Signup {
    constructor(id, domain, full_name, username, email_address, 
    // public user_subdomain?: string,
    phone_number, password1, password2, group) {
        this.id = id;
        this.domain = domain;
        this.full_name = full_name;
        this.username = username;
        this.email_address = email_address;
        this.phone_number = phone_number;
        this.password1 = password1;
        this.password2 = password2;
        this.group = group;
    }
}
class Login {
    constructor(id, user_subdomain, role, username, password) {
        this.id = id;
        this.user_subdomain = user_subdomain;
        this.role = role;
        this.username = username;
        this.password = password;
    }
}
class ClientService {
    constructor(http, globalService) {
        this.http = http;
        this.globalService = globalService;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this.DOMAIN_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].clientapiUrl;
        this.PROTOCOL = "http://";
        this.baseurl = this.API_URL;
        this.domainurl = this.DOMAIN_URL;
        this.protocol = this.PROTOCOL;
    }
    createClient(schema_name, name, description) {
        const url = this.baseurl + '/api/client/';
        const formData = new FormData();
        formData.append('schema_name', schema_name);
        formData.append('name', name);
        formData.append('description', description);
        return this.http.request('POST', url, { body: formData });
    }
    createDomain(domain, is_primary, tenant) {
        const url = this.baseurl + '/api/client/domain/';
        const formData = new FormData();
        formData.append('domain', domain);
        formData.append('is_primary', is_primary);
        formData.append('tenant', tenant);
        return this.http.request('POST', url, { body: formData });
    }
    schoolSuperAdminSignup(
    // domain: string,
    full_name, email_address, 
    // user_subdomain: string,
    phone_number, password1, password2, group) {
        const url = this.baseurl + '/api/create_user_by_tech_oga/';
        // const url = 'http://' + domain +'/create_user_by_tech_oga/';
        const formData = new FormData();
        formData.append('username', email_address);
        formData.append('email_address', email_address);
        formData.append('full_name', full_name);
        formData.append('phone_number', phone_number),
            formData.append('password1', password1);
        formData.append('password2', password2);
        formData.append('group', group);
        return this.http.request('POST', url, { body: formData });
    }
    studentUserSignup(domain, full_name, email_address, 
    // user_subdomain: string,
    phone_number, password1, password2, group) {
        // const url = this.baseurl + '/create_user_by_tech_oga/';
        const url = 'http://' + domain + '.localhost/api/create_user_by_tech_oga/';
        const formData = new FormData();
        formData.append('username', email_address);
        formData.append('email', email_address);
        formData.append('full_name', full_name);
        formData.append('phone_number', phone_number),
            formData.append('password1', password1);
        formData.append('password2', password2);
        formData.append('group', group);
        return this.http.request('POST', url, { body: formData });
    }
    filterUserSubDomain(username) {
        // const url = this.baseurl + '/create_user_by_tech_oga/';
        const url = this.baseurl + '/api/users/?username=' + username;
        // const formData = new FormData();
        // formData.append('username', username);
        return this.http.request('GET', url);
    }
    ownerLogIn(username, password) {
        const url = this.baseurl + '/api/login/';
        return this.http.post(url, { username, password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(user => localStorage.setItem('tenant.user', JSON.stringify(user))));
    }
    usersLogIn(sub_domain, username, password) {
        // const url = this.baseurl + '/login/';
        const url = this.PROTOCOL + sub_domain + '.localhost/api/login/';
        console.log("doesnt work");
        return this.http.post(url, { username, password }, { headers: this.globalService.headers() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(user => localStorage.setItem('tenant.user', JSON.stringify(user.data))));
    }
    editUserSubdomain(user_id, user_subdomain) {
        const url = this.baseurl + '/api/updateOwnerSubDomain/' + user_id;
        const formData = new FormData();
        formData.append('user_subdomain', user_subdomain);
        return this.http.request('PUT', url, { body: formData });
    }
    logOut() {
        const url = '/api/log_out/';
        return this.http.post(url, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => localStorage.removeItem('tenant.user')));
    }
}
ClientService.??fac = function ClientService_Factory(t) { return new (t || ClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"])); };
ClientService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: ClientService, factory: ClientService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](ClientService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/services/global.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/services/global.service.ts ***!
  \***********************************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






class GlobalService {
    constructor(cookieService) {
        this.cookieService = cookieService;
        this.apiHost = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.DOMAIN_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].clientapiUrl;
        this.PROTOCOL = "http://";
        this.baseurl = this.apiHost;
        this.domainurl = this.DOMAIN_URL;
        this.protocol = this.PROTOCOL;
        this.API_URL = 'http://127.0.0.1:8000/';
        this.httpHeaders = { 'Content-Type': 'application/json' };
    }
    headers() {
        const token = this.getToken();
        if (token !== '') {
            this.httpHeaders['Authorization'] = 'Token ' + token;
        }
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](this.httpHeaders);
    }
    setToken(token) {
        this.cookieService.set('ATN', token);
    }
    isAuthenticated() {
        const token = this.getToken();
        return token === '' ? false : true;
    }
    getToken() {
        return this.cookieService.get('ATN');
    }
}
GlobalService.??fac = function GlobalService_Factory(t) { return new (t || GlobalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"])); };
GlobalService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: GlobalService, factory: GlobalService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GlobalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/signin/signin.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/signin/signin.component.ts ***!
  \***********************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
















class SigninComponent {
    constructor(formBuilder, route, router, globalService, clientService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.globalService = globalService;
        this.clientService = clientService;
        this.login = new _services_client_service__WEBPACK_IMPORTED_MODULE_2__["Login"]();
        this.submitted = false;
        this.hide = true;
        route.params.subscribe(params => { this.domain = params['id']; });
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            user_subdomain: [''],
            username: [''],
            password: [''],
            role: [''],
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    get f() {
        return this.loginForm.controls;
    }
    logIn() {
        this.clientService.usersLogIn('dammy', this.login.username, this.login.password).subscribe((res) => {
            console.log(this.login.role);
            this.globalService.setToken(res['token']);
            this.router.navigateByUrl('/dashboard/main');
            // this.router.navigateByUrl(`${this.login.user_subdomain}` + '/'+ `${this.login.role}` + '/' + 'dashboard');
            console.log(res);
            // console.log(res.data.id);
            console.log("successfully logged in");
            this.success = res;
            // this.success = "Your super admin account has been successfully created"
        }, (error) => {
            console.error(error);
            console.error(error.error.__all__[0]);
            this.error = error.error.__all__[0];
        });
    }
}
SigninComponent.??fac = function SigninComponent_Factory(t) { return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"])); };
SigninComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], decls: 66, vars: 3, consts: [[1, "limiter"], [1, "container-login100"], [1, "wrap-login100"], [1, "login100-form", "validate-form", 3, "ngSubmit"], ["f", "ngForm"], [1, "login100-form-title", "pb-5"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "name", "username", 3, "ngModel", "ngModelChange"], ["matSuffix", ""], [1, "col-xl-12col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["matInput", "", "type", "password", "name", "password", 3, "ngModel", "ngModelChange"], ["name", "role", 3, "ngModel", "ngModelChange"], ["value", "parent"], ["value", "student"], ["value", "super-admin"], ["value", "school-manager"], ["value", "teacher"], ["value", "librarian"], [1, "flex-sb-m", "w-full", "p-t-15", "p-b-20"], [1, "form-check"], [1, "form-check-label"], ["type", "checkbox", "value", "", 1, "form-check-input"], [1, "form-check-sign"], [1, "check"], ["routerLink", "/authentication/forgot-password", 1, "txt1"], [1, "container-login100-form-btn"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "login100-form-btn"], [1, "text-center", "p-t-30", "p-b-20"], [1, "txt3"], ["routerLink", "/authentication/signup"], [1, "login100-form-social", "flex-c-m"], ["href", "#", 1, "login100-form-social-item", "flex-c-m", "bg1", "m-r-5"], [1, "fab", "fa-facebook-f"], ["href", "#", 1, "login100-form-social-item", "flex-c-m", "bg2", "m-r-5"], [1, "fab", "fa-twitter"], [1, "login100-more", 2, "background-image", "url('assets/images/pages/bg-01.png')"]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_3_listener() { return ctx.logIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function SigninComponent_Template_input_ngModelChange_12_listener($event) { return ctx.login.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function SigninComponent_Template_input_ngModelChange_20_listener($event) { return ctx.login.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "vpn_key");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function SigninComponent_Template_mat_select_ngModelChange_28_listener($event) { return ctx.login.role = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Parent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Super Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "School Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Librarian");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " Remember me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " sign up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.login.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.login.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.login.role);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SigninComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signin',
                templateUrl: './signin.component.html',
                styleUrls: ['./signin.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }, { type: _services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/signup/signup.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.ts ***!
  \***********************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");











function SignupComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Username is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function SignupComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function SignupComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function SignupComponent_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Confirm Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class SignupComponent {
    constructor(formBuilder, route, router) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.submitted = false;
        this.hide = true;
        this.chide = true;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]
            ],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    get f() {
        return this.loginForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        else {
            this.router.navigate(['/dashboard/main']);
        }
    }
}
SignupComponent.??fac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SignupComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 52, vars: 9, consts: [[1, "limiter"], [1, "container-login100"], [1, "wrap-login100"], [1, "login100-form", "validate-form", 3, "formGroup", "ngSubmit"], [1, "login100-form-title", "p-b-30"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "username", "required", ""], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "formControlName", "email", "required", ""], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["matSuffix", "", 3, "click"], ["matInput", "", "formControlName", "cpassword", "required", "", 3, "type"], [1, "flex-sb-m", "w-full", "p-t-15", "p-b-20"], ["routerLink", "/authentication/signin"], [1, "container-login100-form-btn"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "login100-form-btn"], [1, "text-center", "p-t-30", "p-b-20"], [1, "txt2"], [1, "login100-form-social", "flex-c-m"], ["href", "#", 1, "login100-form-social-item", "flex-c-m", "bg1", "m-r-5"], [1, "fab", "fa-facebook-f"], ["href", "#", 1, "login100-form-social-item", "flex-c-m", "bg2", "m-r-5"], [1, "fab", "fa-twitter"], [1, "login100-more", 2, "background-image", "url('assets/images/pages/bg-02.png')"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, SignupComponent_mat_error_12_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, SignupComponent_mat_error_19_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SignupComponent_Template_mat_icon_click_24_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, SignupComponent_mat_error_26_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SignupComponent_Template_mat_icon_click_31_listener() { return ctx.chide = !ctx.chide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, SignupComponent_mat_error_33_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Already Registered? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " or sign up using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginForm.get("username").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginForm.get("email").hasError("required") || ctx.loginForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.hide ? "visibility_off" : "visibility", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginForm.get("password").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx.chide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.chide ? "visibility_off" : "visibility", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginForm.get("cpassword").hasError("required"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/super-admin-signup/super-admin-signup.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/authentication/super-admin-signup/super-admin-signup.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SuperAdminSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperAdminSignupComponent", function() { return SuperAdminSignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/client.service */ "./src/app/authentication/services/client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function SuperAdminSignupComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r1.success, " ");
} }
const _c0 = function (a0) { return { "focused": a0 }; };
class Errors {
    constructor(schema_name, name, description, non_field_errors) {
        this.schema_name = schema_name;
        this.name = name;
        this.description = description;
        this.non_field_errors = non_field_errors;
    }
}
class SuperAdminSignupComponent {
    constructor(route, router, clientService) {
        this.route = route;
        this.router = router;
        this.clientService = clientService;
        this.schoolSuperAdminSignup = new _services_client_service__WEBPACK_IMPORTED_MODULE_1__["Signup"]();
        this.error = new Errors();
        this.success = '';
        route.params.subscribe(params => { this.schoolSuperAdminSignup.domain = params['id']; });
        this.schoolSuperAdminSignup.group = 'OWNER';
    }
    ngOnInit() {
    }
    schoolSuperadminSignup() {
        this.clientService.schoolSuperAdminSignup(
        // this.schoolSuperAdminSignup.domain,
        this.schoolSuperAdminSignup.full_name, this.schoolSuperAdminSignup.email_address, this.schoolSuperAdminSignup.phone_number, this.schoolSuperAdminSignup.password1, this.schoolSuperAdminSignup.password2, this.schoolSuperAdminSignup.group).subscribe((res) => {
            this.router.navigateByUrl('/login');
            console.log(res);
            console.log("successfully created");
            this.success = "Your super admin account has been successfully created";
        }, (error) => {
            console.error(error);
            this.error = error.error;
        });
    }
}
SuperAdminSignupComponent.??fac = function SuperAdminSignupComponent_Factory(t) { return new (t || SuperAdminSignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"])); };
SuperAdminSignupComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SuperAdminSignupComponent, selectors: [["app-super-admin-signup"]], decls: 68, vars: 21, consts: [[1, "section", "section-shaped", "section-lg"], [1, "shape", "shape-style-1", "bg-gradient-default"], [1, "container", "pt-lg-md"], [1, "row", "justify-content-center"], [1, "col-lg-5"], [1, "card", "bg-secondary", "shadow", "border-0"], [1, "card-header", "bg-white", "pb-5"], [1, "text-muted", "text-center", "mb-3"], [1, "card-body", "px-lg-5", "py-lg-5"], ["role", "form", 3, "ngSubmit"], ["f", "ngForm"], [4, "ngIf"], [1, "form-group", 3, "ngClass"], [1, "input-group", "input-group-alternative", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "ni", "ni-hat-3"], ["placeholder", "Full Name", "type", "text", "name", "full name", 1, "form-control", 3, "ngModel", "focus", "ngModelChange", "blur"], [1, "ni", "ni-email-83"], ["placeholder", "Email Address", "type", "email", "name", "email address", "required", "", 1, "form-control", 3, "ngModel", "focus", "ngModelChange", "blur"], ["placeholder", "Phone Number", "type", "text", "name", "Phone number", "required", "", 1, "form-control", 3, "ngModel", "focus", "ngModelChange", "blur"], [1, "input-group", "input-group-alternative"], [1, "ni", "ni-lock-circle-open"], ["placeholder", "Password", "type", "password", "name", "password one", 1, "form-control", 3, "ngModel", "focus", "blur", "ngModelChange"], ["placeholder", "Confirm Password", "type", "password", "name", "password two", 1, "form-control", 3, "ngModel", "focus", "blur", "ngModelChange"], [1, "row", "my-4"], [1, "col-12"], [1, "custom-control", "custom-control-alternative", "custom-checkbox"], ["id", "customCheckRegister", "type", "checkbox", 1, "custom-control-input"], ["for", "customCheckRegister", 1, "custom-control-label"], ["href", "javascript:void(0)"], [1, "text-center"], ["type", "submit", 1, "btn", "btn-primary", "mt-4"]], template: function SuperAdminSignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "form", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function SuperAdminSignupComponent_Template_form_ngSubmit_21_listener() { return ctx.schoolSuperadminSignup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, SuperAdminSignupComponent_span_24_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("focus", function SuperAdminSignupComponent_Template_input_focus_30_listener() { return ctx.focus = true; })("ngModelChange", function SuperAdminSignupComponent_Template_input_ngModelChange_30_listener($event) { return ctx.schoolSuperAdminSignup.full_name = $event; })("blur", function SuperAdminSignupComponent_Template_input_blur_30_listener() { return ctx.focus = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("focus", function SuperAdminSignupComponent_Template_input_focus_36_listener() { return ctx.focus1 = true; })("ngModelChange", function SuperAdminSignupComponent_Template_input_ngModelChange_36_listener($event) { return ctx.schoolSuperAdminSignup.email_address = $event; })("blur", function SuperAdminSignupComponent_Template_input_blur_36_listener() { return ctx.focus1 = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("focus", function SuperAdminSignupComponent_Template_input_focus_42_listener() { return ctx.focus1 = true; })("ngModelChange", function SuperAdminSignupComponent_Template_input_ngModelChange_42_listener($event) { return ctx.schoolSuperAdminSignup.phone_number = $event; })("blur", function SuperAdminSignupComponent_Template_input_blur_42_listener() { return ctx.focus1 = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("focus", function SuperAdminSignupComponent_Template_input_focus_48_listener() { return ctx.focus2 = true; })("blur", function SuperAdminSignupComponent_Template_input_blur_48_listener() { return ctx.focus2 = false; })("ngModelChange", function SuperAdminSignupComponent_Template_input_ngModelChange_48_listener($event) { return ctx.schoolSuperAdminSignup.password1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("focus", function SuperAdminSignupComponent_Template_input_focus_54_listener() { return ctx.focus2 = true; })("blur", function SuperAdminSignupComponent_Template_input_blur_54_listener() { return ctx.focus2 = false; })("ngModelChange", function SuperAdminSignupComponent_Template_input_ngModelChange_54_listener($event) { return ctx.schoolSuperAdminSignup.password2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "I agree to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "terms of the use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, " of this platform ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](11, _c0, ctx.focus === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.schoolSuperAdminSignup.full_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](13, _c0, ctx.focus1 === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.schoolSuperAdminSignup.email_address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](15, _c0, ctx.focus1 === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.schoolSuperAdminSignup.phone_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](17, _c0, ctx.focus2 === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.schoolSuperAdminSignup.password1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](19, _c0, ctx.focus2 === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.schoolSuperAdminSignup.password2);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3N1cGVyLWFkbWluLXNpZ251cC9zdXBlci1hZG1pbi1zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SuperAdminSignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-super-admin-signup',
                templateUrl: './super-admin-signup.component.html',
                styleUrls: ['./super-admin-signup.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=authentication-authentication-module.js.map