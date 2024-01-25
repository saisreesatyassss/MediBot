import './App.css';
import About from './pages/about';
import Home from './pages/home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import SignupClient from './pages/signupClient';
import { DoctorPage } from './pages/doctorPage';
import { ClientPage } from './pages/clientPage';
import Profile from './pages/profile';
import Doctorprofile from './pages/doctorProfile';
import HrJobs from './pages/JobsHR';
import Jobs from './pages/jobs';

function App() {
  return (
    console.log("Hello"),
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/clientSignup' element={<SignupClient/>}></Route>
          <Route path='/doctorPage/:id' element={<DoctorPage/>}></Route>
          <Route path='/clientPage/:id' element={<ClientPage/>}></Route>
          <Route path='/clientPage/profile/:id' element={<Profile/>}></Route>
          <Route path='/doctorPage/doctorProfile/:id' element={<Doctorprofile/>}></Route>
          <Route path='/doctorPage/jobs/:id' element={<HrJobs/>}></Route>
          <Route path='/clientPage/jobs/:id' element={<Jobs/>}></Route>
          <Route path='/clientPage/about/:id' element={<About/>}></Route>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
