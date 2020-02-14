import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Grid from "./components/Grid/Grid";
import useAxios from 'axios-hooks'

function App() {

  const [{ data, loading, error }, refetch] = useAxios(
    'http://localhost:5000/api/conditions'
  )
 
  if (loading) return <p>Loading</p>
  if (error) return <p>Error</p>



  return (
    <Fragment>
    
        <Grid conditions={data}></Grid>
    </Fragment>
  )
}

export default App;