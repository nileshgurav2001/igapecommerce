const Database = require("../Database");
var fs = require("fs");

class User {
  id = 0;
  businessid = "";
  name = "";
  email = "";
  mobileno = "";
  password = "";
  firebaseid = "";
  billingaddressid = 0;
  shippingaddressid = 0;

  db = new Database.Database();

  constructor() {
    this.id = 0;
    this.businessid = 0;
    this.name = "";
    this.email = "";
    this.mobileno = "";
    this.password = "";
    this.firebaseid = "";
    this.billingaddressid = 0;
    this.shippingaddressid = 0;   
  }

    save = () => {
        this.query = "INSERT INTO users(businessid, name, email, mobileno, password) ";
        this.query += "VALUES ('" + this.businessid + "', '" + this.name + "', '" + this.email + "', ";
        this.query += "'" + this.mobileno + "' , '" + this.password + "')";
        return new Promise((resolve, reject) => {
        this.db.query(this.query, (err, result) => {
            this.db.close();
                if (err) {
                return reject(err);
                }
                resolve(result);
            });
        });
    };

    updatefirebaseid = () => {
      this.query = "UPDATE users SET firebaseid = '" + this.firebaseid + "' ";
      this.query += "WHERE id = " + this.id;
      return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
          this.db.close();
              if (err) {
              return reject(err);
              }
              resolve(result);
          });
      });
    };

    updatebillingaddressid = () => {
      this.query = "UPDATE users SET billingaddressid = " + this.billingaddressid + " ";
      this.query += "WHERE id = " + this.id;
      return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
          this.db.close();
              if (err) {
              return reject(err);
              }
              resolve(result);
          });
      });
    };  

    updateshippingaddressid = () => {
      this.query = "UPDATE users SET shippingaddressid = " + this.shippingaddressid + " ";
      this.query += "WHERE id = " + this.id;
      return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
          this.db.close();
              if (err) {
              return reject(err);
              }
              resolve(result);
          });
      });
    };

  list = () => {
    this.query = "SELECT * FROM users WHERE businessid = " + this.businessid + " ORDER BY name";
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) reject(err);
        resolve(result);
      });
    });
  };  
  
  get = () => {
    this.query = "SELECT * FROM users WHERE id = " + this.id;
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) reject(err);
        resolve(result);
      });
    });
  };
}

module.exports = {
  User: User
};
