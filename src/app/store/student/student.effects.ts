import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { STUDENT_GET,STUDENT_GET_FAIL,STUDENT_GET_SUCCESS } from './student.actions';

@Injectable()
export class StudentEffects {

  @Effect()
  userGet$ = this.actions$
    .ofType(STUDENT_GET)
    .switchMap((action: Action) => {

      return this.http.get('/api/user', action.payload)
        .map((response: Response) => response.json())
        .catch(() => Observable.of(({ type: STUDENT_GET_FAIL })))
        .map((response) => ({type: STUDENT_GET_SUCCESS, payload: response}));

    });

  constructor(private actions$: Actions, private http: Http) {}
}
