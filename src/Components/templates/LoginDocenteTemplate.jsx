import styled from "styled-components";
import { Btnsave, v, Header, Footer, Btndoc } from "../../index"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import useAuthStore from '../../store/authStore';



export function LoginDocenteTemplate({ setUser }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const login = useAuthStore((state) => state.login);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!username || !password) {
          setError('Por favor, introduce usuario y contraseña');
          return;
        }

        const success = await login({username, password});
        if (!success) {
          setError('Usuario o contraseña incorrectos');
        } else {
          // Redirigir a la página después de iniciar sesión exitosamente
          navigate('/InicioDocente');
        }
      };
    

    

    return (
        <div>
            <Header />
            <Container>
                <div className="contentCard">
                    <div>
                        <img src={v.logo} width={100} />
                    </div>
                    <Titulo>Control de Asistencia</Titulo>
                    <h2 className="frase">Bienvenido</h2>

                    <form
                        className="Formulario"
                        onSubmit={handleLogin}>

                        <input className="inputContainer" type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            placeholder="Usuario"
                        />

                        <input className="inputContainer" type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Password" />

                        <ContainerBtn>
                            <Btndoc titulo="Iniciar sesión" funcion={handleLogin} />
                        </ContainerBtn>


                    </form>

                    {/* {error && <p>Todos los campos son obligatorios</p>} */}
                    {error && <p>{error}</p>}


                </div>
            </Container>
            <Footer />
        </div>
    )
}
const Container = styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
color: rgba(0, 0, 0, 0.87);
text-align: center;
/* para poner de fondo a una imagen */
/* background-image: url(${""});
background-repeat: no-repeat;
background-size: cover;
height: 100vh; */
.contentCard {
    background-color: #ffffff;
    border-radius: 20px;
    gap: 20px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-shadow: 8px 5px 18px 3px rgba(0,0,0,0.35);

    .contentImg{
        img{
            max-width: 20%;
        }
    }

    .Formulario{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    .Frase{
        color: #909090;
        font-size: 1.2rem;
    }
    
}
    .inputContainer {
    text-align: center;
    position: relative;
    background-color: #D4C19C;
    height: 45px;
    width: 90%;
    margin-bottom: 17px;
  }
`;


const Titulo = styled.span`
    font-size: 3rem;
    font-weight: 700;
    `
const ContainerBtn = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    text-align: center;
`

