import styled from "styled-components";
import { Link } from "react-router-dom";
import { Btnadmin, A, Header, Footer } from "../../index"
import logo1 from "../../assets/Educacion.svg"; // Importa las rutas de tus logos SVG aquí
import logo2 from "../../assets/Logo TEC.svg";
import logo3 from "../../assets/TECNM.svg"
export function HomeTemplate() {
    return (

        <Container>
            <Header />
            <div>
                <br />
                <LogoContainer>
          <div>
            <LogoImg src={logo1} alt="Logo 1" width={120}/>
          </div>
          <Divider />
          <div>
            <LogoImg src={logo3} alt="Logo 3" width={100}/>
          </div>
          <Divider />
          <div>
            <LogoImg src={logo2} alt="Logo 2" width={50}/>
          </div>
        </LogoContainer>
                <center>
                    <Titulo>Instituto Tecnológico de Tuxtepec</Titulo>
                    <p>Bienvenido</p>
                </center>

                <ContainerBtn>
                    <center>
                        <CustomLink to="/loginAlumno">
                            <Btnadmin titulo="Alumno" icono={<A.iconoAlum size="4rem" />} />
                        </CustomLink>

                        <CustomLink to="/loginDocente">
                            <Btnadmin titulo="Docente" icono={<A.iconoUser size="4rem" />} />
                        </CustomLink>

                        <CustomLink to="/login">
                            <Btnadmin titulo="Admininistrador" icono={<A.iconoAdmin size="4rem" />} />
                        </CustomLink>
                    </center>



                </ContainerBtn>
                <br />
            </div>
            <Footer />
        </Container>
    )
}




const Container = styled.div`
text-align: center; // Centra los elementos hijos horizontalmente
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px; // Espacio entre los logos y las líneas
  
`;

const LogoImg = styled.img` // Establece el tamaño del logo
  height: auto;
`;

const Divider = styled.div`
  height: 70px; // Altura de la línea
  width: 2px; // Ancho de la línea
  background-color: black; // Color de la línea
  margin: 0 -900px;
`;


const Titulo = styled.span`
    
    font-size: 2rem;
    font-weight: 600;
    `
const ContainerBtn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    `;

const CustomLink = styled(Link)`
    text-decoration: none;
`;