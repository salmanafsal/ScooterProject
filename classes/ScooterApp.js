const User = require('./User');
const Scooter = require('./Scooter');


class ScooterApp {

    constructor() {
        this.stations = {
            "Location1": [],
            "Location2": [],
            "Location3": [],
        };

    this.registeredUsers = {};
    }
  registerUser(username, password, age)
  {
    if (this.registeredUsers[username]) {
        throw new Error("User already registered.");
    }
    if (age < 18) {
        throw new Error("Too young to register.");
    }
    const user1 = new User(username, password, age);
    this.registeredUsers[username] = user1; 
    return user1;
  }  

  loginUser(username, password)
  {

    const myuser = this.registeredUsers[username];
        if (!myuser || myuser.password !== password) {
            throw new Error("Username or password is incorrect.");
        }
        myuser.login(password);
        console.log("User has been logged in");

  }

  logoutUser(username)
  {

    const myuser = this.registeredUsers[username];
        if (!myuser) {
            throw new Error("Username is incorrect.");
        }
        myuser.logout();
        console.log("User has been logged out");

  }

  createScooter(station)
  {
    if (!this.stations[station]) {
        throw new Error("No such station.");
    }
    const scooter = new Scooter(station);
    this.stations[station].push(scooter);
    console.log(`Created new scooter ${scooter.serial} at ${station}.`);
    return scooter;

  }

}

module.exports = ScooterApp;