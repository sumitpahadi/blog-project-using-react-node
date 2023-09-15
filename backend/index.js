const express = require("express");
const routes=require('./Routes/routes')
const cors=require('cors')

const app = express();

app.use(cors())
app.use(express.json());

app.use('/',routes)

const port = 5000;


app.listen(port, () => {
  console.log("your server is running on port " + port);
});
