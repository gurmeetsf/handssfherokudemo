import { Request, Response, Router } from "express";

import { DATABASEURL } from '../config';

var pg = require('pg')
  , connectionString = process.env.DATABASE_URL || 'postgres://postgres:admin@localhost:5432/hsdemo1'
  , client
  , query;

const publicRouter: Router = Router();

publicRouter.get("/simple", (request: Request, response: Response) => {
  var email = '';

  client = new pg.Client(connectionString);
  client.connect();
  query = client.query('SELECT * FROM hscontacts');

  query.on('row', function (result) {
       email = result.email;

  });
  query.on('end', function () { client.end(); });
  response.json({
    text: "Hello Angular 2  ha ha Test"+ email ,
    title: "Greetings.",
  });
});

export { publicRouter };
