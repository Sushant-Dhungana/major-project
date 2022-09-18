import React from 'react'
import { MDBSpinner } from 'mdb-react-ui-kit'

const Spinner = () => {
  return (
    <MDBSpinner
    className="me-2 text-danger"
    style={{ width: "3rem", height: "3rem", marginTop: "100px", marginLeft: "700px" }}
  >
    <span className="visually-hidden">Loading...</span>
  </MDBSpinner>
  )
}

export default Spinner