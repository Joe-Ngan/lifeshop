const uuid = require('uuid').v4;

function initPossession(){
    const id = uuid();
    const possessions = {
        [id]:{
            id: id,
            name: 'being',
            time: 0,
            health: 0,
            happiness: 0,
            money: 0,
            value: 0,
        }
    };

    possessions.contains = function contains(id){
        return !!possessions[id];
    };

    possessions.getPossessions = function getPossessions(){
        return possessions;
    }

    possessions.addPossession = function addPossession(properties){
        const {itemName, itemTime, itemHealth, itemMoney, itemHappiness, itemValue} = properties;
        const id = uuid();
        possessions[id] = {
            id: id,
            name: itemName,
            time: itemTime,
            health: itemHealth,
            money: itemMoney,
            happiness: itemHappiness,
            value: itemValue,
        }
        return id;
    }

    possessions.getPossession = function getPossession(id){
        return possessions[id];
    }

    possessions.updatePossession = function updatePossession(id, newProperties){
        const {name, time, health, happiness, money, value} = newProperties;
        possessions[id].name = name ?? possessions[id].name;
        possessions[id].time = time ?? possessions[id].time;
        possessions[id].health = health ?? possessions[id].health;
        possessions[id].happiness = happiness ?? possessions[id].happiness;
        possessions[id].money = money ?? possessions[id].money;
        possessions[id].value = value ?? possessions[id].value;      
    }

    possessions.deletePossession = function deletePossession(id){
        delete possessions[id];
    }

    return possessions;
}

module.exports={
    initPossession,
}