import {BrowserRouter as Router, route} from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'

function App() {
  return (
    <Router>
    <div className='flex flex-col justify-betwen h-screen'>
      <Navbar />

    </div>
    </Router>
  );
}

export default App;
