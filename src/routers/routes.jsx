import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { Login, Home, Homadmin, Statistics, Queries, HomDoc, HomAlumn, Listas, Horario, LoginAlumno, LoginDocente, Scanner } from "../index";
export function MyRoutes() {
    // const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/loginAlumno" element={<LoginAlumno />} />

                <Route path="/loginDocente" element={<LoginDocente />} />


                <Route path="/InicioAdmin" element={<Homadmin />} />
                <Route path="/Estadisticas" element={<Statistics />} />
                <Route path="/Consultas" element={<Queries />} />
                <Route path="/InicioAlumno" element={<HomAlumn />} />
                <Route path="/Escanear" element={<Scanner />} />

                
                <Route path="/InicioDocente" element={<HomDoc />} />

          
                {/* <Route
                    path="/InicioDocente"
                    element={isLoggedIn ? <HomDoc/> : <Navigate to="/loginDocente" />}
                /> */}


                <Route path="/Listas" element={<Listas />} />
                <Route path="/Horario" element={<Horario />} />
            </Routes>
        </BrowserRouter>
    )

}
