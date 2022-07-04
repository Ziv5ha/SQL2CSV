import React, { useContext, useEffect, useState } from 'react';
import ChooseSpesificTime from './ChooseSpesificTime';
import QuickPicker from './QuickPicker';
import { QueryContext } from '../../context/queryContext';
import { IQueryContext } from '../../types';
import { getMomentXHoursAgo, getNowMoment } from '../../helpers/timeCalc';
import '../../styles/time.css';

export default function ChooseTime() {
  const { updateQuery } = useContext(QueryContext) as IQueryContext;
  const [quickPicker, setQuickPicker] = useState<boolean>(false);
  const [choosen, setChoosen] = useState(0);

  useEffect(() => {
    updateQuery('timeStart', getNowMoment());
    updateQuery('timeEnd', getMomentXHoursAgo(3));
  }, []);

  return (
    <div className='time-section'>
      <div className='t-chooser-toggle'>
        custom:
        <label className='switch'>
          <input
            type='checkbox'
            onClick={() => {
              setQuickPicker((prev) => !prev);
            }}
          />
          <span className='slider round'></span>
        </label>
      </div>
      {quickPicker ? (
        <ChooseSpesificTime />
      ) : (
        <div className='quick-time-picker'>
          <QuickPicker hours={3} choosen={choosen} setChoosen={setChoosen} />
          <QuickPicker hours={12} choosen={choosen} setChoosen={setChoosen} />
          <QuickPicker hours={24} choosen={choosen} setChoosen={setChoosen} />
          <QuickPicker hours={48} choosen={choosen} setChoosen={setChoosen} />
          <QuickPicker hours={168} choosen={choosen} setChoosen={setChoosen} />
        </div>
      )}
    </div>
  );
}
