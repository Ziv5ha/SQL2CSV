import React, { useState, createContext } from 'react';
import { IQuery, IQueryContext, QueryPart } from '../types';

export const QueryContext = createContext<IQueryContext | null>(null);

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState<IQuery>({
    attributes: [],
    table: '',
    time: { start: '', end: '' },
    reactors: ['test'],
  });

  const updateQuery = (queryPart: QueryPart, str: string) => {
    switch (queryPart) {
      case 'table':
        setQuery({
          table: str,
          attributes: [],
          time: { start: '', end: '' },
          reactors: [],
        });
        break;
      case 'timeStart':
        setQuery(({ table, attributes, time: { end }, reactors }) => ({
          table,
          attributes,
          time: { start: str, end },
          reactors,
        }));
        break;
      case 'timeEnd':
        setQuery(({ table, attributes, time: { start }, reactors }) => ({
          table,
          attributes,
          time: { start, end: str },
          reactors,
        }));

        break;
      case 'attributes':
        if (query.attributes.includes(str)) {
          setQuery(({ table, attributes, time, reactors }) => ({
            table,
            attributes: attributes.filter((attr) => attr !== str),
            time,
            reactors,
          }));
        } else {
          setQuery(({ table, attributes, time, reactors }) => ({
            table,
            attributes: [...attributes, str],
            time,
            reactors,
          }));
        }
        break;
      case 'reactors':
        if (query.reactors.includes(str)) {
          setQuery(({ table, attributes, time, reactors }) => ({
            table,
            attributes,
            time,
            reactors: reactors.filter((attr) => attr !== str),
          }));
        } else {
          setQuery(({ table, attributes, time, reactors }) => ({
            table,
            attributes,
            time,
            reactors: [...reactors, str],
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
