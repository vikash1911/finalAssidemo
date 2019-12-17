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

/***/ "./src/app/DataModel/tasks.ts":
/*!************************************!*\
  !*** ./src/app/DataModel/tasks.ts ***!
  \************************************/
/*! exports provided: TASKS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASKS", function() { return TASKS; });
var TASKS = [
    { TaskID: 1, TaskName: 'Analysis', TaskDescription: 'Analysis for Task Manager', TaskPriority: 1, StartDate: '03-01-2018', EndDate: '01-31-2018', TaskStatus: 'In Progress', ParentTaskId: '1', TaskAssignedTo: '1', ProjectId: 1 },
    { TaskID: 2, TaskName: 'Design', TaskDescription: 'Design for Task Manager', TaskPriority: 2, StartDate: '03-01-2018', EndDate: '01-31-2018', TaskStatus: 'In Progress', ParentTaskId: '1', TaskAssignedTo: '2', ProjectId: 1 },
    { TaskID: 3, TaskName: 'Coding', TaskDescription: 'Coding for Task Manager', TaskPriority: 3, StartDate: '03-01-2018', EndDate: '01-31-2018', TaskStatus: 'In Progress', ParentTaskId: '1', TaskAssignedTo: '1', ProjectId: 1 },
    { TaskID: 4, TaskName: 'Unit testing', TaskDescription: 'Unit testing for Task Manager', TaskPriority: 4, StartDate: '03-01-2018', EndDate: '01-31-2018', TaskStatus: 'In Progress', ParentTaskId: '1', TaskAssignedTo: '2', ProjectId: 1 },
    { TaskID: 5, TaskName: 'Testing', TaskDescription: 'Testing for Task Manager', TaskPriority: 5, StartDate: '03-01-2018', EndDate: '01-31-2018', TaskStatus: 'In Progress', ParentTaskId: '1', TaskAssignedTo: '1', ProjectId: 1 },
    { TaskID: 6, TaskName: 'Release Acitivity', TaskDescription: 'Release Acitivity for Task Manager', TaskPriority: 6, StartDate: '03-01-2018', EndDate: '01-31-2018', TaskStatus: 'In Progress', ParentTaskId: '1', TaskAssignedTo: '2', ProjectId: 1 },
    { TaskID: 7, TaskName: 'Documentaion', TaskDescription: 'Documentaion for Task Manager', TaskPriority: 7, StartDate: '03-01-2018', EndDate: '01-31-2018', TaskStatus: 'In Progress', ParentTaskId: '1', TaskAssignedTo: '1', ProjectId: 1 }
];


/***/ }),

/***/ "./src/app/Services/PMProjectServices.ts":
/*!***********************************************!*\
  !*** ./src/app/Services/PMProjectServices.ts ***!
  \***********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
        //For localhost
        //private apiUrl: string = 'http://localhost:50695/api/projects?type=json';
        //For Production
        this.apiUrl = 'http://localhost:8081/Api/Project';
    }
    ProjectService.prototype.addProject = function (request) {
        return this.http.post(this.apiUrl + '/InsertProjectDetails', request);
    };
    ProjectService.prototype.getProjects = function () {
        return this.http.get(this.apiUrl + '/AllProjectDetails');
    };
    ProjectService.prototype.deleteProject = function (objProject) {
        objProject.ProjectStatus = "ToBeDeleted";
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.apiUrl + '/DeleteProjectDetails', objProject, {
            headers: httpHeaders,
            observe: 'response'
        });
    };
    ProjectService.prototype.getProject = function (id) {
        return this.http.get(this.apiUrl + '/' + id);
    };
    ProjectService.prototype.SearchProjects = function (ProjectName, ProjectStartDate, ProjectEndDate) {
        // return this.http.get(this.apiUrl+'/SearchProjectDetails'+ '?ProjectId=' + ProjectId 
        //                     + '&ProjectName=' + ProjectName
        //                     + '&ProjectPriorityFrom=' + ProjectPriorityFrom
        //                     + '&ProjectPriorityTo=' + ProjectPriorityTo
        //                     + '&ProjectStartDate=' + ProjectStartDate
        //                     + '&ProjectEndDate=' + ProjectEndDate                        
        //                 ).pipe(map((res:Response)=>res));  
        return this.http.get(this.apiUrl + '/SearchProjectDetails' + '?ProjectName=' + ProjectName
            + '&ProjectStartDate=' + ProjectStartDate
            + '&ProjectEndDate=' + ProjectEndDate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    ProjectService.prototype.updateProject = function (id, request) {
        return this.http.put(this.apiUrl + '/' + id, request);
    };
    ProjectService.prototype.PostProject = function (project) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.apiUrl + '/UpdateProjectDetails', project, {
            headers: httpHeaders,
            observe: 'response'
        });
    };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/Services/PMTaskServices.ts":
/*!********************************************!*\
  !*** ./src/app/Services/PMTaskServices.ts ***!
  \********************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");









var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        //'Access-Control-Allow-Origin': 'http://DOTNET/', // -->Add this line //50020//50695
        'Access-Control-Allow-Origin': 'http://localhost:8081/',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    })
};
var TaskService = /** @class */ (function () {
    //For Production Release
    // BaseUrl="http://DOTNET/ProjectManagerWebApiService/api";
    // AllTasksUrl=this.BaseUrl+"/task?type=json";//50020//50695
    // AddNewTaskUrl=this.BaseUrl+"/task";//50020//50695
    // EditTaskUrl=this.BaseUrl+"/task";//50020//50695
    // AllUsersListUrl=this.BaseUrl+"/user?type=json";//50020//50695
    // SingleUserUrl=this.BaseUrl+"/user";//50020//50695
    // AllParentTasksUrl=this.BaseUrl+"/parenttask";//50020//50695
    function TaskService(_http) {
        this._http = _http;
        //For Local testing   
        this.BaseUrl = "http://localhost:8081/Api"; //50020//50695
        this.AllTasksUrl = this.BaseUrl + "/Task/AllTaskDetails"; //50020//50695
        this.AddNewTaskUrl = this.BaseUrl + "/Task/InsertTaskDetails"; //50020//50695
        this.EditTaskUrl = this.BaseUrl + "/Task/UpdateTaskDetails"; //50020//50695
        this.SearchTaskUrl = this.BaseUrl + "/Task/SearchTaskDetails"; //50020//50695
        this.AllUsersListUrl = this.BaseUrl + "/User"; //50020//50695
        this.SingleUserUrl = this.BaseUrl + "/User"; //50020//50695
        this.AllParentTasksUrl = this.BaseUrl + "/Task/GetParentTaskDetails"; //50020//50695
    }
    TaskService.prototype.GetAllTasks = function () {
        return this._http.get(this.AllTasksUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (res) { return res; }));
    };
    TaskService.prototype.GetAllParentTasks = function () {
        return this._http.get(this.AllParentTasksUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (res) { return res; }));
    };
    TaskService.prototype.AddTask = function (task) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Content-Type', 'application/json');
        var options = {
            headers: httpHeaders
        };
        return this._http.post(this.AddNewTaskUrl, task, options);
    };
    TaskService.prototype.UpdateTask = function (task) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Content-Type', 'application/json');
        var options = {
            headers: httpHeaders
        };
        return this._http.post(this.EditTaskUrl, task, options);
    };
    TaskService.prototype.deleteTask = function (objTask) {
        objTask.TaskStatus = "ToBeDeleted";
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this._http.post(this.AddNewTaskUrl, objTask, {
            headers: httpHeaders,
            observe: 'response'
        });
    };
    TaskService.prototype.PostTask = function (task) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this._http.post(this.AddNewTaskUrl, task, {
            headers: httpHeaders,
            observe: 'response'
        });
    };
    TaskService.prototype.SearchTasks = function (TaskName, TaskStartDate, TaskEndDate) {
        return this._http.get(this.SearchTaskUrl + '?TaskName=' + TaskName
            + '&TaskStartDate=' + TaskStartDate
            + '&TaskEndDate=' + TaskEndDate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (res) { return res; }));
    };
    TaskService.prototype.GetAllUsers = function () {
        return this._http.get(this.AllUsersListUrl + '/AllUserDetails').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (res) { return res; }));
    };
    TaskService.prototype.GetAuthenticateUser = function (UserName, UserPassword) {
        return this._http.get(this.SingleUserUrl + '?type=json&UserName=' + UserName
            + '&UserPassword=' + UserPassword).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (res) { return res; }));
    };
    TaskService.prototype.log = function (message) {
        alert("I am at the end of  the service call place -   log " + this.AllTasksUrl);
    };
    TaskService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            alert("I am at the end of  the service call place - handleError  " + _this.AllTasksUrl + error.message);
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/Services/PMUserServices.ts":
/*!********************************************!*\
  !*** ./src/app/Services/PMUserServices.ts ***!
  \********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var UserService = /** @class */ (function () {
    //private apiDeleteUserUrl: string = 'http://localhost:53506/Api/api/user/Delete';
    function UserService(http) {
        this.http = http;
        //For Local testing   
        //private apiUrl: string = 'http://localhost:50695/api/user';
        //private apiProjectUrl: string = 'http://localhost:50695/api/projects';
        //private apiDeleteUserUrl: string = 'http://localhost:50695/api/user/Delete';
        //For Production
        this.apiUrl = 'http://localhost:8081/Api/User';
        this.apiProjectUrl = 'http://localhost:8081/Api/Project';
    }
    UserService.prototype.addNewUser = function (request) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Content-Type', 'application/json');
        var options = {
            headers: httpHeaders
        };
        return this.http.post(this.apiUrl + '/InsertUserDetails/', request, options);
    };
    UserService.prototype.PostUser = function (user) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.apiUrl + '/UpdateUserDetails', user, {
            headers: httpHeaders,
            observe: 'response'
        });
    };
    UserService.prototype.getUsers = function () {
        return this.http.get(this.apiUrl + '/AllUserDetails');
    };
    UserService.prototype.deleteUser = function (objUser) {
        objUser.TaskId = -100;
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.apiUrl + '/DeleteUserDetails', objUser, {
            headers: httpHeaders,
            observe: 'response'
        });
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.apiUrl + '/GetUserDetailsById' + '/' + id);
    };
    UserService.prototype.updateUser = function (objUser) {
        return this.http.put(this.apiUrl + '/UpdateUserDetails', objUser);
    };
    UserService.prototype.getProjects = function () {
        return this.http.get(this.apiProjectUrl + '/AllProjectDetails');
    };
    UserService.prototype.SearchUsers = function (FirstName, LastName, UserName, EmpId) {
        return this.http.get(this.apiUrl + '/SearchUserDetails' + '?FirstName=' + FirstName
            + '&LastName=' + LastName
            + '&UserName=' + UserName
            + '&EmpId=' + EmpId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



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
/* harmony import */ var _uicomponents_viewtasks_viewtasks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uicomponents/viewtasks/viewtasks.component */ "./src/app/uicomponents/viewtasks/viewtasks.component.ts");
/* harmony import */ var _uicomponents_addnewtasks_addnewtasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uicomponents/addnewtasks/addnewtasks.component */ "./src/app/uicomponents/addnewtasks/addnewtasks.component.ts");
/* harmony import */ var _uicomponents_user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uicomponents/user/user.component */ "./src/app/uicomponents/user/user.component.ts");
/* harmony import */ var _uicomponents_project_project_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uicomponents/project/project.component */ "./src/app/uicomponents/project/project.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _uicomponents_ViewUsers_ViewUsers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./uicomponents/ViewUsers/ViewUsers.component */ "./src/app/uicomponents/ViewUsers/ViewUsers.component.ts");
/* harmony import */ var _uicomponents_ViewProjects_ViewProjects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./uicomponents/ViewProjects/ViewProjects.component */ "./src/app/uicomponents/ViewProjects/ViewProjects.component.ts");
/* harmony import */ var _uicomponents_ProjectDashBoard_ProjectDashBoard_Component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./uicomponents/ProjectDashBoard/ProjectDashBoard.Component */ "./src/app/uicomponents/ProjectDashBoard/ProjectDashBoard.Component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ag-grid-angular/main */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-select-dropdown */ "./node_modules/ngx-select-dropdown/dist/index.js");





//import { AppLoginComponent }  from './uicomponents/login/login.component';












var routes = [
    //{ path: 'login', component: AppLoginComponent }, 
    { path: 'appnewtasks', component: _uicomponents_viewtasks_viewtasks_component__WEBPACK_IMPORTED_MODULE_3__["NewTasksComponent"] },
    { path: 'addnewtasks', component: _uicomponents_addnewtasks_addnewtasks_component__WEBPACK_IMPORTED_MODULE_4__["AddNewTasksComponent"] },
    { path: 'user', component: _uicomponents_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"] },
    { path: 'viewusers', component: _uicomponents_ViewUsers_ViewUsers_component__WEBPACK_IMPORTED_MODULE_8__["ViewUsersComponent"] },
    { path: 'viewprojects', component: _uicomponents_ViewProjects_ViewProjects_component__WEBPACK_IMPORTED_MODULE_9__["ViewProjectsComponent"] },
    { path: 'project', component: _uicomponents_project_project_component__WEBPACK_IMPORTED_MODULE_6__["ProjectComponent"] },
    { path: 'projectdashboard', component: _uicomponents_ProjectDashBoard_ProjectDashBoard_Component__WEBPACK_IMPORTED_MODULE_10__["ProjectDashBoardComponent"] },
    { path: '', redirectTo: '/projectdashboard', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__["Ng2SearchPipeModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_12__["TooltipModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"].forRoot(),
                ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_15__["AgGridModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_16__["SelectDropDownModule"]
            ],
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

module.exports = "hr { \n    display: block;\n    margin-top: 0.5em;\n    margin-bottom: 0.5em;\n    margin-left: auto;\n    margin-right: auto;\n    border-style: inset;\n    border-width: 1px;\n    background-color: rgb(4, 126, 30);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUNBQWlDO0VBQ25DIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJociB7IFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0LCAxMjYsIDMwKTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n <div class=\"container\"> \n     <br> \n     <h1>Project Manager</h1>\n    <router-outlet></router-outlet>\n</div>\n"

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
        this.title = 'Project Manager';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _uicomponents_addnewtasks_addnewtasks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uicomponents/addnewtasks/addnewtasks.component */ "./src/app/uicomponents/addnewtasks/addnewtasks.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _Services_PMTaskServices__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Services/PMTaskServices */ "./src/app/Services/PMTaskServices.ts");
/* harmony import */ var _uicomponents_viewtasks_viewtasks_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./uicomponents/viewtasks/viewtasks.component */ "./src/app/uicomponents/viewtasks/viewtasks.component.ts");
/* harmony import */ var _uicomponents_nav_nav_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./uicomponents/nav/nav/nav.component */ "./src/app/uicomponents/nav/nav/nav.component.ts");
/* harmony import */ var _uicomponents_user_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./uicomponents/user/user.component */ "./src/app/uicomponents/user/user.component.ts");
/* harmony import */ var _uicomponents_project_project_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./uicomponents/project/project.component */ "./src/app/uicomponents/project/project.component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ag-grid-angular/main */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-select-dropdown */ "./node_modules/ngx-select-dropdown/dist/index.js");
/* harmony import */ var _uicomponents_ViewUsers_ViewUsers_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./uicomponents/ViewUsers/ViewUsers.component */ "./src/app/uicomponents/ViewUsers/ViewUsers.component.ts");
/* harmony import */ var _uicomponents_ViewProjects_ViewProjects_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./uicomponents/ViewProjects/ViewProjects.component */ "./src/app/uicomponents/ViewProjects/ViewProjects.component.ts");
/* harmony import */ var _uicomponents_ProjectDashBoard_ProjectDashBoard_Component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./uicomponents/ProjectDashBoard/ProjectDashBoard.Component */ "./src/app/uicomponents/ProjectDashBoard/ProjectDashBoard.Component.ts");









//import { AppLoginComponent } from './uicomponents/login/login.component';






