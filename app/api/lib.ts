const BASE_URL = "http://10.0.2.2:9000";


console.log("API Base URL:", BASE_URL);

export const apiFetch = async (
  endpoint: string,
  options?: RequestInit,
  returnJson: boolean = true
) => {
  const finalOptions: RequestInit = {
    ...options,
    headers: { 
      "Content-Type": "application/json",
      "Accept": "application/json",
      ...(options?.headers || {})
    },
  };

  if (finalOptions.body && typeof finalOptions.body === "object") {
    finalOptions.body = JSON.stringify(finalOptions.body);
  }

  const res = await fetch(`${BASE_URL}/${endpoint}`, finalOptions);

  
  const data = await res.json().catch(() => null); 

  if (!res.ok) {
    throw new Error(data?.message || `API Error: ${res.status}`);
  }


  return data; 
};