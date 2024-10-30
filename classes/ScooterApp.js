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

  dockScooter(scooter, station) {
    if (!this.stations[station]) {
        throw new Error("No such station.");
    }
    if (scooter.isDocked) {
        throw new Error("Scooter already at station.");
    }
    this.stations[station].push(scooter); // Add to the stations list
    scooter.dock(station);
    /*console.log(`Scooter ${scooter.scooterId} is docked at ${stationName}.`);*/
}

rentScooter(scooter, user) {
    
    for ( const obj in this.stations)
    {
        console.log(obj);
       for (const value of this.stations[obj])
       { 
        if(value=== scooter)
        {

         const index = this.stations[obj].indexOf(value);   
         console.log(index);
         this.stations[obj].splice(index,1); /* remove scooter from the station */
        break;
        }
        }
    }   
    if (!user) {
        throw new Error("No such user.");
    }
    // Find the scooter in any station
    
            scooter.rent(user);
        
            return;
        }
    



print() {
   
    for (const obj in this.registeredUsers)
    {
    console.log(obj) + "Users details";
    }
    for (const location in this.stations  )
        {   let count=0;
            console.log(location);
        for (const value of this.stations[location])
        {

            count=count+1;
        }    
        console.log(`Total Count of scooters ${count} at location ${location}`);
        
        }


}

}

module.exports = ScooterApp;