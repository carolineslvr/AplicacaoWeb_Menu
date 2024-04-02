import { NavLink, Outlet } from "react-router-dom";

const MenuPrivado = () => {
    return (
        <>

        <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">                    
                    <NavLink className="navbar-brand" exact="true" to="/privado">Calculadora de Salário</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">                                
                                <NavLink className="nav-link active" exact="true" to="/privado">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active"
                                    exact="true" to="usuario">Usuario</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active"
                                    exact="true" to="login">Logout</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active"
                                    exact="true" to="sobre">Sobre</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active"
                                    exact="true" to="calculadorasalario">Calcular Salário</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>      
            <Outlet />
            {/* <ul>
                <li>
                    <NavLink exact="true" to="/privado">Home</NavLink>
                </li>
                <li>
                    <NavLink exact="true" to="usuario">Usuario</NavLink>
                </li>                
                <li>
                    <NavLink exact="true" to="login">Logout</NavLink>
                </li>                
            </ul>
            <Outlet/> */}
        </>
    )
}

export default MenuPrivado;