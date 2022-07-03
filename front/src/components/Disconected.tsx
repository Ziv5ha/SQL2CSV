import axios from 'axios';
import React from 'react';
import '../styles/disconected.css';

export default function Disconected({ errorMsg }: { errorMsg: string }) {
  const onSubmitFunc = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('reconnecting...');
    await axios.post('./reconnect/');
    window.location.reload();
  };
  return (
    <div className='disconect-msg'>
      <h2>
        Disconected from Database <span className='blink'>🔴</span>
      </h2>
      {errorMsg}
      <form onSubmit={onSubmitFunc}>
        <button type='submit' className='refresh-btn'>
          Refresh
        </button>{' '}
        to try again
      </form>
    </div>
  );
}
