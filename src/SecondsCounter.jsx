import React, { useEffect } from 'react';

const SecondsCounter = ({ seconds }) => {
  return (
    <div style={{ textAlign: 'center', fontSize: '2rem', margin: '20px' }}>
      <i className="fas fa-clock"></i> {/* Icono de reloj de Font Awesome */}
      <div>{seconds} segundos</div>
    </div>
  );
};

export default SecondsCounter;
