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
  const { query, updateQuery } = useContext(QueryContext) as IQueryContext;
  const { table, attributes, reactors } = query;

  const convertFunc = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      // await axios.post('http://localhost:8080/converter/convert', {
      await axios.post('./converter/convert', {
        query: createQuery(query, tableAttributes),
      });
      setFileReadyQuery(query);
      setFileReady(true);
    } catch (error) {
      updateQuery('table', '');
      console.log(error);
    }
  };
  const isDisabled =
    table === '' || attributes.length === 0 || reactors.length === 0;
  return (
    <div className='convert'>
      <button
        type='button'
        className='convert-btn'
        onClick={convertFunc}
        disabled={isDisabled}
      >
        Convert to CSV
      </button>
    </div>
  );
}
