const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 4000;

const users = require('./users');
const sessions = require('./sessions');
const status = require('./status');
const possessions = require('./possessions');
const market = require('./market');
const theMarket = market.initMarket();

app.use(cookieParser());
app.use(express.static('./build'));
app.use(express.json());


//auth: check auth, login, logout
app.get('/api/session', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid? sessions.getSessionUser(sid) : '';
    if(!sid || !username){
        res.status(401).json({ error: 'auth missing'});
    }else{
        res.json({ username });
    }
})

app.post('/api/session', (req, res) => {
    const { username } = req.body;
    if(!username){
        res.status(400).json({ error: 'require username' });
    }
    if(username === 'Author') {
        res.status(403).json({ error: 'auth-insufficient' });
        return;
      }
    const sid = sessions.addSession(username);
    const oldUserData = users.getUserData(username);
    if(!oldUserData){
        const newPossessionList = possessions.initPossession();
        const newStatus = status.initStatus();
        const newUserData = { 
            username, 
            status: newStatus.getStatus(),
            possessions: newPossessionList.getPossessions()
        };
        users.setUserData(username, newUserData);
    }
    res.cookie('sid', sid);
    res.json(users.getUserData(username));
})

app.delete('/api/session', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid): '';
    if(sid){
        res.clearCookie('sid');
    }
    if(username){
        sessions.deleteSession(sid);
    }
    res.json({username});
})

