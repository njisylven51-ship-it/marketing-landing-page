import './App.css'
import Home from "./components/home";
import Call_to_action from "./components/call_to_action";
import About from "./components/about";
import Contact from "./components/contact";
import Testimonials from './components/testimonials';
import Pricing from "./components/pricing";
import { Route, Routes} from 'react-router-dom';
import NAvbar from './components/navbar';


function App() {
  return (
<>


<NAvbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/call_to_action' element={<Call_to_action/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/testimonials' element={<Testimonials/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
    </Routes>
</>
  )
}

export default App
