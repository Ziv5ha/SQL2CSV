export interface IQuery {
  attributes: string[];
  table: string;
  time: {
    start: string;
    end: string;
  };
}
export type QueryPart = 'table' | 'attributes' | 'timeStart' | 'timeEnd';

export interface IQueryContext {
  query: IQuery;
  updateQuery: (queryPart: QueryPart, str: string) => void;
}
