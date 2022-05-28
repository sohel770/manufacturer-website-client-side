
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp';
import Blogs from './Blogs/Blogs';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';




function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>



        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
