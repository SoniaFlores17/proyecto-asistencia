import React, { useState } from 'react';
import styled from "styled-components";



export function QueriesTemplate() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const executeQuery = () => {
    // Aquí podrías realizar la lógica para ejecutar la consulta SQL (enviarla al backend)
    // En este ejemplo, simplemente mostramos la consulta ingresada por el usuario
    setResult(`Query ejecutada: ${query}`);
  };

  return (
    <Container>
      <h1>Consultas de Alumnos y Maestros</h1>
      <textarea
        value={query}
        onChange={handleQueryChange}
        placeholder="Ingresa tu consulta SQL aquí"
        rows={5}
        cols={50}
      />
      <button onClick={executeQuery}>Ejecutar Consulta</button>
      {result && <div>Resultado: {result}</div>}
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;