//newly added









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _uicomponents_nav_nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"],
                _uicomponents_addnewtasks_addnewtasks_component__WEBPACK_IMPORTED_MODULE_6__["AddNewTasksComponent"],
                //AppLoginComponent,
                _uicomponents_viewtasks_viewtasks_component__WEBPACK_IMPORTED_MODULE_11__["NewTasksComponent"],
                _uicomponents_user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"],
                _uicomponents_project_project_component__WEBPACK_IMPORTED_MODULE_14__["ProjectComponent"],
                _uicomponents_ViewUsers_ViewUsers_component__WEBPACK_IMPORTED_MODULE_21__["ViewUsersComponent"],
                _uicomponents_ViewProjects_ViewProjects_component__WEBPACK_IMPORTED_MODULE_22__["ViewProjectsComponent"],
                _uicomponents_ProjectDashBoard_ProjectDashBoard_Component__WEBPACK_IMPORTED_MODULE_23__["ProjectDashBoardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_9__["CONST_ROUTING"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_18__["Ng2SearchPipeModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__["TooltipModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__["ModalModule"].forRoot(),
                ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_19__["AgGridModule"].forRoot(),
                ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_20__["SelectDropDownModule"]
            ],
            providers: [_Services_PMTaskServices__WEBPACK_IMPORTED_MODULE_10__["TaskService"]],
            exports: [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__["ModalModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__["TooltipModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__["BsDropdownModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: CONST_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONST_ROUTING", function() { return CONST_ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _uicomponents_addnewtasks_addnewtasks_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uicomponents/addnewtasks/addnewtasks.component */ "./src/app/uicomponents/addnewtasks/addnewtasks.component.ts");
/* harmony import */ var _uicomponents_ProjectDashBoard_ProjectDashBoard_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uicomponents/ProjectDashBoard/ProjectDashBoard.Component */ "./src/app/uicomponents/ProjectDashBoard/ProjectDashBoard.Component.ts");
/* harmony import */ var _uicomponents_viewtasks_viewtasks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uicomponents/viewtasks/viewtasks.component */ "./src/app/uicomponents/viewtasks/viewtasks.component.ts");
/* harmony import */ var _uicomponents_user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uicomponents/user/user.component */ "./src/app/uicomponents/user/user.component.ts");
/* harmony import */ var _uicomponents_project_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uicomponents/project/project.component */ "./src/app/uicomponents/project/project.component.ts");
/* harmony import */ var _uicomponents_ViewUsers_ViewUsers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uicomponents/ViewUsers/ViewUsers.component */ "./src/app/uicomponents/ViewUsers/ViewUsers.component.ts");
/* harmony import */ var _uicomponents_ViewProjects_ViewProjects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./uicomponents/ViewProjects/ViewProjects.component */ "./src/app/uicomponents/ViewProjects/ViewProjects.component.ts");








var MAINMENU_ROUTES = [
    //full : makes sure the path is absolute path
    //{ path: '', redirectTo: '/login', pathMatch: 'full' },     
    { path: 'appaddnewtasks', component: _uicomponents_addnewtasks_addnewtasks_component__WEBPACK_IMPORTED_MODULE_1__["AddNewTasksComponent"] },
    { path: 'projectdashboard', component: _uicomponents_ProjectDashBoard_ProjectDashBoard_Component__WEBPACK_IMPORTED_MODULE_2__["ProjectDashBoardComponent"] },
    { path: 'appnewtasks', component: _uicomponents_viewtasks_viewtasks_component__WEBPACK_IMPORTED_MODULE_3__["NewTasksComponent"] },
    { path: 'user', component: _uicomponents_user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"] },
    { path: 'viewusers', component: _uicomponents_ViewUsers_ViewUsers_component__WEBPACK_IMPORTED_MODULE_6__["ViewUsersComponent"] },
    { path: 'viewprojects', component: _uicomponents_ViewProjects_ViewProjects_component__WEBPACK_IMPORTED_MODULE_7__["ViewProjectsComponent"] },
    { path: 'project', component: _uicomponents_project_project_component__WEBPACK_IMPORTED_MODULE_5__["ProjectComponent"] }
];
var CONST_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(MAINMENU_ROUTES);


/***/ }),

/***/ "./src/app/uicomponents/ProjectDashBoard/ProjectDashBoard.Component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/uicomponents/ProjectDashBoard/ProjectDashBoard.Component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProjectDashBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDashBoardComponent", function() { return ProjectDashBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_PMProjectServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/PMProjectServices */ "./src/app/Services/PMProjectServices.ts");
/* harmony import */ var _Services_PMUserServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/PMUserServices */ "./src/app/Services/PMUserServices.ts");






var ProjectDashBoardComponent = /** @class */ (function () {
    function ProjectDashBoardComponent(userService, projectService, router) {
        this.userService = userService;
        this.projectService = projectService;
        this.router = router;
        this.todate = new Date();
        this.projectData = { ProjectId: null, ProjectName: '', ProjectStartDate: new Date(), ProjectEndDate: this.todate, ProjectPriority: 0, UserId: null, Users: null, Tasks: null };
        this.userData = { UserId: null, UserName: '', FirstName: '', LastName: '', EmpId: null, ProjectId: null, TaskId: null };
    } // {2}
    ProjectDashBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getProjects()
            .subscribe(function (responseForProjects) {
            _this.projects = responseForProjects;
        });
    };
    /*
      delete(id: number) {
        let isDelete = confirm('Do you wish to delete the Project?')
    
        if (isDelete) {
          this.projectService.deleteProject(id)
            .subscribe(response => {
              if (response) {
                const projIndex = this.projects.findIndex(proj => proj.ProjectId == id);
                if (projIndex != -1) {
                  this.projects.splice(projIndex, 1);
                }
              }
            });
        }
      }
    */
    ProjectDashBoardComponent.prototype.Refresh = function () {
        var _this = this;
        this.projectService.getProjects()
            .subscribe(function (response) {
            _this.projects = response;
            console.log(response);
        });
    };
    ProjectDashBoardComponent.prototype.sort = function (param) {
        var _this = this;
        if (param == 'StartDate') {
            this.projectService.getProjects()
                .subscribe(function (response) {
                _this.projects = response.sort(function (a, b) {
                    return new Date(b.ProjectStartDate) - new Date(a.ProjectStartDate);
                });
            });
        }
        if (param == 'EndDate') {
            this.projectService.getProjects()
                .subscribe(function (response) {
                _this.projects = response.sort(function (a, b) {
                    return new Date(b.ProjectEndDate) - new Date(a.ProjectEndDate);
                });
            });
        }
        if (param == 'Priority') {
            this.projectService.getProjects()
                .subscribe(function (response) {
                _this.projects = response.sort(function (a, b) { return a.ProjectPriority.toString().localeCompare(b.ProjectPriority.toString(), undefined, { numeric: true }); });
            });
        }
        if (param == 'Completed') {
            this.projectService.getProjects()
                .subscribe(function (response) {
                _this.projects = response.sort(function (a, b) { return a.ProjectStatus.toString().localeCompare(b.ProjectStatus.toString(), undefined, { numeric: true }); });
            });
        }
    };
    ProjectDashBoardComponent.prototype.endDateAfterOrEqualValidator = function (formGroup) {
        var startDateTimestamp, endDateTimestamp;
        for (var controlName in formGroup.controls) {
            if (controlName.indexOf("StartDate") !== -1) {
                startDateTimestamp = Date.parse(formGroup.controls[controlName].value);
            }
            if (controlName.indexOf("EndDate") !== -1) {
                endDateTimestamp = Date.parse(formGroup.controls[controlName].value);
            }
        }
        return (endDateTimestamp < startDateTimestamp) ? { endDateLessThanStartDate: true } : null;
    };
    ProjectDashBoardComponent.prototype.compareTwoDates = function (form) {
        if (new Date(form.controls['StartDate'].value) < new Date(form.controls['EndDate'].value)) {
            return false;
        }
    };
    ProjectDashBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projectdashboard',
            template: __webpack_require__(/*! ./projectdashboard.component.html */ "./src/app/uicomponents/ProjectDashBoard/projectdashboard.component.html"),
            styles: [__webpack_require__(/*! ./projectdashboard.component.css */ "./src/app/uicomponents/ProjectDashBoard/projectdashboard.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_PMUserServices__WEBPACK_IMPORTED_MODULE_4__["UserService"], _Services_PMProjectServices__WEBPACK_IMPORTED_MODULE_3__["ProjectService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProjectDashBoardComponent);
    return ProjectDashBoardComponent;
}());



/***/ }),

/***/ "./src/app/uicomponents/ProjectDashBoard/projectdashboard.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/uicomponents/ProjectDashBoard/projectdashboard.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control{\n    width: 250px;\n    display: inline;\n    margin-right: 5px;\n}\n.row{\n    margin-top: 5px;\n     margin-bottom: 5px;\n}\n.btn btn-primary\n{\npadding-right: 10px;\nfont-family: Courier New, Courier, monospace;\nfont-size: 11px;\n}\n.error {\n    color: red;    \n    font-size: 12px;\n    font-style: italic;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWljb21wb25lbnRzL1Byb2plY3REYXNoQm9hcmQvcHJvamVjdGRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7S0FDZCxrQkFBa0I7QUFDdkI7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkIsNENBQTRDO0FBQzVDLGVBQWU7QUFDZjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC91aWNvbXBvbmVudHMvUHJvamVjdERhc2hCb2FyZC9wcm9qZWN0ZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9se1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ucm93e1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmJ0biBidG4tcHJpbWFyeVxue1xucGFkZGluZy1yaWdodDogMTBweDtcbmZvbnQtZmFtaWx5OiBDb3VyaWVyIE5ldywgQ291cmllciwgbW9ub3NwYWNlO1xuZm9udC1zaXplOiAxMXB4O1xufVxuLmVycm9yIHtcbiAgICBjb2xvcjogcmVkOyAgICBcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/uicomponents/ProjectDashBoard/projectdashboard.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/uicomponents/ProjectDashBoard/projectdashboard.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-nav></app-nav>\n    <h2><Font color='navy'>Project Manager Dashboard </Font></h2>\n    <P>&nbsp;</P>\n  <div style=\"margin-left: 25px;\">\n    <div class=\"row\">\n      <div>\n        <label for=\"txtSearch\"> <font color='black'>Search Project:</font></label>\n        <input id=\"Search\" type=\"text\" placeholder=\"Enter text to search\" class=\"form-control\" name=\"Search\" [(ngModel)]=\"ProjectName\" required #Search=\"ngModel\">\n\n          <label for=\"lblSort\">Sort By: </label>\n          <button name=\"StartDate\" class=\"btn btn-primary\" id=\"StartDate\" style=\"width:85px;\" (click)=\"sort('StartDate')\">StartDate\n          </button>&nbsp;\n      <button name=\"EndDate\" class=\"btn btn-primary btn-md\" id=\"EndDate\" style=\"width:85px;\" (click)=\"sort('EndDate')\">EndDate\n          </button>&nbsp;\n      <button name=\"Priority\" class=\"btn btn-primary btn-md\" id=\"Priority\" style=\"width:85px;\" (click)=\"sort('Priority')\">Priority\n          </button>&nbsp;\n      <button name=\"Completed\" class=\"btn btn-primary btn-md\" id=\"Completed\" style=\"width:85px;\" (click)=\"sort('Completed')\">Completed\n          </button>&nbsp;\n          \n      <button name=\"Priority\" class=\"btn btn-primary btn-md\" id=\"Refresh\" style=\"width:85px;\" (click)=\"Refresh()\">Refresh\n      </button>&nbsp; \n          &nbsp;&nbsp;&nbsp;&nbsp;\n    </div>\n    \n   <div class=\"row\" *ngFor=\"let proj of projects | filter :ProjectName\"> \n      <table style=\"border-spacing: 5px; padding: 5px; background-color:midnightblue; color: white\" border=\"1\" width=\"80%\">\n        <tr>\n          <th style=\"width: 20%\">Project Name</th>\n          <th style=\"width: 20%\">{{proj.ProjectName}}</th>\n          <th style=\"width: 20%\">Project Status</th>\n          <th style=\"width: 20%\">{{proj.ProjectStatus}}</th>\n          <th  rowspan=\"3\" style=\" width: 20%; background-color:aquamarine \">\n              <div style=\"text-align: center; vertical-align: middle; padding: 20px 0; background-color:aquamarine \">\n                  <span style=\"color: black\">\n                      <label for=\"txtPriority\" name=\"Priority\"> Project Priority</label>\n                      <br>{{proj.ProjectPriority}}\n                  </span>\n                  \n                </div>\n          </th>\n        </tr>\n        <tr>\n          <th>Project Start Date</th>\n          <th>{{proj.ProjectStartDate|date:'shortDate'}}</th>\n          <th>Project End Date</th>\n          <th>{{proj.ProjectEndDate|date:'shortDate'}}</th>\n        </tr>\n        <!-- <tr>\n          <th>No of Tasks</th>\n          <th>{{proj.Tasks.length}}</th>\n          <th colspan=\"2\"><ul>\n              <li *ngFor=\"let tsk of proj.Tasks;let i = index\">{{tsk.TaskName}} - {{tsk.TaskStatus}} : Assigned UserId- {{tsk.TaskAssignedTo}}                                        \n              </li>                  \n            </ul></th>\n        </tr> -->\n      </table>              \n      </div>     \n    </div>   \n  </div>"

/***/ }),

/***/ "./src/app/uicomponents/ViewProjects/ViewProjects.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/uicomponents/ViewProjects/ViewProjects.component.ts ***!
  \*********************************************************************/
/*! exports provided: ViewProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProjectsComponent", function() { return ViewProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_PMTaskServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/PMTaskServices */ "./src/app/Services/PMTaskServices.ts");
/* harmony import */ var _Services_PMProjectServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/PMProjectServices */ "./src/app/Services/PMProjectServices.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ViewProjectsComponent = /** @class */ (function () {
    function ViewProjectsComponent(router, objTaskService1, objProjectService1) {
        this.router = router;
        this.objTaskService1 = objTaskService1;
        this.projetsForSeacrh = [];
        this.dataSaved = false;
        this.routerlocal = router;
        this.objTaskService = objTaskService1;
        this.objProjectService = objProjectService1;
        this.getAllUsers();
        this.getAllTasks();
    }
    ViewProjectsComponent.prototype.ngOnInit = function () {
        this.getAllProjects();
    };
    ViewProjectsComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.objTaskService.GetAllUsers()
            .subscribe(function (usersnew) { return _this.allUsers = usersnew; });
    };
    ViewProjectsComponent.prototype.getAllTasks = function () {
        var _this = this;
        this.objTaskService.GetAllTasks()
            .subscribe(function (tasksnew) { return _this.tasks = tasksnew; });
    };
    ViewProjectsComponent.prototype.getAllProjects = function () {
        var _this = this;
        this.objProjectService.getProjects()
            .subscribe(function (projectsnew) { return _this.projects = projectsnew; });
    };
    ViewProjectsComponent.prototype.EditProject = function (objProject) {
    };
    ViewProjectsComponent.prototype.SearchProject = function () {
        var _this = this;
        this.ClearSelectedProjectControls();
        this.selectedProject = null;
        //this.searchedProjectId= (<HTMLInputElement>document.getElementById("projectidforsearch")).value; 
        this.searchedProjectName = document.getElementById("projectnameforsearch").value;
        // this.searchedPriorityFrom=(<HTMLInputElement>document.getElementById("priorityFromforsearch")).value; 
        //  this.searchedPriorityTo=(<HTMLInputElement>document.getElementById("priorityToforsearch")).value;
        this.searchedStartDate = document.getElementById("StartDateforsearch").value;
        this.searchedEndDate = document.getElementById("EndDateforsearch").value;
        //this.objProjectService.SearchProjects(this.searchedProjectId,this.searchedProjectName,this.searchedPriorityFrom,this.searchedPriorityTo,this.searchedStartDate,this.searchedEndDate)      
        this.objProjectService.SearchProjects(this.searchedProjectName, this.searchedStartDate, this.searchedEndDate)
            .subscribe(function (projectsnew) { return _this.projects = projectsnew; });
    };
    ViewProjectsComponent.prototype.ClearSelectedProjectControls = function () {
        if (this.selectedProject != null) {
            this.selectedProject.ProjectId = 0;
            this.selectedProject.ProjectPriority = 0;
            this.selectedProject.ProjectStatus = "0";
            this.selectedProject.UserId = 0;
            //this.selectedProject.TaskAssignedTo="0"; 
            //(<HTMLInputElement>document.getElementById("projectid")).value=""; 
            document.getElementById("projectname").value = "";
            document.getElementById("rngProjectPriority").value = "";
            document.getElementById("projectstartdate").value = "";
            document.getElementById("projectenddate").value = "";
            document.getElementById("projectStatus").value = "0";
            //(<HTMLInputElement>document.getElementById("UserId")).value="0"; 
            this.selectedProject = null;
        }
    };
    ViewProjectsComponent.prototype.CancelEdit = function () {
        this.selectedProject = null;
    };
    ViewProjectsComponent.prototype.ClearSearchProjects = function () {
        //(<HTMLInputElement>document.getElementById("projectidforsearch")).value=""; 
        document.getElementById("projectnameforsearch").value = "";
        //(<HTMLInputElement>document.getElementById("priorityFromforsearch")).value=""; 
        //(<HTMLInputElement>document.getElementById("priorityToforsearch")).value=""; 
        document.getElementById("StartDateforsearch").value = "";
        document.getElementById("EndDateforsearch").value = "";
        this.ClearSelectedProjectControls();
        this.getAllProjects();
    };
    ViewProjectsComponent.prototype.ViewProject = function (values) {
        this.ClearSelectedProjectControls();
        this.selectedProject = null;
        this.getAllProjects();
    };
    ViewProjectsComponent.prototype.AddProjects = function (values) {
        this.routerlocal.navigateByUrl("/project");
    };
    ViewProjectsComponent.prototype.onSelect = function (project) {
        this.selectedProject = project;
    };
    ViewProjectsComponent.prototype.EndProject = function (objProject) {
        var _this = this;
        if (objProject != null) {
            objProject.ProjectStatus = "Completed";
            this.objProjectService.PostProject(objProject).subscribe(function (project) {
                console.log(project);
                _this.dataSaved = true;
                //this.LoadAllTasks();
                _this.allProjects$ = _this.objProjectService.getProjects();
                if (_this.selectedProject != undefined) {
                    alert("Project is completed");
                    _this.getAllProjects();
                    _this.selectedProject = null;
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    ViewProjectsComponent.prototype.DeleteProject = function (objProject) {
        var _this = this;
        if (confirm("Are you sure to delete the Project : " + objProject.ProjectName + " ?") == true) {
            if (objProject != null) {
                objProject.ProjectStatus = "ToBeDeleted";
                this.objProjectService.deleteProject(objProject).subscribe(function (project) {
                    console.log(project);
                    _this.dataSaved = true;
                    //this.LoadAllTasks();
                    _this.allProjects$ = _this.objProjectService.getProjects();
                    if (_this.selectedProject != undefined) {
                        alert("Project is deleted");
                        _this.ClearSelectedProjectControls();
                        _this.getAllProjects();
                        _this.selectedProject = null;
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        }
    };
    ViewProjectsComponent.prototype.UpdateProject = function (objProject) {
        var _this = this;
        this.objProjectService.PostProject(objProject).subscribe(function (project) {
            console.log(project);
            _this.dataSaved = true;
            //this.LoadAllTasks();
            _this.allProjects$ = _this.objProjectService.getProjects();
            if (_this.selectedProject != undefined) {
                alert("Project is saved");
                _this.getAllProjects();
                _this.selectedProject = null;
            }
        }, function (err) {
            console.log(err);
        });
    };
    ViewProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ViewProjects',
            template: __webpack_require__(/*! ./viewprojects.component.html */ "./src/app/uicomponents/ViewProjects/viewprojects.component.html"),
            styles: [__webpack_require__(/*! ./viewprojects.component.css */ "./src/app/uicomponents/ViewProjects/viewprojects.component.css")]
        })
        //@Injectable({ providedIn: 'root'})
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _Services_PMTaskServices__WEBPACK_IMPORTED_MODULE_2__["TaskService"], _Services_PMProjectServices__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]])
    ], ViewProjectsComponent);
    return ViewProjectsComponent;
}());



