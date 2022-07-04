import React, { useContext } from 'react';
import { QueryContext } from '../../context/queryContext';
import { getMomentXHoursAgo, getNowMoment } from '../../helpers/timeCalc';
import { IQueryContext } from '../../types';

export default function QuickPicker({
  hours,
  choosen,
  setChoosen,
}: {
  hours: number;
  choosen: number;
  setChoosen: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { updateQuery } = useContext(QueryContext) as IQueryContext;
  const onClickFunc = () => {
    updateQuery('timeEnd', getNowMoment());
    updateQuery('timeStart', getMomentXHoursAgo(hours));
    setChoosen(hours);
  };
  return (
    <button
      onClick={onClickFunc}
      className={
        choosen === hours ? 'quick-picker-btn chosen' : 'quick-picker-btn'
      }
    >
      {hours < 23 ? `last ${hours} hours` : `last ${hours / 24} days`}
    </button>
  );
}
