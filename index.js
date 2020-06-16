const express = require('express');
const url = require('url');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.get('/category', (req, res) => {
  res.send(`
    <html>
      <head></head>
      <body>hey from category page</body>
    </html>
  `);
});
app.get('/redirect-to-category', (req, res) => {
  res.redirect(url.format({
    pathname: "/category"
  }));
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));