import React, { FunctionComponent, useState, useEffect } from 'react';
import './styles.css';

// our components props accept a number for the initial value
export const Counter:FunctionComponent<{ initial?: number }> = ({ initial = 0 }) => {
    
  const [clicks, setClicks] = useState(initial);
  useEffect(() => {  
    // Update the document title using the browser API  
    document.title = `You clicked ${clicks} times`;  
  }); 
  
      return(
        <div className="counterDiv">
          <h2>ReactHooks_UseState</h2>
            <p>Clicks: {clicks}</p>            
            <button className="btn" onClick={() => setClicks(clicks-1)}>-</button>
            <button className="btn" onClick={() => setClicks(clicks+1)}>+</button>
        </div>
      );

  }
  
