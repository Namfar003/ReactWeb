
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import All from './pages/Home';
import LuangPhabang from './pages/LuangPhabang';
import Part from './pages/Part';
import Register from './pages/Register';
function App() {
  return (
    <div >
   
     {/* <Header/>
     <Content/>
     <Pic/>
     <Second/>
     <Footer/>
     <Example/> */}
     <Routes>
      <Route exact path='/' element={<All/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/LuangPhabang' element={<LuangPhabang/>}/>
      <Route path='/Part' element={<Part/>}/>
      <Route path ='/Register' element={<Register/>}/>
      
      


      
      
     </Routes>
    
    
    
    
     
    </div>
  );
}

export default App;