//get market items
app.get('/api/market', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid? sessions.getSessionUser(sid) : '';
    if(!sid || !username){
        res.status(401).json({ error: 'auth missing'});
    }else{
        res.json({ theMarket });
    }
})
//add market item
app.post('/api/market/item', (req, res) => {
    const { newItem } = req.body;
    const { username } = req.body;
    const { newItemName, ageCost, healthCost, moneyCost, happinessCost, valueCost, ageProfit, healthProfit, moneyProfit, happinessProfit, valueProfit } = newItem;
    if(!username){
        res.status(400).json({ error: 'require username' });
    }
    const properties = {
        name:newItemName,
        timeProfit:ageProfit,
        healthProfit:healthProfit,
        happinessProfit:happinessProfit,
        moneyProfit:moneyProfit,
        valueProfit:valueProfit,
        timeCost:ageCost,
        healthCost:healthCost,
        happinessCost:happinessCost,
        moneyCost:moneyCost,
        valueCost:valueCost,
        stock:10,
        buyerCount:0,
        provider:username,
    }
    theMarket.addItem(properties);
    res.json({ theMarket });
})
//delete market item
app.delete('/api/market/item',(req, res) => {
    const sid = req.cookies.sid;
    const sidUsername = sid ? sessions.getSessionUser(sid) : '';
    if(!sid || !sidUsername){
        res.status(401).json({ error: 'auth-missing '});
    }
    const { itemId } = req.body;
    const { username } =req.body;
    if(!itemId){
        res.status(400).json({ error: 'require item id' });
    }
    if(!username){
        res.status(400).json({ error: 'require username' });
    }
    if(username !== sidUsername){
        res.status(401).json({ error: 'mismatch of usernames '});
    }
    theMarket.deleteItem(itemId);
    res.json({ theMarket });
})
//user grow
app.post('/api/user/status', (req, res) => {
    const { username } = req.body;
    const { age } = req.body;
    const { health } = req.body;
    const { money } = req.body;
    const { happiness } = req.body;
    const { value } = req.body;
    if(!username){
        res.status(400).json({ error: 'require username' });
    }
    if(age==null){
        res.status(400).json({ error: 'require age' });
    }
    if(health==null){
        res.status(400).json({ error: 'require health' });
    }
    if(money==null){
        res.status(400).json({ error: 'require money' });
    }
    if(happiness==null){
        res.status(400).json({ error: 'require happiness' });
    }
    if(value==null){
        res.status(400).json({ error: 'require value' });
    }
    const oldUserData = users.getUserData(username);
    if(!oldUserData){
        res.status(400).json({ error: 'username not found' });
    }
    const increment = { incrAge:age, incrHealth:health , incrMoney:money, incrHappiness:happiness, incrValue:value };
    oldUserData.status.updateStatus(increment);
    res.json(oldUserData.status);
})
//user buy item
app.post('/api/user/item', (req, res) => {
    const sid = req.cookies.sid;
    const sidUsername = sid ? sessions.getSessionUser(sid) : '';
    if(!sid || !sidUsername){
        res.status(401).json({ error: 'auth-missing '});
    }
    const { itemId } = req.body;
    const { username } =req.body;
    if(!itemId){
        res.status(400).json({ error: 'require item id' });
    }
    if(!username){
        res.status(400).json({ error: 'require username' });
    }
    if(username !== sidUsername){
        res.status(401).json({ error: 'mismatch of usernames '});
    }
    const oldUserData = users.getUserData(username);
    if(!oldUserData){
        res.status(400).json({ error: 'data of current username not found' });
    }
    if(theMarket.getItem(itemId).stock===0){
        res.status(400).json({ error: 'the target item is out of stock'});
        return;
    }
    //1 add item from market to user possessions
    const item = theMarket[itemId];
    const itemName = item.name;
    const itemTime = item.timeProfit;
    const itemHealth = item.healthProfit;
    const itemMoney = item.moneyProfit;
    const itemHappiness = item.happinessProfit;
    const itemValue = item.valueProfit;
    const properties = {itemId, itemName, itemTime, itemHealth, itemMoney, itemHappiness, itemValue};
    //1.1 return the new Possession
    users.getUserPossessions(username).addPossession(properties);
    //2 update user status
    const timeCost = item.timeCost;
    const healthCost = item.healthCost;
    const moneyCost = item.moneyCost;
    const happinessCost = item.happinessCost;
    const valueCost = item.valueCost;
    //2.1 examine data
    if(oldUserData.status.age+timeCost>100)res.status(400).json({ error: 'insufficient age/time' });
    if(oldUserData.status.health-healthCost<0)res.status(400).json({ error: 'insufficient health' });
    if(oldUserData.status.money-moneyCost<0)res.status(400).json({ error: 'insufficient money' });
    if(oldUserData.status.happiness-happinessCost<0)res.status(400).json({ error: 'insufficient happiness' });
    if(oldUserData.status.value-valueCost<0)res.status(400).json({ error: 'insufficient value' });
    //2.2 change user status data
    const incrAge = (timeCost-itemTime);
    const incrHealth = (itemHealth - healthCost);
    const incrMoney = (itemMoney - moneyCost);
    const incrHappiness = (itemHappiness - happinessCost);
    const incrValue = (itemValue - valueCost);
    const increment = { incrAge, incrHealth, incrMoney, incrHappiness, incrValue};
    users.getUserStatus(username).updateStatus(increment);
    //3 update theMarket
    const targetItem = theMarket.getItem(itemId);
    const newStock = targetItem.stock-1;
    const newBuyerCount = targetItem.buyerCount+1;
    const newProperties = {stock:newStock, buyerCount:newBuyerCount};
    theMarket.updateItem(itemId, newProperties);

    //4 return data
    const userData = users.getUserData(username);
    res.json({userData, theMarket});
})

app.delete('/api/user/item',(req, res) => {
    const sid = req.cookies.sid;
    const sidUsername = sid ? sessions.getSessionUser(sid) : '';
    if(!sid || !sidUsername){
        res.status(401).json({ error: 'auth-missing '});
    }
    const { itemId } = req.body;
    const { username } =req.body;
    if(!itemId){
        res.status(400).json({ error: 'require item id' });
    }
    if(!username){
        res.status(400).json({ error: 'require username' });
    }
    if(username !== sidUsername){
        res.status(401).json({ error: 'mismatch of usernames '});
    }
    users.getUserPossessions(username).deletePossession(itemId);
    res.json(users.getUserPossessions(username));
})
app.listen(PORT, ()=> console.log(`listening on http://localhost:${PORT}`));