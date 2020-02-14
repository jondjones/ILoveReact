import React, { useEffect } from 'react';
import fetchNews from '../state/actions/fetchNews'
import { useDispatch } from "react-redux";

function NewsListing(props) {
    const { hasNews, news } = props;

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchNews())
    }, [dispatch]);

    if (!hasNews) {
      return <div>Loading</div>;
    }

    return (
      <div>
        {news}
      </div>
    );

}

export default NewsListing;