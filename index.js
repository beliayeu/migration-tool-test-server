const express = require('express');
const url = require('url');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.get('/redirect-to-category', (req, res) => {
  res.redirect(url.format({
    pathname: "/category"
  }));
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));