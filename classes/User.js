class User {

#loggedIn = false;    
constructor(username, password, age)
{
    this.username = username;
    this.password = password;
    this.age = age;


}
login(password)
{
    if(password === this.password)
    {

        this.#loggedIn = true;
        return this.#loggedIn;
    }
    else if (password !== this.password)
    {

        throw new Error ('Incorrect Password');
    }


    

}

logout()
{
    if(this.#loggedIn === false)
    {
        throw new Error ('You cannot logout as you are not logged in');
    }
    else
    {
        this.#loggedIn = false;

    }
}

}

module.exports = User;