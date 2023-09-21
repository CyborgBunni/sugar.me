import './App.css';
import { 
  BrowserRouter,
  Routes, 
  Route  
} from 'react-router-dom';
import Home from './Home';
import CashApp from './CashApp';
import PayPal from './PayPal';
import Venmo from './Venmo';
import Header from './Header';
import Confirmation from './Confirmation';


function App() {
  return (
      <BrowserRouter basename='/'>
          <Header />
          <Routes>
            <Route path="/sugar.me" element={<Home />} />
            <Route path="/cashapp" element={<CashApp />} />
            <Route path="/paypal" element={<PayPal />} />
            <Route path="/venmo" element={<Venmo />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </BrowserRouter>
        
  );
}

export default App;