import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import './components/styles/Home.css'
import Home from './components/pages/Home';
import Formulario from './components/pages/Fomulario';
import Navbar from './components/navbar/Navbar';

function App() {
  // import o Switch antes do Router , Switch , Route 
  // antes do Router - <Switch></Switch>
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/Forms" element={<Formulario/>}/>
      </Routes>
    </Router>
  )}

export default App;
