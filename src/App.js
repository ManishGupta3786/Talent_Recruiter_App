import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import SignUp from './components/SignUp';

function App(props) {
  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/signup" element = {<SignUp/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
