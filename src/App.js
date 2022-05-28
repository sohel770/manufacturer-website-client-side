
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';




function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>



        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
