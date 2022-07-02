export interface IQuery {
  attributes: string[];
  table: string;
  time: {
    start: string;
    end: string;
  };
  reactors: string[];
}
export type QueryPart =
  | 'table'
  | 'attributes'
  | 'reactors'
  | 'timeStart'
  | 'timeEnd';

export interface IQueryContext {
  query: IQuery;
  updateQuery: (queryPart: QueryPart, str: string) => void;
}
