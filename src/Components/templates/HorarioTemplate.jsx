import React, { useState, useEffect } from "react";
import styled from "styled-components";
import QRCode from "react-qr-code";

export function HorarioTemplate() {
    const [materiaSeleccionada, setMateriaSeleccionada] = useState(null);
    const [qrValue, setQrValue] = useState(null);
    const [tiempoEscaneo, setTiempoEscaneo] = useState(0);
    const [asistenciaEscaneada, setAsistenciaEscaneada] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTiempoEscaneo((prevTime) => prevTime + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const clases = [
        { hora: "7:00-8:00", Lunes: "Calculo Diferencial", Martes: "Fund. De Telec. ", Miércoles: "Progr. O. O.", Jueves: "Leng y Automatas I", Viernes: "Graficación" },
        { hora: "9:30-11:00", Lunes: "Sistemas Operativos", Martes: "Graficación", Miércoles: "Fronted", Jueves: "Lenguaje y Automatas II", Viernes: "Fund. Base de Datos" },
        
    ];


    const generarCodigoQR = (materia) => {
        return `${materia}\nFecha y hora: ${new Date().toLocaleString()}`;
    };

    const handleClickGenerarQR = (materia) => {
        setMateriaSeleccionada(materia);
        setQrValue(generarCodigoQR(materia));
        setTiempoEscaneo(0);
        setAsistenciaEscaneada(false); 
    };

    const obtenerEstadoEscaneo = () => {
        if (tiempoEscaneo <= 10) {
            return "Presente";
        } else if (tiempoEscaneo <= 15) {
            return "Retardo";
        } else {
            return "Falta";
        }
    };
    useEffect(() => {
        if (tiempoEscaneo > 0 && tiempoEscaneo % 30 === 0) {
            setQrValue(generarCodigoQR(materiaSeleccionada));
        };
    }, [tiempoEscaneo, materiaSeleccionada]);

    const handleAsistenciaEscaneada = () => {
        setAsistenciaEscaneada(true);
    };


    return (
        <Container>
            <h1>Horario del Maestro</h1>
            <QRContainer>
                {qrValue && <ClickableQRCode value={qrValue} />}
                {qrValue && <TiempoEscaneo>Tiempo de escaneo: {tiempoEscaneo} segundos</TiempoEscaneo>}
                {qrValue && <EstadoEscaneo>Estado: {obtenerEstadoEscaneo()}</EstadoEscaneo>}
                {asistenciaEscaneada && <Notificacion>Tu asistencia ha sido escaneada</Notificacion>}
            </QRContainer>
            <HorarioTable>
                <thead>
                    <tr>
                        <th>Hora</th>
                        <th>Lunes</th>
                        <th>Martes</th>
                        <th>Miércoles</th>
                        <th>Jueves</th>
                        <th>Viernes</th>
                    </tr>
                </thead>
                <tbody>
                    {clases.map((clase, index) => (
                        <tr key={index}>
                            <td>{clase.hora}</td>
                            <td onClick={() => handleClickGenerarQR(clase.Lunes)}>{clase.Lunes}</td>
                            <td onClick={() => handleClickGenerarQR(clase.Martes)}>{clase.Martes}</td>
                            <td onClick={() => handleClickGenerarQR(clase.Miércoles)}>{clase.Miércoles}</td>
                            <td onClick={() => handleClickGenerarQR(clase.Jueves)}>{clase.Jueves}</td>
                            <td onClick={() => handleClickGenerarQR(clase.Viernes)}>{clase.Viernes}</td>
                        </tr>
                    ))}
                </tbody>
            </HorarioTable>
        </Container>
    );
}

const Container = styled.div`
    text-align: center;
    height: 100vh;
    position: relative;
`;

const QRContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ClickableQRCode = styled(QRCode)`
    cursor: pointer;
    margin-top: 20px;
`;

const TiempoEscaneo = styled.p`
    margin-top: 10px;
`;

const EstadoEscaneo = styled.p`
    font-weight: bold;
    margin-top: 5px;
`;

const HorarioTable = styled.table`
    margin: 20px auto;
    border-collapse: collapse;
    td, th {
        border: 1px solid #000;
        padding: 8px;
    }
    th {
        background-color: #f2f2f2;
    }
`;
const Notificacion = styled.p`
    margin-top: 10px;
    color: green;
    font-weight: bold;
`;
