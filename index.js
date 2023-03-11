const app = require('express')();
const dotenv = require('dotenv');
const cors = require('cors')
const bodyParser = require('body-parser')

const Routes = require('./routes/index')
const Connection = require('./database/connection')

dotenv.config()
port = process.env.PORT
dbUsername = 'prem1232'
dbPassword = process.env.PASSWORD

Connection(dbUsername, dbPassword) ;

app.listen(port, () => {
    console.log("Listening on port", port)
})

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('*', Routes)