import { ASSESSORS_ADD } from '../types';

const initialState = [
  { id: '1', firstname: 'John', lastname: "Doe", email: 'john.doe@example.local'},
  { id: '2', firstname: 'Jane', lastname: "Doe", email: 'jane.doe@example.local'},
  { id: '3', firstname: '2222', lastname: "333", email: 'jan13e.doe@example.local'}
];

export const assessorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASSESSORS_ADD:
      return state.concat(action.payload);

    default:
      return state;
  }
}


/*
{
  assessors: [];
}
 */
