import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Card from '../Card/Card';
import styled, { css } from "styled-components";
import useAxios from 'axios-hooks'

const Conditions = styled.div`
    display: grid;
    grid-template-columns: repeat(1, [col-start] 1fr);
    grid-gap: 2rem;

    @media (min-width:961px) {
        grid-template-columns: repeat(4, [col-start] 1fr);
        padding: 2rem;
    }
`

class Grid extends Component {
  render() {

    const { conditions } = this.props;

    return (
        <Conditions>
            {conditions?.map((item, id) => {
                const description = truncate(item.snippet)
                const title = truncate(item.label, 25);
                return <Card key={id} description={description} title={title} image={item.image}></Card>
            })}
        </Conditions>
    )}
}

export function truncate(text, charLimit = 50) {
    if (!text)
        return;
    return text.length > charLimit ? text.substr(0, charLimit)+'...' : text 
}

Grid.propTypes = {
    conditions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            image: PropTypes.string,
            label: PropTypes.string,
            snippet: PropTypes.string
        })
    )
};

export default Grid;