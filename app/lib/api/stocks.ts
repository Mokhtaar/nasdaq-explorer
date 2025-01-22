import { StockApiResponse, StocksQueryParams } from "../types/api";

const POLYGON_API_BASE = "https://api.polygon.io/v3";
const DEFAULT_API_LIMIT = 48;

export async function fetchStocks({
  search,
  cursor,
}: StocksQueryParams = {}): Promise<StockApiResponse> {
  try {
    const url =
      cursor ||
      `${POLYGON_API_BASE}/reference/tickers?${new URLSearchParams({
        limit: DEFAULT_API_LIMIT.toString(),
        market: "stocks",
        active: "true",
        ...(search && { search }),
      })}`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_POLYGON_API_KEY}`,
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Unauthorized: Invalid API key");
      } else if (response.status === 429) {
        throw new Error("Rate limit exceeded");
      } else {
        throw new Error(`API error: ${response.status}`);
      }
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching stocks:", error);
    throw error;
  }
}
