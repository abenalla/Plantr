//const express = require("express");
const db = require("./models");
//const path = require('path');

//const app = express();

db.sync({ force: true })
  .then(() => {
    console.log("Database synced!");
    //db.close()//only if using a version of node finally
  })
  .catch((err) => {
    console.log("Disaster! Something went wrong!");
    console.log(err);
    //db.close()//only if using a version of node without finally
  })
  .finally(() => {
    //only if using a version of node WITH finally
    db.close();
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
