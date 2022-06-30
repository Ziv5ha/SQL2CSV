import React from 'react';
import { IQuery } from '../../types';
import DownloadBtn from './DBtn';
import DownloadDescription from './DDescription';
import '../../styles/download.css';

export default function DownloadSection({
  fileReady,
  fileReadyQuery,
}: {
  fileReady: boolean;
  fileReadyQuery: IQuery;
}) {
  return (
    <div className='download' style={{ display: fileReady ? 'flex' : 'none' }}>
      {fileReady ? <DownloadDescription query={fileReadyQuery} /> : ''}
      {fileReady ? <DownloadBtn /> : ''}
    </div>
  );
}
