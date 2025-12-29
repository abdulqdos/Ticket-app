import { useQuery } from "@tanstack/react-query";
import { apiFetch } from '../lib';

export function useUser() {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => {
      return await apiFetch("api/customers/profile", {
        method: "GET",
      }, true, true);
    },
    enabled: true
  });
}