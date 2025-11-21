const Asset = require("../models/Asset");

exports.addAsset = async (req, res) => {
  try {
    const asset = new Asset(req.body);
    await asset.save();
    res.json({ msg: "Asset added successfully", asset });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

exports.getAssets = async (req, res) => {
  try {
    const assets = await Asset.find();
    res.json(assets);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
