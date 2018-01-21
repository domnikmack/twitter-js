const express = require('express');
const morgan = require('morgan');

const app = express();
const logger = morgan('combined');

app.use((req, res, next) => {
  console.log(req.method, req.path);
  res.on('finish', () => console.log(res.statusCode));
  next();
});

app.use('/news/', (req, res, next) => {
  console.log('logging the news route: ' + req.method, req.path);
  next();
});

app.use(logger);

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/news', (req, res) => res.send('This is the news route'));

app.listen(3000, () => console.log('App listening on port 3000'));

