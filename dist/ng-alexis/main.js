(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _app_services_event_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _app_services_ship_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/ship.service */ "./src/app/services/ship.service.ts");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _app_components_ships_ships_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/ships/ships.module */ "./src/app/components/ships/ships.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_components_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/shared/shared.module */ "./src/app/components/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _app_components_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes),
                _app_components_ships_ships_module__WEBPACK_IMPORTED_MODULE_6__["ShipModule"],
            ],
            providers: [
                _app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
                _services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"],
                _app_services_ship_service__WEBPACK_IMPORTED_MODULE_1__["ShipService"],
                _app_services_event_service__WEBPACK_IMPORTED_MODULE_0__["EventService"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/shared/shared.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/shared/shared.module.ts ***!
  \****************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            ],
            exports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            ],
            declarations: [],
            providers: [],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/components/ships/ships-component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/ships/ships-component.ts ***!
  \*****************************************************/
/*! exports provided: ShipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipsComponent", function() { return ShipsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShipsComponent = /** @class */ (function () {
    function ShipsComponent() {
    }
    ShipsComponent.prototype.ngOnInit = function () { };
    ShipsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ships',
            template: __webpack_require__(/*! ./ships.component.html */ "./src/app/components/ships/ships.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ShipsComponent);
    return ShipsComponent;
}());



/***/ }),

/***/ "./src/app/components/ships/ships-list/ships-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/ships/ships-list/ships-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\r\n    <li *ngFor=\"let ship of shipService.sideNavigationShips\">\r\n        {{ship.name}}\r\n    </li>\r\n</ul>\r\n\r\n<div>\r\n    Neka druga komponenta: Ship count: {{shipService.shipsCount}}\r\n</div>\r\n\r\n<div *ngIf=\"shipService.selectedShip\">\r\n    Neka treca komponenta: Selected ship: {{shipService.selectedShip.name}}\r\n</div>"

/***/ }),

/***/ "./src/app/components/ships/ships-list/ships-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/ships/ships-list/ships-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: ShipsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipsListComponent", function() { return ShipsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_ship_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/ship.service */ "./src/app/services/ship.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShipsListComponent = /** @class */ (function () {
    function ShipsListComponent(shipService) {
        this.shipService = shipService;
    }
    ShipsListComponent.prototype.ngOnInit = function () {
        this.shipService.loadSideNavigationShips();
    };
    ShipsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ships-list',
            template: __webpack_require__(/*! ./ships-list.component.html */ "./src/app/components/ships/ships-list/ships-list.component.html")
        }),
        __metadata("design:paramtypes", [_app_services_ship_service__WEBPACK_IMPORTED_MODULE_1__["ShipService"]])
    ], ShipsListComponent);
    return ShipsListComponent;
}());



/***/ }),

