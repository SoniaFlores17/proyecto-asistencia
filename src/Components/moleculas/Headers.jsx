import React from 'react';


const Headers = () => {
  return (
    <header style={headerStyles}>
      <h3>Sistema de Control de Asistencia</h3>
    </header>
  );
};

const headerStyles = {
    backgroundColor: '#10312B', // Color de fondo
    color: '#fff',           // Color de texto
    padding: '10px',         // Espaciado interno
    textAlign: 'center',     // Alineación de texto
  };

export default Headers;