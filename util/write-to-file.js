const fs = require("fs");
const path = require("path");

module.exports = (data) => {
  console.log("Writing data to file:", data);
  try {
    fs.writeFileSync(
      path.join(__dirname, "..", "data", "movies.json"),
      JSON.stringify(data, null, 2), // Format JSON properly
      "utf-8"
    );
    console.log("✅ Data successfully written to movies.json");
  } catch (err) {
    console.error("❌ Error writing to file:", err);
  }
};
