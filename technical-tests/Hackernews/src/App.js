import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import NewsListing from './components/NewsListing';
import { connect } from 'react-redux';
import getNews from './state/selectors/getNews';

// Use container pattern to decouple conerns from grid
const NewsListingContainer = connect(getNews)(NewsListing);

function App() {
  return ( 
      // Error boundary container
      // Wrapped around component to catch unhandled errors
      <ErrorBoundary>
        <NewsListingContainer></NewsListingContainer>
      </ErrorBoundary>
  );
}

export default App;
