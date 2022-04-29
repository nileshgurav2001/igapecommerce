let Database = require("../Database");

class UserAddress {

    id = 0;
    userid = 0;
    name = "";
    email = "";
    mobileno = "";
    address1 = "";
    address2 = "";
    nearestspot = "";
    city = "";
    district = "";
    state = "";
    pincode = "";
    status = "";
    addresstype = "";

    db = new Database.Database();

    constructor(){

        this.id = 0;
        this.userid = 0;
        this.name = "";
        this.email = "";
        this.mobileno = "";
        this.address1 = "";
        this.address2 = "";
        this.nearestspot = "";
        this.city = "";
        this.district = "";
        this.state = "";
        this.pincode = "";
        this.status = "";
        this.addresstype = "";
    }

    save = ()=>{
        if(this.id == 0)
        {
            this.query = "INSERT INTO user_addresses(userid, name, email, mobileno, address1, address2, nearestspot, city, district, state, pincode, status, addresstype) ";
            this.query += "VALUES(" + this.userid + ", '" + this.name + "', '" + this.email + "', '" + this.mobileno + "', '" + this.address1 + "', ";
            this.query += "'" + this.address2 + "', '" + this.nearestspot + "', '" + this.city + "', '" + this.district + "', '" + this.state + "', ";
            this.query += "'" + this.pincode + "', '" + this.addresstype + "', 'open')";
        }
        else
        {
            this.query = "UPDATE user_addresses SET name = '" +  this.name + "', ";
            this.query += "email = '" + this.email + "', ";
            this.query += "mobileno = '" + this.mobileno +"', ";
            this.query += "address1 = '" + this.address1 +"', ";
            this.query += "address2 = '" + this.address2 + "', ";
            this.query += "nearestspot = '" + this.nearestspot + "', ";
            this.query += "city = '" + this.city + "', ";            
            this.query += "district = '" + this.district + "', ";
            this.query += "state = '" + this.state + "', ";
            this.query += "pincode = '" + this.pincode + "', ";
            this.query += "addresstype = '" + this.addresstype + "' ";
            this.query += "WHERE id = " + this.id;
        }
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
            });
        });        
    }

    get = () =>{
        this.query = "SELECT * FROM user_addresses WHERE id = " + this.id;
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
            });
        });        
    }

    list = () =>{
        this.query = "SELECT * FROM user_addresses WHERE userid = " + this.userid + " ORDER BY id";
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
            });
        });
    }
    
    delete = ()=>{
        this.query = "DELETE FROM user_addresses WHERE id = " + this.id;
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
            });
        });
    }

    changestatus = ()=>{
        this.query = "UPDATE user_addresses SET status = '" + this.status + "' WHERE id = " + this.id;
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) 
                {
                    return rejects(err);
                }
                resolve(result);
            });
        });
    }
}

module.exports = {
    UserAddress:UserAddress
}