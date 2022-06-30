import React, { useContext } from 'react';
import axios from 'axios';
import '../styles/optionBtn.css';
import { IQueryContext, QueryPart } from '../types';
import { QueryContext } from '../context/queryContext';

export default function OptionBtn({
  option,
  queryPart,
  setAttributes,
}: {
  option: string;
  queryPart: QueryPart;
  setAttributes?: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const { query, updateQuery } = useContext(QueryContext) as IQueryContext;

  const onClickFunc = async () => {
    updateQuery(queryPart, option);
    if (queryPart === 'table' && setAttributes) {
      try {
        const res = await axios.get(
          `http://localhost:8080/get/attributes/${option}`
        );
        setAttributes(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  let chosen =
    queryPart === 'table'
      ? query.table === option
      : query.attributes.includes(option);

  return (
    <button
      onClick={onClickFunc}
      className={chosen ? `option-btn chosen` : 'option-btn'}
    >
      {option}
    </button>
  );
}
