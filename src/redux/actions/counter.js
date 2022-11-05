import actionStrings from "./actionStrings";

// baut action creator
// () => action
// 3 aksi

const counterUp = () => {
  return {
    type: actionStrings.counterUp,
  };
};

const counterDown = () => {
  return {
    type: actionStrings.counterDown,
  };
};

const counterReset = () => {
  return {
    type: actionStrings.counterReset,
  };
};

export default { counterUp, counterDown, counterReset };
