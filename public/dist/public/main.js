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

module.exports = "h3, button{\n    display:inline-block;\n    vertical-align: middle;\n}\nlabel, input {\n    display:block;\n}\n.container{\n    border:2px solid red;\n    width:300px;\n    margin-bottom:15px;\n}\n.custom0 {\n    background-color:rgb(32,37,41);\n    color:white;\n\n}\nbutton {\n    margin:10px 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLFdBQVc7O0FBRWY7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzLCBidXR0b257XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbmxhYmVsLCBpbnB1dCB7XG4gICAgZGlzcGxheTpibG9jaztcbn1cbi5jb250YWluZXJ7XG4gICAgYm9yZGVyOjJweCBzb2xpZCByZWQ7XG4gICAgd2lkdGg6MzAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbToxNXB4O1xufVxuLmN1c3RvbTAge1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDMyLDM3LDQxKTtcbiAgICBjb2xvcjp3aGl0ZTtcblxufVxuYnV0dG9uIHtcbiAgICBtYXJnaW46MTBweCAwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='custom0'>\n\n  <label>Pitter's Calculator</label>\n\n  <div class='container'>\n    <h1>Add a User</h1>\n    <form (submit)=\"createUser()\">\n      <label>Name</label>\n      <input type='text' name='newUser.name' [(ngModel)]='newUser.name'>\n      <button class=\"btn btn-primary\" type='submit'>Add</button>\n    </form>\n  </div>\n\n  <div class='container' *ngFor=\"let x of allUsers\">\n    <h3>Add Item for {{x.name}}</h3>\n    <button class=\"btn btn-danger\" (click)=\"deleteUser(x._id)\">Delete</button>\n    <form (submit)=\"addItem(x._id,newItem,newPrice)\">\n      <label>Item Name</label>\n      <input type='text' name='newItem.item' #newItem>\n      <label>Item Price</label>\n      <input type='text' name='newItem.price' #newPrice>\n      <button type='submit' class=\"btn btn-primary\">Add Item</button>\n    </form>\n    <table class=\"table table-dark\">\n      <thead>\n        <tr>\n          <th>Item</th>\n          <th>Price</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let y of x.items\">\n          <td>{{y.item}}</td>\n          <td>{{y.price}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class='container'>\n    <h3>Sales Tax</h3>\n    <input type=\"text\" name=\"salesTax.number\" [(ngModel)]=\"salesTax.number\">\n    <h3>Tip Total</h3>\n    <input type=\"text\" name=\"tip.number\" [(ngModel)]=\"tip.number\">\n    <button class=\"btn btn-success\" (click)=\"calculate()\">Calculate!</button>\n  </div>\n  <div class='container' *ngIf=\"showBreakdown == true\">\n    <table class=\"table table-dark\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Owes with Tax and Tip</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let x of allUsers\">\n          <td>{{x.name}}</td>\n          <td>{{x.userSum}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.salesTax = { number: 0.00 };
        this.tip = { number: 0.00 };
        this.subtotal = 0.00;
        this.showBreakdown = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.newUser = { name: "", items: [] };
        this.newItem = { item: "", price: 0.00 };
        this.allUsers = [];
        this.getAllUsers();
    };
    AppComponent.prototype.getAllUsers = function () {
        var _this = this;
        var observable = this._httpService.getPrimaries();
        observable.subscribe(function (data) {
            _this.allUsers = data['data'];
        });
    };
    AppComponent.prototype.createUser = function () {
        var _this = this;
        var observable = this._httpService.addNew(this.newUser);
        observable.subscribe(function (data) {
            console.log(data);
            _this.newUser = { name: "", items: [] };
            _this.getAllUsers();
        });
    };
    AppComponent.prototype.addItem = function (userId, newItem, newPrice) {
        var _this = this;
        this.newItem.price = newPrice.value;
        this.newItem.item = newItem.value;
        var observable = this._httpService.addSecondary(userId, this.newItem);
        observable.subscribe(function (data) {
            console.log(data);
            _this.newItem = { item: "", price: 0.00 };
            _this.getAllUsers();
        });
    };
    AppComponent.prototype.calculate = function () {
        //grabs subtotal
        for (var i = 0; i < this.allUsers.length; i++) {
            var userSum = 0;
            for (var j = 0; j < this.allUsers[i].items.length; j++) {
                userSum += this.allUsers[i].items[j].price;
                this.subtotal += this.allUsers[i].items[j].price;
            }
            this.allUsers[i].userSum = (userSum * (1 + (this.salesTax.number / 100))) + (this.tip.number * (userSum / this.subtotal));
        }
        this.showBreakdown = true;
    };
    AppComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        var observable = this._httpService.deletePrimary(userId);
        observable.subscribe(function (data) {
            console.log(data);
            _this.getAllUsers();
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getPrimaries = function () {
        return this._http.get('/objects');
    };
    HttpService.prototype.getPrimary = function (id) {
        return this._http.get('/object/' + id);
    };
    HttpService.prototype.addNew = function (newPrimary) {
        return this._http.post('/newObject', newPrimary);
    };
    HttpService.prototype.addSecondary = function (id, editedSecondary) {
        return this._http.put('/newReview/' + id, editedSecondary);
    };
    HttpService.prototype.editPrimary = function (id, editedPrimary) {
        return this._http.put('/editObject/' + id, editedPrimary);
    };
    HttpService.prototype.deletePrimary = function (id) {
        return this._http.delete('/remove/' + id);
    };
    HttpService.prototype.deleteSecondary = function (id, updatedPrimary) {
        return this._http.put('/removeSecondary/' + id, updatedPrimary);
    };
    HttpService.prototype.dynamicSort = function (property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        };
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
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

module.exports = __webpack_require__(/*! /Users/user/Desktop/pitter/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map