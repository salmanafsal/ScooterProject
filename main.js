// Import classes here
const Scooter = require('./classes/Scooter');
const User = require('./classes/User');
const ScooterApp = require('./classes/ScooterApp');

function main() {
    // You can run any of your classes here to test the outputs

    const myScooterApp = new ScooterApp();
  
    const myUser = myScooterApp.registerUser('salman1', '1234', 30);
    myScooterApp.loginUser('salman1', '1234');
    myScooterApp.print();
    myScooterApp.logoutUser('salman1');
    const myScooter1 = myScooterApp.createScooter('Location1');
    const myScooter2 = myScooterApp.createScooter('Location1');
  /*  myScooterApp.dockScooter(myScooter1,'Location1');*/
    myScooterApp.rentScooter(myScooter2,myUser);
    myScooterApp.rentScooter(myScooter2,myUser);
    myScooterApp.dockScooter(myScooter2,'Location1');
   /* myScooterApp.print();*/
}

main();