"use strict";
exports.__esModule = true;
var enumAndArray_1 = require("./enumAndArray");
function GetStudentsList(students) {
    students.forEach(function (s) {
        console.log("student: " + s.Name + " is " + s.Age + " and he/she can speak " + s.Language);
    });
}
GetStudentsList(enumAndArray_1["default"]);
// Rest Parameters
function GetNumber() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    nums.forEach(function (num) {
        console.log("number: " + num);
    });
}
GetNumber(1, 2, 3); // 貼字串會有lint說type不對
// Default Parameters
function GetInfo(info) {
    if (info === void 0) { info = "prmetive info"; }
    console.log(info);
}
GetInfo(); // 印出初始的參數值
