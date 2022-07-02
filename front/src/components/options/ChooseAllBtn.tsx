import React, { useContext } from 'react';
import { QueryContext } from '../../context/queryContext';
import { IQueryContext } from '../../types';
import '../../styles/optionsList.css';

export default function ChooseAllBtn({
  options,
  queryPart,
}: {
  options: string[];
  queryPart: 'attributes' | 'reactors';
}) {
  const { query, updateQuery } = useContext(QueryContext) as IQueryContext;

  const isChecked = query[queryPart].length === options.length;

  const onClickFunc = () => {
    const updateInQuery = isChecked
      ? options
      : options.filter((option) => !query[queryPart].includes(option));
    updateInQuery.forEach((attr) => {
      updateQuery(queryPart, attr);
    });
  };
  return (
    <div className='all-toggle'>
      All:
      <label className='switch'>
        <input type='checkbox' onChange={onClickFunc} checked={isChecked} />
        <span className='slider round'></span>
      </label>
    </div>
  );
}
