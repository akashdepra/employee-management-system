/**
 * Create reducer for redux
 * userData: information for login user
 * employeeData: Hard coded employee data, can be set from server
 */

let initialState = {
	userData: {},
    employeeData: [
        {
            emp_id: 101,
            first_name: "Rahul",
            middle_name: "M",
            last_name: "Sharma",
            salary: "1000",
            "employment_type": "permanent"
        },
        {
            emp_id: 102,
            first_name: "Dozi",
            middle_name: "Caren",
            last_name: "Shah",
            salary: "700",
            "employment_type": "permanent"
        },
        {
            emp_id: 103,
            first_name: "Mitali",
            middle_name: "",
            last_name: "Raj",
            salary: "1500",
            "employment_type": "permanent"
        },
        {
            emp_id: 104,
            first_name: "Vivek",
            middle_name: "",
            last_name: "Jain",
            salary: "1100",
            "employment_type": "permanent"
        },
        {
            emp_id: 105,
            first_name: "Sachin",
            middle_name: "",
            last_name: "Bassi",
            salary: "950",
            "employment_type": "permanent"
        },
        {
            emp_id: 106,
            first_name: "Stuart",
            middle_name: "",
            last_name: "Broad",
            salary: "1300",
            "employment_type": "permanent"
        }
    ]
}

// Use the initialState as a default value
export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGINUSER':
        return Object.assign({}, state, {
            userData: action.data
        });
    default:
      return state
  }
}