/***/ }),

/***/ "./src/app/uicomponents/ViewProjects/viewprojects.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/uicomponents/ViewProjects/viewprojects.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroesComponent's private CSS styles */\n.selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n.tasks {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 78em;\n  }\n.tasks li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n.tasks li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n.tasks li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n.tasks .text {\n    position: relative;\n    top: -3px;\n  }\n.tasks .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n.wrapper {\n      display: grid;\n      grid-template-columns: 60px 200px 80px 100px 100px 100px 150px 150px 60px 70px 110px 200px;\n      grid-gap: 1px;  \n      height: 1000px;\n    }\n.wrapper-header{\n      display: grid;\n      grid-template-columns: 60px 200px 80px 100px 150px 100px 150px 150px 80px 100px 110px 200px;\n      grid-gap: 1px;\n      background-color: #f1f1f1;\n      font-size: 14px;      \n    }\nhr { \n      display: block;\n      margin-top: 0.5em;\n      margin-bottom: 0.5em;\n      margin-left: auto;\n      margin-right: auto;\n      border-style: inset;\n      border-width: 1px;\n      background-color: brown;\n    }\n.form-control\n  {\n      width:250px;\n      display: inline;\n      margin-right: 5px;\n  }\n.row{\n      margin-top: 5px;\n       margin-bottom: 5px;\n  }\n.btn btn-primary\n  {\n  padding-right: 10px;\n  }\n.error {\n      color: red;    \n      font-size: 12px;\n      font-style: italic;\n  }\n\n    \n \n  \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWljb21wb25lbnRzL1ZpZXdQcm9qZWN0cy92aWV3cHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5Q0FBeUM7QUFDekM7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtFQUNkO0FBQ0E7SUFDRSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixXQUFXO0VBQ2I7QUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLG9DQUFvQztJQUNwQyxZQUFZO0VBQ2Q7QUFDQTtJQUNFLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsVUFBVTtFQUNaO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztFQUNYO0FBQ0E7SUFDRSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDBCQUEwQjtFQUM1QjtBQUVBO01BQ0ksYUFBYTtNQUNiLDBGQUEwRjtNQUMxRixhQUFhO01BQ2IsY0FBYztJQUNoQjtBQUNBO01BQ0UsYUFBYTtNQUNiLDJGQUEyRjtNQUMzRixhQUFhO01BQ2IseUJBQXlCO01BQ3pCLGVBQWU7SUFDakI7QUFFQTtNQUNFLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsb0JBQW9CO01BQ3BCLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQix1QkFBdUI7SUFDekI7QUFJSjs7TUFFTSxXQUFXO01BQ1gsZUFBZTtNQUNmLGlCQUFpQjtFQUNyQjtBQUNBO01BQ0ksZUFBZTtPQUNkLGtCQUFrQjtFQUN2QjtBQUNBOztFQUVBLG1CQUFtQjtFQUNuQjtBQUNBO01BQ0ksVUFBVTtNQUNWLGVBQWU7TUFDZixrQkFBa0I7RUFDdEIiLCJmaWxlIjoic3JjL2FwcC91aWNvbXBvbmVudHMvVmlld1Byb2plY3RzL3ZpZXdwcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVyb2VzQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG4uc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REMgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLnRhc2tzIHtcbiAgICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogNzhlbTtcbiAgfVxuICAudGFza3MgbGkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICAgIG1hcmdpbjogLjVlbTtcbiAgICBwYWRkaW5nOiAuM2VtIDA7XG4gICAgaGVpZ2h0OiAxLjZlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgLnRhc2tzIGxpLnNlbGVjdGVkOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOERDICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC50YXNrcyBsaTpob3ZlciB7XG4gICAgY29sb3I6ICM2MDdEOEI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcbiAgICBsZWZ0OiAuMWVtO1xuICB9XG4gIC50YXNrcyAudGV4dCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTNweDtcbiAgfVxuICAudGFza3MgLmJhZGdlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xuICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC0xcHg7XG4gICAgdG9wOiAtNHB4O1xuICAgIGhlaWdodDogMS44ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xuICB9XG5cbiAgLndyYXBwZXIge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCAyMDBweCA4MHB4IDEwMHB4IDEwMHB4IDEwMHB4IDE1MHB4IDE1MHB4IDYwcHggNzBweCAxMTBweCAyMDBweDtcbiAgICAgIGdyaWQtZ2FwOiAxcHg7ICBcbiAgICAgIGhlaWdodDogMTAwMHB4O1xuICAgIH1cbiAgICAud3JhcHBlci1oZWFkZXJ7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IDIwMHB4IDgwcHggMTAwcHggMTUwcHggMTAwcHggMTUwcHggMTUwcHggODBweCAxMDBweCAxMTBweCAyMDBweDtcbiAgICAgIGdyaWQtZ2FwOiAxcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgICAgZm9udC1zaXplOiAxNHB4OyAgICAgIFxuICAgIH1cblxuICAgIGhyIHsgXG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XG4gICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xuICAgIH1cbiAgICBcblxuXG4uZm9ybS1jb250cm9sXG4gIHtcbiAgICAgIHdpZHRoOjI1MHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbiAgLnJvd3tcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgLmJ0biBidG4tcHJpbWFyeVxuICB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmVycm9yIHtcbiAgICAgIGNvbG9yOiByZWQ7ICAgIFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG5cbiAgICBcbiBcbiAgXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/uicomponents/ViewProjects/viewprojects.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/uicomponents/ViewProjects/viewprojects.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-nav></app-nav>\n<h3>Search Projects</h3>\n<div>\n  <Table>\n    <TR>\n      <!-- <TD>\n        Project Id: \n      </TD>\n      <TD>\n        <input  enabled=true  name=\"projectidforsearch\" id=\"projectidforsearch\">\n      </TD> -->\n      <TD>\n        Project Name:\n      </TD>\n      <TD>\n        <input  enabled=true  name=\"projectnameforsearch\" id=\"projectnameforsearch\">\n      </TD>\n    </TR>\n    <p></p>\n    <!-- <TR>\n      <TD>      \n        Priority From:\n      </TD>\n      <TD>    \n        <input  enabled=true name=\"priorityFromforsearch\" id=\"priorityFromforsearch\">\n      </TD>\n      <TD>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Priority To: \n      </TD>\n      <TD>\n        <input  enabled=true  name=\"priorityToforsearch\" id=\"priorityToforsearch\">\n      </TD>\n    </TR> -->\n    <p></p>\n    <TR>\n    <TD>\n      Project Start Date:\n    </TD>\n    <TD>\n      <input enabled=true  name=\"StartDateforsearch\" id=\"StartDateforsearch\" type=\"date\">\n    </TD>\n    <TD>\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Project End Date: \n    </TD>\n    <TD>\n      <input enabled=true  name=\"EndDateforsearch\" id=\"EndDateforsearch\" type=\"date\">\n    </TD>\n  </TR>\n  <TR>\n    <TD>&nbsp;</TD><TD>&nbsp;</TD>\n  </TR>\n  <TR>\n    <TD colspan=\"2\">\n      <span>\n        <button type=\"button\" class=\"btn btn-md btn-primary\" (click)=\"SearchProject()\" name=\"btnSeacrhProject\" id=\"btnSearchProject\">\n           <span class=\"glyphicon glyphicon-search\"></span> Search Project\n        </button>\n      </span>\n    </TD>\n    <TD colspan=\"2\">  \n      <span>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type=\"button\" class=\"btn btn-md btn-primary\" (click)=\"ClearSearchProjects()\" name=\"btnClear\" id=\"btnClear\">\n          <span class=\"glyphicon glyphicon-remove\"></span> Clear Search\n        </button>\n      </span>\n    </TD>\n  </TR>\n</Table>\n<HR>\n</div>\n\n<div>\n  <Table>\n      <TR>\n        <TD>\n  \n  <h3><Font color='navy' ><u>View/Edit Project </u></Font></h3>  \n  <div>\n      <span>\n        <button type=\"button\" class=\"btn btn-md btn-primary\" (click)=\"AddProjects(1)\" name=\"btnAddProject\" id=\"btnAddProject\">\n          <span class=\"glyphicon glyphicon-plus\"></span> Add Project\n        </button>\n    </span>\n  \n  <P></P>\n  <P></P>\n  <table class=\"table table-hover table-bordered\" style=\"width:100%;\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th>Project Id</th>\n          <th>Project Name</th>\n          <th>Priority</th>\n          <th>Start Date</th>\n          <th>End Date</th>\n          <th>Status</th>\n          <th></th>\n          <th></th>\n          <th></th>\n        </tr>\n      </thead>\n      <tr *ngFor=\"let project of projects\"\n      [class.selected]=\"project === selectedProject\" (click)=\"onSelect(project)\"> \n        <td>{{project.ProjectId}}</td>\n        <td>{{project.ProjectName}}</td>\n        <td>{{project.ProjectPriority}}</td>\n        <td>{{project.ProjectStartDate|date:'shortDate'}}</td>\n        <td>{{project.ProjectEndDate|date:'shortDate'}}</td>\n        <td>{{project.ProjectStatus}}</td>\n        <td><button type=\"button\" class=\"btn btn-md btn-primary\" (click)=\"EditProject(this.selectedProject)\">\n            <span class=\"glyphicon glyphicon-edit\"></span> Edit \n          </button></td>\n          <td><button type=\"button\" class=\"btn btn-md btn-primary\" (click)=\"EndProject(project)\">\n              <span class=\"glyphicon glyphicon-stop\"></span> End Project\n          </button></td>\n        <td><button type=\"button\" class=\"btn btn-md btn-primary\" (click)=\"DeleteProject(project)\">\n              <span class=\"glyphicon glyphicon-remove\"></span> Delete \n          </button>\n        </td>\n      </tr>\n    </table>\n  \n    \n   \n   \n  <div *ngIf=\"selectedProject\" >\n    <P></P>\n   <HR>\n    \n    <h3><Font color='navy'><u>{{selectedProject.ProjectName | uppercase}} Details</u></Font></h3>\n  \n    <div><span>Project Id: </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{selectedProject.ProjectId}}</div>\n    <div>\n      <label>Project Name:&nbsp;&nbsp;\n        <input [(ngModel)]=\"selectedProject.ProjectName\" placeholder=\"projectname\" value=\"{{selectedProject.ProjectName}}\" disabled class=\"form-control\" id=\"projectname\" name=\"projectname\"  >\n      </label>        \n    </div>     \n    <p></p>\n    <div>\n      <label>Project Priority:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     \n        <input type=\"range\" enabled=true  name=\"rngProjectPriority\" width=\"120px\"  [(ngModel)]=\"selectedProject.ProjectPriority\" placeholder=\"project priority\" value=\"{{selectedProject.ProjectPriority}}\" min=\"1\" max=\"30\" class=\"form-control\" id=\"rngProjectPriority\"  >\n       {{selectedProject.ProjectPriority}}\n        <BR>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n       \n      </label>   \n    </div> \n    <p></p>\n    <div>\n      <label>Project Start Date:&nbsp;&nbsp;&nbsp;\n        <input [ngModel]=\"selectedProject.ProjectStartDate | date:'yyyy-MM-dd'\" (ngModelChange)=\"selectedProject.ProjectStartDate = $event\" placeholder=\"ProjectStartDate\" type=\"date\" value=\"{{selectedProject.ProjectStartDate}}\"  enabled=true class=\"form-control\" id=\"projectstartdate\" name=\"projectstartdate\"   ><i><font size=2>(mm/dd/yyyy)</font></i>\n      </label>   \n    </div> \n    <p></p>\n    <div>\n      <label>Project End Date:&nbsp;&nbsp;&nbsp;&nbsp;\n        <input [ngModel]=\"selectedProject.ProjectEndDate | date:'yyyy-MM-dd'\" (ngModelChange)=\"selectedProject.ProjectEndDate = $event\" placeholder=\"ProjectEndDate\" type=\"date\" value=\"{{selectedProject.ProjectEndDate}}\"  enabled=true class=\"form-control\" id=\"projectenddate\" name=\"projectenddate\"   ><i><font size=2>(mm/dd/yyyy)</font></i>\n      </label>   \n    </div> \n    <p></p>\n    <div>\n      <label>Project Status:\n  \n          <select class=\"form-control\" enabled=true [(ngModel)]=\"selectedProject.ProjectStatus\" placeholder=\"ProjectStatus\"  value=\"{{selectedProject.projectStatus}}\" id=\"projectStatus\" name=\"projectStatus\"  > \n              <option value=\"0\">----Select Project Status----</option>\n              <option>In Progress </option>\n              <option>Suspend</option>\n              <option>Completed</option>           \n            </select>      \n      </label>   \n    </div> \n    <p></p>\n    <div>\n      <label>Project Manager:       \n        <select class=\"form-control\" [(ngModel)] = \"selectedProject.UserId\" placeholder=\"userid\"  value=\"{{selectedProject.UserId}}\" enabled=true  id=\"userid\" name=\"userid\"  > \n            <option value=\"0\">----Select User----</option>         \n            <option *ngFor = \"let user of allUsers\" value={{user.UserId}}>\n              {{user.UserName}}</option>\n          </select>    \n       </label>   \n    </div> \n    <HR>\n      <P></P><p></p>\n     \n      <span>\n          <button type=\"button\" class=\"btn btn-md btn-primary\" (click)=\"UpdateProject(this.selectedProject)\" name=\"btnUpdateProject\" id=\"btnUpdateProject\">\n            <span class=\"glyphicon glyphicon-edit\"></span> Save Project\n          </button>\n      </span>\n      \n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <span>\n        \n    </span> \n  </div>\n  \n  <HR>  \n  \n  </div>\n  </TD>\n  </TR>\n  </Table>\n  </div>"

/***/ }),

/***/ "./src/app/uicomponents/ViewUsers/ViewUsers.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/uicomponents/ViewUsers/ViewUsers.component.ts ***!
  \***************************************************************/
