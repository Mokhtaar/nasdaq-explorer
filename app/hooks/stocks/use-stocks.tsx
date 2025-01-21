import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchStocks } from "@/app/lib/api/stocks";

export function useStocks(search: string) {
  const query = useInfiniteQuery({
    queryKey: ["stocks", search],
    queryFn: ({ pageParam }) => fetchStocks({ search, cursor: pageParam }),
    getNextPageParam: (lastPage) => lastPage.next_url,
    initialPageParam: "",
  });
  return query;
}

