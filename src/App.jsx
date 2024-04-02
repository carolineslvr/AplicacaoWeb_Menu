import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Usuario from "./Usuario";
import MenuPrivado from "./MenuPrivado";
import MenuPublico from "./MenuPublico";
import Login from "./Login";
import Sobre from './Sobre';
import CalculadoraSalario from './CalculadoraSalario';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuPublico />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "usuario",
        element: <Usuario />
      },
      {
        path : "login",
        element : <Login/>
      }
    ]
  },
  {
    path: "/privado",
    element: <MenuPrivado />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "usuario",
        element: <Usuario />
      },
      {
        path : "login",
        element : <Login/>
      },
      {
        path : "sobre",
        element : <Sobre/>
      },
      {
        path : "calculadorasalario",
        element : <CalculadoraSalario/>
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
