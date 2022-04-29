var express = require("express");
var UserAddress = require("../../models/user/UserAddress");
const router = express.Router();

router.post("/save", async (req, res) => {
  let body = req.body;

  let useraddress = new UserAddress.UserAddress();
  useraddress.id = body.data.id;
  useraddress.userid = body.data.userid;
  useraddress.name = body.data.name;  
  useraddress.email = body.data.email;
  useraddress.mobileno = body.data.mobileno;
  useraddress.address1 = body.data.address1;
  useraddress.address2 = body.data.address2;
  useraddress.nearestspot = body.data.nearestspot;
  useraddress.city = body.data.city;
  useraddress.district = body.data.district;
  useraddress.state = body.data.state;
  useraddress.pincode = body.data.pincode;
  useraddress.addresstype = body.data.addresstype;
  useraddress.save().then(
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

router.post("/get", async (req, res) => {
  let body = req.body;
  let useraddress = new UserAddress.UserAddress();
  useraddress.id = body.data.id;
  useraddress.get().then(
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
  let useraddress = new UserAddress.UserAddress();
  useraddress.userid = body.data.userid;
  useraddress.list().then(
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

router.post("/delete", async (req, res) => {
  let body = req.body;
  let useraddress = new UserAddress.UserAddress();
  useraddress.id = body.data.id;
  useraddress.delete().then(
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

router.post("/changestatus", async (req, res) => {
  let body = req.body;
  let useraddress = new UserAddress.UserAddress();
  useraddress.id = body.data.id;
  useraddress.status = body.data.status;  
  useraddress.changestatus().then(result => {
      let data = {
          "status": "success",
          "data": result
      }
      res.end(JSON.stringify(data));
  },
      err => {
          let data = {
              "status": "failed"
          }
          res.end(JSON.stringify(data));
          console.log(err)
      });
});


module.exports = router;