// components/PropertyListing.js
import React from 'react';
import PropertyCard from './PropertyCard';

function PropertyListing({ properties }) {
  return (
    <div className="property-listing">
      {properties.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

export default PropertyListing;
