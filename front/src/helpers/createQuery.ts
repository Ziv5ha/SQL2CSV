import { IQuery } from '../types';

export const createQuery = (
  query: IQuery,
  talbeAttributes: string[]
): string => {
  const { table, attributes, time } = query;
  const joins = [];
  const newAttrs = attributes.map((attr) => `${table}.${attr} AS ${attr}`);
  if (attributes.includes('reactor_id') && table !== 'reactor_id') {
    newAttrs.push('reactor_id.reactor_name AS Reactor_Name');
    joins.push(
      `INNER JOIN reactor_id ON ${table}.reactor_id = reactor_id.reactor_id`
    );
  }
  let fullQuery = `SELECT ${newAttrs.join(', ')} FROM ${table} ${joins.join(
    ' '
  )}`;
  if (talbeAttributes.includes('date_time'))
    fullQuery += ` WHERE date_time BETWEEN '${time.start}' AND '${time.end}' `;
  return fullQuery;
};
