const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World! v2'));

app.get('/admin', (req, res) => {
    res.send(`This is admin path`)
});
app.get('/user', (req, res) => {
    res.send('This is user path')
});
app.get('/visitor', (req, res) => {
    res.send('This is visitor path')
});
app.get('/*', (req, res) => {
    const header = req.header("Test-Header");
    if(req.header["Okta-Scp"].split(',').contains('user'))
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
