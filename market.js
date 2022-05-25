const uuid = require('uuid').v4;

function initMarket(){
    const id1 = uuid();
    const id2 = uuid();
    const id3 = uuid();
    const id4 = uuid();
    const id5 = uuid();
    const id6 = uuid();
    const id7 = uuid();

    const market = {
        [id1]:{
            id: id1,
            name: 'Travel all around the world',
            timeProfit: 0,
            healthProfit: 20,
            happinessProfit: 30,
            moneyProfit: 0,
            valueProfit: 40,
            timeCost: 10,
            healthCost: 10,
            happinessCost: 0,
            moneyCost: Math.floor(Math.random() * (51 - 30) + 30),
            valueCost: 0,
            stock: 999,
            buyerCount: 0,
            provider: 'Author',
        },
        [id2]:{
            id: id2,
            name: 'Learn a new language',
            timeProfit: 0,
            healthProfit: 0,
            happinessProfit: 4,
            moneyProfit: Math.floor(Math.random() * (10 - 1) + 1),
            valueProfit: Math.floor(Math.random() * (21 - 15) + 15),
            timeCost: 3,
            healthCost: 1,
            happinessCost: 2,
            moneyCost: 1,
            valueCost: 0,
            stock: 999,
            buyerCount: 0,
            provider: 'Author',
        },
        [id3]:{
            id: id3,
            name: 'Go further education',
            timeProfit: 0,
            healthProfit: Math.floor(Math.random() * (5)),
            happinessProfit: Math.floor(Math.random() * (5)),
            moneyProfit: Math.floor(Math.random() * (10 - 1) + 1),
            valueProfit: 5,
            timeCost: 3,
            healthCost: Math.floor(Math.random() * (5)),
            happinessCost: Math.floor(Math.random() * (5)),
            moneyCost: 5,
            valueCost: 0,
            stock: 999,
            buyerCount: 0,
            provider: 'Author',
        },
        [id4]:{
            id: id4,
            name: 'Earn Money',
            timeProfit: 0,
            healthProfit: Math.floor(Math.random() * (5)),
            happinessProfit: 1,
            moneyProfit: 10,
            valueProfit: 1,
            timeCost: 1,
            healthCost: 3,
            happinessCost: 2,
            moneyCost: 0,
            valueCost: 0,
            stock: 999,
            buyerCount: 0,
            provider: 'Author',
        },
        [id5]:{
            id: id5,
            name: 'Do an extreme sport',
            timeProfit: 0,
            healthProfit: Math.floor(Math.random() * (2)),
            happinessProfit: 10,
            moneyProfit: 0,
            valueProfit: 5,
            timeCost: 1,
            healthCost: 3,
            happinessCost: 0,
            moneyCost: 5,
            valueCost: 0,
            stock: 999,
            buyerCount: 0,
            provider: 'Author',
        },
        [id6]:{
            id: id6,
            name: 'Live a healthy life',
            timeProfit: 0,
            healthProfit: Math.floor(Math.random() * (21 - 15) + 15),
            happinessProfit: 10,
            moneyProfit: 0,
            valueProfit: 3,
            timeCost: 5,
            healthCost: 0,
            happinessCost: 0,
            moneyCost: 50,
            valueCost: 0,
            stock: 999,
            buyerCount: 0,
            provider: 'Author',
        },
        [id7]:{
            id: id7,
            name: 'Start a family',
            timeProfit: 0,
            healthProfit: Math.floor(Math.random() * (21 - 15) + 15),
            happinessProfit: 10,
            moneyProfit: 5,
            valueProfit: 30,
            timeCost: 5,
            healthCost: Math.floor(Math.random() * (6 - 1) + 1),
            happinessCost: 0,
            moneyCost: 50,
            valueCost: 0,
            stock: 999,
            buyerCount: 0,
            provider: 'Author',
        }
    };

    market.contains = function contains(id){
        return !!market[id];
    }

    market.getItems = function getItems(){
        return market;
    }

    market.addItem = function addItem(properties){
        const {name, timeProfit, healthProfit, happinessProfit, moneyProfit, valueProfit, timeCost, healthCost, happinessCost, moneyCost, valueCost, stock, buyerCount, provider} = properties;
        const id = uuid();
        market[id] = {
            id: id, name, timeProfit, healthProfit, happinessProfit, moneyProfit, valueProfit, timeCost, healthCost, happinessCost, moneyCost, valueCost, stock, buyerCount, provider
        }
        return market[id];
    }

    market.getItem = function getItem(id){
        return market[id];
    }

    market.updateItem = function updateItem(id, newProperties){
        const {name, timeProfit, healthProfit, happinessProfit, moneyProfit, valueProfit, timeCost, healthCost, happinessCost, moneyCost, valueCost, stock, buyerCount, provider} = newProperties;
        const oldItem = market[id];
        if(oldItem){
            oldItem.name = name ?? oldItem.name;
            oldItem.timeProfit = timeProfit ?? oldItem.timeProfit;
            oldItem.healthProfit = healthProfit ?? oldItem.healthProfit;
            oldItem.happinessProfit = happinessProfit ?? oldItem.happinessProfit;
            oldItem.moneyProfit = moneyProfit ?? oldItem.moneyProfit;
            oldItem.valueProfit = valueProfit ?? oldItem.valueProfit;
            oldItem.timeCost = timeCost ?? oldItem.timeCost;
            oldItem.healthCost = healthCost ?? oldItem.healthCost;
            oldItem.happinessCost = happinessCost ?? oldItem.happinessCost;
            oldItem.moneyCost = moneyCost ?? oldItem.moneyCost;
            oldItem.valueCost = valueCost ?? oldItem.valueCost;
            oldItem.stock = stock ?? oldItem.stock;
            oldItem.buyerCount = buyerCount ?? oldItem.buyerCount;
            oldItem.provider = provider ?? oldItem.provider;
        }
    }
    market.deleteItem = function deleteItem(id){
        delete market[id];
    }

    return market;
}

module.exports={
    initMarket
}