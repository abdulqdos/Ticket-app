import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch } from "../lib";

type RegisterInput = { phone: string; password: string , first_name: string , last_name: string , email: string , password_confirmation: string};
type RegisterResponse = {
  message: string;
  data: {
    token: string;
  }
};


export function useRegister(
  options?: UseMutationOptions<RegisterResponse, Error, RegisterInput>
) {
  const queryClient = useQueryClient();

  return useMutation<RegisterResponse, Error, RegisterInput>({
    mutationFn: async ({ phone, password, first_name, last_name, email, password_confirmation }) => {

      const res = await apiFetch("api/customers/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, password, first_name, last_name, email, password_confirmation }),
      }, true);


      let data: RegisterResponse;

      if (res instanceof Response) {
        console.log("Response is an instance of Response:", res);
        data = await res.json();
      } else {
        console.log("Response is not an instance of Response:", res);
        data = res as RegisterResponse;
      }


      console.log("Data from Server:", data);
      return data;
    },


    onSuccess: (data, variables, context) => {
      options?.onSuccess?.(data, variables, context);
    },

    onError: (error, variables, onMutateResult, context) => {
      options?.onError?.(error, variables, onMutateResult, context);
    },
    ...options,
  });
}

