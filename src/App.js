
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Componets/Pages/Blogs/Blogs';
import Home from './Componets/Pages/Home/Home';
import Login from './Componets/Pages/Login/Login';
import Register from './Componets/Pages/Register/Register';
import Footer from './Componets/Shared/Footer/Footer';
// import Register from './Componets/Pages/Register/Register';
import Header from './Componets/Shared/Header/Header'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       {/* <Route path='/'></Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
