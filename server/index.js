const express = require('express');
const app = express();
require('./models/dbConfig');
const postRoutes = require('./routes/getDatasController');
const showRoutes = require('./routes/showPostController');
const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);

app.listen(5500, () => console.log('server start in 5500'));

app.use('/', postRoutes);
app.use('/', showRoutes);




