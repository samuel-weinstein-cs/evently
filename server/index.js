const express = require('express');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const eventRouter = require("./routes/eventRouter.js");
const userRouter=require('./routes/userRoutes.js');


//require routes


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));

app.use("/event", eventRouter)
app.use('/user', userRouter)

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})
