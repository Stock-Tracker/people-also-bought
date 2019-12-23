const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 7777;
const app = express();

app.use(express.static('client/dist'));
app.use(express.static('client/public'));

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));