/***/ "./src/app/components/ships/ships-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/ships/ships-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ShipsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipsRoutingModule", function() { return ShipsRoutingModule; });
/* harmony import */ var _ships_list_ships_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships-list/ships-list.component */ "./src/app/components/ships/ships-list/ships-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_components_ships_ships_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/ships/ships-component */ "./src/app/components/ships/ships-component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'ships',
        component: _app_components_ships_ships_component__WEBPACK_IMPORTED_MODULE_3__["ShipsComponent"],
        children: [
            {
                path: 'list',
                component: _ships_list_ships_list_component__WEBPACK_IMPORTED_MODULE_0__["ShipsListComponent"],
            },
        ]
    },
];
var ShipsRoutingModule = /** @class */ (function () {
    function ShipsRoutingModule() {
    }
    ShipsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ShipsRoutingModule);
    return ShipsRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/ships/ships-sidebar/ships-sidebar.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/ships/ships-sidebar/ships-sidebar.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"my-fleet-sidebar\">\r\n    <li>\r\n        <a routerLink=\"/my-fleet\">\r\n            <i class=\"fa fa-tachometer-alt\"></i> My Fleet\r\n        </a>\r\n        <ul>\r\n            <li>\r\n                <a routerLink=\"ships\" routerLinkActive=\"active\" (click)=\"selectedShip = null\">All Ships <i class=\"carret fa fa-chevron-right\"></i></a>\r\n            </li>\r\n            <li *ngFor=\"let ship of shipService.sideNavigationShips; let i = index\">\r\n                <a routerLink=\"ship/{{ship.id}}\"  routerLinkActive=\"active\" \r\n                    (click)=\"shipService.setSelected(ship.id)\">{{ship.name}} \r\n                    <i class=\"carret fa fa-chevron-right\" [class.fa-chevron-down]=\"shipService.isSelected(ship.id)\" [class.fa-chevron-right]=\"!shipService.isSelected(ship.id)\"></i></a>\r\n                <ul class=\"sub-menu\" [class.open]=\"shipService.isSelected(ship.id)\">\r\n                    <li><a routerLink=\"ship/{{ship.id}}/details\" routerLinkActive=\"active\">Details</a></li>\r\n                    <li><a routerLink=\"ship/{{ship.id}}/equipment\" routerLinkActive=\"active\">Equipment</a></li>\r\n                    <li><a routerLink=\"ship/{{ship.id}}/tasks\" routerLinkActive=\"active\">Tasks</a></li>\r\n                    <li><a routerLink=\"ship/{{ship.id}}/reports\" routerLinkActive=\"active\">Service Reports</a></li>\r\n                    <li><a routerLink=\"ship/{{ship.id}}/documents\" routerLinkActive=\"active\">Technical Documentation</a></li>\r\n                    <li><a routerLink=\"ship/{{ship.id}}/bulletins\" routerLinkActive=\"active\">Related Bulletins</a></li>\r\n                </ul>\r\n              </li>\r\n        </ul>\r\n    </li>\r\n  </ul>\r\n  "

/***/ }),

/***/ "./src/app/components/ships/ships-sidebar/ships-sidebar.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/ships/ships-sidebar/ships-sidebar.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Application global variables.\r\n */\n@font-face {\n  font-family: \"HelveticaNeue\";\n  src: url(\"/assets/fonts/HelveticaNeue-45-Light.otf\") format(\"opentype\");\n  font-weight: 400;\n  font-style: normal; }\n@font-face {\n  font-family: \"HelveticaNeue\";\n  src: url(\"/assets/fonts/HelveticaNeue-46-Light-Italic.otf\") format(\"opentype\");\n  font-weight: 400;\n  font-style: italic; }\n@font-face {\n  font-family: \"HelveticaNeue\";\n  src: url(\"/assets/fonts/HelveticaNeue-65-Medium.otf\") format(\"opentype\");\n  font-weight: 500;\n  font-style: normal; }\n@font-face {\n  font-family: \"HelveticaNeue\";\n  src: url(\"/assets/fonts/HelveticaNeue-75-Bold.otf\") format(\"opentype\");\n  font-weight: 700;\n  font-style: normal; }\n.my-fleet-sidebar {\n  background: #F9F9F9;\n  list-style: none;\n  padding: 0;\n  transition: all .5s linear; }\n.my-fleet-sidebar > li > ul {\n  list-style: none;\n  padding: 0; }\n.my-fleet-sidebar > li > a {\n  background: #E3E3E3;\n  font-weight: 700;\n  padding: .5rem .5rem; }\n.my-fleet-sidebar > li > a i {\n  margin-right: .5rem; }\n.my-fleet-sidebar > li > ul > li > a {\n  padding-left: 1rem; }\n.my-fleet-sidebar > li > ul > li > a.active {\n  background: #F3F3F3;\n  font-weight: 500; }\n.my-fleet-sidebar > li > ul > li > ul {\n  padding: 0;\n  list-style: none;\n  background: #F3F3F3; }\n.my-fleet-sidebar > li > ul > li > ul li a {\n  padding-left: 2rem; }\n.my-fleet-sidebar > li > ul > li > ul li a.active {\n  padding-left: 2rem;\n  background: #E3E3E3; }\n.my-fleet-sidebar a {\n  display: block;\n  padding: .5rem 1rem;\n  color: #232323;\n  border-bottom: 1px solid #E3E3E3; }\n.my-fleet-sidebar a:hover {\n  text-decoration: none; }\n.carret {\n  float: right;\n  position: relative;\n  top: 2px;\n  color: #B0B0B0; }\n@-webkit-keyframes fadeIn {\n  from {\n    height: 0; }\n  to {\n    height: auto; } }\n@keyframes fadeIn {\n  from {\n    height: 0; }\n  to {\n    height: auto; } }\n@-webkit-keyframes fadeOut {\n  from {\n    height: auto; }\n  to {\n    height: 0; } }\n@keyframes fadeOut {\n  from {\n    height: auto; }\n  to {\n    height: 0; } }\n.hiding {\n  -webkit-animation: 2s linear fadeOut;\n          animation: 2s linear fadeOut;\n  overflow: hidden; }\n.showing {\n  -webkit-animation: 2s linear fadeIn;\n          animation: 2s linear fadeIn;\n  overflow: hidden; }\n.sub-menu {\n  overflow: hidden;\n  max-height: 0;\n  transition: all .4s ease-out; }\n.sub-menu.open {\n  max-height: 1000px;\n  transition: all .8s ease-in; }\n"

