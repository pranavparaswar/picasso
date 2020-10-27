const express = require('express');
const app = express();
const config = require('./config').modules;
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const indexRouter = require('./routers/index').modules;

const PORT = config.PORT || process.env.PORT;

mongoose.connect(config.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT} !`);
});