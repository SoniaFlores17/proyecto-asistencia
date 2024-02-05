import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

export function StatisticsTemplate() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/') // Reemplaza con la URL correcta del backend
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(dataFromBackend => {
        setChartData(dataFromBackend); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Container>
      <h1>Estadísticas de Alumnos y Maestros</h1>
      {chartData && (
        <Bar
          data={chartData}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                },
              }],
            },
          }}
        />
      )}
    </Container>
  );
}


const Container = styled.div`
    height: 100vh;
    `