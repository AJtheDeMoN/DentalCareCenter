import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './screens/Home'
import Contact from './screens/Contact'
import Test from './screens/test'
import Braces from './screens/Services/braces'
import {HashRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home/" element={<Home/>}/>
          <Route path="/test" element={<Test/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/braces" element={<Braces/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
