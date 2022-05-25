const users = {};

function getUserData(username) {
  return users[username];
};

function getUserPossessions(username){
  return users[username].possessions;
}

function getUserStatus(username){
  return users[username].status;
}

function setUserData(username, userData){
  users[username] = userData;
}

module.exports = {
  getUserData,
  getUserPossessions,
  getUserStatus,
  setUserData,
};
