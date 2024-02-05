 import styled from "styled-components";
//  import React, { useState } from 'react';
//  import QrReader from 'react-qr-reader';

 export const QRScanner = () => {
    // const [resultado, setResultado] = useState(null);
  
    // const manejarEscaner = (data) => {
    //   if (data) {
    //     setResultado(data);
    //   }
    // };
  
    // const manejarError = (error) => {
    //   console.error(error);
    // };
  
    return (
      <Container>
        <h1>Escanea tu asistencia</h1>
        {/* <QrReader
          delay={300}
          onError={manejarError}
          onScan={manejarEscaner}
          style={{ width: '100%' }}
        />
        {resultado && <p>Resultado: {resultado}</p>} */}
      </Container>
    );
  };


 const Container = styled.div`
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
 `
