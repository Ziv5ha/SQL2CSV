import React, { useContext, useRef } from 'react';
import { QueryContext } from '../../context/queryContext';
import { getMoment } from '../../helpers/timeCalc';
import { IQueryContext } from '../../types';

export default function ChooseSpesificTime() {
  const { updateQuery } = useContext(QueryContext) as IQueryContext;
  const startTimeRef = useRef<HTMLInputElement>(null);
  const endTimeRef = useRef<HTMLInputElement>(null);
  const onChangeFuncStart = () => {
    if (startTimeRef.current) {
      updateQuery('timeStart', getMoment(startTimeRef.current.value));
    }
  };
  const onChangeFuncEnd = () => {
    if (endTimeRef.current) {
      updateQuery('timeEnd', getMoment(endTimeRef.current.value));
    }
  };
  return (
    <form>
      <div className='time-input'>
        from:
        <input
          type='datetime-local'
          onChange={onChangeFuncStart}
          ref={startTimeRef}
          className='custom-picker'
        />
      </div>
      <div className='time-input'>
        until:
        <input
          type='datetime-local'
          onChange={onChangeFuncEnd}
          ref={endTimeRef}
          className='custom-picker'
        />
      </div>
    </form>
  );
}
