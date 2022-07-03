import React from 'react';
import OptionBtn from './OptionBtn';
import '../../styles/optionsList.css';
import ChooseAllBtn from './ChooseAllBtn';

export default function OptionsList({
  options,
  queryPart,
  setAttributes,
  setReactors,
  setErrorMsg,
}: {
  options: string[];
  queryPart: 'table' | 'attributes' | 'reactors';
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
  setAttributes?: React.Dispatch<React.SetStateAction<string[]>>;
  setReactors?: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const optionsElems = options
    .filter((option) => option !== 'reactor_id')
    .map((option) => (
      <OptionBtn
        key={option}
        option={option}
        queryPart={queryPart}
        setErrorMsg={setErrorMsg}
        setAttributes={queryPart === 'table' ? setAttributes : undefined}
        setReactors={queryPart === 'table' ? setReactors : undefined}
      />
    ));
  return (
    <div className='options-li'>
      {queryPart !== 'table' ? (
        <ChooseAllBtn options={options} queryPart={queryPart} />
      ) : (
        ''
      )}
      {optionsElems}
    </div>
  );
}
