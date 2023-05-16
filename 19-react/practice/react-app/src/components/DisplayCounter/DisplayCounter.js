import React from 'react';

export default function DisplayCounter(props) {
 const {count} = props

  return (
    <div>
     <p>You clicked {count} times</p>
    </div>
  );
}