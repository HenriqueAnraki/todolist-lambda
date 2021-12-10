/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/entity/Task.ts":
/*!****************************!*\
  !*** ./src/entity/Task.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Task = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["DONE"] = "done";
    TaskStatus["ACTIVE"] = "active";
    TaskStatus["REMOVED"] = "removed";
})(TaskStatus || (TaskStatus = {}));
let Task = class Task {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Task.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 100,
    }),
    __metadata("design:type", String)
], Task.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Task.prototype, "desc", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: TaskStatus,
        default: TaskStatus.ACTIVE,
    }),
    __metadata("design:type", String)
], Task.prototype, "status", void 0);
Task = __decorate([
    (0, typeorm_1.Entity)()
], Task);
exports.Task = Task;


/***/ }),

/***/ "./src/todoList.ts":
/*!*************************!*\
  !*** ./src/todoList.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.completeTaskHandler = exports.deleteTaskHandler = exports.updateTaskHandler = exports.getTodoListHandler = exports.createTaskHandler = void 0;
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const Task_1 = __webpack_require__(/*! ./entity/Task */ "./src/entity/Task.ts");
(0, typeorm_1.createConnection)();
const createTaskHandler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const task = JSON.parse(event.body);
    const fullTask = `${task.title} + ${task.desc}`;
    try {
        const repo = (0, typeorm_1.getRepository)(Task_1.Task);
        const res = yield repo.save(task);
        return {
            statusCode: 201,
            body: JSON.stringify(res, null, 2),
        };
    }
    catch (error) {
        console.error(error);
    }
});
exports.createTaskHandler = createTaskHandler;
const getTodoListHandler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "You got the full todo list",
            input: event,
        }, null, 2),
    };
});
exports.getTodoListHandler = getTodoListHandler;
const updateTaskHandler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `You Updated the task ${event.pathParameters.taskId}`,
            input: event,
        }, null, 2),
    };
});
exports.updateTaskHandler = updateTaskHandler;
const deleteTaskHandler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `You deleted the task ${event.pathParameters.taskId}`,
            input: event,
        }, null, 2),
    };
});
exports.deleteTaskHandler = deleteTaskHandler;
const completeTaskHandler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `You complete the task ${event.pathParameters.taskId}!!`,
            input: event,
        }, null, 2),
    };
});
exports.completeTaskHandler = completeTaskHandler;


