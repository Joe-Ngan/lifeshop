const uuid = require('uuid').v4;

function initStatus(){
    const id = uuid();
    const status = {
        age: 0, 
        health: 0, 
        money: 0, 
        happiness: 0, 
        value: 0
    };

    status.getStatus = function getStatus(){
        return status;
    }

    status.changeStatus = function changeStatus(newStatus){
        const { newAge, newHealth , newMoney, newHappiness, newValue} = newStatus;
        status.age= newAge;
        status.health= newHealth;
        status.money= newMoney;
        status.happiness= newHappiness;
        status.value= newValue;
    }

    status.updateStatus = function updateStatus(increment){
        const { incrAge, incrHealth , incrMoney, incrHappiness, incrValue } = increment;
        const newAge= status.age+=incrAge;
        const newHealth= status.health+=incrHealth;
        const newMoney= status.money+=incrMoney;
        const newHappiness= status.happiness+=incrHappiness;
        const newValue= status.value+=incrValue;
        status.age= newAge;
        status.health= newHealth;
        status.money= newMoney;
        status.happiness= newHappiness;
        status.value= newValue;
    }

    return status;
}

module.exports={
    initStatus,
}