const User = require('./User');


class Scooter {

ScooterUser= [];
static nextSerial = 1;
serial;
charge;
isBroken;
constructor(station )
{
    this.station = station;
    this.serial= Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
    this.ScooterUser = null;
}

rent(user)
{

    if(this.charge>20 && this.isBroken!== false )
    {
        this.ScooterUser.push(user);
    }
    else if (this.charge>20 && this.isBroken!== true )
    {

        throw new Error ('scooter needs repair');
    }
    else
    {

        throw new Error ('scooter needs to charge');
    }
}

dock(station)
{
    if(this.ScooterUser)
    {
    this.ScooterUser.pop();
    this.station = station;
    }
}

}

module.exports = Scooter;