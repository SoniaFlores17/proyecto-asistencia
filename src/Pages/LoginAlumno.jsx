import styled from "styled-components";
import { HomAlumn, LoginAlumnoTemplate} from "../index"
import { useState } from "react";



export function LoginAlumno() {
    // const setUser = (user) =>{
        
    // }
    const [user, setUser] = useState([])
    return (
        <>
        {user.length === 0 ? <LoginAlumnoTemplate setUser={setUser} /> 
        : <HomAlumn user={user} setUser={setUser}/>}
        </>
    )
}
const Container = styled.div``;