import styled from "styled-components";
export function Btnsave({funcion,titulo}) {


    return (
        <Container type="submit">
            <span className="btn" onClick={funcion}>{titulo}</span>
        </Container>
        
    )
}
    

const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border: none;
    gap: 10px;
    background-color: initial;
    .btn{
        background:#e43838;
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