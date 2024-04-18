// components/PropertyCard.js
import React from 'react';

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <img src={property.imageUrl} alt={property.title} />
      <div>
        <h3>{property.title}</h3>
        <p>{property.description}</p>
      </div>
    </div>
  );
}

export default PropertyCard;
