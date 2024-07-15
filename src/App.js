
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import PostPage from './pages/post';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import {auth} from './config/firebase_config'
function App() {

  const [isauth, setauth] = useState(false);

  const singout=()=>{
    signOut(auth).then(()=>{
      localStorage.clear();
      setauth(false);
      window.location.pathname='/login'
    }) 
  }



  return <>
<Router>
  <nav>
    <Link to='/'>home</Link>
     <Link to='/PostPage'>post</Link>
    {!isauth?<Link to='/login'>login</Link>:<button onClick={singout}>Log out</button>}
  </nav>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login setauth={setauth} />}/>
    <Route path='/PostPage' element={<PostPage/>}/>
  </Routes>
</Router>
  </>
}
export default App;
