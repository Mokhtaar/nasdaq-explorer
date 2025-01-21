"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import StockCard from "./StockCard";
import { useStocks } from "../../hooks/stocks/use-stocks";
import LoadingSpinner from "../ui/LoadingSpinner";
import Header from "../ui/Header";
import NoStocksFound from "../ui/NoStocksFound";
import { StockGridSkeleton } from "../ui/StockGridSkeleton";

export default function StockGrid() {
  const [search, setSearch] = useState("");
  const { ref, inView } = useInView();
  const { data, isLoading, hasNextPage, fetchNextPage, error } =
    useStocks(search);

  if (error) throw error;

  const stocks = data?.pages.flatMap((page) => page.results) || [];

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <section className="min-h-screen bg-gray-900">
      <Header onSearch={setSearch} />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {stocks.length > 0
          ? stocks.map((stock, index) => (
              <StockCard
                key={`${stock.ticker}-${index}`}
                ticker={stock.ticker}
                name={stock.name}
              />
            ))
          : !isLoading && <NoStocksFound />}
        {isLoading && <StockGridSkeleton />}
        {hasNextPage && (
          <div ref={ref} className="col-span-full flex justify-center p-4">
            <LoadingSpinner />
          </div>
        )}
      </div>
    </section>
  );
}
