import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch } from "../lib";

type LoginInput = { phone: string; password: string };
type LoginResponse = { 
  message: string; 
  data: { 
    token: string;
  } 
};

export function useLogin(
  options?: UseMutationOptions<LoginResponse, Error, LoginInput>
) {
  const queryClient = useQueryClient();

  return useMutation<LoginResponse, Error, LoginInput>({
   mutationFn: async ({ phone, password }) => {
  
      const res = await apiFetch("api/customers/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, password }),
      }, true);


      let data: LoginResponse;
      
      if (res instanceof Response) {
        data = await res.json();
      } else {
        data = res as LoginResponse;
      }
      

      // console.log("Data from Server:", data);
      return data;
    },

    
    onSuccess: (data, variables, context) => {
      queryClient.setQueryData(["currentUser"], data.data);       
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error, variables, onMutateResult, context) => {
      console.error("Login error:", error);
      options?.onError?.(error, variables, onMutateResult, context);
    },
    ...options,
  });
}

