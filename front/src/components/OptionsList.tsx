import React from 'react';
import OptionBtn from './OptionBtn';
import '../styles/optionsList.css';

export default function OptionsList({
  options,
  queryPart,
  setAttributes,
}: {
  options: string[];
  queryPart: 'table' | 'attributes';
  setAttributes?: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const optionsElems = options.map((option) => (
    <OptionBtn
      key={option}
      option={option}
      queryPart={queryPart}
      setAttributes={queryPart === 'table' ? setAttributes : undefined}
    />
  ));
  return <div className='options-li'>{optionsElems}</div>;
}
