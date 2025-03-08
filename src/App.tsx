import { Outlet } from 'react-router-dom'
// import './App.css'
import Navbar from './shared/compoents/navbar'
function App() {


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-4">
          <Navbar />
        </div>
        <div className="col-8">
        <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App
