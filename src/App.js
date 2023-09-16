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

export default function App() {
  return (
    <BrowserRouter>
          <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cashapp" element={<CashApp />} />
          <Route path="/PayPal" element={<PayPal />} />
          <Route path="/Venmo" element={<Venmo />} />
        </Routes>
      </BrowserRouter>
  );
};