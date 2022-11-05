import React from "react";
import { connect } from "react-redux";
import Header from "../components/HeaderHome";
import withSearchParams from "../helpers/withSearchParams";

function Counter({ searchParams, setSearchParams }) {
  console.log(searchParams);
  // eslint-disable-next-line no-unused-vars
  // const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <main
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Header />
        <div style={{ backgroundColor: "grey", flex: 1 }}>
          <h1>Counter</h1>
        </div>
      </main>
      <button onClick={() => setSearchParams({ filter: "active" })}>
        Active
      </button>
      <button onClick={() => setSearchParams({})}>Reset</button>
    </>
  );
}

const mapStateToProps = (reduxState) => {
  return {
    counter: reduxState.counter,
  };
};

export default withSearchParams(connect(mapStateToProps)(Counter));
