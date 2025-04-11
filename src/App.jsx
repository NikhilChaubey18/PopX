import { Route,Routes } from "react-router-dom"
import Home from "./components/Home";
import Signup from "./components/Signup";
import Create from "./components/Create";
import AccountSettings from "./components/AccountSettings";


export default function App() {
  return (
    <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/signup" element={<Signup />} />
    <Route path="/create" element={<Create />} />
    <Route path="/setting" element={<AccountSettings />} />
    
    
    
      
    
   
   </Routes>
  )
}