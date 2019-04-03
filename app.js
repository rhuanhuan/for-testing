const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World! v2'));

app.get('/admin', (req, res) => {
  req.header("Okta-Scp") && req.header("Okta-Scp").includes('forAdmin') ? res.send(`This is admin path`) : res.send('not admin access!')
});
app.get('/user', (req, res) => {
    res.send('This is user path')
});
app.get('/visitor', (req, res) => {
    res.send('This is visitor path')
});
app.get('/*', (req, res) => {
    const headers = req.headers;
    headers.url = req.originalUrl;

    res.status(404).send(headers)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
