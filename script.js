const express = require("express");
const fs = require("fs");

const app = express();

app.use((req,res,next) => {
     res.append("Access-Control-Allow-Origin", "*");
     res.append("Access-Control-Allow-Headers", "Control-Type");
     res.set("Access-Control-Expose-Headers", "*");
     next();
});

app.use(express.static(__dirname + "/public/"));