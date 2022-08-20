const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors")
const mysql = require("mysql2");
const config = require('./config/db')
const app = express();  
const port = 5000;
app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());


app.use(require('./routes/auth'))
app.use(require('./routes/gallery'))
// app.use(require("./routes/students"));
// app.use(require("./routes/login"));
// app.use(require("./routes/teacher"));

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});