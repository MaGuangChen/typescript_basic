enum LanguagesKnow { English, Chinese, Japanese };

let students = {
    Name: "Paul",
    Age: 26,
    Phone: '0021456',
    Language: LanguagesKnow.Chinese,
}

let studentsList = [
    { Name: "Tim", Age: 30, Phone: '0003365', Language: LanguagesKnow[0] },
    { Name: "John", Age: 27, Phone: '0075661', 
        Language: LanguagesKnow[LanguagesKnow.Chinese] },
]

// studentsList.push(students);

// studentsList.forEach(element => {
//     console.log(element);
// });

export default studentsList;
