
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import ContactForm from "./Components/contact/ContactForm";
import Login from "./pages/login/login";
import ReviewForm from "./Components/reviewForm/ReviewForm";
import LoginForm from "./Components/login/LoginForm";
import Landingpage from "./Components/main/Landingpage"
import Landing from "./Components/packages/Landing";
import CardDetails from "./Components/card/CardDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/ContactForm" element={<ContactForm/> } />
        <Route path="/LoginForm" element={<LoginForm/> } />
        <Route path="/Landing" element={<Landing/> } />
        <Route path="/CardDetails" element={<CardDetails/> } />
        <Route path="/ReviewForm" element={<ReviewForm/> } />

        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
