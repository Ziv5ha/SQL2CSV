import { IQuery } from '../types';

export const createQuery = (
  query: IQuery,
  talbeAttributes: string[]
): string => {
  const { table, attributes, reactors, time } = query;

  const attrsString = attributes
    .map((attr) => {
      if (attr === 'date_time')
        return `TO_CHAR(date_time, 'DD/MM/YYYY HH24:MI') AS time`;
      else return `${table}.${attr} AS ${attr}`;
    })
    .join(', ');
  const reactorsString = reactors.join(', ');

  let fullQuery = talbeAttributes.includes('reactor_id')
    ? `SELECT reactor_id.reactor_name AS Reactor_Name, ${attrsString} FROM ${table} INNER JOIN reactor_id ON ${table}.reactor_id = reactor_id.reactor_id WHERE reactor_name IN ('${reactorsString}')`
    : `SELECT  ${attrsString} FROM ${table})`;
  if (talbeAttributes.includes('date_time'))
    fullQuery += ` AND date_time BETWEEN '${time.start}' AND '${time.end}' `;
  return fullQuery;
};
