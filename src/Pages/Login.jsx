import styled from "styled-components";
import {LoginTemplate, Homadmin} from "../index"
import { useState } from "react";


export function Login() {
    // const setUser = (user) =>{
        
    // }
    const [user, setUser] = useState([])
    return (
        <>
        {user.length === 0 ? <LoginTemplate setUser={setUser} /> 
        : <Homadmin user={user} setUser={setUser}/>}
        </>
    )
}
const Container = styled.div``;