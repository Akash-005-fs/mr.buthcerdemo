import React, { useState } from 'react';
import "../styles/homeland.css";

function HomeLand() {
 const [selectedLocation, setSelectedLocation] = useState(() => {
  return localStorage.getItem('selectedLocation') || 'Netherlands';
});


const handleLocationChange = (location) => {
  setSelectedLocation(location);
  localStorage.setItem('selectedLocation', location); // Save to localStorage
};


  return (
    <div className='homelandmain'>

      <div className='header'>
        <div className='logo2'>
          <div className='logo2in'></div>
        </div>
      </div>


<div className='available'>


<div className='availablein'>



<div className='picng'> 

<div className='picngin'></div>
</div>





<div className='texts'>
  <h1>MR. Butcher</h1>
  <h2>Now proudly serving the Netherlands and Germany</h2>
</div>


</div>





</div>






      <div className='location'>
        <div className="location-toggle">
          <div
            className="slider"
            style={{
              transform: selectedLocation === 'Netherlands' ? 'translateX(0%)' : 'translateX(100%)'
            }}
          />
       <button
  className={selectedLocation === 'Netherlands' ? 'active' : ''}
  onClick={() => handleLocationChange('Netherlands')}
>
  Netherlands
</button>
<button
  className={selectedLocation === 'Germany' ? 'active' : ''}
  onClick={() => handleLocationChange('Germany')}
>
  Germany
</button>
        </div>
      </div>




<div className='shopnow'>
  <button className='shop-button'>
    Shop Now <span className="arrow">→</span>
  </button>
</div>






    </div>
  );
}

export default HomeLand;
