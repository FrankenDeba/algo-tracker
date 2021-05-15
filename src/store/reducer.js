import { UPDATE_NO_OF_DONE, CHANGE_STATUS } from "../actions/actionTypes"
const initialState = {
    data: {
        0: {
        key: 0,
        category: "Array",
        noOfQuestions: 5,
        hasStarted: false,
        noOfDone: 0,
        questions: [
            {title: "Find minimum and maximum element in an array",
            link: "https://practice.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1/?category[]=Arrays&category[]=Arrays&page=1&query=category[]Arrayspage1category[]Arrays",
            status: "not done",
            },
            {
                title: "C++ Arrays (Sum of array) ",
                link: "https://practice.geeksforgeeks.org/problems/c-arrays-sum-of-array-set-14805/1/?category[]=Arrays&category[]=Arrays&page=1&query=category[]Arrayspage1category[]Arrays",
                status: "not done",
            },
            {
                title: "Cyclically rotate an array by one",
                link: "https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1/?category[]=Arrays&category[]=Arrays&page=1&query=category[]Arrayspage1category[]Arrays",
                status: "not done",
            },
            {
                title: "",
                link: "",
                status: "not done",
            },
            {
                title: "",
                link: "",
                status: "not done",
            }
    
        ]
    },
    1: {
        key: 1,
        category: "Strings",
        noOfQuestions: 3,
        hasStarted: true,
        noOfDone: 2,
        questions: [
            {
                title: "",
                link: "",
                status: "done",
            },
            {
                title: "",
                link: "",
                status: "not done",
            },
            {
                title: "",
                link: "",
                status: "done",
            }
        ]
    },
    2: {
        key: 2,
        category: "Linked List",
        noOfQuestions: 4,
        hasStarted: true,
        noOfDone: 1,
        questions: [
            {
                title: "",
                link: "",
                status: "not done",
            },
            {
                title: "",
                link: "",
                status: "not done",
            },
            {
                title: "",
                link: "",
                status: "not done",
            },
            {
                title: "",
                link: "",
                status: "done",
            }
        ]
    },
    3: {
        key: 3,
        category: "Graph",
        noOfQuestions: 2,
        hasStarted: true,
        noOfDone: 1,
        questions: [
            {
                title: "",
                link: "",
                status: "not done",
            },
            {
                title: "",
                link: "",
                status: "not done",
            },
        ]
    },
    4: {
        key: 4,
        category: "Tree",
        noOfQuestions: 5,
        hasStarted: true,
        noOfDone: 1,
        questions: [
            {
                title: "",
                link: "",
                status: "not done",
            },
            {
                title: "",
                link: "",
                status: "not done",
            },
            {
                title: "",
                link: "",
                status: "not done",
            },
            {
                title: "",
                link: "",
                status: "done",
            },
            {
              title: "",
              link: "",
              status: "done",
          }
        ]
    },
    5: {
        key: 5,
        category: "DP",
        noOfQuestions: 4,
        hasStarted: true,
        noOfDone: 1,
        questions: [
            {
                title: "",
                link: "",
                status: "not done",
            },
            {
                title: "",
                link: "",
                status: "not done",
            },
            {
                title: "",
                link: "",
                status: "not done",
            },
            {
                title: "",
                link: "",
                status: "done",
            }
        ]
    },
    6: {
        key: 5,
        category: "Recursion",
        noOfQuestions: 4,
        hasStarted: true,
        noOfDone: 1,
        questions: [
            {
                title: "",
                link: "",
                status: "not done",
            },
            {
                title: "",
                link: "",
                status: "not done",
            },
            {
                title: "",
                link: "",
                status: "not done",
            },
            {
                title: "",
                link: "",
                status: "done",
            }
        ]
    },
    7: {
        key: 5,
        category: "Searching",
        noOfQuestions: 4,
        hasStarted: true,
        noOfDone: 1,
        questions: [
            {
                title: "",
                link: "",
                status: "not done",
            },
            {
                title: "",
                link: "",
                status: "not done",
            },
            {
                title: "",
                link: "",
                status: "not done",
            },
            {
                title: "",
                link: "",
                status: "done",
            }
        ]
    },
    8: {
        key: 8,
        category: "Sorting",
        noOfQuestions: 4,
        hasStarted: true,
        noOfDone: 1,
        questions: [
            {
                title: "",
                link: "",
                status: "not done",
            },
            {
                title: "",
                link: "",
                status: "not done",
            },
            {
                title: "",
                link: "",
                status: "not done",
            },
            {
                title: "",
                link: "",
                status: "done",
            }
        ]
    }
  }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_STATUS:
            let state2 = {...state}
            state2.data[action.payload.key].questions[action.payload.qno].status = action.payload.done ? "done" : "not done"
            return {
                ...state2
            }
        case UPDATE_NO_OF_DONE:
            let updatable = state[action.payload.key]
            updatable.noOfDone = updatable.questions.filter(ques => ques.status === "done").length
            return {
                ...state,
                [action.payload.key]: updatable
            }
        default:
            return state

    }
}