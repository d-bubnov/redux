import { ASSESSORS_ADD, ASSESSORS_REQUEST } from '../types';

const assessors = [
  { id: '6', firstname: 'Lorem', lastname: "Doe", email: 'john.doe@example.local'},
  { id: '7', firstname: 'Ipsum', lastname: "333", email: 'jan13e.doe@example.local'}
];

export const addAssessor = (assessor) => addAssessors([assessor]);

export const addAssessors = (assessors = []) => ({
  type: ASSESSORS_ADD,
  payload: assessors,
});

// export function loadAssessors() {
//   return (dispatch) => {
//     dispatch({ type: ASSESSORS_REQUEST });

//     Promise
//       .resolve(assessors)
//       .then((assessors) => {
//         dispatch(addAssessors(assessors));
//         dispatch({ type: ASSESSORS_SUCCESS});
//       })
//       .catch((e) => dispatch({ type: ASSESSORS_FAIL }));
//   }
// }

export function loadAssessors() {
  return { type: ASSESSORS_REQUEST };
}
