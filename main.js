// Import classes here
const Scooter = require('./classes/Scooter');
const User = require('./classes/User');
const ScooterApp = require('./classes/ScooterApp');

function main() {
    // You can run any of your classes here to test the outputs

    const app = new ScooterApp();
  
    /*const myUser = myScooterApp.registerUser('salman1', '1234', 30);
    myScooterApp.loginUser('salman1', '1234');
    myScooterApp.logoutUser('salman1');
    const myScooter1 = myScooterApp.createScooter('Location1');
    const myScooter2 = myScooterApp.createScooter('Location1');
  /*  myScooterApp.dockScooter(myScooter1,'Location1');*/
  /*  myScooterApp.rentScooter(myScooter2,myUser);
    myScooterApp.rentScooter(myScooter2,myUser);
    myScooterApp.dockScooter(myScooter2,'Location1');
    const scooter = app.createScooter('Location1');*/
    const scooter = app.createScooter('Location1')
    
    
    app.dockScooter(scooter, 'Location1');
    app.dockScooter(scooter, 'Location1');
    myScooterApp.print();
    
   /* myScooterApp.print();*/
}

main();