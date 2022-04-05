import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import About from './components/pages/About'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Navbar from "./components/Navbar";
import Searchbar from './components/Searchbar';
import Products from './components/pages/Products';

import Acessories from './components/pages/homenav_pages/Acessories'
import Electronics from './components/pages/homenav_pages/Electronics'
import Fashion from './components/pages/homenav_pages/Fashion'
import Furnitures from './components/pages/homenav_pages/Furnitures'
import Vehicles from './components/pages/homenav_pages/Vehicles'
import 'react-modern-drawer/dist/index.css'

const App=() => {
  return (
    <div className='app'>
 <Router>
      <Navbar/>
      <Searchbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Products" element=
        {<Products/>}>
<Route path='Acessories' element={<Acessories/>}/>
<Route path='Electronics' element={<Electronics />} />
<Route path='Fashion' element={<Fashion/>} />
<Route path='Furnitures' element={<Furnitures/>} />
<Route path='Vehicles' element={<Vehicles/>} />
        </Route>
        <Route path="About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </Router>
    </div>
   
  );
}

export default App;
