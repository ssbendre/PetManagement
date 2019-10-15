// *** main dependencies *** //
import express from 'express';
import bodyParser from 'body-parser';

// *** routes *** //
import routes from './routes/index';

// *** express instance *** //
const app = express();

// *** config middleware *** //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// *** main routes *** //
app.use('/', routes);

// *** server config *** //
app.listen(3000, () => {
    console.log('Node server running on http://localhost:3000');
});

module.exports = app;
