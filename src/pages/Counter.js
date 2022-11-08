import React from "react";
import { connect } from "react-redux";
import Header from "../components/HeaderHome";
import withSearchParams from "../helpers/withSearchParams";
import counterActions from "../redux/actions/counter";

function Counter({ searchParams, setSearchParams, counter, dispatch }) {
  console.log(searchParams);
  // eslint-disable-next-line no-unused-vars
  // const [searchParams, setSearchParams] = useSearchParams();
  const onClickhandler = (action) => {
    dispatch(action);
  };
  return (
    <>
      <main
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Header />
        <div style={{ backgroundColor: "grey", flex: 1 }}>
          <h1>Counter</h1>
        </div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active
        </button>
        <button onClick={() => setSearchParams({})}>Reset</button>
        <section>{counter.number}</section>
        <button onClick={() => onClickhandler(counterActions.counterUp())}>
          Counter Up
        </button>
        <button onClick={() => onClickhandler(counterActions.counterDown())}>
          Counter Down
        </button>
        <button onClick={() => onClickhandler(counterActions.counterReset())}>
          Resets
        </button>
      </main>
    </>
  );
}

const mapStateToProps = (reduxState) => {
  return {
    counter: reduxState.counter,
  };
};

export default withSearchParams(connect(mapStateToProps)(Counter));
