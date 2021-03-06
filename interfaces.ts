// const english: string = 'EnglishString';
enum languagesKnow { English, Chinese };

interface PersonInfo {
    firstName: string;
    lastName: string;
    idCode: string;
    age: number;
    gender: 'male' | 'felmale';
    phoneNumber: string;
    language: string;
}

let tim: PersonInfo = {
    firstName: 'Tim',
    lastName: 'Duncan',
    idCode: '21',
    age: 40,
    gender: 'male',
    phoneNumber: '0968724808',
    language: languagesKnow[languagesKnow.English],
}

let playerList: PersonInfo[] = [
    {
        firstName: 'Kobe',
        lastName: 'Bryant',
        idCode: '24',
        age: 40,
        gender: 'male',
        phoneNumber: '0968724899',
        language: languagesKnow[languagesKnow.English],
    },
    {
        firstName: 'Ming',
        lastName: 'Yao',
        idCode: '21',
        age: 40,
        gender: 'male',
        phoneNumber: '0968724854',
        language: languagesKnow[languagesKnow.Chinese],
    }
]

const consolePlayerInfo = (players: PersonInfo[]) => {
    players.forEach(player => {
        const self = player.gender === 'male' ? 'he' : 'she';
        console.log(`No.${player.idCode} , ${player.firstName} ${player.lastName} and ${self} can speak ${player.language}`);
    });
};
playerList.push(tim);
consolePlayerInfo(playerList);