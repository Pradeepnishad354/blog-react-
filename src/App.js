
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

import UserDashboard from './pages/user-routes/UserDashboard';
import PrivateRoute from './components/PrivateRoute';
import ProfileInfo from './pages/user-routes/ProfileInfo';
import PostPage from './pages/PostPage';
import Categories from './pages/Categories';
import AddCategory from './components/AddCategory';
import UpdateBlog from './pages/UpdateBlog';
import UserProvider from './context/UserProvider';
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
<Route path="/posts/:postId" element={<PostPage />} />
<Route path="/categories/:categoryId" element={<Categories />} />
<Route path='/add-category' element={<AddCategory/>}></Route>
<Route path='/user' element={<UserProvider/>}></Route>


<Route path='/user' element={<PrivateRoute/>}>
<Route path='dashboard' element={<UserDashboard/>}/>
<Route path='profile-info' element={<ProfileInfo/>}/>
<Route path='update-blog/:postId'  element={<UpdateBlog/>}/>



</Route>





</Routes>


    </BrowserRouter>



    </div>
  );
}

export default App;
