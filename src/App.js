import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Navigation from "./components/Navigation"

 import Home from './pages/Home'
 import Login from './pages/Login'
 import Signup from './pages/Signup'
 import Chat from './pages/Chat'
 import ChatPage from './pages/ChatPage'
 import Footer from './components/Footer'
 import AboutUs from './pages/AboutUs'
 import ContactUs from './pages/ContactUs'
 import Trainers from './pages/Trainers'
 import DogWalkers from './pages/DogWalkers'
 import Pricing from './pages/Pricing'

function App() {
  return (
   <BrowserRouter>
  
   <Navigation />
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/chat' element={<Chat/>}/>
     <Route path='/chatPage' element={<ChatPage/>}/>
     <Route path='/ContactUs' element={<ContactUs/>}/>
     <Route path='/AboutUS' element={<AboutUs/>}/>
     <Route path='/Trainers' element={<Trainers/>}/>
     <Route path='/dogWalkers' element={<DogWalkers/>}/>
     <Route path='/pricing' element={<Pricing/>}/>
   </Routes>
   <Footer  className="footer-all"/>
   </BrowserRouter>
  );
}

export default App;
