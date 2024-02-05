import styled from "styled-components";
import gog from "../../../assets/react.svg"
import {A} from "../../../styles/Variables"
import { AiOutlineHome, AiOutlineLeft } from "react-icons/ai";
import { BsQrCodeScan } from "react-icons/bs";
import {BiLogOut } from "react-icons/bi"
import { NavLink } from "react-router-dom";



export function SidebarA({ sidebarOpen, setSidebarOpen, handleClickOpcion }) {
    const ModSidebarOpen = () => {
        setSidebarOpen(!sidebarOpen)
    }
    const linksArray = [
        {
            label: "Escanear",
            icon: <BsQrCodeScan/>,
            to: "/Escanear",
        },
        {
            label: "Salir",
            icon: <BiLogOut />,
            to: "/Listas",
        },
    ];


    return (
        <Container isOpen={sidebarOpen}>
            <button className="Sidebarbutton"
                onClick={ModSidebarOpen}>
                <AiOutlineLeft />

            </button>
            <div className="Logocontent">
                <div className="imgcontent">
                    <img src={gog} />

                </div>
                <h2>Menu</h2>

            </div>

            {linksArray.map(({ icon, label }) => (
                <div className="LinkContainer" key={label} 
                onClick={() => handleClickOpcion(label)}>
                    <div className="Linkicon"> {/* Maneja el clic y llama a la función handleClickOpcion */}
                        {icon}

                    </div>
                    {sidebarOpen && (
                        <span>{label}</span>
                    )}
                </div>
            ))}
        </Container>
    );
}

// ---------------------------------------------------------------------------------------------------------------------------------
const Container = styled.div`
color: ${(props) => props.theme.text};

background: #5886d1; //para darle el color al sidebar
position: sticky;   //Para desplazar 
padding-top: 20px;

.Sidebarbutton{
    position: absolute;
    top: ${A.xxlSpacing};
    right: -18px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background:#D4C19C;    //${(props) => props.theme.bgtderecha};
    box-shadow: 0 0 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
    transform: ${({ isOpen }) => (isOpen ?
    `initial` : `rotate(180deg)`)};
    border:none;
    letter-spacing: inherit;
    color: inherit;
        font-size:inherit;
        text-align:inherit;
        padding: 0;
        font-family: inherit;
        outline:none;
}

.Logocontent{
    display: flex;
    justify-content: center;
    align-items: center;

    padding-bottom: ${A.lgSpacing};
    .imgcontent{
        img{
            max-width: 100%;
            height: auto;
        }
        cursor: pointer;
        transition: all 0.3s;
        transform: ${({ isOpen }) => (isOpen ?
    `scale(0.7)` : `scale(1.5)`)};

    }

    h2{
        display: ${({ isOpen }) => (isOpen ?
    `block` : `none`)}; 
    }
}



.LinkOption {
  /* Estilos base para las opciones del menú */
  display: flex;
  align-items: center;
  padding: 10px;
  transition: background-color 0.3s;

  &:hover {
    /* Estilos al pasar el ratón sobre las opciones del menú */
    .LinkContent {
      background-color: #c1d1ea; /* Cambia al color que prefieras */
    }
  }
}

.LinkContent {
  display: flex;
  align-items: center;
  padding: 10px; /* Ajusta el espacio alrededor del contenido */
  transition: background-color 0.3s;


}
.LinkContainer{
    margin: 8px 0;
    padding: 0 15%;
    display: flex;
    align-items: center;
    height:50px;
    :hover{
        background: #c1d1ea;
    }
     /* .Links{
        display: flex;
        align-items: center;
        text-decoration: none;
        padding:calc(${A.smSpacing}-2px) 0;
        color: #ffffff;;  */

        .Linkicon{
            padding: ${A.smSpacing} ${A.mdSpacing};
            display:flex;

            svg{
                font-size:25px;
            }

        }
        &.active{
            .Linkicon{
                svg{
                    color:purple;
                }
            }
        }
    /* } */
}


`