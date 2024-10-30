const User = require('../../classes/User');
const Scooter = require('../../classes/Scooter');
const ScooterApp = require('../../classes/ScooterApp');

describe('ScooterApp', () => {
    let app;

    beforeEach(() => {
        app = new ScooterApp();
    });

    test('should register a new user', () => {
        const user = app.registerUser('Alice', 'password123', 20);
        expect(user.username).toBe('Alice');
        
    });

    test('should throw an error if user already registered', () => {
        app.registerUser('Bob', 'password123', 22);
        expect(() => app.registerUser('Bob', 'password123', 22)).toThrow('User already registered.');
    });

    test('should throw an error if user is too young to register', () => {
        expect(() => app.registerUser('YoungUser', 'password123', 16)).toThrow('Too young to register.');
    });

    test('should log in a registered user', () => {
        app.registerUser('Alice', 'password123', 20);
        expect(() => app.loginUser('Alice', 'password123')).not.toThrow();
    });

    test('should throw an error for incorrect login', () => {
        app.registerUser('Bob', 'password123', 22);
        expect(() => app.loginUser('Bob', 'wrongpassword')).toThrow('Username or password is incorrect.');
    });

    test('should log out a logged-in user', () => {
        app.registerUser('Alice', 'password123', 20);
        app.loginUser('Alice', 'password123');
        expect(() => app.logoutUser('Alice')).not.toThrow();
    });

    test('should throw an error for incorrect logout', () => {
        expect(() => app.logoutUser('NonexistentUser')).toThrow('Username is incorrect.');
    });

    test('should create a scooter at a valid station', () => {
        const scooter = app.createScooter('Location1');
        expect(scooter).toBeDefined();
        expect(app.stations['Location1']).toContain(scooter);
    });

    test('should throw an error for creating a scooter at a non-existent station', () => {
        expect(() => app.createScooter('Location4')).toThrow('No such station.');
    });

   /* test('should dock a scooter at a station', () => {
        const scooter = app.createScooter('Location1');
        app.dockScooter(scooter, 'Location1');
        expect(app.stations['Location1']).toContain(scooter);
    });*/

    test('should throw an error if docking a scooter at a non-existent station', () => {
        const scooter = app.createScooter('Location1');
        expect(() => app.dockScooter(scooter, 'Location4')).toThrow('No such station.');
    });

    test('should throw an error if docking has already docked scooter', () => {
        const scooter = app.createScooter('Location1');
        
        expect(() => app.dockScooter(scooter, 'Location1')).toThrow('Scooter already at station.');
    });

    /*test('should rent a scooter to a registered user', () => {
        const scooter = app.createScooter('Location1');
        const user = app.registerUser('Alice', 'password123', 20);
        app.rentScooter(scooter, user);
        expect(scooter.isRented).toBe(true);
    });*/

    test('should throw an error if renting a scooter to a non-existent user', () => {
        const scooter = app.createScooter('Location1');
        expect(() => app.rentScooter(scooter, null)).toThrow('No such user.');
    });

    test('should print user and station details', () => {
        app.registerUser('Alice', 'password123', 20);
        app.createScooter('Location1');
        console.log = jest.fn(); // Mock console.log
        app.print();
        expect(console.log).toHaveBeenCalled();
    });
});
