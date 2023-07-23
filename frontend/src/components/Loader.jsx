import HashLoader from "react-spinners/HashLoader";

import React from 'react'

const Loader = () => {
  return (
    <HashLoader
        color="#082750"
        size={120}
        aria-label="Loading Spinner"
        data-testid="loader"
        style={{
            margin: "auto",
            display: "block",
          }}
    />
  )
}

export default Loader