import React from 'react';
import ErrorContainer from './components/ErrorContainer';
import TableContainer from './components/TableContainer';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux'
import { actions } from './state/index';
import getColumns from './state/selectors/getColumns';
import getVariants from './state/selectors/getVariants';

// Use container pattern to decouple conerns from grid
const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
}

const mapStateToProps = state => {
  return {
    columns: getColumns(state),
    variant: getVariants(state),  
  }
}

const TableListing = connect(mapStateToProps, mapDispatchToProps)(TableContainer);

function App() {
  return ( 
      // Error boundary container
      // Wrapped around component to catch unhandled errors
      <ErrorContainer>
        <TableListing></TableListing>
      </ErrorContainer>
  );
}

export default App;
