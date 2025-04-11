import { Route,Routes } from "react-router-dom"
import Home from "./components/Home";
import Signup from "./components/Signup";
import Create from "./components/Create";



export default function App() {
  return (
    <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/signup" element={<Signup />} />
    <Route path="/create" element={<Create />} />
   
    
    
    
      
    
   
   </Routes>
  )
}