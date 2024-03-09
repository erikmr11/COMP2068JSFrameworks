const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const studentsRouter = require('./Routes/students');

dotenv.config(); // this loads environment variables from the .env file

const app = express();
const port = 3000;

// Connecting to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('It is connected to a DB');
  })
  .catch((err) => {
    console.error('Error connecting to a DB', err.message);
  });

app.use(express.json());

// using the students router for /students route
app.use('/students', studentsRouter);

app.listen(port, () => {
  console.log(`Server is live at http://localhost:${port}`);
});