/*! exports provided: ViewUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUsersComponent", function() { return ViewUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_PMTaskServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/PMTaskServices */ "./src/app/Services/PMTaskServices.ts");
/* harmony import */ var _Services_PMUserServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/PMUserServices */ "./src/app/Services/PMUserServices.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ViewUsersComponent = /** @class */ (function () {
    function ViewUsersComponent(router, objUserService1, objTaskService1) {
        this.router = router;
        this.objUserService1 = objUserService1;
        this.usersForSeacrh = [];
        this.dataSaved = false;
        this.routerlocal = router;
        this.objUserService = objUserService1;
        this.objTaskService = objTaskService1;
        this.getAllProjects();
        this.getAllTasks();
    }
    ViewUsersComponent.prototype.ngOnInit = function () {
        this.getAllUsers();
    };
    ViewUsersComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.objUserService.getUsers()
            .subscribe(function (usersnew) { return _this.users = usersnew; });
    };
    ViewUsersComponent.prototype.getAllProjects = function () {
        var _this = this;
        this.objUserService.getProjects()
            .subscribe(function (projectsnew) { return _this.projects = projectsnew; });
    };
    ViewUsersComponent.prototype.getAllTasks = function () {
        var _this = this;
        this.objTaskService.GetAllTasks()
            .subscribe(function (tasksnew) { return _this.tasks = tasksnew; });
    };
    ViewUsersComponent.prototype.EditUser = function (objUser) {
    };
    ViewUsersComponent.prototype.DeleteUser = function (objUser) {
        var _this = this;
        if (confirm("Are you sure to delete the User : " + objUser.FirstName + " " + objUser.LastName + "?") == true) {
            if ((objUser.ProjectId == null || objUser.ProjectId == 0) && (objUser.TaskId == null || objUser.TaskId == 0)) {
                this.objUserService.deleteUser(objUser).subscribe(function (usertoupdated) {
                    console.log(usertoupdated);
                    _this.dataSaved = true;
                    _this.allUsers$ = _this.objUserService.getUsers();
                    if (_this.selectedUser != undefined) {
                        alert("User ID : " + _this.selectedUser.UserId + " is deleted");
                        _this.selectedUser = null;
                        _this.getAllUsers();
                    }
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                alert("User canot be deleted, as user is assigned with Project/Tasks");
            }
        }
    };
    ViewUsersComponent.prototype.CancelEdit = function () {
        this.selectedUser = null;
    };
    ViewUsersComponent.prototype.SearchUser = function () {
        var _this = this;
        this.ClearSelectedUserControls();
        this.selectedUser = null;
        this.searchedFirstName = document.getElementById("firstnameforsearch").value;
        this.searchedLastName = document.getElementById("lastnameforsearch").value;
        this.searchedUserName = document.getElementById("usernameforsearch").value;
        this.searchedempid = document.getElementById("empidforsearch").value;
        this.objUserService.SearchUsers(this.searchedFirstName, this.searchedLastName, this.searchedUserName, this.searchedempid)
            .subscribe(function (usersnew) { return _this.users = usersnew; });
    };
    ViewUsersComponent.prototype.ClearSelectedUserControls = function () {
        if (this.selectedUser != null) {
            this.selectedUser.UserId = 0;
            this.selectedUser.UserName = "";
            this.selectedUser.FirstName = "";
            this.selectedUser.LastName = "";
            this.selectedUser.EmpId = "0";
            this.selectedUser.ProjectId = 0;
            this.selectedUser.TaskId = 0;
            document.getElementById("firstname").value = "";
            document.getElementById("lastname").value = "";
            document.getElementById("username").value = "";
            document.getElementById("empid").value = "";
            document.getElementById("projectid").value = "0";
            document.getElementById("taskid").value = "0";
        }
    };
    ViewUsersComponent.prototype.ClearSearchUsers = function () {
        document.getElementById("firstnameforsearch").value = "";
        document.getElementById("lastnameforsearch").value = "";
        document.getElementById("usernameforsearch").value = "";
        document.getElementById("empidforsearch").value = "";
        this.getAllUsers();
    };
    ViewUsersComponent.prototype.ViewUser = function (values) {
        this.ClearSelectedUserControls();
        this.selectedUser = null;
        this.getAllUsers();
    };
    ViewUsersComponent.prototype.AddUser = function (values) {
        this.routerlocal.navigateByUrl("/user");
    };
    ViewUsersComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
    };
    ViewUsersComponent.prototype.UpdateUser = function (objUser) {
        var _this = this;
        this.objUserService.PostUser(objUser).subscribe(function (usertoupdated) {
            console.log(usertoupdated);
            _this.dataSaved = true;
            _this.allUsers$ = _this.objUserService.getUsers();
            if (_this.selectedUser != undefined) {
                alert("User ID : " + _this.selectedUser.UserId + " is saved");
                _this.getAllUsers();
            }
        }, function (err) {
            console.log(err);
        });
    };
    ViewUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ViewUsers',
            template: __webpack_require__(/*! ./viewusers.component.html */ "./src/app/uicomponents/ViewUsers/viewusers.component.html"),
            styles: [__webpack_require__(/*! ./viewusers.component.css */ "./src/app/uicomponents/ViewUsers/viewusers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _Services_PMUserServices__WEBPACK_IMPORTED_MODULE_3__["UserService"], _Services_PMTaskServices__WEBPACK_IMPORTED_MODULE_2__["TaskService"]])
    ], ViewUsersComponent);
    return ViewUsersComponent;
}());



/***/ }),

/***/ "./src/app/uicomponents/ViewUsers/viewusers.component.css":
/*!****************************************************************!*\
  !*** ./src/app/uicomponents/ViewUsers/viewusers.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* UsersComponent's private CSS styles */\n.selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n.users {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 78em;\n  }\n.users li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n.users li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n.users li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n.users .text {\n    position: relative;\n    top: -3px;\n  }\n.users .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n.wrapper {\n      display: grid;\n      grid-template-columns: 60px 150px 200px 150px 150px 200px;\n      grid-gap: 1px;  \n            \n    }\n.wrapper-header{\n      display: grid;\n      grid-template-columns: 60px 150px 200px 150px 150px 200px;\n      grid-gap: 1px;\n      background-color: #f1f1f1;\n      font-size: 14px;      \n    }\nhr { \n      display: block;\n      margin-top: 0.5em;\n      margin-bottom: 0.5em;\n      margin-left: auto;\n      margin-right: auto;\n      border-style: inset;\n      border-width: 1px;\n      background-color: brown;\n    }\n.form-control\n  {\n      display: inline;\n      margin-right: 5px;\n  }\n.row{\n        margin-top: 5px;\n        margin-bottom: 5px;\n  }\n.btn btn-primary\n  {\n    padding-right: 10px;\n    height: 5px;   \n  }\n.error {\n      color: red;    \n      font-size: 12px;\n      font-style: italic;\n  }\n    \n \n  \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWljb21wb25lbnRzL1ZpZXdVc2Vycy92aWV3dXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBd0M7QUFDeEM7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtFQUNkO0FBQ0E7SUFDRSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixXQUFXO0VBQ2I7QUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLG9DQUFvQztJQUNwQyxZQUFZO0VBQ2Q7QUFDQTtJQUNFLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsVUFBVTtFQUNaO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztFQUNYO0FBQ0E7SUFDRSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDBCQUEwQjtFQUM1QjtBQUVBO01BQ0ksYUFBYTtNQUNiLHlEQUF5RDtNQUN6RCxhQUFhOztJQUVmO0FBQ0E7TUFDRSxhQUFhO01BQ2IseURBQXlEO01BQ3pELGFBQWE7TUFDYix5QkFBeUI7TUFDekIsZUFBZTtJQUNqQjtBQUVBO01BQ0UsY0FBYztNQUNkLGlCQUFpQjtNQUNqQixvQkFBb0I7TUFDcEIsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLHVCQUF1QjtJQUN6QjtBQUlGOztNQUVJLGVBQWU7TUFDZixpQkFBaUI7RUFDckI7QUFDQTtRQUNNLGVBQWU7UUFDZixrQkFBa0I7RUFDeEI7QUFDQTs7SUFFRSxtQkFBbUI7SUFDbkIsV0FBVztFQUNiO0FBQ0E7TUFDSSxVQUFVO01BQ1YsZUFBZTtNQUNmLGtCQUFrQjtFQUN0QiIsImZpbGUiOiJzcmMvYXBwL3VpY29tcG9uZW50cy9WaWV3VXNlcnMvdmlld3VzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBVc2Vyc0NvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC51c2VycyB7XG4gICAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDc4ZW07XG4gIH1cbiAgLnVzZXJzIGxpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgICBtYXJnaW46IC41ZW07XG4gICAgcGFkZGluZzogLjNlbSAwO1xuICAgIGhlaWdodDogMS42ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gIC51c2VycyBsaS5zZWxlY3RlZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JCRDhEQyAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAudXNlcnMgbGk6aG92ZXIge1xuICAgIGNvbG9yOiAjNjA3RDhCO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XG4gICAgbGVmdDogLjFlbTtcbiAgfVxuICAudXNlcnMgLnRleHQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0zcHg7XG4gIH1cbiAgLnVzZXJzIC5iYWRnZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMXB4O1xuICAgIHRvcDogLTRweDtcbiAgICBoZWlnaHQ6IDEuOGVtO1xuICAgIG1hcmdpbi1yaWdodDogLjhlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbiAgfVxuXG4gIC53cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwcHggMTUwcHggMjAwcHggMTUwcHggMTUwcHggMjAwcHg7XG4gICAgICBncmlkLWdhcDogMXB4OyAgXG4gICAgICAgICAgICBcbiAgICB9XG4gICAgLndyYXBwZXItaGVhZGVye1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCAxNTBweCAyMDBweCAxNTBweCAxNTBweCAyMDBweDtcbiAgICAgIGdyaWQtZ2FwOiAxcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgICAgZm9udC1zaXplOiAxNHB4OyAgICAgIFxuICAgIH1cblxuICAgIGhyIHsgXG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XG4gICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xuICAgIH1cbiAgICBcblxuXG4gIC5mb3JtLWNvbnRyb2xcbiAge1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbiAgLnJvd3tcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgLmJ0biBidG4tcHJpbWFyeVxuICB7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBoZWlnaHQ6IDVweDsgICBcbiAgfVxuICAuZXJyb3Ige1xuICAgICAgY29sb3I6IHJlZDsgICAgXG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIH1cbiAgICBcbiBcbiAgXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/uicomponents/ViewUsers/viewusers.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/uicomponents/ViewUsers/viewusers.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-nav></app-nav>\n\n<h3>Search Users</h3>\n\n<div>\n  <Table>\n    <TR>\n      <TD>\n        First Name: \n      </TD>\n      <TD>\n        <input  enabled=true  name=\"firstnameforsearch\" id=\"firstnameforsearch\">\n      </TD>\n      <TD>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Last Name:\n      </TD>\n      <TD>\n        <input  enabled=true  name=\"lastnameforsearch\" id=\"lastnameforsearch\">\n      </TD>\n     \n    </TR>  \n    <p></p>\n    <TR>\n        <TD>\n           User Name:\n       </TD>\n       <TD>\n        <input  enabled=true  name=\"usernameforsearch\" id=\"usernameforsearch\">\n       </TD>\n       <TD>\n       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Emp Id:\n       </TD>\n       <TD>\n        <input  enabled=true  name=\"empidforsearch\" id=\"empidforsearch\">\n       </TD>\n    </TR>\n    <TR>\n      <TD>&nbsp;</TD><TD>&nbsp;</TD>\n    </TR>   \n  <TR>\n    <TD colspan=\"2\">\n      <span>\n        <button type=\"button\" class=\"btn btn-md btn-primary\" (click)=\"SearchUser()\" name=\"btnSearchUser\" id=\"btnSearchUser\">\n            <span class=\"glyphicon glyphicon-search\"></span> Search Users\n        </button>\n      </span>\n    </TD>\n    <TD colspan=\"2\">  \n      <span>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type=\"button\" class=\"btn btn-md btn-primary\" (click)=\"ClearSearchUsers()\" name=\"btnClear\" id=\"btnClear\">\n          <span class=\"glyphicon glyphicon-remove\"></span> Clear Search\n        </button>\n      </span>\n    </TD>\n  </TR>\n</Table>\n<HR>\n</div>\n\n\n<div>\n  <Table>\n      <TR>\n        <TD>\n  \n  <h3><Font color='navy' ><u>View/Edit User </u></Font></h3>  \n  <div>\n      <span>\n          <button type=\"button\" class=\"btn btn-md btn-primary\" (click)=\"ViewUser(1)\" name=\"btnViewUser\" id=\"btnViewUser\">\n            <span class=\"glyphicon glyphicon-zoom-in\"></span> View User\n          </button>\n      </span>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      <span>\n        <button type=\"button\" class=\"btn btn-md btn-primary\" (click)=\"AddUser(1)\" name=\"btnAddUser\" id=\"btnAddUser\">\n          <span class=\"glyphicon glyphicon-plus\"></span> Add User\n        </button>\n    </span>\n  \n  <P></P>\n  <P></P>\n  \n   \n    <table class=\"table table-hover table-bordered\" style=\"width:100%;\">\n        <thead class=\"thead-dark\">\n          <tr>\n            <th>User Id</th>\n            <th>User Name</th>\n            <th>FirstName</th>\n            <th>LastName</th>\n            <th>Emp Id</th>\n            <th></th>\n            <th></th>\n          </tr>\n        </thead>\n      <tr *ngFor=\"let user of users\"\n      [class.selected]=\"user === selectedUser\" (click)=\"onSelect(user)\">\n        <td>{{user.UserId}}</td>\n        <td>{{user.UserName}}</td>\n        <td>{{user.FirstName}}</td>\n        <td>{{user.LastName}}</td>\n        <td>{{user.EmpId}}</td>\n        <td><button type=\"button\" class=\"btn btn-md btn-primary\" (click)=\"EditUser(this.selectedUser)\">\n            <span class=\"glyphicon glyphicon-edit\"></span> Edit \n          </button></td>\n          <td><button type=\"button\" class=\"btn btn-md btn-primary\" (click)=\"DeleteUser(user)\">\n              <span class=\"glyphicon glyphicon-remove\"></span> Delete \n            </button></td>\n      </tr>\n    </table>\n   \n  <div *ngIf=\"selectedUser\" >\n    <P></P>\n    <P></P>\n   <HR>  \n    \n    \n    <h3><Font color='navy'><u>{{selectedUser.FirstName|uppercase}}  {{selectedUser.LastName|uppercase}} Details</u></Font></h3>\n    <div class=\"panel panel-default\">\n      <table class=\"table\">\n          <tr>\n            <th>\n                User Name:\n            </th>\n            <th>\n                <input [(ngModel)]=\"selectedUser.UserName\" placeholder=\"username\" value=\"{{selectedUser.UserName}}\" enabled=true class=\"form-control\" id=\"username\" name=\"username\" disabled >\n            </th>           \n            <th>Emp Id</th>\n            <th><input [(ngModel)]=\"selectedUser.EmpId\" placeholder=\"EmpId\"  value=\"{{selectedUser.EmpId}}\"  enabled=true class=\"form-control\" id=\"empid\" name=\"empid\"  ></th>\n           \n          </tr>\n          <tr>\n            <th>First Name</th>\n            <th><input [(ngModel)]=\"selectedUser.FirstName\" placeholder=\"firstname\" value=\"{{selectedUser.FirstName}}\" enabled=true class=\"form-control\" id=\"firstname\" name=\"firstname\" disabled ></th>\n            <th>Last Name</th>\n            <th><input [(ngModel)]=\"selectedUser.LastName\" placeholder=\"LastName\"  value=\"{{selectedUser.LastName}}\"  enabled=true class=\"form-control\" id=\"lastname\" name=\"lastname\"  disabled></th>\n          </tr>          \n          <tr>\n            <th>Project</th>\n            <th><select class=\"form-control\" [(ngModel)] = \"selectedUser.ProjectId\" placeholder=\"ProjectId\"  value=\"{{selectedUser.ProjectId}}\" enabled=true  id=\"projectid\" name=\"projectid\"  > \n                <option value=\"0\">----Select Project----</option>\n                <option *ngFor = \"let prj of projects\" value={{prj.ProjectId}}>\n                  {{prj.ProjectName}}\n                </option>\n              </select> </th>\n            <th>Current Task</th>\n            <th><select class=\"form-control\" [(ngModel)] = \"selectedUser.TaskId\" placeholder=\"TaskId\"  value=\"{{selectedUser.TaskId}}\" enabled=true  id=\"taskid\" name=\"taskid\"  > \n                \n                <option value=\"-1\">----Select Task----</option>\n                <option value=\"0\">----No Task Assigned----</option>\n                <option *ngFor = \"let tsk of tasks\" value={{tsk.TaskID}}>\n                  {{tsk.TaskName}}\n                </option>\n              </select></th>\n          </tr>\n          <tr>\n            <th colspan=\"2\" style=\"text-align: center\"><button type=\"button\" class=\"btn btn-md btn-primary\" (click)=\"UpdateUser(this.selectedUser)\" name=\"btnUpdateUser\" id=\"btnUpdateUser\">\n                <span class=\"glyphicon glyphicon-ok\"></span> Save User\n              </button></th>\n            <th colspan=\"2\" style=\"text-align: center\"><button type=\"button\" class=\"btn btn-md btn-primary\" (click)=\"CancelEdit()\" name=\"btnLogout\" id=\"btnLogout\">\n                <span class=\"glyphicon glyphicon-remove\"></span> Cancel\n              </button></th>\n          </tr>\n        </table>\n    </div>\n    \n\n  </div>\n  \n  <HR>  \n  \n  </div>\n  </TD>\n  </TR>\n  </Table>\n  </div>"

/***/ }),

