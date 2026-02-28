import { useQuery } from "@tanstack/react-query";
import { apiFetch } from '../lib';

export function useEvent(id: string | string[]) {
    return useQuery({
        queryKey: ["currentEvent", id],
        queryFn: async () => {
            return await apiFetch(`api/v1/events/${id}`, {
                method: "GET",
            }, true, true);
        },
        enabled: !!id
    });
}