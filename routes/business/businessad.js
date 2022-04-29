var express = require("express");
var BusinessAd = require("../../models/business/BusinessAd");
const router = express.Router();

router.post("/save", async (req, res) => {
  let body = req.body;
  let businessad = new BusinessAd.BusinessAd();
  businessad.id = body.data.id;
  businessad.businessid = body.data.businessid;
  businessad.title = body.data.title;
  businessad.link = body.data.link;
  businessad.imagecode = body.data.imagecode;
  businessad.srno = body.data.srno;  
  businessad.save().then(
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
  let businessad = new BusinessAd.BusinessAd();
  businessad.businessid = body.data.businessid;
  businessad.list().then(
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
  let businessad = new BusinessAd.BusinessAd();
  businessad.id = body.data.id;
  businessad.delete().then(
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
  let businessad = new BusinessAd.BusinessAd();
  businessad.id = body.data.id;
  businessad.get().then(
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