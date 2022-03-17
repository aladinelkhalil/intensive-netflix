import qs from "query-string";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export function useQuery() {
  const { search } = useLocation();
  return useMemo(() => qs.parse(search), [search]);
}
