const express = require('express');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const eventRouter = require("./routes/eventRouter")
const { Event } = require("./models")

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/event", eventRouter)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})
