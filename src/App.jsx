import React from "react";
// import Login from "./Login";
import UncontrolledLogin from "./UncontrolledLogin";

function App() {
    // const handleLogin = (loginData) => {
    //     console.log("Login data:", loginData);
    // };

    const handleLogin = (userData) => {
        // Lógica de manejo del inicio de sesión (puede imprimir los datos por ahora)
        console.log("Login data:", userData);
    };

    return (
        <div>
            {/* <Login onLogin={handleLogin} /> */}
            <UncontrolledLogin onLogin={handleLogin} />
        </div>
    );
}

export default App;
