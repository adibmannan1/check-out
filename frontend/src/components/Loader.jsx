import { Spinner } from "react-bootstrap";
import HashLoader from "react-spinners/HashLoader";

import React from 'react'

const Loader = () => {
  return (
    // <Spinner 
    // animation="border"
    // role="status"
    // style={{
    //     width: "100px",
    //     height: "100px",
    //     margin: "auto",
    //     display: "block",
    //     color: "#082750"
    // }}/>
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