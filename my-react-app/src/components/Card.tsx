import React, { useEffect, useState } from 'react';
// import './App.css';
import out from '../index.ts';
// import Body from './components/Body.tsx';

function Card() {
  const [data , setData ] = useState(out);

  useEffect(() => {
    // You can remove the dependency array since it's not needed
  }, []);

  return (
    <div>
      {/* <Body/> */}
      {data.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      
    </div>
  );
}

export default Card;

