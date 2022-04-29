var express = require("express");
var Order = require("../../models/user/Order");
const router = express.Router();


router.post("/placeorder", async (req, res) => {
    let body = req.body;
    let order = new Order.Order();
    order.paymentcode = body.data.paymentcode;
    order.id = body.data.id;
    order.businessid = body.data.businessid;
    order.userid = body.data.userid;
    order.shippingaddressid = body.data.shippingaddressid;
    order.billingaddressid = body.data.billingaddressid;
    order.subtotal = body.data.subtotal;
    order.shippingtotal = body.data.shippingtotal;
    order.couponid = body.data.couponid;
    order.coupontotal = body.data.coupontotal;
    order.billtotal = body.data.billtotal;
    order.vendors = body.data.vendors;
    order.products = body.data.products;
    order.placeorder().then(
      (result) => {
          
        let data = {
          data: {
            status: "success",
            data: result,
          },
        };
        res.end(JSON.stringify(data));
      },
      (err) => {
        let data = {
          data: {
            status: "fail",
          },
        };
        res.end(JSON.stringify(data));
      }
    );
  });



  
router.post("/markpaid", async (req, res) => {
    let body = req.body;
    let order = new Order.Order();
    order.id = body.data.id;
    order.businessid = body.data.businessid;

    order.markpaid().then(
      (result) => {
          
        let data = {
          data: {
            status: "success",
            data: result,
          },
        };
        res.end(JSON.stringify(data));
      },
      (err) => {
        let data = {
          data: {
            status: "fail",
          },
        };
        res.end(JSON.stringify(data));
      }
    );
  });
  
  module.exports = router;