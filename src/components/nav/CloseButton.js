import React from 'react';

function CloseButton(props) {
  return (
    <img src={require('../../img/white_close_button.svg')} style={{height: '30px'}} alt='hotdog' onClick={props.click} className='close'/>
  );
}

export { CloseButton };
