import React from 'react';

function HotdogButton(props) {
  return (
    <img src={require('../../img/hotdog_button.svg')} style={{height: '30px'}} alt='hotdog' onClick={props.click} className='hotdog'/>
  );
}

export { HotdogButton };
