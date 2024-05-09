// import logo from './logo.svg';
//import './App.css';
import { useNavigate } from 'react-router-dom';
import './landing.css';
//import React from 'react';
//import Fdashboard from './Components/fdashboard.js';
function Landing() {
  const navigate=useNavigate();
  return (
    <div className="container">
      <div className='Heading'>
            <div className='Logo'>
              <div><img src='https://cdn.glitch.global/f7e94dc3-6137-4c8d-87cd-79f0eaa84d1f/project%20logo.png?v=1714555298444 ' alt='logo' className='image'/></div>
            </div>
            <div>
              <h1>Root To Retail</h1>
              <p>Bridging Farmers and customers together</p>
            </div>
      </div>
      <div>
          <div className='Category-buttons'>
            <div ><button onClick={()=>navigate("/dash")}>Farmer</button>
            </div>
            <div>Customer</div>
      </div>
      </div>

      {/* <Fdashboard /> */}

      
    </div>
    
  );
}

export default Landing;
