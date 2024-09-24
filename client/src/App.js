import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Contact from './components/Contact';
// import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Register from './components/Signup/Signup/Signup';
import Login from './components/Login/Login/Login';
import Logout from './components/Logout/Logout/Logout';
// import About_us from './components/About_us/About_us';
// import Clients from './components/Clients/Clients';
// import Services from './components/Services/Services';
// import Solutions from './components/Solutions/Solutions';
// import Survey_Solutions from './components/Survey_Solutions/Survey_Solutions'

function App() {
  return (
    <div>
    <Router> 
      <Navbar></Navbar>
      <Routes>
        {/* <Route path='/' element={<Home></Home>} ></Route> */}
        {/* <Route path='/Clients' element={<Clients></Clients>} ></Route> */}
        {/* <Route path='/Aboutus' element={<About_us></About_us>} ></Route> */}
        {/* <Route path='/Services' element={<Services></Services>} ></Route> */}
        <Route path='/contact' element={<Contact></Contact>} ></Route>
        <Route path='/Register' element={<Register></Register>} ></Route>
        <Route path='/Login' element={<Login></Login>} ></Route>
        <Route path='/Logout' element={<Logout></Logout>} ></Route>
        {/* <Route path='/Solutions' element={<Solutions></Solutions>} ></Route> */}
        {/* <Route path='/SurveySolutions' element={<Survey_Solutions></Survey_Solutions>} ></Route> */}
      
      </Routes>
      <Footer></Footer>
    </Router>
    </div>
  );
}

export default App;