/***/ }),

/***/ "./src/app/components/ships/ships-sidebar/ships-sidebar.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/ships/ships-sidebar/ships-sidebar.component.ts ***!
  \***************************************************************************/
/*! exports provided: ShipsSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipsSidebarComponent", function() { return ShipsSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services_ship_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/ship.service */ "./src/app/services/ship.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShipsSidebarComponent = /** @class */ (function () {
    function ShipsSidebarComponent(router, route, shipService) {
        this.router = router;
        this.route = route;
        this.shipService = shipService;
    }
    ShipsSidebarComponent.prototype.ngOnInit = function () {
        this.shipService.loadSideNavigationShips();
    };
    ShipsSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ships-sidebar',
            template: __webpack_require__(/*! ./ships-sidebar.component.html */ "./src/app/components/ships/ships-sidebar/ships-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./ships-sidebar.component.scss */ "./src/app/components/ships/ships-sidebar/ships-sidebar.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' }))]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0' }))])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _app_services_ship_service__WEBPACK_IMPORTED_MODULE_3__["ShipService"]])
    ], ShipsSidebarComponent);
    return ShipsSidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/ships/ships.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/ships/ships.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ships-sidebar></ships-sidebar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/ships/ships.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/ships/ships.module.ts ***!
  \**************************************************/
/*! exports provided: ShipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipModule", function() { return ShipModule; });
/* harmony import */ var _app_components_ships_ships_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/components/ships/ships-component */ "./src/app/components/ships/ships-component.ts");
/* harmony import */ var _app_components_ships_ships_list_ships_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/ships/ships-list/ships-list.component */ "./src/app/components/ships/ships-list/ships-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_components_ships_ships_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/ships/ships-routing.module */ "./src/app/components/ships/ships-routing.module.ts");
/* harmony import */ var _app_components_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _app_components_ships_ships_sidebar_ships_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/ships/ships-sidebar/ships-sidebar.component */ "./src/app/components/ships/ships-sidebar/ships-sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ShipModule = /** @class */ (function () {
    function ShipModule() {
    }
    ShipModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _app_components_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _app_components_ships_ships_routing_module__WEBPACK_IMPORTED_MODULE_3__["ShipsRoutingModule"]
            ],
            exports: [
                _app_components_ships_ships_list_ships_list_component__WEBPACK_IMPORTED_MODULE_1__["ShipsListComponent"],
                _app_components_ships_ships_component__WEBPACK_IMPORTED_MODULE_0__["ShipsComponent"],
                _app_components_ships_ships_sidebar_ships_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["ShipsSidebarComponent"]
            ],
            declarations: [
                _app_components_ships_ships_list_ships_list_component__WEBPACK_IMPORTED_MODULE_1__["ShipsListComponent"],
                _app_components_ships_ships_component__WEBPACK_IMPORTED_MODULE_0__["ShipsComponent"],
                _app_components_ships_ships_sidebar_ships_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["ShipsSidebarComponent"]
            ],
            providers: [],
        })
    ], ShipModule);
    return ShipModule;
}());



/***/ }),

/***/ "./src/app/enums/events.enum.ts":
/*!**************************************!*\
  !*** ./src/app/enums/events.enum.ts ***!
  \**************************************/
