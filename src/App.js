
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Post from './pages/post';
import { useState } from 'react';
function App() {

  const [auth, setauth] = useState(false);

  return <>
<Router>
  <nav>
    <Link to='/'>home</Link>
     <Link to='/post'>post</Link>``
      <Link to='/login'>login</Link>
  </nav>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login setauth={setauth} />}/>
    <Route path='/post' element={<Post/>}/>
  </Routes>
</Router>
  </>
}
export default App;
