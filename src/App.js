import './App.css';
import { Home_Page } from './Pages/Home_Page';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Cart } from './components/Cart';
import { ContextProvider } from './context/context';

function App() {
  return (
    <div className="App">
      <ContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home_Page/>}/>
          <Route path='/cart' element={<Cart/>}/>

         
        </Routes>
      </Router>
      </ContextProvider>
      
    </div>
  );
}

export default App;
