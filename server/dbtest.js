var pg = require('pg')
  , connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/hsdemo1'
  , client
  , query;
client = new pg.Client(connectionString);
client.connect();
query = client.query('SELECT * FROM hscontacts');

 query.on('row', function(result) {
    console.log(result);

  
  });
query.on('end', function() { client.end(); });