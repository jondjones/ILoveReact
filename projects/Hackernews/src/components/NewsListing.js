import React, { useEffect, useState } from 'react';
import fetchNews from '../state/actions/fetchNews'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import NewsItemComponent from './NewsItem'
import SpinnerComponent from './Spinner'
import Loader from './Loader'

const MainContainer = styled.div``

const MainHeading= styled.h1`
  font-size: 2.5em;
  text-transform: uppercase;
`

const SubHeading= styled.h1`
  display: none;

  @media (min-width:801px)  {
    display: block;
    font-size: 0.5em;
    text-transform: uppercase;
  }
`

const Header = styled.div`
  position: sticky;
  color: #3d3838;
  text-align: center;
  background-image: linear-gradient(120deg,#dcdcdc,#798888);
  z-index: 10;
  height: 120px;
  padding-top: 10px;
  padding-bottom: 10px;
  top: 0;
`

const NewsContainer = styled.div`
  margin: 2rem auto;
  padding: 0;
  max-width: 1250px;
  display: flex;
  flex-direction: column;
`

const NewsListing = (props) => {

    // props from state
    const { hasNews, news } = props;

    // local props to manage infinity loading
    const [ isFetching, setIsFetching] = useState(true);
    const [ nextPage, setCurrentPage] = useState(0);

    const loader = <Loader />
    const dispatch = useDispatch();

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  

    
    useEffect(() => {
      if (!isFetching) 
        return;

        setTimeout(() => {
          console.log(nextPage)
          const nextPagination = nextPage + 1;
          dispatch(fetchNews(nextPagination))
          setCurrentPage(nextPagination)
          setIsFetching(false);
        }, 2000);
    }, [isFetching]);


    function handleScroll() {
  
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        setIsFetching(true);
     }
    }

    let items;
    if (!hasNews && !isFetching) {
      items = loader;
    } else {
      items = news && news.map((newsItem, index) => <NewsItemComponent key={index} item={newsItem} />)   
    }

    return (
      <MainContainer>
        <Header>
          <MainHeading>Hacker News by JONDJONES.COM</MainHeading>
          <SubHeading>Science and Entrepreneurship</SubHeading>
        </Header>
        <NewsContainer>
          {items}
        </NewsContainer>
        {isFetching && <SpinnerComponent />}
      </MainContainer>
    )
}

export default NewsListing;