import "./App.css";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/page/Login";
import Dashboard from "./components/page/Dashboard";
import Clients from "./components/page/Clients";
import Services from "./components/page/Services";
import Finance from "./components/page/Finance";
function App() {
  return (
   <div className="flex min-h-screen w-screen flex-col  font-inter">
   <Routes>
    <Route path="/" element={<Navbar/>}/>
     <Route path="/login" element={<Login/>}/>

     <Route path="/dashboard" element={<Dashboard/>}> 
       {/* <Route index={true} element={<Clients/>}/>
       <Route path='/services' element={<Services/>}/>
       <Route path='/finance' element={<Finance/>}/> */}
     </Route>
   </Routes>
   </div>
  );
}

export default App;




















