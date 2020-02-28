import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch } from "react-redux";
import fetchVariant from '../state/actions/fetchVariant'
import fetchColumns from '../state/actions/fetchColumns'
import styled from "styled-components"

// used stylised component for simple rendering
const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`

const TR = styled.div`
  padding: 8px 4px;
  border: 1px solid black;
`

function TableContainer(props) {
  const { columns, variant } = props;

  // use hook to store state
  const [clone, setsClone] = useState(props.show);

  // call redux to get data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVariant());
    dispatch(fetchColumns());
  }, [dispatch]);

  if (!columns && !variant) {
    return <div>Loading</div>;
  }

  // not sure if i got this right.  I have the data in the correct format
  // can do what ever mapping is needed
  const items = Object.values(variant)?.reduce(function(reducer, key) {
    const header = columns?.columns?.[key];
    if (header) {
      reducer.push(header);
    }
    return reducer;
  }, []);

  return (
    <Fragment>
        <SimpleTable items={items} />
      {clone && 
        <div>
          <SimpleTable items={clone} />
        </div>
      }
      <button onClick={() => setsClone(items)}>Clone</button>
    </Fragment>
  );
}

const SimpleTable = (prop) => {
  return (
    <Table>
      {prop.items && prop.items.map((item, index) => 
        <TR key={index}>
          {item}
        </TR>
        )}
      </Table>
)}

export function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

export default TableContainer;