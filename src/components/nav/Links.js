import React from 'react';

function Links(props) {
  const items = props.items.map((text, key) =>{
    return (
      <li key={key}>{text}</li>
    );
  });
  return (
    <ul>
      {items}
    </ul>
  );
}

export { Links };
