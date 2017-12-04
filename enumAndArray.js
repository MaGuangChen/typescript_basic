"use strict";
exports.__esModule = true;
var LanguagesKnow;
(function (LanguagesKnow) {
    LanguagesKnow[LanguagesKnow["English"] = 0] = "English";
    LanguagesKnow[LanguagesKnow["Chinese"] = 1] = "Chinese";
    LanguagesKnow[LanguagesKnow["Japanese"] = 2] = "Japanese";
})(LanguagesKnow || (LanguagesKnow = {}));
;
var students = {
    Name: "Paul",
    Age: 26,
    Phone: '0021456',
    Language: LanguagesKnow.Chinese
};
var studentsList = [
    { Name: "Tim", Age: 30, Phone: '0003365', Language: LanguagesKnow[0] },
    { Name: "John", Age: 27, Phone: '0075661',
        Language: LanguagesKnow[LanguagesKnow.Chinese] },
];
// studentsList.push(students);
// studentsList.forEach(element => {
//     console.log(element);
// });
exports["default"] = studentsList;
