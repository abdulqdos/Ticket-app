import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch } from "../lib";

type EditProfileInput = { phone: string; backup_phone: string; first_name: string; last_name: string; email: string; profile_image?: string };
type EditProfileResponse = {
  message: string;
  data: {
    token: string;
  }
};


export function useEditProfile(
  options?: UseMutationOptions<EditProfileResponse, Error, EditProfileInput>
) {
  const queryClient = useQueryClient();

  return useMutation<EditProfileResponse, Error, EditProfileInput>({
    ...options,

    mutationFn: async (payload) => {
      const res = await apiFetch(
        `api/customers/edit-profile`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
        true, // returnJson
        true // requireAuth
      );

      if (res instanceof Response) {
        return await res.json();
      }

      return res as EditProfileResponse;
    },

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });

      options?.onSuccess?.(data, {} as EditProfileInput, undefined);
    },

    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
  });
}


