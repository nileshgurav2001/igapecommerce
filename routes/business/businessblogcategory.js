var express = require("express");
var bodyparser = require("body-parser");
var jsonparser = bodyparser.json();
const router = express.Router();
var BusinessBlogCategory = require("../../models/business/BusinessBlogCategory");

router.post("/save", async (req, res) => {
    let body = req.body;
    let businessblogcategory = new BusinessBlogCategory.BusinessBlogCategory();
    businessblogcategory.id = body.data.id;
    businessblogcategory.businessid = body.data.businessid;
    businessblogcategory.title = body.data.title;
    businessblogcategory.urltitle = body.data.urltitle;
    businessblogcategory.srno = body.data.srno;
    businessblogcategory.save().then(result =>{
        let data = 
        {
            "data":{
                "status":"success",
                "data":result
            }
        }
        res.end(JSON.stringify(data));
    },
    err =>{
        let data = {
            "data":{
                "status":"fail"
            }
        };
        res.end(JSON.stringify(data))
    }
    );
});

router.post("/list", async (req, res) => {
    let body = req.body;
    let businessblogcategory = new BusinessBlogCategory.BusinessBlogCategory();            
    businessblogcategory.businessid = body.data.businessid;
    businessblogcategory.list().then(result =>{
    let data = 
        {
            "data":{
                "status":"success",
                "data":result
            }
        }
        res.end(JSON.stringify(data));
    },
    err =>{
        let data = {
            "data":{
                "status":"fail"
            }
        };
        res.end(JSON.stringify(data))
    }
    );
});

router.post("/get", async (req, res) => {
    let body = req.body;
    let businessblogcategory = new BusinessBlogCategory.BusinessBlogCategory();
    businessblogcategory.id = body.data.id;
    businessblogcategory.get().then(
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
    let businessblogcategory = new BusinessBlogCategory.BusinessBlogCategory();
    businessblogcategory.id = body.data.id;
    businessblogcategory.delete().then(
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