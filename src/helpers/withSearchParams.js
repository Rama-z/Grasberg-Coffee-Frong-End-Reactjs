import React from "react";
import { useSearchParams } from "react-router-dom";

function withSearchParams(Component) {
  // fungsi yang mereturnkan component
  function WithSearchParams(props) {
    // fungsi yang menampilkan fitur navigasi
    const [searchParams, setSearchParams] = useSearchParams();
    return (
      <Component
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        {...props}
      />
    );
  }
  return WithSearchParams;
}

export default withSearchParams;
