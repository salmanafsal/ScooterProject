// Import classes here
const Scooter = require('./classes/Scooter');
const User = require('./classes/User');
const ScooterApp = require('./classes/ScooterApp');

function main() {
    // You can run any of your classes here to test the outputs

    const myScooterApp = new ScooterApp();
    myScooterApp.registerUser('salman1', '1234', 30);
    myScooterApp.loginUser('salman1', '1234');
    myScooterApp.logoutUser('salman1');
    myScooterApp.createScooter('Location1');
    myScooterApp.createScooter('Location1');

}

main();