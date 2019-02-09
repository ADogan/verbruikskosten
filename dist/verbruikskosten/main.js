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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    max-width: 960px;\n  }\n  \n  .lh-condensed { line-height: 0.25; }\n  \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7RUFDbEI7O0VBRUEsZ0JBQWdCLGlCQUFpQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICB9XG4gIFxuICAubGgtY29uZGVuc2VkIHsgbGluZS1oZWlnaHQ6IDAuMjU7IH1cbiAgXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"py-2 text-center\">\n      <header class=\"blog-header py-3\">\n          <div class=\"row flex-nowrap justify-content-between align-items-center\">\n            <div class=\"col-4 pt-1\">\n            </div>\n            <div class=\"col-4 text-center\">\n              <nav class=\"navbar fixed-top navbar-light bg-light\">\n               <h2 class=\"navbar-brand\">Vebruikskosten:</h2>\n               Jaarlijks:   <b>{{  yearlyCostInEuros | currency:'EUR':true }}</b> Maandelijks: <b>{{ monthlyCostInEuros | currency:'EUR':true }}</b> Dagelijks:   <b>{{  dailyCostsInEuros | currency:'EUR':true }}</b>             \n              </nav>\n            </div>\n            <div class=\"col-4 d-flex justify-content-end align-items-center\">\n            </div>\n          </div>\n        </header>\n      </div>\n      <br />\n    <div class=\"row\">\n      <div class=\"col-md-8 order-md-1\">\n        <div class=\"card\" style=\"width: auto;\">\n            <div class=\"card-body\">\n        <form class=\"needs-validation\" novalidate>\n          <div class=\"row\">\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"usage\">Gebruik per dag</label>\n              <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Uren:</span>\n              </div>\n                <input type=\"number\" class=\"form-control\" min=\"0\" max=\"24\" id=\"usage\" name=\"usage\" [(ngModel)]=\"hoursOfUsageADay\" required (blur)=\"recalculateCosts()\">\n              </div>\n              <div class=\"invalid-feedback\">\n                usage is required.\n              </div>\n            </div>\n            <div class=\"col-md-6 mb-3\">\n                <label for=\"device_wattage\">Apparaatverbruik</label>\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">Watt</span>\n                  </div>\n                  <input type=\"number\" class=\"form-control\" min=\"0\" id=\"device_wattage\" name=\"device_wattage\" [(ngModel)]=\"deviceWattage\" required (blur)=\"recalculateCosts()\">\n                  <div class=\"invalid-feedback\" style=\"width: 100%;\">\n                    Device wattage is vereist.\n                  </div>\n                </div>\n            </div>\n          </div>\n  \n          <div class=\"mb-3\">                \n              <label for=\"pricekwh\">Electriciteitskosten</label>\n              <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">Eurocent per kWh</span>\n                  </div>\n                <input type=\"number\" class=\"form-control\" min=\"0\" id=\"pricekwh\" name=\"pricekwh\" [(ngModel)]=\"electricityCostOfKWhInCents\" required (blur)=\"recalculateCosts()\">\n              </div>\n              <div class=\"invalid-feedback\">\n                Electricity price is required.\n              </div>\n          </div>\n          <div class=\"mb-3\">\n              <button type=\"button\" class=\"btn btn-warning btn-lg btn-block\" (click)=\"nullifyAndRecalculate()\">Bereken kosten</button>\n          </div>\n        </form>\n        </div>\n        </div>\n      </div>\n\n       <!-- <div class=\"col-md-4 order-md-2 mb-4\">\n        <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\n          <span class=\"text-muted\">Devices list</span>\n          <span class=\"badge badge-secondary badge-pill\">3</span>\n        </h4>\n        <ul class=\"list-group mb-3\">\n          <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\n            <div>\n              <h6 class=\"my-0\">Product name</h6>\n              <small class=\"text-muted\">Brief description</small>\n            </div>\n            <span class=\"text-muted\">$12</span>\n          </li>\n          <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\n            <div>\n              <h6 class=\"my-0\">Second product</h6>\n              <small class=\"text-muted\">Brief description</small>\n            </div>\n            <span class=\"text-muted\">$8</span>\n          </li>\n          <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\n            <div>\n              <h6 class=\"my-0\">Third item</h6>\n              <small class=\"text-muted\">Brief description</small>\n            </div>\n            <span class=\"text-muted\">$5</span>\n          </li>\n          <li class=\"list-group-item d-flex justify-content-between bg-light\">\n            <div class=\"text-success\">\n              <h6 class=\"my-0\">Promo code</h6>\n              <small>EXAMPLECODE</small>\n            </div>\n            <span class=\"text-success\">-$5</span>\n          </li>\n          <li class=\"list-group-item d-flex justify-content-between\">\n            <span>Total (USD)</span>\n            <strong>$20</strong>\n          </li>\n        </ul>\n      </div> -->\n    </div>\n    \n<router-outlet></router-outlet>\n<footer class=\"my-5 pt-5 text-muted text-center text-small\">\n    <p class=\"\">Dit is een inschatting! <br />De werkelijke kosten kunnen verschillen.<br />(The calculation is an estimate!)</p>\n    \n    <p class=\"mb-1\">&copy; 2018 Verbruikskosten</p>\n    <!-- <ul class=\"list-inline\">\n      <li class=\"list-inline-item\"><a href=\"#\">Privacy</a></li>\n      <li class=\"list-inline-item\"><a href=\"#\">Terms</a></li>\n      <li class=\"list-inline-item\"><a href=\"#\">Support</a></li>\n    </ul> -->\n  </footer>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'verbruikskosten';
        this.hoursOfUsageADay = 4;
        this.electricityCostOfKWhInCents = 21;
        this.deviceWattage = 500;
        this.recalculateCosts();
    }
    AppComponent.prototype.nullifyAndRecalculate = function () {
        this.dailyCostsInEuros = 0;
        this.yearlyCostInEuros = 0;
        this.monthlyCostInEuros = 0;
        this.recalculateCosts();
    };
    AppComponent.prototype.recalculateCosts = function () {
        this.cleanupWrongInput();
        this.dailyCostsInEuros = this.getDailyCostInEuros();
        this.yearlyCostInEuros = this.getYearlyCost();
        this.monthlyCostInEuros = this.getMonthlyCostInEuros();
    };
    AppComponent.prototype.cleanupWrongInput = function () {
        this.parseInput(this.hoursOfUsageADay);
        if (this.hoursOfUsageADay <= 0) {
            this.hoursOfUsageADay = 1;
        }
        if (this.hoursOfUsageADay > 24) {
            this.hoursOfUsageADay = 24;
            alert('Hoeveel uren heb jij in een dag?! \nGebruik per dag wordt gewijzigd naar 24 uur.');
        }
        if (this.electricityCostOfKWhInCents <= 0) {
            this.electricityCostOfKWhInCents = 1;
        }
        if (this.deviceWattage <= 0) {
            this.deviceWattage = 1;
        }
    };
    AppComponent.prototype.parseInput = function (input) {
        var numbers = new RegExp(/^[0-9]+$/);
        if (!numbers.test(input)) {
            // parse input to a number;
            var parsed = Number.parseInt(input, 0);
            console.log(parsed);
            if (Number.isNaN(parsed)) {
                input = 1;
            }
        }
    };
    AppComponent.prototype.getYearlyCost = function () {
        var dailyCostInEuroCents = this.getDailyCostsInEuroCents();
        var averageDaysInYear = 365.25;
        var yearlyCostInEuroCents = dailyCostInEuroCents * averageDaysInYear;
        var yearlyCostInEuros = yearlyCostInEuroCents / 100;
        return yearlyCostInEuros;
    };
    AppComponent.prototype.getDailyCostsInEuroCents = function () {
        var dailyWh = this.deviceWattage * this.hoursOfUsageADay;
        var dailyKWh = dailyWh / 1000;
        return dailyKWh * this.electricityCostOfKWhInCents;
    };
    AppComponent.prototype.getDailyCostInEuros = function () {
        return this.getDailyCostsInEuroCents() / 100;
    };
    AppComponent.prototype.getMonthlyCostInEuros = function () {
        return this.yearlyCostInEuros / 12;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/intensae/Works_Projects/verbruikskosten/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map