/*! exports provided: Events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
var Events;
(function (Events) {
    Events[Events["SHIP_CREATED"] = 0] = "SHIP_CREATED";
    Events[Events["SHIP_UPDATED"] = 1] = "SHIP_UPDATED";
    Events[Events["SHIP_TRANSFERED"] = 2] = "SHIP_TRANSFERED";
    Events[Events["CUSTOMER_CHANGED"] = 3] = "CUSTOMER_CHANGED";
    Events[Events["CUSTOMER_CREATED"] = 4] = "CUSTOMER_CREATED";
})(Events || (Events = {}));


/***/ }),

/***/ "./src/app/model/search.model.ts":
/*!***************************************!*\
  !*** ./src/app/model/search.model.ts ***!
  \***************************************/
/*! exports provided: Order, PageableSearchRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageableSearchRequest", function() { return PageableSearchRequest; });
var Order = /** @class */ (function () {
    function Order() {
    }
    return Order;
}());

var PageableSearchRequest = /** @class */ (function () {
    function PageableSearchRequest() {
        this.pageNumber = 1;
        this.pageSize = 10;
        this.query = {};
        var order = new Order();
        this.orders = [];
        this.orders.push(order);
    }
    return PageableSearchRequest;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverUrl;
/**
 * This service should be inherited only by base service.
 */
var ApiService = /** @class */ (function () {
    function ApiService(injector) {
        var _this = this;
        this.injector = injector;
        this.requestNum = 0;
        this.showLoader = false;
        this.timeouts = [];
        this.http = injector.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'X-Requested-With': 'XMLHttpRequest',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT',
            'Accept-Language': 'en'
        });
        this.options = {
            headers: headers
        };
        setInterval(function () {
            if (_this.requestNum > 0) {
                var t = setTimeout(function () {
                    if (_this.requestNum > 0) {
                        _this.showLoader = true;
                    }
                }, 400);
                _this.timeouts.push(t);
            }
            else {
                if (_this.requestNum === 0) {
                    for (var i = 0; i < _this.timeouts.length; i++) {
                        clearTimeout(_this.timeouts[i]);
                    }
                    _this.timeouts = [];
                    _this.showLoader = false;
                }
            }
        }, 100);
    }
    ApiService.prototype.get = function (path, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.requestNum++;
                this.options['params'] = params;
                return [2 /*return*/, this.http
                        .get(API_URL + "/" + path, this.options)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { _this.requestNum--; return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return _this.handleError(err); })).toPromise()];
            });
        });
    };
    ApiService.prototype.post = function (path, data, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.requestNum++;
                this.options['params'] = params;
                return [2 /*return*/, this.http
                        .post(API_URL + "/" + path, data, this.options)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { _this.requestNum--; return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return _this.handleError(err); })).toPromise()];
            });
        });
    };
    ApiService.prototype.put = function (path, data, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.requestNum++;
                this.options['params'] = params;
                return [2 /*return*/, this.http
                        .put(API_URL + "/" + path, data, this.options)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { _this.requestNum--; return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return _this.handleError(err); })).toPromise()];
            });
        });
    };
    ApiService.prototype.delete = function (path, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.requestNum++;
                this.options['params'] = params;
                return [2 /*return*/, this.http
                        .delete(API_URL + "/" + path, this.options)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { _this.requestNum--; return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return _this.handleError(err); })).toPromise()];
            });
        });
    };
    ApiService.prototype.handleError = function (error) {
        console.log('ApiService::handleError: ', error);
        this.requestNum--;
        switch (error.status) {
            case 401:
                // Show modal
                break;
            case 403:
                // Show modal
                break;
            case 500:
                // Show modal
                break;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/base.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/base.service.ts ***!
  \******************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_model_search_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/model/search.model */ "./src/app/model/search.model.ts");
/* harmony import */ var _app_services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/event.service */ "./src/app/services/event.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * This is base service for all API calls. No API call should be done outside this service.
 */
var BaseService = /** @class */ (function (_super) {
    __extends(BaseService, _super);
    function BaseService(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.eventService = injector.get(_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]);
        return _this;
    }
    BaseService.prototype.search = function (searchRequest) {
        if (!searchRequest) {
            searchRequest = new _app_model_search_model__WEBPACK_IMPORTED_MODULE_2__["PageableSearchRequest"]();
        }
        return this.post(this.route + "/search", searchRequest);
    };
    BaseService.prototype.get = function (id) {
        return this.get(this.route + "/" + id);
    };
    BaseService.prototype.update = function (id, payload) {
        return this.put(this.route + "/" + id, payload);
    };
    BaseService.prototype.create = function (payload) {
        return this.post("" + this.route, payload);
    };
    BaseService.prototype.remove = function (id) {
        return this.delete(this.route + "/" + id);
    };
    BaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], BaseService);
    return BaseService;
}(_api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]));



