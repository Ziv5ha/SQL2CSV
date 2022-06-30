import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/app.css';
import OptionsList from './components/OptionsList';
import QueryProvider from './context/queryContext';
import ConvertSection from './components/ConvertSection';
import ChooseTime from './components/time/ChooseTime';
import { IQuery } from './types';
import DownloadSection from './components/download/DSection';

function App() {
  const [tables, setTables] = useState<string[]>([]);
  const [attributes, setAttributes] = useState<string[]>([]);

  const [fileReady, setFileReady] = useState(false);
  const [fileReadyQuery, setFileReadyQuery] = useState<IQuery>({
    table: '',
    attributes: [],
    time: { start: '', end: '' },
  });

  useEffect(() => {
    // Get tables from server
    (async () => {
      try {
        const tables = await axios.get('http://localhost:8080/get/tables');
        setTables(tables.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <QueryProvider>
      <div className='app'>
        <OptionsList
          options={tables}
          queryPart='table'
          setAttributes={setAttributes}
        />
        {attributes.length > 0 ? (
          <OptionsList options={attributes} queryPart='attributes' />
        ) : (
          ''
        )}

        <div>
          {attributes.includes('date_time') ? <ChooseTime /> : ''}
          <ConvertSection
            tableAttributes={attributes}
            setFileReady={setFileReady}
            setFileReadyQuery={setFileReadyQuery}
          />
        </div>
        <DownloadSection
          fileReady={fileReady}
          fileReadyQuery={fileReadyQuery}
        />
      </div>
    </QueryProvider>
  );
}

export default App;
