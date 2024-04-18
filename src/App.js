// App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ExtendedSearchBar from './components/ExtendedSearchBar';
import PropertyListing from './components/PropertyListing';

function App() {
  // Sample data
  const properties = [
    {
      id: 1,
      title: 'Price Trends',
      description: 'Check property rates and prices',
      imageUrl: 'https://www.99acres.com/universalapp/img/PriceTrend2.png',
    },
    {
      id: 2,
      title: 'Locality Insights',
      description: 'Know more about different localities',
      imageUrl: 'https://www.99acres.com/universalapp/img/AboutMyProperty2.png',
    },
    {
      id: 3,
      title: 'Genuine Reviews',
      description: 'Know what residents are saying',

      imageUrl: 'https://www.99acres.com/universalapp/img/ReviewsRatings2.png',
    },
  ];

  const handleSearch = (searchParams) => {
    // Handle search functionality
    console.log(searchParams);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="background-container">
        <ExtendedSearchBar onSearch={handleSearch} />
        <div className="property-listing-container">
          <h1>Property Listings</h1>
          <div className="property-listing">
            <PropertyListing properties={properties} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
