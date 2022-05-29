import { QueryClient, QueryClientProvider } from 'react-query'
import RequireAuth from './Authentication/RequireAuth';
import RequireAdmin from './Authentication/RequireAdmin'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp';
import Blogs from './Blogs/Blogs';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';
import ProductPurchase from './ProductPurchase/ProductPurchase';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';
import AddProduct from './Dashboard/AddProduct';
import AddReview from './Dashboard/AddReview';
import Dashboard from './Dashboard/Dashboard';
import Users from './Dashboard/Users';
import MyProfile from './Dashboard/MyProfile';



const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
          <Route path='/product/:productId' element={
            <RequireAuth><ProductPurchase></ProductPurchase></RequireAuth>
          }></Route>


{/* start nestedRoute */}
    <Route path='/dashboard' element={<RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>


      {/* <Route index element={<Users></Users>}></Route> */}
      <Route path='addProduct' element={
            <RequireAuth>
              <AddProduct></AddProduct>
            </RequireAuth>}></Route>

          </Route>
 {/* End nestedRoute */}



         

          <Route path='/addReview' element={<RequireAuth>
            <AddReview></AddReview>
          </RequireAuth>}></Route>

          <Route path='/myProfile' element={<RequireAuth>
            <MyProfile></MyProfile>
          </RequireAuth>}></Route>

         




          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
        </Routes>

        <Footer></Footer>
        <ToastContainer></ToastContainer>
      </div>
    </QueryClientProvider>

  );
}

export default App;
