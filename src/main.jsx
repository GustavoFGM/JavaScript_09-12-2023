import React, {} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './componenetes/Error.jsx'
import Home from './componenetes/Home.jsx'
import Produtos from './componenetes/Produtos.jsx'
import Exemplo from './componenetes/Exemplo.jsx'



//criando o metodo que vai executar as rotas

const router = createBrowserRouter([
  {
  //caminho do elemento pai
  path: '/',element:<App/>,
  errorElement:<Error/>,

  //caminho os elementos filhos
  children: [
    {path: '/Home',element:<Home/>},
    {path: '/Produtos',element:<Produtos/>},
    {path: '/Exemplo',element:<Exemplo/>},


  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