/***/ "./src/app/uicomponents/addnewtasks/addnewtasks.component.css":
/*!********************************************************************!*\
  !*** ./src/app/uicomponents/addnewtasks/addnewtasks.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    border-collapse: collapse;\n}\ntable, th, td {\n    border: 2px solid #369;\n}\n.error {\n    color: red;\n}\n.success {\n    color: green;\n}\n.form-control\n  {\n      width:250px;\n      display: inline;\n      margin-right: 5px;\n  }\n.row{\n      margin-top: 5px;\n       margin-bottom: 5px;\n  }\n.btn btn-primary\n  {\n  padding-right: 10px;\n  }\n.error {\n      color: red;    \n      font-size: 12px;\n      font-style: italic;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWljb21wb25lbnRzL2FkZG5ld3Rhc2tzL2FkZG5ld3Rhc2tzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBRUU7O01BRUksV0FBVztNQUNYLGVBQWU7TUFDZixpQkFBaUI7RUFDckI7QUFDQTtNQUNJLGVBQWU7T0FDZCxrQkFBa0I7RUFDdkI7QUFDQTs7RUFFQSxtQkFBbUI7RUFDbkI7QUFDQTtNQUNJLFVBQVU7TUFDVixlQUFlO01BQ2Ysa0JBQWtCO0VBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdWljb21wb25lbnRzL2FkZG5ld3Rhc2tzL2FkZG5ld3Rhc2tzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cbnRhYmxlLCB0aCwgdGQge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzNjk7XG59XG4uZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG59XG4uc3VjY2VzcyB7XG4gICAgY29sb3I6IGdyZWVuO1xufSBcblxuICAuZm9ybS1jb250cm9sXG4gIHtcbiAgICAgIHdpZHRoOjI1MHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbiAgLnJvd3tcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgLmJ0biBidG4tcHJpbWFyeVxuICB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmVycm9yIHtcbiAgICAgIGNvbG9yOiByZWQ7ICAgIFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/uicomponents/addnewtasks/addnewtasks.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/uicomponents/addnewtasks/addnewtasks.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<h4><Font color='navy'><u>Create New Task </u></Font></h4>\n<p *ngIf=\"dataSaved && taskForm.pristine\" ngClass = \"success\">\nTask created successfully.\n</p>\n\n\n<form [formGroup]=\"taskForm\" (ngSubmit)=\"onFormSubmit()\">\n\n\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"panel panel-primary\">\n\t\t\t\t  <div class=\"panel-heading\">Add New Task</div>\n\t\t\t\t  <div class=\"panel-body\">\n\n\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<div class=\"row \">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3 \">\n\t\t\t\t\t\t\t\t\t\t<label for=\"lblProjectId\">Project :</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 \">\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"ProjectId\"> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\">----Select Project----</option>\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let prj of allProjects\" [ngValue]=\"prj.ProjectId\" value={{prj.ProjectId}}>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ prj.ProjectName }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t <div *ngIf=\"ProjectId.dirty && ProjectId.errors\" class = \"error\"> \n\t\t\t\t\t\t\t\t\t\t\t\t\t <div *ngIf=\"ProjectId.errors.required\"> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProject required.\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\t\t\t   \n\t\t\t\t\t\t\t\t\t\t\t\t </div>\t\t\t\t\t\t\t  \n\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div >\n\t\t\t\t\t  <div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t  <label for=\"lblTaskName\" >Task Name</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t  <input type=\"text\"  id=\"TaskName\" placeholder=\"Enter Task Name\" formControlName=\"TaskName\"\n\t\t\t\t\t\t\trequired  maxlength=\"30\" minlength=\"5\"    class=\"form-control\">\n\t\t\t\t\t\t\t<div *ngIf=\"TaskName.dirty && TaskName.errors\" class = \"error\"> \n\t\t\t\t\t\t\t\t\t<div *ngIf=\"TaskName.errors.required\"> \n\t\t\t\t\t\t\t\t   TaskName required.\n\t\t\t\t\t\t\t\t </div>\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t<div>\n\t\t\t\t\t  <div class=\"row \">\n\t\t\t\t\t\t<div class=\"col-sm-3 \">\n\t\t\t\t\t\t  <label for=\"lblTaskDescription\">Task Description :</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-8 \">\n\t\t\t\t\t\t  <input id=\"TaskDescription\" type=\"text\"  placeholder=\"Enter Task Description \" formControlName=\"TaskDescription\" \n\t\t\t\t\t\t\trequired  maxlength=\"50\" class=\"form-control\">\n\t\t  \n\t\t\t\t\t\t\t<div *ngIf=\"TaskDescription.dirty && TaskDescription.errors\" class = \"error\"> \n\t\t\t\t\t\t\t\t\t<div *ngIf=\"TaskDescription.errors.required\"> \n\t\t\t\t\t\t\t\t  Task Description required.\n\t\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t</div>\t\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div >\n\t\t\t\t\t  <div class=\"row \">\n\t\t\t\t\t\t<div class=\"col-sm-3 \">\n\t\t\t\t\t\t  <label for=\"lblTaskPriority\">Task Priority:</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-8 \">\n\t\t\t\t\t\t  <input type=\"range\" enabled=true min=\"1\" max=\"30\"   name=\"rngPriority\" formControlName=\"TaskPriority\" width=\"20\" class=\"form-control\">\n\t\t\t\t\t\t  {{TaskPriority.value}}\n\t\t  \n\t\t\t\t\t\t  <div *ngIf=\"TaskPriority.dirty && TaskPriority.errors\" class = \"error\"> \n\t\t\t\t\t\t\t\t<div *ngIf=\"TaskPriority.errors.required\"> \n\t\t\t\t\t\t\t\tTaskPriority required.\n\t\t\t\t\t\t\t\t</div>\t\t\t   \n\t\t\t\t\t\t\t  </div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div class=\"row \">\n\t\t\t\t\t\t\t  <div class=\"col-sm-3 \">\n\t\t\t\t\t\t\t\t<label for=\"lblStartDate\">Start Date:</label>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t  <div class=\"col-sm-8 \">\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"StartDate\" type=\"date\" >\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"StartDate.dirty && StartDate.errors\" class = \"error\"> \n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"StartDate.errors.required\"> \n\t\t\t\t\t\t\t\t\t\t\t StartDate required.\n\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t   \n\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div >\n\t\t\t\t\t\t\t<div class=\"row \">\n\t\t\t\t\t\t\t  <div class=\"col-sm-3 \">\n\t\t\t\t\t\t\t\t<label for=\"lblEndDate\">End Date:</label>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t  <div class=\"col-sm-8 \">\n\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"EndDate\" type=\"date\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"EndDate.dirty && EndDate.errors\" class = \"error\"> \n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"EndDate.errors.required\"> \n\t\t\t\t\t\t\t\t\t\t\t EndDate required.\n\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t   \n\t\t\t\t\t\t\t\t\t\t</div>\t\n\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div class=\"row \">\n\t\t\t\t\t\t\t  <div class=\"col-sm-3 \">\n\t\t\t\t\t\t\t\t<label for=\"lblTaskStatus\">Task Status :</label>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t  <div class=\"col-sm-8 \">\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"TaskStatus\"> \n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\">----Select Task Status----</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option>In Progress</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option>Completed</option>\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t <div *ngIf=\"TaskStatus.dirty && TaskStatus.errors\" class = \"error\"> \n\t\t\t\t\t\t\t\t\t\t\t <div *ngIf=\"TaskStatus.errors.required\"> \n\t\t\t\t\t\t\t\t\t\t\t\tTaskStatus required.\n\t\t\t\t\t\t\t\t\t\t\t </div>\t\t\t   \n\t\t\t\t\t\t\t\t\t\t </div>\t\t\t\t\t\t\t\t  \n\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div  >\n\t\t\t\t\t\t\t<div class=\"row \">\n\t\t\t\t\t\t\t  <div class=\"col-sm-3 \">\n\t\t\t\t\t\t\t\t<label for=\"lblParentTask\">Parent Task :</label>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t  <div class=\"col-sm-8 \">\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"selTaskName\" id=\"selTaskName\" (change)=\"SelectedTaskFromDropdown($event.target.value)\" formControlName=\"ParentTaskId\" >\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<option>----Select Parent Task----</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option>----No Parent Task----</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let tsk of tasksForParent\" [ngValue]=\"tsk.ParentTaskId\" value={{tsk.ParentTaskId}}>\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ tsk.ParentTaskName }}\n\t\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t <div *ngIf=\"ParentTaskId.dirty && ParentTaskId.errors\" class = \"error\"> \n\t\t\t\t\t\t\t\t\t\t\t <div *ngIf=\"ParentTaskId.errors.required\"> \n\t\t\t\t\t\t\t\t\t\t\tParentTaskId required.\n\t\t\t\t\t\t\t\t\t\t\t </div>\t\t\t   \n\t\t\t\t\t\t\t\t\t   </div>\t \n\t\t\t\t\t\t\t   </div>\t\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div >\n\t\t\t\t\t\t\t<div class=\"row \">\n\t\t\t\t\t\t\t  <div class=\"col-sm-3 \">\n\t\t\t\t\t\t\t\t<label for=\"lblAssignedTo\">Assigned To: :</label>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t  <div class=\"col-sm-8 \">\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t<select name=\"selTaskAssignedTo\" id=\"selTaskAssignedTo\" (change)=\"SelectedTaskAssignedToDropdown($event.target.value)\" formControlName=\"TaskAssignedTo\" class=\"form-control\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\">----Select Assigned To----</option>\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let usr of allUsers\" [ngValue]=\"usr.UserId\" value={{usr.UserId}}>\n\t\t\t\t\t\t\t\t\t\t\t\t{{ usr.UserName }}\n\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"TaskAssignedTo.dirty && TaskAssignedTo.errors\" class = \"error\"> \n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"TaskAssignedTo.errors.required\"> \n\t\t\t\t\t\t\t\t\t\t\t\t   Task Assigned To required.\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t   \n\t\t\t\t\t\t\t\t\t\t</div>\t \n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t</div>\n\t\t\t\t  \t\t<div class=\"panel-footer\">\n\t\t\t\t\t<div class=\"pull-right\">\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t<button [disabled]=\"taskForm.invalid\"  class=\"btn btn-md btn-primary\"><span class=\"glyphicon glyphicon-ok\"></span>Submit</button>&nbsp;\n\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-success\" style=\"width:80px;\"><span class=\"glyphicon glyphicon-remove\"></span>Cancel</button>&nbsp;\n\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t</div>\t\t\n</form>\n\n\t \n"

/***/ }),

