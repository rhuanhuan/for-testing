const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World! v2'));

app.get('/admin', (req, res) => {
  req.header("Okta-Scp").contains('admin') ? res.send(`This is admin path`) : res.send('not admin access!')

});
app.get('/user', (req, res) => {
    res.send('This is user path')
});
app.get('/visitor', (req, res) => {
    res.send('This is visitor path')
});
app.get('/*', (req, res) => {
    // const header = req.header("Test-Header");
    // req.get("Okta-Scp");
    // res.status(200).send('you get what you want.' + req.headers["Okta-Scp"] + '------' + req.headers["Okta-Scp"].split(','))
    if(req.header("Okta-Scp").contains('user'))
    {
        res.status(200).send('you get what you want.')
    }
    else
    {
        res.status(401).send('you dont have the access!');
    }
    // const headers = req.headers;

    // res.status(404).send(`not found and test header is ${header}`)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
