import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [usuario, setUsuario] = useState("");
    const navigate = useNavigate();
    const isAuth = !!localStorage.getItem("usuario");

    return (
        <>
            {
                !isAuth ? (
                    <>
                        <div>
                            <label>Usuario</label>
                            <input type="text" value={usuario}
                                onChange={e => setUsuario(e.target.value)} />
                            <button onClick={() => {
                                localStorage.setItem("usuario", usuario);
                                navigate('/privado');
                            }}>Login</button>
                        </div>
                    </>
                ) :
                    (
                        <>
                            <button onClick={() => {
                                localStorage.removeItem("usuario");
                                navigate('/');
                            }}>Logout</button>
                        </>
                    )
            }
        </>
    )


}

export default Login;