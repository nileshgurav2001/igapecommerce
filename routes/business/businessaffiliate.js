var express = require("express");
var BusinessAffiliate = require("../../models/business/BusinessAffiliate");
const router = express.Router();

router.post("/save", async (req, res) => {
  let body = req.body;

  let businessaffiliate = new BusinessAffiliate.BusinessAffiliate();
  businessaffiliate.id = body.data.id;
  businessaffiliate.businessid = body.data.businessid;
  businessaffiliate.userid = body.data.userid;
  businessaffiliate.requestedon = body.data.requestedon;  
  businessaffiliate.save().then(
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
  let businessaffiliate = new BusinessAffiliate.BusinessAffiliate();
  businessaffiliate.businessid = body.data.businessid;
  businessaffiliate.list().then(
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
  let businessaffiliate = new BusinessAffiliate.BusinessAffiliate();
  businessaffiliate.businessid = body.data.businessid;
  businessaffiliate.userid = body.data.userid;
  businessaffiliate.delete().then(
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
    let businessaffiliate = new BusinessAffiliate.BusinessAffiliate();
    businessaffiliate.id = body.data.id;
    businessaffiliate.status = body.data.status;
    businessaffiliate.changestatus().then(
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
  let businessaffiliate = new BusinessAffiliate.BusinessAffiliate();
  businessaffiliate.id = body.data.id;
  businessaffiliate.get().then(
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
