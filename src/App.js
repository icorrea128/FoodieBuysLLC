import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import HomeLoggedOut from './components/HomeLoggedOut'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLoggedOut></HomeLoggedOut>}>   </Route>
          <Route path="/home" exact element={<Home></Home>} >   </Route>
          <Route path="/login" exact element={<Login></Login>}>   </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
