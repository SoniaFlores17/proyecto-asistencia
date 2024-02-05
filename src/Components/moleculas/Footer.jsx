import React from 'react';

const Footer = () => {
    return (
      <footer style={footerStyles}>
        <p>&copy; {new Date().getFullYear()} Instituto Tecnológico de Tuxtepec</p>
      </footer>
    );
  };
  
  const footerStyles = {
    backgroundColor: '#10312B', // Color de fondo
    color: '#fff',           // Color de texto
    padding: '15px',         // Espaciado interno
    textAlign: 'center',     // Alineación de texto    // Coloca el pie de página en la parte inferior de la página
    width: '100%',           // Ancho completo
    bottom: 0,               // Alineación en la parte inferior
    marginTop: '-20px' 
  };

  export default Footer;