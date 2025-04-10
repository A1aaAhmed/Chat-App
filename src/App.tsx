import { Outlet } from 'react-router-dom'
// import './App.css'
import Navbar from './shared/compoents/navbar'
import Footer from './pages/footer';
function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 m-0 p-0">
          <Navbar />
        </div>
        <div className="col-12 m-0 p-0 ">
        <Outlet />
        </div>
        <Footer />    
      </div>
    </div>
  )
}

export default App;
