import './App.css';
// import OffersNames from '../components/OffersNames'
import Medicine from './pages/Medicine';
import LabTest from './pages/LabTest';
import Health from './pages/Health';
import CarePlan from './pages/CarePlan';
import Other from './pages/Other';
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Online from './pages/Online';


function App() {
  return (
    <div className="App">
     {/* <Home/>
     <Login/>
     <About/>
     <Nav/> */}
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Medicine/>}></Route>
       <Route path="/labtest" element={<LabTest/>}></Route>
       <Route path="/health" element={<Health/>}></Route>
       <Route path="/online" element={<Online/>}></Route>
       <Route path="/careplan" element={<CarePlan/>}></Route>
       <Route path="/other" element={<Other/>}></Route>
     
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
