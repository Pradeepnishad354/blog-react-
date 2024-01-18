
import './App.css';
import { Button } from 'reactstrap';
import About from './pages/About';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Services from './pages/Services';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateBlog from './pages/CreateBlog';

function App() {
  return (
    <div className="App">
     <ToastContainer />
    <BrowserRouter>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/login' element={<Login/>} />
<Route path='/signup' element={<SignUp/>} />
<Route path='/about' element={<About/>} />
<Route path='/services' element={<Services/>} />
<Route path='/blog' element={<CreateBlog/>}></Route>

</Routes>


    </BrowserRouter>



    </div>
  );
}

export default App;
