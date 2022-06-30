import React, { useState, createContext } from 'react';
import { IQuery, IQueryContext, QueryPart } from '../types';

export const QueryContext = createContext<IQueryContext | null>(null);

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState<IQuery>({
    attributes: [],
    table: '',
    time: { start: '', end: '' },
  });

  const updateQuery = (queryPart: QueryPart, str: string) => {
    switch (queryPart) {
      case 'table':
        setQuery({
          table: str,
          attributes: [],
          time: { start: '', end: '' },
        });
        break;
      case 'timeStart':
        setQuery(({ table, attributes, time: { end } }) => ({
          table,
          attributes,
          time: { start: str, end },
        }));
        break;
      case 'timeEnd':
        setQuery(({ table, attributes, time: { start } }) => ({
          table,
          attributes,
          time: { start, end: str },
        }));

        break;
      default:
        if (query.attributes.includes(str)) {
          setQuery(({ table, attributes, time }) => ({
            table,
            attributes: attributes.filter((attr) => attr !== str),
            time,
          }));
        } else {
          setQuery(({ table, attributes, time }) => ({
            table,
            attributes: [...attributes, str],
            time,
          }));
        }
        break;
    }
  };
  return (
    <QueryContext.Provider value={{ query, updateQuery }}>
      {children}
    </QueryContext.Provider>
  );
};

export default QueryProvider;
