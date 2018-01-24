var query = '{ hello }';

fetch(`http://localhost:4000/graphql?query=${encodeURI(query)}`)
  .then(data => data.json())
  .then(console.log)
  .catch(err => console.error('Ooops!..'))
