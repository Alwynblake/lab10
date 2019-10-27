'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb//localhost:3000', {
  useNewUrlParser:true,
  useCreateIndex: true,
  useUnifiedTopology: true,
 });

// const mongooseOptions = {
//   useNewUrlParser:true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// };

mongoose.disconnect();