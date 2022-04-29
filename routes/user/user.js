var express = require("express");
var User = require("../../models/user/User");
const router = express.Router();

router.post("/register", async (req, res) => {
  let body = req.body;
  let user = new User.User();
  user.id = body.data.id;
  user.businessid = body.data.businessid;
  user.name = body.data.name;
  user.email = body.data.email;
  user.mobileno = body.data.mobileno;
  user.password = body.data.password;
  user.save().then(
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


router.post("/updatefirebaseid", async (req, res) => {
  let body = req.body;
  let user = new User.User();
  user.id = body.data.id;
  user.businessid = body.data.businessid;
  user.firebaseid = body.data.firebaseid;
  user.updatefirebaseid().then(
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



router.post("/updatebillingaddressid", async (req, res) => {
  let body = req.body;
  let user = new User.User();
  user.id = body.data.id;
  user.businessid = body.data.businessid;
  user.billingaddressid = body.data.billingaddressid;
  user.updatebillingaddressid().then(
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



router.post("/updateshippingaddressid", async (req, res) => {
  let body = req.body;
  let user = new User.User();
  user.id = body.data.id;
  user.businessid = body.data.businessid;
  user.shippingaddressid = body.data.shippingaddressid;
  user.updateshippingaddressid().then(
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
  let user = new User.User();
  user.businessid = body.data.businessid;
  user.list().then(
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
  let user = new User.User();
  user.id = body.data.id;
  user.delete().then(
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
  let user = new User.User();
  user.id = body.data.id;
  user.get().then(
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
