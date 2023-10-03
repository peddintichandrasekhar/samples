import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Demos from './pages/Demos';
import Properties from './pages/Properties';
import Owners from './pages/Owners';
import Features from './pages/Features';
import Pages from './pages/Pages';
import Lognin from './pages/Lognin';
import Signin from './pages/signin';
import Submit from './pages/Submit';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/home'element={<Home/>}/>
        <Route path='/demos'element={<Demos/>}/>
        <Route path='/properties'element={<Properties/>}/>
        <Route path='/owners'element={<Owners/>}/>
        <Route path='/features'element={<Features/>}/>
        <Route path='/pages'element={<Pages/>}/>
        <Route path='/lognin'element={<Lognin/>}/>
        <Route path='/signin'element={<Signin/>}/>
        <Route path='/submit'element={<Submit/>}/>
        

      </Routes>
    </div>
  );
}

export default App;
