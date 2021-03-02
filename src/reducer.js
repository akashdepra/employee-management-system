/**
 * Create reducer for redux
 * userData: information for login user
 * employeeData: Hard coded employee data, can be set from server
 */

let initialState = {
	userData: {},
    employeeData: []
}

// Use the initialState as a default value
export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGINUSER':
        return Object.assign({}, state, {
            userData: action.data
        });
    case 'SETEMPTDATA':
        return Object.assign({}, state, {
            employeeData: action.data
        });
    default:
      return state
  }
}
