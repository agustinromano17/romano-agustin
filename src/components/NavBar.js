// IMPORTS - Requiero las librerias, componentes o lo que necesite arriba de todo

// COMPONENT - Desarrollo lo que necesito que haga mi componente

// EXPORT - Exportar el componente para poder utilizarlo en otras partes del codigo
import { Button } from "react-bootstrap"


const NavBar = () => {

    //Logic Develop
    return(
    <div className="App">
        <h2>Nav Bar</h2>
        <Button variant="primary">Boton 1</Button>{""}
    </div>
    )
}
export default NavBar