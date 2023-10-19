import 'bootstrap/dist/css/bootstrap.css'
import Navbar from "./pages/Navbar"
import Cards from "./pages/Cards"
import Footer from "./pages/Footer"
import Paragraph from "./pages/Paragraph"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {

  return (
    <>
      

      <Paragraph/>

      
        <Cards/>

        <Footer/>
      
      <Router>
        <Navbar/>
        <Routes>
          <Route index element={<Paragraph/>}/>
          
        </Routes>
      </Router>
    </>
  )
}

export default App
