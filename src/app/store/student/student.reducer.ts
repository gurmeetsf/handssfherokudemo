import { Action, ActionReducer } from '@ngrx/store';
import { STUDENT_GET_SUCCESS } from './student.actions';

export interface IStudent {
  lastname: string;
  firstname: string;
  email: string;
}

export const studentReducer: ActionReducer<IStudent> = (state: IStudent, action: Action): IStudent => {

  switch (action.type) {

    case STUDENT_GET_SUCCESS:

      return Object.assign({}, action.payload);

    default:
      return state;
  }
};
