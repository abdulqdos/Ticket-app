import { useQuery } from "@tanstack/react-query";
import { apiFetch } from '../lib';

export function useEvents() {
  return useQuery({
    queryKey: ["currentEvents"],
    queryFn: async () => {
      return await apiFetch("api/v1/events", {
        method: "GET",
      }, true, true);
    },
    enabled: true
  });
}