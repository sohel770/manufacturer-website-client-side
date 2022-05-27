import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProducts from './Componets/Pages/AddProducts/AddProducts';
import AddReviews from './Componets/Pages/AddReviews/AddReviews';
import Blogs from './Componets/Pages/Blogs/Blogs';
import Home from './Componets/Pages/Home/Home';
import Login from './Componets/Pages/Login/Login';
import MyOrders from './Componets/Pages/MyOrders/MyOrders';
import Portfolio from './Componets/Pages/Portfolio/Portfolio';
import Product from './Componets/Pages/Product/Product';
import Profile from './Componets/Pages/Profile/Profile';
import Purchase from './Componets/Pages/Purchase/Purchase';
import Register from './Componets/Pages/Register/Register';
import Footer from './Componets/Shared/Footer/Footer';
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
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/service' element={<Product></Product>}></Route>
        <Route path='/addProducts' element={<AddProducts></AddProducts>}></Route>
        <Route path='/addReviews' element={<AddReviews></AddReviews>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
        <Route path='/service/:id' element={<Purchase></Purchase>}></Route>
      <Route path='/myOrders' element={<MyOrders></MyOrders>}></Route>


      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
