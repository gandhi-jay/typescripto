"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var URL = 'http://jsonplaceholder.typicode.com/todos/7';
axios_1["default"].get(URL).then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    console.log(id + ", " + title + ", " + completed);
});