/***/ }),

/***/ "./src/app/services/event.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EventService = /** @class */ (function () {
    function EventService() {
        this.eventSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.eventSource$ = this.eventSource.asObservable();
    }
    EventService.prototype.sendEvent = function (eventType, data) {
        if (data === void 0) { data = null; }
        this.eventSource.next({
            eventType: eventType,
            data: data
        });
    };
    EventService.prototype.subscribe = function (eventType, callback) {
        this.eventSource$.subscribe(function (event) {
            if (event.eventType === eventType) {
                callback(event);
            }
        });
    };
    EventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/services/ship.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/ship.service.ts ***!
  \******************************************/
/*! exports provided: ShipService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipService", function() { return ShipService; });
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_enums_events_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/enums/events.enum */ "./src/app/enums/events.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ShipService = /** @class */ (function (_super) {
    __extends(ShipService, _super);
    function ShipService(injector) {
        var _this = _super.call(this, injector) || this;
        _this.route = 'ships';
        _this.subscribe();
        return _this;
    }
    Object.defineProperty(ShipService.prototype, "shipsCount", {
        get: function () {
            return this.sideNavigationShips !== undefined ? this.sideNavigationShips.length : 0;
        },
        enumerable: true,
        configurable: true
    });
    ShipService.prototype.setSelected = function (shipId) {
        this._selectedShip = this.sideNavigationShips.filter(function (s) { return s.id == shipId; })[0];
    };
    Object.defineProperty(ShipService.prototype, "selectedShip", {
        get: function () {
            if (this.sideNavigationShips == undefined) {
                return undefined;
            }
            return this._selectedShip != undefined ? this._selectedShip : this.sideNavigationShips[0];
        },
        enumerable: true,
        configurable: true
    });
    ShipService.prototype.isSelected = function (shipId) {
        return this.selectedShip.id == shipId;
    };
    ShipService.prototype.loadSideNavigationShips = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.search()];
                    case 1:
                        _a.sideNavigationShips = (_b.sent()).data.result;
                        return [2 /*return*/];
                }
            });
        });
    };
    ShipService.prototype.loadShip = function (shipId) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.get(shipId)];
                    case 1:
                        _a.currentShip = (_b.sent()).data;
                        return [2 /*return*/];
                }
            });
        });
    };
    ShipService.prototype.createShip = function (ship) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.create(ship)];
                    case 1:
                        _a.sent();
                        this.loadSideNavigationShips();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShipService.prototype.updateShip = function (id, ship) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.update(id, ship)];
                    case 1:
                        _a.sent();
                        this.loadShip(id);
                        return [2 /*return*/];
                }
            });
        });
    };
    ShipService.prototype.changeShipStatus = function (id, cmd) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.put("ships/status", cmd)];
                    case 1:
                        _a.sent();
                        this.loadShip(id);
                        return [2 /*return*/];
                }
            });
        });
    };
    /************************* Subscribe to events *************************/
    ShipService.prototype.subscribe = function () {
        var _this = this;
        this.eventService.subscribe(_app_enums_events_enum__WEBPACK_IMPORTED_MODULE_2__["Events"].CUSTOMER_CHANGED, function () {
            _this.loadSideNavigationShips();
        });
    };
    ShipService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], ShipService);
    return ShipService;
}(_base_service__WEBPACK_IMPORTED_MODULE_0__["BaseService"]));



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    serverUrl: 'http://localhost:47858/api',
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Visual Studio Online\NgAlexis\ng-alexis\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map