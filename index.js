const express = require('express');
const initRoute = require('./routes');

const app = express();

initRoute(app);

app.listen(8080, () => console.log("Server is running on http://localhost:8080"));