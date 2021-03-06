import React from 'react';
import '../../styles/stylesheets/Navigation.css';
import { Links, CloseButton } from './';

function Navigation(props) {
  return (
    <div className='navigation'>
      <div className='inner'>
        <CloseButton click={props.click}/>
        <div className='links'>
          <Links items={props.items}/>
        </div>
      </div>
    </div>
  );
}

export { Navigation };
