// const english: string = 'EnglishString';
var languagesKnow;
(function (languagesKnow) {
    languagesKnow[languagesKnow["English"] = 0] = "English";
    languagesKnow[languagesKnow["Chinese"] = 1] = "Chinese";
})(languagesKnow || (languagesKnow = {}));
;
var tim = {
    firstName: 'Tim',
    lastName: 'Duncan',
    idCode: '21',
    age: 40,
    gender: 'male',
    phoneNumber: '0968724808',
    language: languagesKnow[languagesKnow.English]
};
var playerList = [
    {
        firstName: 'Kobe',
        lastName: 'Bryant',
        idCode: '24',
        age: 40,
        gender: 'male',
        phoneNumber: '0968724899',
        language: languagesKnow[languagesKnow.English]
    },
    {
        firstName: 'Ming',
        lastName: 'Yao',
        idCode: '21',
        age: 40,
        gender: 'male',
        phoneNumber: '0968724854',
        language: languagesKnow[languagesKnow.Chinese]
    }
];
var consolePlayerInfo = function (players) {
    players.forEach(function (player) {
        var self = player.gender === 'male' ? 'he' : 'she';
        console.log("No." + player.idCode + " , " + player.firstName + " " + player.lastName + " and " + self + " can speak " + player.language);
    });
};
playerList.push(tim);
consolePlayerInfo(playerList);
