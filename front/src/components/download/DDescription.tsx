import React from 'react';
import { IQuery } from '../../types';

export default function DownloadDescription({ query }: { query: IQuery }) {
  const { table, attributes, time } = query;
  const date_timeDescription = time.start ? (
    <p className='date_time-description'>
      WHERE date_time BETWEEN <br />
      <span>{time.start}</span>
      <br /> AND <br />
      <span>{time.end}</span>
    </p>
  ) : (
    ''
  );
  return (
    <div className='download-description'>
      hi there! download ready for:
      <br /> SELECT <span>{attributes.join(', ')}</span> <br />
      FROM <span>{table}</span>
      {date_timeDescription}
    </div>
  );
}
