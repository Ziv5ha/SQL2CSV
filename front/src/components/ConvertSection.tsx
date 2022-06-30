import React, { useContext } from 'react';
import axios from 'axios';
import '../styles/convertSection.css';
import { QueryContext } from '../context/queryContext';
import { IQuery, IQueryContext } from '../types';
import { createQuery } from '../helpers/createQuery';

export default function ConvertSection({
  tableAttributes,
  setFileReady,
  setFileReadyQuery,
}: {
  tableAttributes: string[];
  setFileReady: React.Dispatch<React.SetStateAction<boolean>>;
  setFileReadyQuery: React.Dispatch<React.SetStateAction<IQuery>>;
}) {
  const { query } = useContext(QueryContext) as IQueryContext;
  const { table, attributes } = query;

  const convertFunc = async () => {
    try {
      await axios.post('http://localhost:8080/converter/convert', {
        query: createQuery(query, tableAttributes),
      });
      setFileReadyQuery(query);
      setFileReady(true);
    } catch (error) {
      console.log(error);
    }
  };
  const isDisabled = table === '' || attributes.length === 0;
  return (
    <div className='convert'>
      <button
        className='convert-btn'
        onClick={convertFunc}
        disabled={isDisabled}
      >
        Convert to CSV
      </button>
    </div>
  );
}
