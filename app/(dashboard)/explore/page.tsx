import StockGrid from "@/app/components/stocks/StockGrid";
import { fetchStocks } from "../../lib/api/stocks";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { ClientErrorBoundary } from "../../components/error-handling/ClientErrorBoundary";

export default async function ExplorePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["stocks", ""],
    queryFn: () => fetchStocks(),
    initialPageParam: "",
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ClientErrorBoundary>
        <StockGrid />
      </ClientErrorBoundary>
    </HydrationBoundary>
  );
}
