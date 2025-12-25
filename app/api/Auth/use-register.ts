import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch } from "../lib";

type LoginInput = { phone: string; password: string , first_name: string , last_name: string , email: string , password_confirmation: string};
type LoginResponse = {
  message: string;
  data: {
    token: string;
  }
};


export function useRegister(
  options?: UseMutationOptions<LoginResponse, Error, LoginInput>
) {
  const queryClient = useQueryClient();

  return useMutation<LoginResponse, Error, LoginInput>({
    mutationFn: async ({ phone, password, first_name, last_name, email, password_confirmation }) => {

      const res = await apiFetch("api/customers/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, password, first_name, last_name, email, password_confirmation }),
      }, true);


      let data: LoginResponse;

      if (res instanceof Response) {
        console.log("Response is an instance of Response:", res);
        data = await res.json();
      } else {
        console.log("Response is not an instance of Response:", res);
        data = res as LoginResponse;
      }


      console.log("Data from Server:", data);
      return data;
    },


    onSuccess: (data, variables, context) => {
      queryClient.setQueryData(["currentUser"], data.data);
      options?.onSuccess?.(data, variables, context);
    },

    onError: (error, variables, onMutateResult, context) => {
      options?.onError?.(error, variables, onMutateResult, context);
    },
    ...options,
  });
}

