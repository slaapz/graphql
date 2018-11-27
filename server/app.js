const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Allow cross-origin requests
app.use(cors());

// connect to mlab database
mongoose.connect('mongodb://pat:test123@ds115664.mlab.com:15664/gql-server');
mongoose.connection.once('open', () => {
  console.log('Connected to the database');
});

// This middleware get passed the schema
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log(`Server started on port 4000`);
});
