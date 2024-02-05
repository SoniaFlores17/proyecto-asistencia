import styled from "styled-components";
import { HomDoc, LoginDocenteTemplate} from "../index"
import { useState } from "react";



export function LoginDocente() {
    // const setUser = (user) =>{
        
    // }
    const [user, setUser] = useState([])
    return (
        <>
        {user.length === 0 ? <LoginDocenteTemplate setUser={setUser} /> 
        : <HomDoc user={user} setUser={setUser}/>}
        </>
    )
}
const Container = styled.div``;