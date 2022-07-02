import React from 'react';
import { IQuery } from '../../types';

export default function DownloadDescription({ query }: { query: IQuery }) {
  const { table, attributes, reactors, time } = query;
  const date_timeDescription = time.start ? (
    <p className='date_time-description'>
      from <br />
      <span>{time.start}</span>
      <br /> until <br />
      <span>{time.end}</span>
    </p>
  ) : (
    ''
  );
  return (
    <div className='download-description'>
      download ready for:
      <br /> selecting: <br /> <span>{attributes.join(', ')}</span> <br />
      for machines: <br /> <span>{reactors.join(', ')}</span>
      {date_timeDescription}
    </div>
  );
}
