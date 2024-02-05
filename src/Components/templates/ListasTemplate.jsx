import React, { useState } from "react";
import styled from "styled-components";
import { PDFViewer, Document, Page, StyleSheet, Text, Image } from "@react-pdf/renderer";
import { BiColumns } from "react-icons/bi";


export function ListasTemplate() {
  const [mostrarPDF, setMostrarPDF] = useState(false);
  const [grupoSeleccionado, setGrupoSeleccionado] = useState("Grupo A");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");

  const generarPDF = () => {
    setMostrarPDF(true);
  };

  const cerrarPDF = () => {
    setMostrarPDF(false);
  };

  const handleGrupoChange = (event) => {
    setGrupoSeleccionado(event.target.value);
  };

  const handleFechaInicioChange = (event) => {
    setFechaInicio(event.target.value);
  };

  const handleFechaFinChange = (event) => {
    setFechaFin(event.target.value);
  };

  const nombreMateria = "Nombre de la Materia";
  const nombreDocente = "Nombre del Docente";
  const grupos = ["Grupo A", "Grupo B", "Grupo C"]; // Lista de grupos disponibles

  return (
    <Container>
      <h1>Listas de Alumnos</h1>
      {!mostrarPDF ? (
        <div>
          <select value={grupoSeleccionado} onChange={handleGrupoChange}>
            {grupos.map((grupo) => (
              <option key={grupo} value={grupo}>
                {grupo}
              </option>
            ))}
          </select>
          <input type="date" value={fechaInicio} onChange={handleFechaInicioChange} />
          <input type="date" value={fechaFin} onChange={handleFechaFinChange} />
          <button onClick={generarPDF}>Generar PDF de Asistencias</button>
        </div>
      ) : (
        <div>
          <button onClick={cerrarPDF}>Cerrar PDF</button>
          <PDFViewer width="100%" height={600}>
            <Document>
              <Page size="A4" style={styles.page}>
                <div style={styles.header}>
                  <Image style={styles.logo} src="ruta/al/logo.png" />
                  <Text style={styles.title}>{nombreMateria}</Text>
                  <Text style={styles.subtitle}>Docente: {nombreDocente}</Text>
                  <Text style={styles.subtitle}>Grupo: {grupoSeleccionado}</Text>
                </div>
                {/* Contenido del PDF */}
                {/* Usar los datos de ejemplo o los datos de tu aplicación */}
                {/* ... */}
              </Page>
            </Document>
          </PDFViewer>
        </div>
      )}
    </Container>
  );
}


const Container = styled.div`
  height: 100vh;
`;

const styles = StyleSheet.create({
  page: {
    padding: 40,
  },
  header: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'columns',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 5,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});



// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Document, Page, pdfjs } from 'react-pdf';

// // Para evitar problemas con las rutas relativas en react-pdf
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// // Datos simulados de asistencia por grupo
// const asistenciasPorGrupo = {
//   GrupoA: [
//     { nombre: 'Juan', apellido: 'García', estado: 'Presente' },
//     { nombre: 'María', apellido: 'Martínez', estado: 'Falta' },
//     // ... otros datos de asistencia del Grupo A
//   ],
//   GrupoB: [
//     { nombre: 'Carlos', apellido: 'Pérez', estado: 'Presente' },
//     { nombre: 'Ana', apellido: 'López', estado: 'Presente' },
//     // ... otros datos de asistencia del Grupo B
//   ],
//   // ... otros grupos
// };

// export function ListasTemplate() {
//   const [grupoSeleccionado, setGrupoSeleccionado] = useState('GrupoA'); // Grupo por defecto

//   const handleGrupoChange = (event) => {
//     setGrupoSeleccionado(event.target.value);
//   };

//   const alumnosDelGrupo = asistenciasPorGrupo[grupoSeleccionado] || [];

//   const generarPDF = () => {
//     // Lógica para generar el PDF con los datos de asistencia del grupo seleccionado
//     // Aquí puedes usar bibliotecas como react-pdf para generar el PDF
//     // En este ejemplo, se omitirá la generación real del PDF y se asumirá que ya existe
//     // Puedes reemplazar esta función con tu lógica real de generación de PDF
//   };

//   return (
//     <Container>
//       <h1>Listas de Asistencia de Alumnos</h1>
//       <Dropdown>
//         <select value={grupoSeleccionado} onChange={handleGrupoChange}>
//           <option value="GrupoA">Grupo A</option>
//           <option value="GrupoB">Grupo B</option>
//           {/* Agregar más opciones para otros grupos */}
//         </select>
//       </Dropdown>
//       <PDFViewer>
//         <Document file="ruta/al/archivo.pdf">
//           {/* Mostrar las páginas con la información de asistencia */}
//           {alumnosDelGrupo.map((alumno, index) => (
//             <Page key={index} pageNumber={index + 1} />
//           ))}
//         </Document>
//       </PDFViewer>
//       <DownloadButton onClick={generarPDF}>Descargar PDF</DownloadButton>
//     </Container>
//   );
// }

// const Container = styled.div`
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Dropdown = styled.div`
//   margin-bottom: 20px;
//   select {
//     /* Estilos para el select */
//   }
// `;

// const PDFViewer = styled.div`
//   border: 1px solid #ccc;
//   width: 100%;
//   height: 500px;
//   overflow: auto;
// `;

// const DownloadButton = styled.button`
//   margin-top: 20px;
//   padding: 10px 20px;
//   font-size: 16px;
//   border: none;
//   border-radius: 5px;
//   background-color: #007bff;
//   color: white;
//   cursor: pointer;
//   transition: background-color 0.3s;
//   &:hover {
//     background-color: #0056b3;
//   }
// `;








//  import styled from "styled-components";
//  export function ListasTemplate(){
//      return(
//          <Container>
//              <h1>Listas de Alumnos</h1>
//          </Container>
//      )
//  }
//  const Container = styled.div`
//      height: 100vh;
//      `