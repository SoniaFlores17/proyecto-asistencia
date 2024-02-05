import React from 'react';


const Header = () => {
  return (
    <header style={headerStyles}>
      <h2>Instituto Tecnológico de Tuxtepec</h2>
    </header>
  );
};

const headerStyles = {
    backgroundColor: '#10312B', // Color de fondo
    color: '#fff',           // Color de texto
    padding: '15px',         // Espaciado interno
    textAlign: 'center',     // Alineación de texto 
    marginBottom: '300x'
  };

export default Header;