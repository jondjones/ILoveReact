import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const MainImage = styled.div`
    img {
        object-fit: cover;
        width: 100%;
    }
`

const Title = styled.div`
    margin-top: 1rem;
    font-weight: bold;
`

const Item = styled.div`
    padding: 1rem;

    @media (min-width:961px) {
        margin-top: 5rem;
    }
`

const Content = styled.div`
    margin-top: 1rem;

    a {
        color: #6DE0D0;
        display: block;

        @media (min-width:961px) {
            padding-left: 1rem;
            display: inline-block;
        }
    }
` 

class Card extends Component {
  render() {
    
    const { title, description, image } = this.props;
    
    return (
        <Item>
            {image && 
                <MainImage>
                    <img src={image} alt={title} />
                </MainImage>
            }
            {title && 
                <Title>
                    {title}
                </Title>
            }
            {description && 
                <Content>
                    {description}
                    <a>Find Out More</a>
                </Content>

            }
        </Item>
    )}
}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
};

export default Card;