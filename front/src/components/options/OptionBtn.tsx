import React, { useContext } from 'react';
import axios, { Axios, AxiosError } from 'axios';
import '../../styles/optionBtn.css';
import { IQueryContext, QueryPart } from '../../types';
import { QueryContext } from '../../context/queryContext';

export default function OptionBtn({
  option,
  queryPart,
  setAttributes,
  setReactors,
}: {
  option: string;
  queryPart: QueryPart;
  setAttributes?: React.Dispatch<React.SetStateAction<string[]>>;
  setReactors?: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const { query, updateQuery } = useContext(QueryContext) as IQueryContext;

  const onClickFunc = async () => {
    updateQuery(queryPart, option);
    if (queryPart === 'table' && setAttributes && setReactors) {
      try {
        const attrs = await axios.get(
          // `http://localhost:8080/get/attributes/${option}`
          `./get/attributes/${option}`
        );
        setAttributes(attrs.data);
        const reactors = await axios.get(
          // `http://localhost:8080/get/reactors/${option}`
          `./get/reactors/${option}`
        );
        setReactors(reactors.data);
      } catch (error) {
        updateQuery('table', '');
        console.log(error);
      }
    }
  };
  let chosen =
    queryPart === 'table'
      ? query.table === option
      : query.attributes.includes(option) || query.reactors.includes(option);

  const optionText =
    option === 'measurements_five_hundred'
      ? 'Measurements 500L'
      : option === 'measurements_three'
      ? 'Measurements 3L'
      : option.replace(option[0], option[0].toUpperCase()).replaceAll('_', ' ');
  return (
    <button
      onClick={onClickFunc}
      className={chosen ? `option-btn chosen` : 'option-btn'}
    >
      {optionText}
    </button>
  );
}
