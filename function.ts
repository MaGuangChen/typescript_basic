import studentsList from './enumAndArray';

function GetStudentsList(students: any[]) {
    students.forEach(s => {
        console.log(
            `student: ${s.Name} is ${s.Age} and he/she can speak ${s.Language}`
        );
    });
}

GetStudentsList(studentsList);

// Rest Parameters
function GetNumber(...nums: number[]) {
    nums.forEach(num => {
        console.log(`number: ${num}`);
    });
}

GetNumber(1, 2, 3);// 貼字串會有lint說type不對

// Default Parameters
function GetInfo(info: string = "prmetive info") {
    console.log(info);
}
GetInfo();// 印出初始的參數值