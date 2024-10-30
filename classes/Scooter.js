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
    this.ScooterUser = [];
}

rent(user)
{
    let check = 0;
    if(this.charge>20 && this.isBroken!== true )
    {

        for (let i=0;i<this.ScooterUser.length;i++)
        {

            if(this.ScooterUser[i]=== user)
            {

                console.log ('Scooter already rented');
                check =1;
            }


        }
        if(check ==0)
        {
        this.ScooterUser.push(user);
        console.log ('Scooter is rented');
        }
    }
    else if (this.charge>20 && this.isBroken!== false )
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
    console.log('Scooter is docked')
    }
}

}

module.exports = Scooter;