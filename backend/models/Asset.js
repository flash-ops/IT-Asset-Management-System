const mongoose = require("mongoose");

const AssetSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    serialNumber: { type: String, required: true },
    purchaseDate: { type: Date, required: true },
    status: { type: String, default: "Active" },
    assignedTo: { type: String, default: "Unassigned" },
    notes: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Asset", AssetSchema);
