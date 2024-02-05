import styled from "styled-components"
import { Sidebar, Headers, Statistics,Queries } from "../../index"
import { useState } from "react";

export function HomadminTemplate() {

  const [sidebarOpen, setSidebarOpen]
    = useState(true)
  const [selectedOption, setSelectedOption] = useState('Estadisticas');

  const handleClickOpcion = (opcion) => {
    setSelectedOption(opcion); // Actualizar el estado al hacer clic en una opción del menú
  };


  return (
    <>
      <Headers />
      <Container className={sidebarOpen ? "sidebarState active" : ""}>
        <Sidebar 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
        handleClickOpcion={handleClickOpcion}
        />
         <ContentArea>
          {selectedOption === 'Estadisticas' && <Statistics/>} {/* Renderizar Horario si es la opción seleccionada */}
          {selectedOption === 'Consultas' && <Queries />} {/* Renderizar Lista si es la opción seleccionada */}
        </ContentArea>
      </Container>
    </>


  )
}

const Container = styled.div`

  display: grid;
  grid-template-columns: 90px auto;
  transition: all 0.3s;
  &.active{
    grid-template-columns: 300px auto;
  }
`;

const ContentArea = styled.div`
  /* Estilos para el área de contenido */
`;