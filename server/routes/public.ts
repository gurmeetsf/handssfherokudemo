import { Request, Response, Router } from "express";

import { DATABASEURL } from '../config';

var dbOperations = require("../dbOperations.js");

var pg = require('pg')
  , connString = process.env.DATABASE_URL || 'postgres://postgres:admin@localhost:5432/hsdemo1'
  , client
  , query;

 

const publicRouter: Router = Router();

publicRouter.get("/simple", (request: Request, response: Response) => {
     //dbOperations.addRecord(request,response);

    response.json({
        text: "Hello Angular 2  ha ha Test" ,
        title: "Greetings.",
      });


  
});

export { publicRouter };
