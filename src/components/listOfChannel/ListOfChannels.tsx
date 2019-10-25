import React, { useState, useEffect } from 'react';
import { string } from 'prop-types';
import './styles.css';

export default function ListOfChannels() {
    const [channelName, setChannelName] = useState<Array<any>>([]);
    const [language, setLanguage] = useState<string>('');   
    useEffect(() => {     
      fetch(`https://newsapi.org/v2/sources?language=${language}&apiKey=0c194d4e4c3043518b4e8745283f898f`)
        .then(results => results.json())
        .then(data => {
          console.log('channel', data);
          setChannelName(data.sources);          
        });
    }, [language]); 


  const channelList = channelName.map((channel) => <li>{channel.name}</li>);
    return ( 
      <div className="listDiv">
        <h2>ReactHooks_UseEffect</h2>
       <form>
          <label>
              <input 
              type="text" 
              value={language} 
              placeholder = "Enter the language" 
              onChange={e => setLanguage(e.target.value)}/>
          </label>
       </form>
       <ul>{channelList}</ul>        
      </div>
     );
    
  }

  