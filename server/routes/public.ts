import { Request, Response, Router } from "express";

import { DATABASEURL } from '../config';

var pg = require('pg')
  , connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/hsdemo1'
  , client
  , query;

const publicRouter: Router = Router();

publicRouter.get("/simple", (request: Request, response: Response) => {
  var email = 'ffffffffff';

  client = new pg.Client(connectionString);
  client.connect();
  query = client.query('SELECT * FROM hscontacts');

  query.on('row', function (result) {
    console.log(result);
    console.log(result.email);
    email = result.email;

  });
  query.on('end', function () { client.end(); });
  response.json({
    text: "Hello Angular 2 Test"+ email ,
    title: "Greetings.",
  });
});

export { publicRouter };
