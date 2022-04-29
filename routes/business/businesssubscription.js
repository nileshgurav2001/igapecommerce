var express = require("express");
var bodyparser = require("body-parser");
var jsonparser = bodyparser.json();
const router = express.Router();
var BusinessSubscription = require("../../models/business/BusinessSubscription");

router.post("/subscribe", async (req, res) => {
  let body = req.body;
  let businesssubscription = new BusinessSubscription.BusinessSubscription();
  businesssubscription.id = body.data.id;
  businesssubscription.businessid = body.data.businessid;
  businesssubscription.email = body.data.email;
  businesssubscription.save().then(
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

router.post("/list", async (req, res) => {
  let body = req.body;
  let businesssubscription = new BusinessSubscription.BusinessSubscription();
  businesssubscription.businessid = body.data.businessid;
  businesssubscription.list().then(
    (result) => {
      console.log(result);

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

router.post("/unsubscribe", async (req, res) => {
  let body = req.body;
  console.log(body);
  let businesssubscription = new BusinessSubscription.BusinessSubscription();
  businesssubscription.businessid = body.data.businessid;
  businesssubscription.email = body.data.email;
  businesssubscription.delete().then(
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
