const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const path = require('path');

const dbConfig = require('./config/dbConfig')
app.use(express.json());
app.use(cors())
const userRoute = require("./routes/userRoute")
const adminRoute = require("./routes/adminRoute")
const doctorRoute = require("./routes/doctorRoute")
const path = require("path");
app.use('/api/user', userRoute);
app.use('/api/admin', adminRoute)
app.use('/api/doctor', doctorRoute);

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// For any routes not matching the static files, return the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const port = process.env.PORT || 5000

app.get("/", (req,res)=>{
    res.json("Server");
});

app.listen(port, () => console.log(`listening on port ${port}`));
