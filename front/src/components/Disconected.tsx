import React from 'react';
import '../styles/disconected.css';

export default function Disconected() {
  return (
    <div className='disconect-msg'>
      <h2>
        Disconected from Database <span className='blink'>🔴</span>
      </h2>
      Check if the database is online and restart the server.
      <br />
      If there's still a problem check the server logs for details.
    </div>
  );
}
