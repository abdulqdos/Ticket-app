import AsyncStorage from '@react-native-async-storage/async-storage'; // import AsyncStorage from '@react-native-async-storage/async-storage';
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
        console.log("Response is an instance of Response:", res);
        data = await res.json();
      } else {
        console.log("Response is not an instance of Response:", res);
        data = res as LoginResponse;
      }


      console.log("Data from Server:", data.data.token);
      return data;
    },


    onSuccess: async (data) => {
      console.log("Login successful");
      await AsyncStorage.setItem("userToken", data.data.token);
      queryClient.setQueryData(["currentUser"], data.data);
      options?.onSuccess?.(data, {}, undefined);
    },

    onError: (error, variables, onMutateResult, context) => {
      options?.onError?.(error, variables, onMutateResult, context);
    },
    ...options,
  });
}

