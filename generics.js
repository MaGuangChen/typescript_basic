var position;
(function (position) {
    position[position["pointGuard"] = 0] = "pointGuard";
    position[position["shotting guard"] = 1] = "shotting guard";
    position[position["smallFoward"] = 2] = "smallFoward";
    position[position["powerFoward"] = 3] = "powerFoward";
    position[position["center"] = 4] = "center";
})(position || (position = {}));
var nbaPlayerList = [
    {
        name: 'Kobe Bryant',
        age: 40,
        salary: 4000,
        No: 24,
        pointPerGame: 25.7,
        reboundPerGame: 5.4,
        assistPerGame: 5.3,
        position: position[position['shotting guard']]
    },
    {
        name: 'Tim Doucan',
        age: 40,
        salary: 2000,
        No: 21,
        pointPerGame: 22.7,
        reboundPerGame: 10.4,
        assistPerGame: 3.3,
        position: position[position.powerFoward]
    }
];
/* Generics */
function getPlayerListInfo(players) {
    players.forEach(function (player) {
        console.log("No." + player.No + " greatest " + player.position + " " + player.name + " ~");
    });
    return players;
}
getPlayerListInfo(nbaPlayerList);
