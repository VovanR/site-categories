var {graphql} = require('graphql');
var schema = require('./schema.js');

var query = '{ hello }';

graphql(schema, query)
    .then(result => {

      // Prints
      // {
      //   data: { hello: "world" }
      // }
      console.log(result);

    })
    .catch(err => {
        console.error('Oops!')
    });
