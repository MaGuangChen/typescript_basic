enum position { 
    pointGuard, 
    'shotting guard',
    smallFoward,
    powerFoward,
    center,
}
interface playerInfo {
    name: string;
    age: number;
    salary: number;
    No: number;
    pointPerGame: number;
    reboundPerGame: number;
    assistPerGame: number;
    position: string;
}

const nbaPlayerList: Array<playerInfo> = [
    { 
        name: 'Kobe Bryant', 
        age: 40, 
        salary: 4000,
        No: 24,
        pointPerGame: 25.7,
        reboundPerGame: 5.4,
        assistPerGame: 5.3,
        position: position[position['shotting guard']], 
    },
    {
        name: 'Tim Doucan', 
        age: 40, 
        salary: 2000,
        No: 21,
        pointPerGame: 22.7,
        reboundPerGame: 10.4,
        assistPerGame: 3.3,
        position: position[position.powerFoward],  
    }
]

/* Generics */

function getPlayerListInfo(players: Array<playerInfo>): Array<playerInfo> {
    players.forEach(player => {
        console.log(`No.${player.No} greatest ${player.position} ${player.name} ~`);
    });
    return players;
}

getPlayerListInfo(nbaPlayerList);