import styled from "styled-components"
import { SidebarD,Headers, Horario, Listas} from "../../index"
import { useState } from "react";

export function HomDocTemplate() {
  

  const [sidebarOpen, setSidebarOpen]
    = useState(true)
    const [selectedOption, setSelectedOption] = useState('Horario');

    const handleClickOpcion = (opcion) => {
    setSelectedOption(opcion); // Actualizar el estado al hacer clic en una opción del menú
  };

  return (
    <>
        <Headers />
      <Container className={sidebarOpen ? "sidebarState active" : ""}>
          <SidebarD 
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          handleClickOpcion={handleClickOpcion}
          />
        <ContentArea>
          {selectedOption === 'Horario' && <Horario />} {/* Renderizar Horario si es la opción seleccionada */}
          {selectedOption === 'Listas' && <Listas />} {/* Renderizar Lista si es la opción seleccionada */}
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