import React from 'react';
import styled from "styled-components"

const NewsItem = styled.article`
    font-family: cormorant,serif;
    color: #1e1e1e;
    line-height: 1.25em;
    font-weight: 500;
    cursor: pointer;
    letter-spacing: 1.3px;
    font-size: 2rem;
    display: grid;


    @media (min-device-width: 480px) {
        margin-left: 5vw;
        margin-right: 5vw;
        margin-bottom: 10vh;
    }

    @media (min-width: 1024px)  { 
        grid-gap: 10px;
        margin-left: 2vw;
        margin-right: 2vw;
    }
`

const Content = styled.div`
    margin-bottom: 1rem;
    grid-column: col 1 / span 6;
    grid-row: row;
    width: 70vw;

    @media (min-width:801px)  { 
        grid-column: unset;
    }
`

const Heading = styled.div`
    grid-column: col 1 / span 2;
    grid-row: row;
    color: grey;
    font-family: cormorant,serif;
    color: #1e1e1e;
    line-height: 1.25em;
    font-weight: 500;
    letter-spacing: 1.3px;
    font-size: 2rem;
`

const LearnMore = styled.a`
    color: grey;
    border-radius: 3px;
    text-align: center;
    text-decoration: none;
    grid-column: col 2 / span 5;
    grid-row: row;

    :after {
        color: grey;
        content: '';
        display: inline-block;
        margin-top: 1.05em;
        margin-left: -0.6em;
        width: 0.5em;
        height: 0.5em;
        border-top: 0.25em solid #333;
        border-right: 0.25em solid #333;
        -moz-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
`

const Details= styled.div`
    font-size: 0.75rem;
`

const NewsItemComponent = (item) => {
    const newsItem = item.item;
    return (
        <NewsItem onClick={() => window.location.href = newsItem.url}>
            <Content>
                <Heading>{newsItem.title}</Heading>
                <Details>{newsItem.points} points by {newsItem.user} {newsItem.time_ago} | {newsItem.comments_count} comments </Details>
            </Content>
            <LearnMore href={newsItem.url}></LearnMore>
        </NewsItem>
    )
}

export default NewsItemComponent;