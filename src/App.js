
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Componets/Pages/Home/Home';
import Header from './Componets/Shared/Header/Header'


function App() {
  return (
    <div className="App">
      <Header></Header>
    <Routes>
     <Route path='/' element={<Home></Home>}></Route>
    </Routes>
    </div>
  );
}

export default App;
