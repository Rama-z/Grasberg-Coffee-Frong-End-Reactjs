// buat reducers
// sebuah fungsi yang menerima prevState dan action yang diterima
// (prevState, action) => {}

import actionStrings from "../actions/actionStrings";

const initialState = {
  // bekerja sebagai sefault value
  number: 0,
};

const counterReducer = (prevState = initialState, action) => {
  // Melakukan pengkondisian utnuk masing masing action
  // if(action.type = actionStrings.numberUp)
  switch (action.type) {
    case actionStrings.numberUp:
      // const newnumber = prevState.number + 1;
      return {
        ...prevState,
        number: prevState.number + 1,
      };
    case actionStrings.numberDown:
      return {
        ...prevState,
        number: prevState.number === 0 ? 0 : prevState.number - 1,
      };
    case actionStrings.numberReset:
      return {
        ...prevState,
        number: initialState.number,
      };
    default:
      return prevState;
  }
};

export default counterReducer;
