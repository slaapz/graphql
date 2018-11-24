const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

// This middleware get passed the schema
app.use('/graphql', graphqlHTTP({}));

app.listen(4000, () => {
  console.log(`Server started on port 4000`);
});
