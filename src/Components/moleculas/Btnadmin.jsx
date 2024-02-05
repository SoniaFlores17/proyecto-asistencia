import styled from "styled-components";
import {Iconad} from "../../index"
export function Btnadmin({funcion,titulo,bgcolor, icono}) {
    return (
        <Container type="submit" bgcolor={bgcolor}>
            <Iconad></Iconad>
            <span className="icono">{icono}</span>
            <span className="btn" onClick={funcion}>{titulo}</span>
        </Container>

    )
}

const Container = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border: none;
    gap: 9px;
    background-color: initial;
    
    .btn{
        background: ${(props)=>props.bgcolor};
        padding: 0.6em 1.3em;
        font-weight: 900;
        font-size: 18px;
        border: 3px solid black;
        border-radius: 0.4em;
        box-shadow: 0.1em 0.1em #000;
        transition: 0.2s;
        white-space: 1px;
        color: #000;
        cursor: pointer;
        
        &:hover{
            transform: translate(-0.05em, -0.05em);
            box-shadow: 0.5em 0.15em #000;
        }
        &:active{
            transform: translate(0.05em, 0.05);
            box-shadow: 0.5em 0.5em #000;
        }
    }
`