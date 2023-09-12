import Nav from './componenetes/Nav.jsx'
import Footer from './componenetes/Footer.jsx'
import {Outlet} from 'react-router-dom'


function App() {

  return (
    <>
    <Nav/>
      {/*para ser renderizado de umarorta pai para chamar os filhos*/}
    <Outlet/>
    <Footer/>

    </>
  )
}

export default App
