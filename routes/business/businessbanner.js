var express = require("express");
var BusinessBanner = require("../../models/business/BusinessBanner");
const router = express.Router();

router.post("/save", async (req, res) => {
  let body = req.body;
  let businessbanner = new BusinessBanner.BusinessBanner();
  businessbanner.id = body.data.id;
  businessbanner.businessid = body.data.businessid;
  businessbanner.title = body.data.title;
  businessbanner.link = body.data.link;
  businessbanner.imagecode = body.data.imagecode;
  businessbanner.srno = body.data.srno;  
  businessbanner.save().then(
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
  let businessbanner = new BusinessBanner.BusinessBanner();
  businessbanner.businessid = body.data.businessid;
  businessbanner.list().then(
    result => {
      let data = {
        data: {
          "status": "success",
          "data": result
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
  let businessbanner = new BusinessBanner.BusinessBanner();
  businessbanner.id = body.data.id;
  businessbanner.delete().then(
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
  let businessbanner = new BusinessBanner.BusinessBanner();
  businessbanner.id = body.data.id;
  businessbanner.get().then(
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