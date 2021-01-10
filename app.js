import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
// DB connection
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// ROUTES:

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.use('/api', require('./routes/note'))


// const uri = 'mongodb://localhost:27017/mevn-db';
const uri = 'mongodb+srv://evinracher:sis2020@cluster0.cho2r.mongodb.net/mevn-app-db?retryWrites=true&w=majority';
const options = { useNewUrlParser: true, useCreateIndex: true };

// Or using promises
mongoose.connect(uri, options).then(
  /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
  () => { console.log('DB connected') },
  /** handle initial connection error */
  err => { console.log }
);

// Middleware for Vue.js router history mode
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
  console.log('Example app listening on port ' + app.get('port'));
});