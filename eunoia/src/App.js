import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import AddProducts from './components/AddProducts';
import GetProducts from './components/GetProducts';
import Mpesa from './components/Mpesa';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Wishlist from './components/WishList';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (

    <Router>

    
    <div className="App">
      <header className="App-header">

        <h1 className='header'>Eunoia-Rediscover your inner beauty online</h1>


        
      </header>

      <nav className='nav justify-content-center'>
       
        <Link to={"/"} className='navlink '>Get Products</Link>
        
        <Link to={"/addproducts"} className='navlink'>Add Products</Link>
        
        <Link to={"/signin"} className='navlink'>Sign In</Link>
        
        <Link to={"/signup"} className='navlink'>Sign Up</Link>

        <Link to={"/wishlist"} className='navlink'>Wish List ❤️</Link>
      </nav>


      <Routes>

        <Route path='/' element={<GetProducts/>}/>
        <Route path='/addproducts' element={<AddProducts/>}/>
        <Route path='/mpesa' element={<Mpesa/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
         <Route path='/wishlist' element={<Wishlist/>}/>




      </Routes>
    </div>

<Footer/>
    </Router>

    // <AddProducts/>
    // <GetProducts/>
    // <Mpesa/>
    // <SignIn/>
    // <SignUp/>

  );
}

export default App;