/***/ "./src/app/uicomponents/addnewtasks/addnewtasks.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/uicomponents/addnewtasks/addnewtasks.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddNewTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewTasksComponent", function() { return AddNewTasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_PMTaskServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/PMTaskServices */ "./src/app/Services/PMTaskServices.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_PMUserServices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/PMUserServices */ "./src/app/Services/PMUserServices.ts");






var AddNewTasksComponent = /** @class */ (function () {
    function AddNewTasksComponent(formBuilder, objTaskService, router, objUserService) {
        this.formBuilder = formBuilder;
        this.objTaskService = objTaskService;
        this.router = router;
        this.objUserService = objUserService;
        this.dataSaved = false;
        this.tasksForParent = [];
        this.routerlocal = router;
        this.getAllUsers();
        this.getAllProjects();
    }
    AddNewTasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskForm = this.formBuilder.group({
            TaskName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            TaskDescription: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            TaskPriority: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            StartDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            EndDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            TaskStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            ParentTaskId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            TaskAssignedTo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            ProjectId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.objTaskService.GetAllParentTasks()
            .subscribe(function (tasksnewForParent) { return _this.tasksForParent = tasksnewForParent; });
    };
    AddNewTasksComponent.prototype.onFormSubmit = function () {
        var _this = this;
        this.dataSaved = false;
        var task = this.taskForm.value;
        this.objTaskService.GetAllTasks().subscribe(function (tasks) {
            // let maxIndex = tasks.length - 1;
            // let maxIndexItem = tasks[maxIndex];
            // if (maxIndexItem==null)
            //   task.TaskId = 0;
            // else
            //   task.TaskId = parseInt(maxIndexItem.id) + 1;
            task.TaskId = 0;
            _this.CreateTask(task);
        });
        this.taskForm.reset();
    };
    AddNewTasksComponent.prototype.getAllProjects = function () {
        var _this = this;
        this.objUserService.getProjects()
            .subscribe(function (projectsnew) { return _this.allProjects = projectsnew; });
    };
    AddNewTasksComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.objTaskService.GetAllUsers()
            .subscribe(function (usersnew) { return _this.allUsers = usersnew; });
    };
    //   doLogout(values: any)
    //   {     
    //         this.routerlocal.navigateByUrl("/login"); 
    //  }
    AddNewTasksComponent.prototype.CreateTask = function (task) {
        var _this = this;
        this.objTaskService.AddTask(task).subscribe(function (task) {
            console.log(task);
            _this.dataSaved = true;
            _this.LoadAllTasks();
        }, function (err) {
            console.log(err);
        });
    };
    AddNewTasksComponent.prototype.LoadAllTasks = function () {
        this.allTasks$ = this.objTaskService.GetAllTasks();
    };
    AddNewTasksComponent.prototype.SelectedTaskFromDropdown = function (selectedTaskID) {
        this.selectedTaskFromDropdownList = selectedTaskID;
    };
    AddNewTasksComponent.prototype.SelectedTaskAssignedToDropdown = function (selectedAssignedTo) {
        this.selectedAssignedToDropdownList = selectedAssignedTo;
    };
    AddNewTasksComponent.prototype.SelectedProjectAssignedToDropdown = function (selectedProjectAssignedTo) {
        this.selectedProjectAssignedToDropdownList = selectedProjectAssignedTo;
    };
    Object.defineProperty(AddNewTasksComponent.prototype, "TaskName", {
        get: function () {
            return this.taskForm.get('TaskName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddNewTasksComponent.prototype, "TaskDescription", {
        get: function () {
            return this.taskForm.get('TaskDescription');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddNewTasksComponent.prototype, "TaskPriority", {
        get: function () {
            return this.taskForm.get('TaskPriority');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddNewTasksComponent.prototype, "StartDate", {
        get: function () {
            return this.taskForm.get('StartDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddNewTasksComponent.prototype, "EndDate", {
        get: function () {
            return this.taskForm.get('EndDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddNewTasksComponent.prototype, "TaskStatus", {
        get: function () {
            return this.taskForm.get('TaskStatus');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddNewTasksComponent.prototype, "ParentTaskId", {
        get: function () {
            return this.taskForm.get('ParentTaskId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddNewTasksComponent.prototype, "TaskAssignedTo", {
        get: function () {
            return this.taskForm.get('TaskAssignedTo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddNewTasksComponent.prototype, "ProjectId", {
        get: function () {
            return this.taskForm.get('ProjectId');
        },
        enumerable: true,
        configurable: true
    });
    AddNewTasksComponent.prototype.ViewTask = function (values) {
        this.routerlocal.navigateByUrl("/appnewtasks");
    };
    AddNewTasksComponent.prototype.SaveTask = function () {
        var _this = this;
        var task = { TaskID: 2, TaskName: 'Java Functional Interface',
            TaskDescription: 'Java 8', TaskPriority: 3,
            StartDate: '01/16/2019', EndDate: '01/31/2019',
            TaskStatus: 'In Prpgress', ParentTaskId: '1', TaskAssignedTo: '1', ProjectId: 1
        };
        this.objTaskService.PostTask(task).subscribe(function (res) {
            var taskObj = res.body;
            console.log(taskObj.TaskName);
            console.log(res.headers.get('Content-Type'));
            _this.LoadAllTasks();
        }, function (err) {
            if (err.error instanceof Error) {
                //A client-side or network error occurred.				 
                console.log('An error occurred:', err.error.message);
            }
            else {
                //Backend returns unsuccessful response codes such as 404, 500 etc.				 
                console.log('Backend returned status code: ', err.status);
                console.log('Response body:', err.error);
            }
        });
    };
    AddNewTasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addnewtasks',
            template: __webpack_require__(/*! ./addnewtasks.component.html */ "./src/app/uicomponents/addnewtasks/addnewtasks.component.html"),
            styles: [__webpack_require__(/*! ./addnewtasks.component.css */ "./src/app/uicomponents/addnewtasks/addnewtasks.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _Services_PMTaskServices__WEBPACK_IMPORTED_MODULE_3__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _Services_PMUserServices__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], AddNewTasksComponent);
    return AddNewTasksComponent;
}());



/***/ }),

/***/ "./src/app/uicomponents/nav/nav/nav.component.css":
/*!********************************************************!*\
  !*** ./src/app/uicomponents/nav/nav/nav.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container-fluid\n{\n    color: blue;    \n    font-size: 14px;\n    font-style: normal; \n    background:#b7ebe4;\n}\n.navbar-inverse .navbar-nav>.active>a, .navbar-inverse .navbar-nav>.active>a:focus, .navbar-inverse .navbar-nav>.active>a:hover {\n    background-color: #a4d6de;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWljb21wb25lbnRzL25hdi9uYXYvbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztJQUVJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0VBQzNCIiwiZmlsZSI6InNyYy9hcHAvdWljb21wb25lbnRzL25hdi9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250YWluZXItZmx1aWRcbntcbiAgICBjb2xvcjogYmx1ZTsgICAgXG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG4gICAgYmFja2dyb3VuZDojYjdlYmU0O1xufVxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2Pi5hY3RpdmU+YSwgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2Pi5hY3RpdmU+YTpmb2N1cywgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2Pi5hY3RpdmU+YTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E0ZDZkZTtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/uicomponents/nav/nav/nav.component.html":
/*!*********************************************************!*\
  !*** ./src/app/uicomponents/nav/nav/nav.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<nav class=\"navbar navbar-inverse navbar-fixed\">\n  <div class=\"container-fluid\">\n       <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/projectdashboard']\"><Font color='navy'><u>Dashboard</u></Font></a></li>\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/user']\"><Font color='navy'><u>Add User</u></Font></a></li>\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/viewusers']\"><Font color='navy'><u>View/Edit User</u></Font></a></li>\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/project']\"><Font color='navy'><u>Add Project</u></Font></a></li>\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/viewprojects']\"><Font color='navy'><u>View/Edit Project</u></Font></a></li>\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/appaddnewtasks']\"><Font color='navy'><u>Add Task</u></Font></a></li>\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/appnewtasks']\"><Font color='navy' ><u>View/Edit Task</u></Font></a></li>        \n      </ul>\n      <!-- <a style=\"float: right\" align=\"right\" class=\"navbar-brand\"[routerLink]=\"['/login']\"><Font color='navy' ><u>Logout</u></Font></a> -->\n    </div><!-- /.navbar-collapse -->\n\n     <div class=\"navbar-header\" >\n      \n    </div>\n\n  </div><!-- /.container-fluid -->\n</nav>"

/***/ }),

/***/ "./src/app/uicomponents/nav/nav/nav.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/uicomponents/nav/nav/nav.component.ts ***!
  \*******************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/uicomponents/nav/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/uicomponents/nav/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/uicomponents/project/project.component.css":
/*!************************************************************!*\
  !*** ./src/app/uicomponents/project/project.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control{\n    width: 250px;\n    display: inline;\n    margin-right: 5px;\n}\n.row{\n    margin-top: 5px;\n     margin-bottom: 5px;\n}\n.btn btn-primary\n{\npadding-right: 10px;\n}\n.error {\n    color: red;    \n    font-size: 12px;\n    font-style: italic;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWljb21wb25lbnRzL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7S0FDZCxrQkFBa0I7QUFDdkI7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkI7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdWljb21wb25lbnRzL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLnJvd3tcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5idG4gYnRuLXByaW1hcnlcbntcbnBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4uZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7ICAgIFxuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/uicomponents/project/project.component.html":
/*!*************************************************************!*\
  !*** ./src/app/uicomponents/project/project.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n\n<h4><Font color='navy'><u>Create New Project </u></Font></h4>\n<p *ngIf=\"dataSaved && projectForm.pristine\" ngClass = \"success\">\nProject created successfully.\n</p>\n\n\n<form [formGroup]=\"projectForm\" (ngSubmit)=\"onFormSubmit()\">\n\n\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"panel panel-primary\">\n\t\t\t\t  <div class=\"panel-heading\">Add New Project</div>\n\t\t\t\t  <div class=\"panel-body\">\n\n\t\t\t\t\t<div >\n\t\t\t\t\t  <div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t  <label for=\"lblProjectName\" >Project Name</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t  <input type=\"text\"  id=\"ProjectName\" placeholder=\"Enter Project Name\" formControlName=\"ProjectName\"\n\t\t\t\t\t\t\trequired  maxlength=\"30\" minlength=\"5\"    class=\"form-control\">\n\t\t\t\t\t\t\t<div *ngIf=\"ProjectName.dirty && ProjectName.errors\" class = \"error\"> \n\t\t\t\t\t\t\t\t\t<div *ngIf=\"ProjectName.errors.required\"> \n                      ProjectName required.\n\t\t\t\t\t\t\t\t </div>\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n        \n          \t\t\t\t\n\n\n\t\t\t\t\t<div >\n\t\t\t\t\t  <div class=\"row \">\n\t\t\t\t\t\t<div class=\"col-sm-3 \">\n\t\t\t\t\t\t  <label for=\"lblProjectPriority\">Project Priority:</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-8 \">\n\t\t\t\t\t\t  <input type=\"range\" enabled=true min=\"1\" max=\"30\"   name=\"rngPriority\" formControlName=\"ProjectPriority\" width=\"20\" class=\"form-control\">\n\t\t\t\t\t\t  {{ProjectPriority.value}}\n\t\t  \n\t\t\t\t\t\t  <div *ngIf=\"ProjectPriority.dirty && ProjectPriority.errors\" class = \"error\"> \n\t\t\t\t\t\t\t\t<div *ngIf=\"ProjectPriority.errors.required\"> \n                    ProjectPriority required.\n\t\t\t\t\t\t\t\t</div>\t\t\t   \n\t\t\t\t\t\t\t  </div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\n\n\n\n\n\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div class=\"row \">\t\t\t\t\t\t\t \n                \n                <div class=\"col-sm-3\">\n                  <input  id=\"chkStartEnd\" type=\"checkbox\" name=\"chkStartEnd\" #chkEnable ng-model  (change)=\"chkStartEndChanged()\">\n                  <label for=\"chkStartEnd\">Set Start and End Date:</label>\n                  <p></p>\n                </div>\n            \n\t\t\t\t\t\t\t  <div class=\"col-sm-8 \">\n\t\t\t\t\t\t\t\t\t\t<input formControlName=\"ProjectStartDate\" type=\"date\" [disabled]=\"!chkEnable.checked\"  [ngModel]=\"projectData.ProjectStartDate | date:'yyyy-MM-dd'\" required ProjectStartDate=\"ngModel\">(dd-mm-yyyy) \n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"ProjectStartDate.dirty && ProjectStartDate.errors\" class = \"error\"> \n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"ProjectStartDate.errors.required\"> \n\t\t\t\t\t\t\t\t\t\t\t Project Start Date required.\n\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t   \n\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div >\n\t\t\t\t\t\t\t<div class=\"row \">\n\t\t\t\t\t\t\t  <div class=\"col-sm-3 \">\n\t\t\t\t\t\t\t\t<label for=\"lblEndDate\">Project End Date:</label>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t  <div class=\"col-sm-8 \">\n\n\t\t\t\t\t\t\t\t\t\t<input formControlName=\"ProjectEndDate\" type=\"date\" [disabled]=\"!chkEnable.checked\"  [ngModel]=\"projectData.ProjectEndDate | date:'yyyy-MM-dd'\" required ProjectEndDate=\"ngModel\" >(dd-mm-yyyy)\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"ProjectEndDate.dirty && ProjectEndDate.errors\" class = \"error\"> \n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"ProjectEndDate.errors.required\"> \n\t\t\t\t\t\t\t\t\t\t\t Project End Date required.\n\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t   \n\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\n\n\n\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div class=\"row \">\n\t\t\t\t\t\t\t  <div class=\"col-sm-3 \">\n\t\t\t\t\t\t\t\t<label for=\"lblProjectStatus\">Project Status :</label>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t  <div class=\"col-sm-8 \">\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"ProjectStatus\"> \n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\">----Select Project Status----</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"In Progress\">In Progress</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Suspend\">Suspend</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Completed\">Completed</option>\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t <div *ngIf=\"ProjectStatus.dirty && ProjectStatus.errors\" class = \"error\"> \n\t\t\t\t\t\t\t\t\t\t\t <div *ngIf=\"ProjectStatus.errors.required\"> \n                          ProjectStatus required.\n\t\t\t\t\t\t\t\t\t\t\t </div>\t\t\t   \n\t\t\t\t\t\t\t\t\t\t </div>\t\t\t\t\t\t\t\t  \n\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\t\t\t\t\n\n\n\n\t\t\t\t\t<div >\n\t\t\t\t\t\t\t<div class=\"row \">\n\t\t\t\t\t\t\t  <div class=\"col-sm-3 \">\n\t\t\t\t\t\t\t\t<label for=\"selProjectAssignedTo\" name=\"manager\">Project Manager :</label>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t  <div class=\"col-sm-8 \">                           \n                \n\t\t\t\t\t\t\t\t\t<select name=\"selProjectAssignedTo\" id=\"selProjectAssignedTo\" (change)=\"ProjectAssignedToDropdown($event.target.value)\" formControlName=\"UserId\" class=\"form-control\">\n\t\t\t\t\t\t\n                      <option value=\"0\">----Select Assigned To----</option>\n                      \n                      <option *ngFor = \"let user of allUsers\" value={{user.UserId}}>\n                        {{user.UserName}}</option>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</select>\n                  \n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"UserId.dirty && UserId.errors\" class = \"error\"> \n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"UserId.errors.required\"> \n\t\t\t\t\t\t\t\t\t\t\t\t   Project Manager required.\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t   \n\t\t\t\t\t\t\t\t\t\t</div>\t \n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t</div>\n\t\t\t\t  \t\t<div class=\"panel-footer\">\n\t\t\t\t\t<div class=\"pull-right\">\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t<button [disabled]=\"projectForm.invalid\"  class=\"btn btn-md btn-primary\">Submit</button>&nbsp;\n\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-success\" style=\"width:80px;\">Reset</button>&nbsp;\n\t\t\t\t\t\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-md btn-primary\" (click)=\"ViewProject(1)\" name=\"btnViewProjects\" id=\"btnViewProjects\">\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-edit\"></span> View Projects\n\t\t\t\t\t\t\t</button>&nbsp;\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t</div>\t\t\n</form>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/uicomponents/project/project.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/uicomponents/project/project.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_PMProjectServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/PMProjectServices */ "./src/app/Services/PMProjectServices.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_PMTaskServices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/PMTaskServices */ "./src/app/Services/PMTaskServices.ts");







var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(formBuilder, objTaskService, objProjectService, modalService, router) {
        this.formBuilder = formBuilder;
        this.objTaskService = objTaskService;
        this.objProjectService = objProjectService;
        this.modalService = modalService;
        this.router = router;
        this.dataSaved = false;
        this.tasksForProject = [];
        this.projectData = { ProjectId: null, ProjectName: '', ProjectStartDate: new Date(), ProjectEndDate: new Date(), ProjectPriority: 0, UserId: null, Users: null, Tasks: null };
        this.routerlocal = router;
        this.getAllUsers();
        this.LoadAllProjects();
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectForm = this.formBuilder.group({
            ProjectName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            ProjectPriority: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            ProjectStartDate: [{ value: new Date(), disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            ProjectEndDate: [{ value: new Date(), disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            ProjectStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            UserId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
        this.objProjectService.getProjects()
            .subscribe(function (tasksForProject) { return _this.tasksForProject = tasksForProject; });
    };
    ProjectComponent.prototype.onFormSubmit = function () {
        var _this = this;
        this.dataSaved = false;
        var project = this.projectForm.value;
        this.objProjectService.getProjects().subscribe(function (projects) {
            var maxIndex = projects.length - 1;
            var maxIndexItem = projects[maxIndex];
            project.ProjectId = 0;
            if (project.ProjectStartDate < new Date())
                project.ProjectStartDate = new Date();
            if (project.ProjectEndDate < new Date())
                project.ProjectEndDate = new Date();
            _this.CreateProject(project);
        });
        this.projectForm.reset();
    };
    ProjectComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.objTaskService.GetAllUsers()
            .subscribe(function (usersnew) { return _this.allUsers = usersnew; });
    };
    ProjectComponent.prototype.CreateProject = function (objProject) {
        var _this = this;
        this.objProjectService.addProject(objProject).subscribe(function (project) {
            console.log(project);
            if (project != null && project.ProjectId != -1) {
                _this.dataSaved = true;
                alert("Project is successfully created");
            }
            else {
                _this.dataSaved = false;
                alert("Project is already exists");
            }
            //this.LoadAllProjects();
        }, function (err) {
            console.log(err);
        });
        this.LoadAllProjects();
    };
    ProjectComponent.prototype.LoadAllProjects = function () {
        this.allProjects$ = this.objProjectService.getProjects();
    };
    ProjectComponent.prototype.ProjectAssignedToDropdown = function (selectedAssignedTo) {
        this.selectedAssignedToDropdownList = selectedAssignedTo;
    };
    Object.defineProperty(ProjectComponent.prototype, "ProjectName", {
        get: function () {
            return this.projectForm.get('ProjectName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectComponent.prototype, "ProjectPriority", {
        get: function () {
            return this.projectForm.get('ProjectPriority');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectComponent.prototype, "ProjectStartDate", {
        get: function () {
            return this.projectForm.get('ProjectStartDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectComponent.prototype, "ProjectEndDate", {
        get: function () {
            return this.projectForm.get('ProjectEndDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectComponent.prototype, "ProjectStatus", {
        get: function () {
            return this.projectForm.get('ProjectStatus');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectComponent.prototype, "UserId", {
        get: function () {
            return this.projectForm.get('UserId');
        },
        enumerable: true,
        configurable: true
    });
    ProjectComponent.prototype.ViewProject = function (values) {
        this.routerlocal.navigateByUrl("/viewprojects");
    };
    ProjectComponent.prototype.chkStartEndChanged = function () {
        if (this.projectForm.get('ProjectStartDate').enabled == false) {
            this.projectForm.get('ProjectStartDate').enable({ onlySelf: true });
            this.projectForm.get('ProjectEndDate').enable({ onlySelf: true });
        }
        else {
            this.projectForm.get('ProjectStartDate').disable({ onlySelf: true });
            this.projectForm.get('ProjectEndDate').disable({ onlySelf: true });
        }
    };
    ProjectComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template); // {3}
    };
    ProjectComponent.prototype.SaveProject = function () {
        var _this = this;
        var project = { ProjectId: 2, ProjectName: 'Project2',
            ProjectPriority: 3,
            ProjectStartDate: new Date('01/16/2019'), ProjectEndDate: new Date('01/31/2019'),
            //ProjectStatus:'In Prpgress', 
            UserId: 1,
            Users: null,
            Tasks: null
        };
        this.objProjectService.PostProject(project).subscribe(function (res) {
            var projectObj = res.body;
            console.log(projectObj.ProjectName);
            console.log(res.headers.get('Content-Type'));
            _this.LoadAllProjects();
        }, function (err) {
            if (err.error instanceof Error) {
                //A client-side or network error occurred.				 
                console.log('An error occurred:', err.error.message);
            }
            else {
                //Backend returns unsuccessful response codes such as 404, 500 etc.				 
                console.log('Backend returned status code: ', err.status);
                console.log('Response body:', err.error);
            }
        });
    };
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/uicomponents/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/uicomponents/project/project.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _Services_PMTaskServices__WEBPACK_IMPORTED_MODULE_6__["TaskService"], _Services_PMProjectServices__WEBPACK_IMPORTED_MODULE_3__["ProjectService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/uicomponents/user/user.component.css":
/*!******************************************************!*\
  !*** ./src/app/uicomponents/user/user.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control{\n    width: 350px;\n    display: inline;\n    margin-right: 5px;\n}\n.row{\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n.btn btn-primary\n{\npadding-right: 10px;\n}\n.error {\n    color: red;    \n    font-size: 12px;\n    font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWljb21wb25lbnRzL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkI7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdWljb21wb25lbnRzL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLnJvd3tcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmJ0biBidG4tcHJpbWFyeVxue1xucGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5lcnJvciB7XG4gICAgY29sb3I6IHJlZDsgICAgXG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/uicomponents/user/user.component.html":
/*!*******************************************************!*\
  !*** ./src/app/uicomponents/user/user.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n\n<p *ngIf=\"dataSaved && userForm.pristine\" ngClass = \"success\">\nUser created successfully.\n</p>\n\n<form [formGroup]=\"userForm\" (ngSubmit)=\"onFormSubmit()\">\n\n\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"panel panel-primary\">\n\t\t\t\t  <div class=\"panel-heading\">Add New User</div>\n\t\t\t\t  <div class=\"panel-body\">\n\n\t\t\t\t\t<div >\n\t\t\t\t\t  <div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t  <label for=\"lblFirestName\" >First Name</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t  <input type=\"text\"  id=\"FirstName\" placeholder=\"Enter First Name\" formControlName=\"FirstName\"\n\t\t\t\t\t\t\trequired  maxlength=\"30\" minlength=\"5\"    class=\"form-control\">\n\t\t\t\t\t\t\t<div *ngIf=\"FirstName.dirty && FirstName.errors\" class = \"error\"> \n\t\t\t\t\t\t\t\t\t<div *ngIf=\"FirstName.errors.required\"> \n\t\t\t\t\t\t\t\t   FirstName required.\n\t\t\t\t\t\t\t\t </div>\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t<div>\n\t\t\t\t\t  <div class=\"row \">\n\t\t\t\t\t\t<div class=\"col-sm-3 \">\n\t\t\t\t\t\t  <label for=\"lblLastName\">Last Name :</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-8 \">\n\t\t\t\t\t\t  <input id=\"LastName\" type=\"text\"  placeholder=\"Enter Last Name\" formControlName=\"LastName\" \n\t\t\t\t\t\t\trequired  maxlength=\"30\" class=\"form-control\">\n\t\t  \n\t\t\t\t\t\t\t<div *ngIf=\"LastName.dirty && LastName.errors\" class = \"error\"> \n\t\t\t\t\t\t\t\t\t<div *ngIf=\"LastName.errors.required\"> \n                      LastName required.\n\t\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t <div >\n\t\t\t\t\t  <div class=\"row \">\n\t\t\t\t\t\t<div class=\"col-sm-3 \">\n\t\t\t\t\t\t  <label for=\"lblUserName\">User Name:</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-8 \">\n\t\t\t\t\t\t  <input id=\"UserName\" type=\"text\" enabled=true min=\"3\" max=\"20\"   name=\"UserName\" formControlName=\"UserName\" width=\"20\" class=\"form-control\">\n\t\t\t\t\t\t\t<div *ngIf=\"UserName.dirty && UserName.errors\" class = \"error\"> \n\t\t\t\t\t\t\t\t<div *ngIf=\"UserName.errors.required\"> \n                    UserName required.\n\t\t\t\t\t\t\t\t</div>\t\t\t   \n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<!--<div>\n\t\t\t\t\t\t\t<div class=\"row \">\n\t\t\t\t\t\t\t  <div class=\"col-sm-3 \">\n\t\t\t\t\t\t\t\t<label for=\"lblUserPassword\">User Password:</label>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t  <div class=\"col-sm-8 \">\n\t\t\t\t\t\t\t\t\t\t<input formControlName=\"UserPassword\" type=\"password\"  class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"UserPassword.dirty && UserPassword.errors\" class = \"error\"> \n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"UserPassword.errors.required\"> \n                          UserPassword required.\n\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t   \n\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div> -->\n\n\t\t\t\t\t<div >\n\t\t\t\t\t\t\t<div class=\"row \">\n\t\t\t\t\t\t\t  <div class=\"col-sm-3 \">\n\t\t\t\t\t\t\t\t<label for=\"lblEmpId\">EmpId:</label>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t  <div class=\"col-sm-8 \">\n\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"EmpId\" type=\"text\" id=\"EmpId\" name=\"EmpId\" min=\"1\" max=\"10000\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"EmpId.dirty && EmpId.errors\" class = \"error\" class=\"form-control\"> \n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"EmpId.errors.required\"> \n                          EmpId required.\n\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t   \n\t\t\t\t\t\t\t\t\t\t</div>\t\n\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div class=\"row \">\n\t\t\t\t\t\t\t  <div class=\"col-sm-3 \">\n\t\t\t\t\t\t\t\t<label for=\"lblProjectId\">Project :</label>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t  <div class=\"col-sm-8 \">\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"ProjectId\"> \n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"-1\">----Select Project----</option>\n                        <option value=\"0\">No Project Assigned</option>\t\n                        <option *ngFor=\"let prj of allProjects\" [ngValue]=\"prj.ProjectId\" value={{prj.ProjectId}}>\n                            {{ prj.ProjectName }}\n                          </option>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t <div *ngIf=\"ProjectId.dirty && ProjectId.errors\" class = \"error\"> \n\t\t\t\t\t\t\t\t\t\t\t <div *ngIf=\"ProjectId.errors.required\"> \n                          Project required.\n\t\t\t\t\t\t\t\t\t\t\t </div>\t\t\t   \n\t\t\t\t\t\t\t\t\t\t </div>\t\t\t\t\t\t\t\t  \n\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div  >\n\t\t\t\t\t\t\t<div class=\"row \">\n\t\t\t\t\t\t\t  <div class=\"col-sm-3 \">\n\t\t\t\t\t\t\t\t<label for=\"lblTaskId\">Task :</label>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t  <div class=\"col-sm-8 \">\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"selTaskName\" id=\"selTaskName\" (change)=\"SelectedTaskFromDropdown($event.target.value)\" formControlName=\"TaskId\" >\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"-1\">----Select Task----</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\">----No Task Assigned----</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let tsk of tasks\" [ngValue]=\"tsk.TaskID\" value={{tsk.TaskID}}>\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ tsk.TaskName }}\n\t\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t <div *ngIf=\"TaskId.dirty && TaskId.errors\" class = \"error\"> \n\t\t\t\t\t\t\t\t\t\t\t <div *ngIf=\"TaskId.errors.required\"> \n\t\t\t\t\t\t\t\t\t\t\tTask required.\n\t\t\t\t\t\t\t\t\t\t\t </div>\t\t\t   \n\t\t\t\t\t\t\t\t\t </div>\t  \n\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t  \t\t<div class=\"panel-footer\">\n\t\t\t\t\t<div class=\"pull-right\">\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t<button [disabled]=\"userForm.invalid\"  class=\"btn btn-md btn-primary\">Submit</button>&nbsp;\n\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-success\" style=\"width:80px;\">Reset</button>&nbsp;\n\t\t\t\t\t\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-md btn-primary\" (click)=\"ViewUser(1)\" name=\"btnViewUser\" id=\"btnViewUser\">\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-edit\"></span> View Users\n\t\t\t\t\t\t\t</button>&nbsp;\n\t\t\t\t\t\n\t\t\t\t\t\t<!-- <button type=\"button\" class=\"btn btn-md btn-primary\" (click)=\"doLogout(1)\" name=\"btnLogout\" id=\"btnLogout\">\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-edit\"></span> Logout\n\t\t\t\t\t\t</button> -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\n</form>\n\n\t \n"

/***/ }),

/***/ "./src/app/uicomponents/user/user.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/uicomponents/user/user.component.ts ***!
  \*****************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_PMUserServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/PMUserServices */ "./src/app/Services/PMUserServices.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_PMTaskServices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/PMTaskServices */ "./src/app/Services/PMTaskServices.ts");






var UserComponent = /** @class */ (function () {
    function UserComponent(formBuilder, objUserService, objTaskService1, router) {
        this.formBuilder = formBuilder;
        this.objUserService = objUserService;
        this.router = router;
        this.dataSaved = false;
        this.projectsForNewUser = [];
        this.routerlocal = router;
        this.objTaskService = objTaskService1;
        this.getAllProjects();
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userForm = this.formBuilder.group({
            UserName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            //UserPassword: ['', [ Validators.required] ],
            FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            LastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            EmpId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            ProjectId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            TaskId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
        this.objUserService.getUsers()
            .subscribe(function (projectsForNewUser) { return _this.projectsForNewUser = projectsForNewUser; });
        this.getAllTasks();
    };
    UserComponent.prototype.onFormSubmit = function () {
        var _this = this;
        this.dataSaved = false;
        var user = this.userForm.value;
        this.objUserService.getUsers().subscribe(function (newusers) {
            var maxIndex = newusers.length - 1;
            var maxIndexItem = newusers[maxIndex];
            user.UserId = 0;
            _this.CreateNewUser(user);
        });
        this.userForm.reset();
    };
    UserComponent.prototype.getAllProjects = function () {
        var _this = this;
        this.objUserService.getProjects()
            .subscribe(function (allProjects) { return _this.allProjects = allProjects; });
    };
    UserComponent.prototype.getAllTasks = function () {
        var _this = this;
        this.objTaskService.GetAllTasks()
            .subscribe(function (tasksnew) { return _this.tasks = tasksnew; });
    };
    UserComponent.prototype.CreateNewUser = function (objUser) {
        var _this = this;
        this.objUserService.addNewUser(objUser).subscribe(function (user) {
            console.log(user);
            if (user != null) {
                _this.dataSaved = true;
                alert("User is successfully created");
            }
            else {
                _this.dataSaved = false;
                alert("User is already exists");
            }
            //this.LoadAllUsers();
        }, function (err) {
            console.log(err);
        });
        this.LoadAllUsers();
    };
    UserComponent.prototype.LoadAllUsers = function () {
        this.allUsers$ = this.objUserService.getUsers();
    };
    UserComponent.prototype.SelectedProjectFromDropdown = function (selectedProjectID) {
        this.selectedProjectFromDropdownList = selectedProjectID;
    };
    UserComponent.prototype.SelectedTaskFromDropdown = function (selectedTask) {
        this.selectTaskFromDropdownList = selectedTask;
    };
    Object.defineProperty(UserComponent.prototype, "FirstName", {
        get: function () {
            return this.userForm.get('FirstName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserComponent.prototype, "LastName", {
        get: function () {
            return this.userForm.get('LastName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserComponent.prototype, "UserName", {
        get: function () {
            return this.userForm.get('UserName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserComponent.prototype, "EmpId", {
        //  get UserPassword() {
        //   return this.userForm.get('UserPassword');
        // } 
        get: function () {
            return this.userForm.get('EmpId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserComponent.prototype, "ProjectId", {
        get: function () {
            return this.userForm.get('ProjectId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserComponent.prototype, "TaskId", {
        get: function () {
            return this.userForm.get('TaskId');
        },
        enumerable: true,
        configurable: true
    });
    UserComponent.prototype.ViewUser = function (values) {
        this.routerlocal.navigateByUrl("/viewusers");
    };
    UserComponent.prototype.SaveUser = function () {
        var _this = this;
        var user = { UserId: 2, UserName: 'Hamuman',
            FirstName: "Hanuman",
            LastName: 'Ji', EmpId: '2345',
            ProjectId: 2, TaskId: 2
        };
        this.objUserService.PostUser(user).subscribe(function (res) {
            var userObj = res.body;
            console.log(userObj.UserName);
            console.log(res.headers.get('Content-Type'));
            _this.LoadAllUsers();
        }, function (err) {
            if (err.error instanceof Error) {
                //A client-side or network error occurred.				 
                console.log('An error occurred:', err.error.message);
            }
            else {
                //Backend returns unsuccessful response codes such as 404, 500 etc.				 
                console.log('Backend returned status code: ', err.status);
                console.log('Response body:', err.error);
            }
        });
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/uicomponents/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/uicomponents/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _Services_PMUserServices__WEBPACK_IMPORTED_MODULE_3__["UserService"], _Services_PMTaskServices__WEBPACK_IMPORTED_MODULE_5__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/uicomponents/viewtasks/viewtasks.component.css":
/*!****************************************************************!*\
  !*** ./src/app/uicomponents/viewtasks/viewtasks.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroesComponent's private CSS styles */\n.selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n.tasks {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 78em;\n  }\n.tasks li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n.tasks li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n.tasks li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n.tasks .text {\n    position: relative;\n    top: -3px;\n  }\n.tasks .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n.wrapper {\n      display: grid;\n      grid-template-columns: 60px 150px 290px 40px 90px 90px 100px 90px 90px 110px 110px ;\n      grid-gap: 1px;  \n            \n    }\n.wrapper-header{\n      display: grid;\n      grid-template-columns: 60px 150px 290px 40px 90px 90px 100px 90px 90px 110px 110px ;\n      grid-gap: 1px;\n      background-color: #f1f1f1;\n      font-size: 14px;      \n    }\nhr { \n      display: block;\n      margin-top: 0.5em;\n      margin-bottom: 0.5em;\n      margin-left: auto;\n      margin-right: auto;\n      border-style: inset;\n      border-width: 1px;\n      background-color: brown;\n    }\n.form-control\n  {\n      width:250px;\n      display: inline;\n      margin-right: 5px;\n  }\n.row{\n      margin-top: 5px;\n       margin-bottom: 5px;\n  }\n.btn btn-primary\n  {\n  padding-right: 10px;\n  }\n.error {\n      color: red;    \n      font-size: 12px;\n      font-style: italic;\n  }\n  \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWljb21wb25lbnRzL3ZpZXd0YXNrcy92aWV3dGFza3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5Q0FBeUM7QUFDekM7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtFQUNkO0FBQ0E7SUFDRSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixXQUFXO0VBQ2I7QUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLG9DQUFvQztJQUNwQyxZQUFZO0VBQ2Q7QUFDQTtJQUNFLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsVUFBVTtFQUNaO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztFQUNYO0FBQ0E7SUFDRSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDBCQUEwQjtFQUM1QjtBQUVBO01BQ0ksYUFBYTtNQUNiLG1GQUFtRjtNQUNuRixhQUFhOztJQUVmO0FBQ0E7TUFDRSxhQUFhO01BQ2IsbUZBQW1GO01BQ25GLGFBQWE7TUFDYix5QkFBeUI7TUFDekIsZUFBZTtJQUNqQjtBQUVBO01BQ0UsY0FBYztNQUNkLGlCQUFpQjtNQUNqQixvQkFBb0I7TUFDcEIsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLHVCQUF1QjtJQUN6QjtBQUtBOztNQUVFLFdBQVc7TUFDWCxlQUFlO01BQ2YsaUJBQWlCO0VBQ3JCO0FBQ0E7TUFDSSxlQUFlO09BQ2Qsa0JBQWtCO0VBQ3ZCO0FBQ0E7O0VBRUEsbUJBQW1CO0VBQ25CO0FBQ0E7TUFDSSxVQUFVO01BQ1YsZUFBZTtNQUNmLGtCQUFrQjtFQUN0QiIsImZpbGUiOiJzcmMvYXBwL3VpY29tcG9uZW50cy92aWV3dGFza3Mvdmlld3Rhc2tzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZXJvZXNDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbi5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQyAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAudGFza3Mge1xuICAgIG1hcmdpbjogMCAwIDJlbSAwO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiA3OGVtO1xuICB9XG4gIC50YXNrcyBsaSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG4gICAgbWFyZ2luOiAuNWVtO1xuICAgIHBhZGRpbmc6IC4zZW0gMDtcbiAgICBoZWlnaHQ6IDEuNmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICAudGFza3MgbGkuc2VsZWN0ZWQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCQkQ4REMgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLnRhc2tzIGxpOmhvdmVyIHtcbiAgICBjb2xvcjogIzYwN0Q4QjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xuICAgIGxlZnQ6IC4xZW07XG4gIH1cbiAgLnRhc2tzIC50ZXh0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtM3B4O1xuICB9XG4gIC50YXNrcyAuYmFkZ2Uge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogLTFweDtcbiAgICB0b3A6IC00cHg7XG4gICAgaGVpZ2h0OiAxLjhlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IC44ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG4gIH1cblxuICAud3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IDE1MHB4IDI5MHB4IDQwcHggOTBweCA5MHB4IDEwMHB4IDkwcHggOTBweCAxMTBweCAxMTBweCA7XG4gICAgICBncmlkLWdhcDogMXB4OyAgXG4gICAgICAgICAgICBcbiAgICB9XG4gICAgLndyYXBwZXItaGVhZGVye1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCAxNTBweCAyOTBweCA0MHB4IDkwcHggOTBweCAxMDBweCA5MHB4IDkwcHggMTEwcHggMTEwcHggO1xuICAgICAgZ3JpZC1nYXA6IDFweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgICBmb250LXNpemU6IDE0cHg7ICAgICAgXG4gICAgfVxuXG4gICAgaHIgeyBcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLXRvcDogMC41ZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcbiAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XG4gICAgfVxuICAgIFxuICAgIFxuIFxuXG4gICAgLmZvcm0tY29udHJvbFxuICB7XG4gICAgICB3aWR0aDoyNTBweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG4gIC5yb3d7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG4gIC5idG4gYnRuLXByaW1hcnlcbiAge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5lcnJvciB7XG4gICAgICBjb2xvcjogcmVkOyAgICBcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgfVxuICBcbiAgIl19 */"

/***/ }),

/***/ "./src/app/uicomponents/viewtasks/viewtasks.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/uicomponents/viewtasks/viewtasks.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-nav></app-nav>\n\n<h3>Search Tasks</h3>\n<!--form [formGroup]=\"task_Form\" (ngSubmit)=\"onFormSubmit()\">-->\n<div>\n  <Table>\n    <TR>\n      <TD>\n        Task Name: \n      </TD>\n      <TD>\n        <input class=\"form-control\"  enabled=true  name=\"tasknameforsearch\" id=\"tasknameforsearch\">\n      </TD>\n      <!-- <TD>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Parent Task Name:\n      </TD>\n      <TD>\n        <input  class=\"form-control\" enabled=true  name=\"parenttasknameforsearch\" id=\"parenttasknameforsearch\">\n      </TD> -->\n    </TR>\n    <p></p>\n    <!-- <TR>\n      <TD>      \n        Priority From:\n      </TD>\n      <TD>    \n        <input class=\"form-control\"  enabled=true name=\"priorityFromforsearch\" id=\"priorityFromforsearch\">\n      </TD>\n      <TD>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Priority To: \n      </TD>\n      <TD>\n        <input class=\"form-control\"  enabled=true  name=\"priorityToforsearch\" id=\"priorityToforsearch\">\n      </TD>\n    </TR> -->\n    <p></p>\n    <TR>\n    <TD>\n      Start Date:\n    </TD>\n    <TD>\n      <input class=\"form-control\"  enabled=true  name=\"StartDateforsearch\" id=\"StartDateforsearch\" type=\"Date\">      \n    </TD>\n    <TD>\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;End Date: \n    </TD>\n    <TD>\n      <input class=\"form-control\"  enabled=true name=\"EndDateforsearch\" id=\"EndDateforsearch\" type=\"Date\">\n    </TD>\n  </TR>\n  <TR>\n    <TD>&nbsp;</TD><TD>&nbsp;</TD>\n  </TR>\n  <TR>\n    <TD colspan=\"2\">\n      <span>\n        <button type=\"button\" class=\"btn btn-md btn-primary\" (click)=\"SearchTask()\" name=\"btnSeacrhTask\" id=\"btnSearchTask\">\n            <span class=\"glyphicon glyphicon-zoom-in\"></span> Search Task\n        </button>\n      </span>\n    </TD>\n    <TD colspan=\"2\">  \n      <span>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type=\"button\" class=\"btn btn-md btn-primary\" (click)=\"ClearSearchTasks()\" name=\"btnClear\" id=\"btnClear\">\n          <span class=\"glyphicon glyphicon-remove\"></span> Clear Search\n        </button>\n      </span>\n    </TD>\n  </TR>\n</Table>\n<HR>\n</div>\n<!--</form>-->\n<div>\n  <Table>\n      <TR>\n        <TD>\n  \n  <h3><Font color='navy'><u>View/Edit Task </u></Font></h3>  \n  <div>\n     \n      <span>\n        <button type=\"button\" class=\"btn btn-md btn-primary\" (click)=\"AddTask(1)\" name=\"btnAddTask\" id=\"btnAddTask\">\n          <span class=\"glyphicon glyphicon-plus\"></span> Add Task\n        </button>\n    </span>\n  \n    <table class=\"table table-hover table-bordered\" style=\"width:100%;\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <!-- <th>Task ID</th> -->\n          <th>Task</th>\n          <th>Parent Task</th>\n          <!-- <th>Description</th> -->\n          <th>Priority</th>\n          <th>Start Date</th>\n          <th>End Date</th>\n          <!-- <th>Status</th>         \n          <th>Assigned To</th> -->\n          <th></th>\n          <th></th>\n        </tr>\n      </thead>\n      <tr *ngFor=\"let task of tasks\"\n      [class.selected]=\"task === selectedTask\" (click)=\"onSelect(task)\"> \n        <!-- <td>{{task.TaskID}}</td> -->\n        <td>{{task.TaskName}}</td>\n        <td>{{task.ParentTaskId}}</td>\n        <!-- <td>{{task.TaskDescription}}</td> -->\n        <td>{{task.TaskPriority}}</td>\n        <td>{{task.StartDate|date:'shortDate'}}</td>\n        <td>{{task.EndDate|date:'shortDate'}}</td>\n        <!-- <td>{{task.TaskStatus}}</td>        \n        <td>{{task.UserName}}</td> -->\n        <td><button type=\"button\" class=\"btn btn-md btn-primary\" (click)=\"EditTask(this.selectedTask)\">\n          <span class=\"glyphicon glyphicon-edit\"></span> Edit \n        </button></td>\n          <td><button type=\"button\" class=\"btn btn-md btn-primary\" (click)=\"EndTask(this.selectedTask)\">\n            <span class=\"glyphicon glyphicon-stop\"></span> End Task\n        </button></td>\n      </tr>\n    </table>\n   \n  <div *ngIf=\"selectedTask\" >\n    <P></P>\n   <HR>\n    \n   \n\n    <P></P>\n    <h3><Font color='navy'><u>{{selectedTask.TaskName | uppercase}} Details</u></Font></h3>\n\n    <div class=\"panel panel-default\">\n      <table class=\"table\">\n          <!-- <tr>\n            <th>Task ID</th>\n            <th>{{selectedTask.TaskID}}</th>\n            <th>Project</th>\n            <th><select class=\"form-control\" [(ngModel)] = \"selectedTask.ProjectId\" placeholder=\"projectId\"  value=\"{{selectedTask.ProjectId}}\" enabled=true  id=\"projectId\" name=\"projectId\"  > \n              <option value=\"0\">----Select Project----</option>\n              <option *ngFor = \"let prj of allProjects\" value={{prj.ProjectId}}>\n                {{prj.ProjectName}}\n              </option>\n            </select> </th>\n          </tr> -->\n          <tr>\n            <th>Task Name</th>\n            <th><input [(ngModel)]=\"selectedTask.TaskName\" placeholder=\"taskname\" value=\"{{selectedTask.TaskName}}\" enabled=true class=\"form-control\" id=\"taskname\" name=\"taskname\"  ></th>\n            <th>Description</th>\n            <th><input [(ngModel)]=\"selectedTask.TaskDescription\" placeholder=\"taskdescription\" value=\"{{selectedTask.TaskDescription}}\" enabled=true class=\"form-control\" id=\"taskdescription\" name=\"taskdescription\"  ></th>\n          </tr>\n          <tr>\n            <th>Priority</th>\n            <th><input type=\"range\" enabled=true  name=\"rngTaskPriority\" width=\"120px\"  [(ngModel)]=\"selectedTask.TaskPriority\" placeholder=\"task priority\" value=\"{{selectedTask.TaskPriority}}\" min=\"1\" max=\"30\" class=\"form-control\" id=\"rngTaskPriority\"  >\n              {{selectedTask.TaskPriority}}</th>\n            <th>Task Status</th>\n            <th><select class=\"form-control\" enabled=true [(ngModel)]=\"selectedTask.TaskStatus\" placeholder=\"taskStatus\"  value=\"{{selectedTask.TaskStatus}}\" id=\"taskStatus\" name=\"taskStatus\"  > \n              <option value=\"0\">----Select Task Status----</option>\n              <option>In Progress </option>\n              <option>Completed</option>           \n            </select></th>\n          </tr>\n          <tr>\n            <th>Start Date</th>\n            <th>\n              <input [ngModel]=\"selectedTask.StartDate  | date:'yyyy-MM-dd'\" (ngModelChange)=\"selectedTask.StartDate = $event\" placeholder=\"StartDate\" type=\"date\" value=\"{{selectedTask.StartDate}}\"  enabled=true class=\"form-control\" id=\"taskstartdate\" name=\"taskstartdate\"><i><font size=2>(mm/dd/yyyy)</font></i>\n            </th>\n            <th>End Date</th>\n            <th><input [ngModel]=\"selectedTask.EndDate  | date:'yyyy-MM-dd'\" (ngModelChange)=\"selectedTask.EndDate = $event\" placeholder=\"EndDate\" type=\"date\" value=\"{{selectedTask.EndDate}}\"  enabled=true class=\"form-control\" id=\"taskenddate\" name=\"taskenddate\"><i><font size=2>(mm/dd/yyyy)</font></i></th>\n          </tr>\n          <tr>\n            <th>Parent Task</th>\n            <th><select class=\"form-control\" [(ngModel)] = \"selectedTask.ParentTaskId\" placeholder=\"parentTask\"  value=\"{{selectedTask.ParentTaskId}}\" enabled=true  id=\"parentTask\" name=\"parentTask\"  > \n              <option value=\"0\">----Select Parent Task----</option>\n              <option *ngFor = \"let item of prenttasks\" value={{item.ParentTaskId}}>\n                {{item.ParentTaskName}}\n              </option>\n            </select></th>\n            <th>Assigned To</th>\n            <th><select class=\"form-control\" [(ngModel)] = \"selectedTask.TaskAssignedTo\" placeholder=\"TaskAssignedTo\"  value=\"{{selectedTask.TaskAssignedTo}}\" enabled=true  id=\"TaskAssignedTo\" name=\"TaskAssignedTo\"  > \n              <option value=\"0\">----Select Task Assigned To----</option>\n              <option *ngFor = \"let item of allUsers\" value={{item.UserId}}>\n                {{item.UserName}}\n              </option>\n            </select></th>\n          </tr>\n          <tr>\n            <th colspan=\"2\" style=\"text-align: center\"><button type=\"button\" class=\"btn btn-md btn-primary\" (click)=\"UpdateTask(this.selectedTask)\" name=\"btnUpdateTask\" id=\"btnUpdateTask\">\n              <span class=\"glyphicon glyphicon-ok\"></span> Save Task\n            </button></th>\n            <th colspan=\"2\" style=\"text-align: center\"> <button type=\"button\" class=\"btn btn-md btn-primary\" (click)=\"CancelEdit()\" name=\"btnLogout\" id=\"btnLogout\">\n              <span class=\"glyphicon glyphicon-remove\"></span> Cancel\n            </button></th>\n          </tr>\n      </table>\n    </div>\n\n     \n  \n  </div>\n  <HR>  \n  \n  </div>\n  </TD>\n  </TR>\n  </Table>\n  </div>"

/***/ }),

/***/ "./src/app/uicomponents/viewtasks/viewtasks.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/uicomponents/viewtasks/viewtasks.component.ts ***!
  \***************************************************************/
/*! exports provided: NewTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTasksComponent", function() { return NewTasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _DataModel_tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../DataModel/tasks */ "./src/app/DataModel/tasks.ts");
/* harmony import */ var _Services_PMTaskServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/PMTaskServices */ "./src/app/Services/PMTaskServices.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_PMUserServices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/PMUserServices */ "./src/app/Services/PMUserServices.ts");




//import { Injectable  } from '@angular/core';


var NewTasksComponent = /** @class */ (function () {
    function NewTasksComponent(router, objService1, objUserService1) {
        this.router = router;
        this.objService1 = objService1;
        this.objUserService1 = objUserService1;
        this.tasks = _DataModel_tasks__WEBPACK_IMPORTED_MODULE_2__["TASKS"];
        this.tasksForSeacrh = [];
        this.dataSaved = false;
        this.routerlocal = router;
        this.objService = objService1;
        this.objUserService = objUserService1;
        this.getAllUsers();
        this.getAllParentTasks();
        this.getAllProjects();
    }
    NewTasksComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    NewTasksComponent.prototype.getAllProjects = function () {
        var _this = this;
        this.objUserService.getProjects()
            .subscribe(function (projectsnew) { return _this.allProjects = projectsnew; });
    };
    NewTasksComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.objService.GetAllUsers()
            .subscribe(function (usersnew) { return _this.allUsers = usersnew; });
    };
    NewTasksComponent.prototype.getAllParentTasks = function () {
        var _this = this;
        this.objService.GetAllParentTasks()
            .subscribe(function (tasksnew) { return _this.prenttasks = tasksnew; });
    };
    NewTasksComponent.prototype.getTasks = function () {
        var _this = this;
        this.objService.GetAllTasks()
            .subscribe(function (tasksnew) { return _this.tasks = tasksnew; });
    };
    NewTasksComponent.prototype.EditTask = function (objTask) {
    };
    NewTasksComponent.prototype.doLogout = function (values) {
        this.routerlocal.navigateByUrl("/login");
    };
    NewTasksComponent.prototype.SearchTask = function () {
        var _this = this;
        this.ClearSelectedTaskControls();
        this.selectedTask = null;
        this.searchedTaskName = document.getElementById("tasknameforsearch").value;
        //this.searchedParentTaskName=(<HTMLInputElement>document.getElementById("parenttasknameforsearch")).value; 
        //this.searchedPriorityFrom=(<HTMLInputElement>document.getElementById("priorityFromforsearch")).value; 
        //this.searchedPriorityTo=(<HTMLInputElement>document.getElementById("priorityToforsearch")).value;
        this.searchedStartDate = document.getElementById("StartDateforsearch").value;
        this.searchedEndDate = document.getElementById("EndDateforsearch").value;
        this.objService.SearchTasks(this.searchedTaskName, this.searchedStartDate, this.searchedEndDate)
            .subscribe(function (tasksnew) { return _this.tasks = tasksnew; });
    };
    NewTasksComponent.prototype.ClearSelectedTaskControls = function () {
        if (this.selectedTask != null) {
            this.selectedTask.TaskID = 0;
            this.selectedTask.TaskPriority = 0;
            this.selectedTask.TaskStatus = "0";
            this.selectedTask.ParentTaskId = "0";
            this.selectedTask.TaskAssignedTo = "0";
            document.getElementById("taskname").value = "";
            document.getElementById("taskdescription").value = "";
            document.getElementById("rngTaskPriority").value = "";
            document.getElementById("taskstartdate").value = "";
            document.getElementById("taskenddate").value = "";
            document.getElementById("taskStatus").value = "0";
            document.getElementById("parentTask").value = "0";
            document.getElementById("TaskAssignedTo").value = "0";
        }
    };
    NewTasksComponent.prototype.CancelEdit = function () {
        this.selectedTask = null;
    };
    NewTasksComponent.prototype.ClearSearchTasks = function () {
        document.getElementById("tasknameforsearch").value = "";
        //(<HTMLInputElement>document.getElementById("parenttasknameforsearch")).value=""; 
        //(<HTMLInputElement>document.getElementById("priorityFromforsearch")).value=""; 
        //(<HTMLInputElement>document.getElementById("priorityToforsearch")).value=""; 
        document.getElementById("StartDateforsearch").value = "";
        document.getElementById("EndDateforsearch").value = "";
        this.getTasks();
    };
    NewTasksComponent.prototype.ViewTask = function (values) {
        this.ClearSelectedTaskControls();
        this.selectedTask = null;
        this.getTasks();
    };
    NewTasksComponent.prototype.AddTask = function (values) {
        this.routerlocal.navigateByUrl("/appaddnewtasks");
    };
    NewTasksComponent.prototype.onSelect = function (task) {
        this.selectedTask = task;
    };
    NewTasksComponent.prototype.EndTask = function (objTask) {
        var _this = this;
        if (this.selectedTask != null) {
            objTask.TaskStatus = "Completed";
            this.objService.UpdateTask(objTask).subscribe(function (task) {
                console.log(task);
                _this.dataSaved = true;
                //this.LoadAllTasks();
                _this.allTasks$ = _this.objService.GetAllTasks();
                if (_this.selectedTask != undefined) {
                    alert("Task is completed");
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    NewTasksComponent.prototype.DeleteTask = function (objTask) {
        var _this = this;
        if (confirm("Are you sure to delete the Task : " + objTask.TaskName + " ?") == true) {
            if (this.selectedTask != null) {
                objTask.TaskStatus = "ToBeDeleted";
                this.objService.deleteTask(objTask).subscribe(function (task) {
                    console.log(task);
                    _this.dataSaved = true;
                    //this.LoadAllTasks();
                    _this.allTasks$ = _this.objService.GetAllTasks();
                    if (_this.selectedTask != undefined) {
                        alert("Task is deleted");
                        _this.ClearSelectedTaskControls();
                        _this.getTasks();
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        }
    };
    NewTasksComponent.prototype.UpdateTask = function (objTask) {
        var _this = this;
        this.objService.UpdateTask(objTask).subscribe(function (task) {
            console.log(task);
            _this.dataSaved = true;
            //this.LoadAllTasks();
            _this.allTasks$ = _this.objService.GetAllTasks();
            if (_this.selectedTask != undefined) {
                alert("Task is saved");
                _this.selectedTask = null;
                _this.getTasks();
            }
        }, function (err) {
            console.log(err);
        });
    };
    NewTasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-tasks',
            template: __webpack_require__(/*! ./viewtasks.component.html */ "./src/app/uicomponents/viewtasks/viewtasks.component.html"),
            styles: [__webpack_require__(/*! ./viewtasks.component.css */ "./src/app/uicomponents/viewtasks/viewtasks.component.css")]
        })
        //@Injectable({ providedIn: 'root'})
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _Services_PMTaskServices__WEBPACK_IMPORTED_MODULE_3__["TaskService"], _Services_PMUserServices__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], NewTasksComponent);
    return NewTasksComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Administrator\ProjectAssignment_FrontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map