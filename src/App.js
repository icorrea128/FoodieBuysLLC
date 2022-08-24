import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import FoodieBuysMap from './components/FoodieBuysMap';
import ContactUs from './components/ContactUs';
import HomeLoggedOut from './components/HomeLoggedOut'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLoggedOut></HomeLoggedOut>}>   </Route>
          <Route path="/home" exact element={<Home></Home>} >   </Route>
          <Route path="/login" exact element={<Login></Login>}>   </Route>
          <Route path="/foodiebuys" exact element={<FoodieBuysMap></FoodieBuysMap>}>   </Route>
          <Route path="/contactus" exact element={<ContactUs></ContactUs>}>   </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
