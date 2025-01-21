export interface StockTickerResult {
  ticker: string;
  name: string;
  market: string;
  locale: string;
  primary_exchange: string;
  type: string;
  active: boolean;
  currency_name: string;
  last_updated_utc: string;
}

export interface PolygonApiResponse<T> {
  results: T[];
  next_url: string | null;
  status: string;
  request_id: string;
  count: number;
}

export interface StocksQueryParams {
  search?: string;
  cursor?: string;
}

export type StockApiResponse = PolygonApiResponse<StockTickerResult>;
