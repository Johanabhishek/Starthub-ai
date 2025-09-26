const mongoose = require("mongoose");

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("🍃 MongoDB connected successfully!");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = { connectMongoDB };
