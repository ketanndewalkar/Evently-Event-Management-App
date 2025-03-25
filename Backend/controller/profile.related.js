const { default: axios } = require("axios");
const { user } = require("../models/AuthSchema");
const fs = require("fs");

const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

const profilecontroller = async (req, res) => {
  try {
    console.log("🔹 Hit profile update route");
    console.log("Request Body:", req.body);

    const { field, value } = req.body;

    // Ensure user is authenticated
    if (!req.user || !req.user._id) {
      console.log("❌ User not found in request");
      return res.status(401).json({ message: "Unauthorized: User not found" });
    }

    console.log("🔹 User ID:", req.user._id);

    // Fetch user schema fields
    const userSchemaFields = Object.keys(user.schema.paths);
    console.log("🔹 Allowed Fields:", userSchemaFields);

    // Check if the field exists in the schema
    if (!userSchemaFields.includes(field)) {
      console.log("❌ Invalid Field:", field);
      return res.status(400).json({ message: "Invalid field name" });
    }

    // Perform the update
    const updatedUser = await user.findByIdAndUpdate(
      req.user._id, // Find user by ID
      { [field]: value }, // Dynamically update field
      { new: true, runValidators: true } // Return updated doc & validate input
    );

    if (!updatedUser) {
      console.log("❌ User not found in database");
      return res.status(404).json({ message: "User not found" });
    }

    console.log("✅ Profile updated successfully:", updatedUser);
    return res.status(200).json({
      message: "Profile updated successfully",
      updatedUser,
    });
  } catch (error) {
    console.error("❌ Error updating profile:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const uploadprofile = async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  
  const filePath = req.file.path;
  const fileStream = fs.createReadStream(filePath);
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`;

  try {
    const response = await axios.post(
      url,
      {
        chat_id: CHAT_ID,
        document: fileStream,
      },
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    fs.unlinkSync(filePath); // Delete local file
    const file_id = response.data.result.document.file_id;
    let User = await user.findByIdAndUpdate(
      req.user._id,
      {
        profile: file_id,
      },
      { new: true, runValidators: true }
    ); // Return updated doc & validate input)
    return res.status(200).json({
      msg: "Profile updated Successfully!!!!",
      User,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to upload file", details: error.message });
  }
};

module.exports = { profilecontroller, uploadprofile };
