const Database = require("../Database");

class Order {

    id = 0;
    paymentcode = "";
    businessid = 0;
    userid = 0;
    shippingaddressid = 0;
    billingaddressid = 0;
    subtotal = 0;
    shippingtotal = 0;
    couponid = 0;
    coupontotal = "";
    billtotal = 0;
    vendors = new Array();
    products = new Array();
    query1 = "";
    query2 = "";
    query3 = "";

    db = new Database.Database();

    constructor() {
        this.id = 0;
        this.paymentcode = "";
        this.businessid = 0;
        this.userid = 0;
        this.shippingaddressid = 0;
        this.billingaddressid = 0;
        this.subtotal = 0;
        this.shippingtotal = 0;
        this.couponid = 0;
        this.coupontotal = "";
        this.billtotal = 0;
        this.vendors = new Array();
        this.products = new Array();
        this.query1 = "";
        this.query2 = "";
        this.query3 = "";

    }

    placeorder = () => {
        this.query = "INSERT INTO user_orders(paymentcode, businessid, userid, shippingaddressid, billingaddressid, subtotal, shippingtotal, couponid, coupontotal, billtotal, status) ";
        this.query += "VALUES ('" + this.paymentcode + "', " + this.businessid + ", " + this.userid + ", ";
        this.query += this.shippingaddressid + ", " + this.billingaddressid + ", ";
        this.query += this.subtotal + ", " + this.shippingtotal + ", ";
        this.query += this.couponid + ", " + this.coupontotal + ", " + this.billtotal + ", 'new')";
        console.log(this.query);

        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                if (err) {
                    return reject(err);
                }
                this.id = result.insertId;
                this.vendors.forEach(vendor => {
                    this.query = "INSERT INTO user_orderinvoices(orderid, igapvendorid, subtotal, shippingtotal, coupontotal, billtotal, status) ";
                    this.query += "VALUES(" + this.id + ", " + vendor.igapvendorid + ", " + vendor.subtotal + ", ";
                    this.query += vendor.shippingtotal + ", " + vendor.coupontotal + ", " + vendor.billtotal + ", 'new')";
                    console.log(this.query);

                    this.db.query(this.query, (err, result) => {
                        let orderinvoiceid = result.insertId;
                        this.products.forEach(product => {
                            if (vendor.igapvendorid == product.igapvendorid) {
                                this.query = "INSERT INTO user_orderdetails(orderid, orderinvoiceid, productid, color, size, productname, price, quantity, ";
                                this.query += "subtotal, dealid, couponid, coupontotal, shippingtotal, billtotal, status) ";
                                this.query += "VALUES(" + this.id + ", " + orderinvoiceid + ", " + product.productid + ", ";
                                this.query += "'" + product.color + "', '" + product.size + "', '" + product.productname + "', ";
                                this.query += product.price + "," + product.quantity + ", " + product.subtotal + ", " + product.dealid + ", " + product.couponid + ",";
                                this.query += "" + product.coupontotal + ", " + product.shippingtotal + "," + product.billtotal + ", 'new')"
                                console.log(this.query);

                                this.db.query(this.query, (err, result) => {
                                });
                            }
                        })

                    });
                });
                resolve(result);
            });
        });
    };


    // markpaid = () => {

    //     this.query = "UPDATE user_orders SET status = 'paid' WHERE id = " + this.id + " AND businessid = " + this.businessid +"; "
    //     console.log(this.query);
    //     return new Promise((resolve, reject) => {
    //         this.db.query(this.query, (err, result) => {
    //             this.query += "UPDATE user_orderinvoices SET  status = 'paid' WHERE orderid = " + this.id + "; ";
    //             console.log(this.query);

    //             this.db.query(this.query, (err, result) => {
    //                 this.query += "UPDATE user_orderdetails SET  status = 'paid' WHERE orderid = " + this.id +"";
    //                 console.log(this.query);

    //                 this.db.query(this.query, (err, result) => {
    //                     this.db.close();
    //                     if (err)
    //                         reject(err);
    //                     resolve(result);
    //                 });
    //             });

    //         });
    //     });
    // };




    markpaid = () => {

        this.query1 = "UPDATE user_orders SET status = 'paid' WHERE id = " + this.id + " AND businessid = " + this.businessid + "; "
        this.query2 = "UPDATE user_orderinvoices SET  status = 'paid' WHERE orderid = " + this.id + "; ";
        this.query3 = "UPDATE user_orderdetails SET  status = 'paid' WHERE orderid = " + this.id + "";
        return new Promise((resolve, reject) => {

            this.db.query((this.query1), (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
                this.db.query((this.query2), (err, result) => {
                    if (err)
                        reject(err);
                    resolve(result);
                    console.log(this.query3);
                    this.db.query((this.query3), (err, result) => {
                        this.db.close()
                        if (err)
                            reject(err);
                        resolve(result);
                    });
                });
            });
        });

    };
}




module.exports = {
    Order: Order
}

