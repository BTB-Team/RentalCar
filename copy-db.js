import fs from "fs";

fs.copyFileSync("db.json", "public/db.json");

console.log("db.json copied to public/");
