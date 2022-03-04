import './App.css';
import {Outlet} from 'react-router-dom'
import Navbar from './component/Navbar';
import background from './assets/background.jpg'

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, height:'300vh', backgroundSize:'cover' }}>
      
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
