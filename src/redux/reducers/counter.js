// buat reducers
// sebuah fungsi yang menerima prevState dan action yang diterima
// (prevState, action) => {}

import actionStrings from "../actions/actionStrings";

const initialState = {
  // bekerja sebagai sefault value
  counter: 0,
};

const counterReducer = (prevState = initialState, action) => {
  // Melakukan pengkondisian utnuk masing masing action
  // if(action.type = actionStrings.counterUp)
  switch (action.type) {
    case actionStrings.counterUp:
      // const newCounter = prevState.counter + 1;
      return {
        ...prevState,
        counter: prevState.counter + 1,
      };
    case actionStrings.counterDown:
      return {
        ...prevState,
        counter: prevState.counter - 1,
      };
    case actionStrings.counterReset:
      return {
        ...prevState,
        counter: initialState.counter,
      };
    default:
      return prevState;
  }
};

export default counterReducer;