/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/todoList.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjL3RvZG9MaXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBa0JBO0FBaEJBO0FBREE7O0FBQ0E7QUFLQTtBQUhBO0FBQ0E7QUFDQTs7QUFDQTtBQUdBO0FBREE7O0FBQ0E7QUFPQTtBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFqQkE7QUFEQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUVBO0FBRUE7QUFRQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFyQkE7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQVpBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBWkE7Ozs7Ozs7Ozs7O0FDL0VBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FFdkJBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXdzLXRvZG8tbGlzdC8uL3NyYy9lbnRpdHkvVGFzay50cyIsIndlYnBhY2s6Ly9hd3MtdG9kby1saXN0Ly4vc3JjL3RvZG9MaXN0LnRzIiwid2VicGFjazovL2F3cy10b2RvLWxpc3QvZXh0ZXJuYWwgY29tbW9uanMgXCJyZWZsZWN0LW1ldGFkYXRhXCIiLCJ3ZWJwYWNrOi8vYXdzLXRvZG8tbGlzdC9leHRlcm5hbCBjb21tb25qcyBcInR5cGVvcm1cIiIsIndlYnBhY2s6Ly9hd3MtdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2F3cy10b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9hd3MtdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9hd3MtdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sIENvbHVtbiB9IGZyb20gXCJ0eXBlb3JtXCI7XG5cbmVudW0gVGFza1N0YXR1cyB7XG4gIERPTkUgPSBcImRvbmVcIixcbiAgQUNUSVZFID0gXCJhY3RpdmVcIixcbiAgUkVNT1ZFRCA9IFwicmVtb3ZlZFwiLFxufVxuXG5ARW50aXR5KClcbmV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICBpZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oe1xuICAgIGxlbmd0aDogMTAwLFxuICB9KVxuICB0aXRsZTogc3RyaW5nO1xuXG4gIEBDb2x1bW4oKVxuICBkZXNjOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogXCJlbnVtXCIsXG4gICAgZW51bTogVGFza1N0YXR1cyxcbiAgICBkZWZhdWx0OiBUYXNrU3RhdHVzLkFDVElWRSxcbiAgfSlcbiAgc3RhdHVzOiBUYXNrU3RhdHVzO1xufVxuIiwiaW1wb3J0IHsgSGFuZGxlciB9IGZyb20gXCJhd3MtbGFtYmRhXCI7XG5pbXBvcnQgXCJyZWZsZWN0LW1ldGFkYXRhXCI7XG5pbXBvcnQgeyBjcmVhdGVDb25uZWN0aW9uLCBnZXRSZXBvc2l0b3J5IH0gZnJvbSBcInR5cGVvcm1cIjtcblxuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL2VudGl0eS9UYXNrXCI7XG5cbmNyZWF0ZUNvbm5lY3Rpb24oKTtcblxuLy8gdHlwZSBIYW5kbGVyPFRFdmVudCA9IGFueSwgVFJlc3VsdCA9IGFueT4gPSAoXG4vLyAgIGV2ZW50OiBURXZlbnQsXG4vLyAgIGNvbnRleHQ6IENvbnRleHQsXG4vLyAgIGNhbGxiYWNrOiBDYWxsYmFjazxUUmVzdWx0PlxuLy8gKSA9PiB2b2lkIHwgUHJvbWlzZTxUUmVzdWx0PjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRhc2tIYW5kbGVyOiBIYW5kbGVyID0gYXN5bmMgKGV2ZW50OiBhbnkpID0+IHtcbiAgY29uc3QgdGFzayA9IEpTT04ucGFyc2UoZXZlbnQuYm9keSk7XG5cbiAgY29uc3QgZnVsbFRhc2sgPSBgJHt0YXNrLnRpdGxlfSArICR7dGFzay5kZXNjfWA7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXBvID0gZ2V0UmVwb3NpdG9yeShUYXNrKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCByZXBvLnNhdmUodGFzayk7XG5cbiAgICAvLyBjb25zdCByZXNwb25zZSA9IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzQ29kZTogMjAxLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVzLCBudWxsLCAyKSxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICB9XG5cbiAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gIC8vICAgcmVzb2x2ZShyZXNwb25zZSlcbiAgLy8gfSlcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRUb2RvTGlzdEhhbmRsZXI6IEhhbmRsZXIgPSBhc3luYyAoZXZlbnQ6IGFueSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShcbiAgICAgIHtcbiAgICAgICAgbWVzc2FnZTogXCJZb3UgZ290IHRoZSBmdWxsIHRvZG8gbGlzdFwiLFxuICAgICAgICBpbnB1dDogZXZlbnQsXG4gICAgICB9LFxuICAgICAgbnVsbCxcbiAgICAgIDJcbiAgICApLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVRhc2tIYW5kbGVyOiBIYW5kbGVyID0gYXN5bmMgKGV2ZW50OiBhbnkpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoXG4gICAgICB7XG4gICAgICAgIG1lc3NhZ2U6IGBZb3UgVXBkYXRlZCB0aGUgdGFzayAke2V2ZW50LnBhdGhQYXJhbWV0ZXJzLnRhc2tJZH1gLFxuICAgICAgICBpbnB1dDogZXZlbnQsXG4gICAgICB9LFxuICAgICAgbnVsbCxcbiAgICAgIDJcbiAgICApLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVRhc2tIYW5kbGVyOiBIYW5kbGVyID0gYXN5bmMgKGV2ZW50OiBhbnkpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoXG4gICAgICB7XG4gICAgICAgIG1lc3NhZ2U6IGBZb3UgZGVsZXRlZCB0aGUgdGFzayAke2V2ZW50LnBhdGhQYXJhbWV0ZXJzLnRhc2tJZH1gLFxuICAgICAgICBpbnB1dDogZXZlbnQsXG4gICAgICB9LFxuICAgICAgbnVsbCxcbiAgICAgIDJcbiAgICApLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbXBsZXRlVGFza0hhbmRsZXI6IEhhbmRsZXIgPSBhc3luYyAoZXZlbnQ6IGFueSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShcbiAgICAgIHtcbiAgICAgICAgbWVzc2FnZTogYFlvdSBjb21wbGV0ZSB0aGUgdGFzayAke2V2ZW50LnBhdGhQYXJhbWV0ZXJzLnRhc2tJZH0hIWAsXG4gICAgICAgIGlucHV0OiBldmVudCxcbiAgICAgIH0sXG4gICAgICBudWxsLFxuICAgICAgMlxuICAgICksXG4gIH07XG59O1xuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IHtcbi8vICAgY3JlYXRlVGFza0hhbmRsZXIsXG4vLyAgIGdldFRvZG9MaXN0SGFuZGxlcixcbi8vICAgdXBkYXRlVGFza0hhbmRsZXIsXG4vLyAgIGRlbGV0ZVRhc2tIYW5kbGVyLFxuLy8gICBjb21wbGV0ZVRhc2tIYW5kbGVyLFxuLy8gfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZmxlY3QtbWV0YWRhdGFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHlwZW9ybVwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdG9kb0xpc3QudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=