import { useQuery } from "@tanstack/react-query";
import { apiFetch } from '../lib';

export function useEvents() {
  return useQuery({
    queryKey: ["currentEvents"],
    queryFn: async () => {
      const response = await apiFetch("api/v1/events", {
        method: "GET",
      }, true);
      
      if (!response) {
        throw new Error("Failed to fetch events");
      }
      
      return response;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    enabled: true,
    refetchOnMount: 'always',
  });
}