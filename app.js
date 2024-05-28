const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('PRINCESS OLOFU OLUCHI VUG/CSC/21/5809'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
