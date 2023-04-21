const express = require("express");
const router = express.Router();
const cookiesParser = require("cookie-parser");
// const redis = require('redis')

//-------- db -------
const Url = require("../../models/Url");

router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.use(cookiesParser());

const sortId = require("shortid");

//------- Middleware ----------
const auth = require("../../middleware/auth");

// Fail to set the value into Redis
// i comment this code. i don't know what is wrong on it. i tried a lot
//please give me a  feedback where did i go wrong

//-----------------------------------------------------------------------------------------------------

//  const url = `redis://redis-15455.c263.us-east-1-2.ec2.cloud.redislabs.com:15455`;
//  const client = redis.createClient({
//    url: url,
//  });
//  client.connect();

//  client.on("connect", () => {
//    console.log("client connected");
// });

//----------- Route ----------
router.post("/", auth, async (req, res) => {
  const body = req.body;
  if (!body.url) {
    return res.status(400).send({ message: "Url is required" });
  }

  const isExistInDb = await Url.findOne({ originalUrl: body.url });

  if (isExistInDb) {
    res.status(200).send({
      message: "Sort Url is Already present",
      url: `http://3.80.156.254/url/${isExistInDb.url}`,
    });
  } else {
    //sort id generate
    const sortUrl = sortId(8);

    try {
      // ------------ insert url into Redis -------------

      // const response = await client.set(body.url, sortUrl);
      // const data = await client.get(body.url);

      // -----------------------------------------------

      // insert url into MongoDb
      const newUrl = new Url({
        url: sortUrl,
        originalUrl: body.url,
        user_id: req.user._id,
      });

      const urlCreated = await newUrl.save();

      res.status(201).send({
        message: `Sucessfully Url Created`,
        url: `http://3.80.156.254/url/${sortUrl}`,
      });
    } catch (error) {
      res.status(400).send({
        message: error,
      });
    }
  }
});

// --------- Redirect to main URL ------------

router.get("/:sortId", async (req, res) => {
  const sortId = req.params.sortId;

  const urlData = await Url.findOne({
    url: sortId,
  });

  if (urlData) {
    res.redirect(urlData.originalUrl);
  } else {
    res.send({ message: "Invalid Url" });
  }
});

module.exports = router;
