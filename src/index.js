const express = require("express");
const morgan = require("morgan");
const helmet = require('helmet');

const app = express();
app.use(morgan('common'));
app.use(helmet());

const port = process.env.PORT || 1337;

app.get("/", (req, res) => {
   res.send("You are at the home page now....")
})
app.listen(port, () => {
   console.log(`Listening on port ${port}`);
   if (err) {
      console.log("There is some kind of error.... Retry")
   } else {
      console.log("The server is listening....")
   }
})

