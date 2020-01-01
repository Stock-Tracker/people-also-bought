const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 4550;
const app = express();
const controller = require('../controller/index.js');

app.use(cors());
app.use(express.static('client/dist'));
app.use(express.static('client/public'));

app.get('/people-also-bought/:ticker', controller.getPab)

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));