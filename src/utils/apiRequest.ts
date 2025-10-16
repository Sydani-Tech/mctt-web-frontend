import { USER_DETAILS } from "@/hooks/auth";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const BaseURL: string = `${import.meta.env.VITE_BASE_URL}`;

const defaultHeaders: Record<string, string> = {
  "Content-Type": "application/json",
};

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface ApiRequestOptions {
  method: HTTPMethod;
  path: string;
  data?: unknown;
  headers?: Record<string, string>;
}

// export async function apiRequest<T = any>({
//   method,
//   path,
//   data,
//   headers = defaultHeaders,
// }: ApiRequestOptions): Promise<T> {
//   try {
//     const isFormData = data instanceof FormData;

//     const url = `${BaseURL}${path}`;
//     const config: RequestInit = {
//       credentials: "include",
//       method,
//       body:
//         method === "GET"
//           ? undefined
//           : isFormData
//           ? (data as BodyInit)
//           : JSON.stringify(data),
//       headers: {
//         ...(isFormData ? {} : { ...headers }),
//         // Authorization: `Bearer ${localStorage.getItem("token")}`,
//       } as HeadersInit,
//     };

//     const response = await fetch(url, config);

//     if (!response.ok) {
//       const errorResponse = await response.json();
//       throw new Error(errorResponse.message || "An error occurred");
//     }

//     const responseData: T = await response.json();
//     return responseData;
//   } catch (error: any) {
//     throw new Error(error.message || "An unknown error occurred");
//   }
// }
export async function apiRequest<T = any>({
  method,
  path,
  data,
  headers = defaultHeaders,
  responseType = "json",
}: ApiRequestOptions & { responseType?: "json" | "blob" }): Promise<T> {
  const userData = JSON.parse(localStorage.getItem(USER_DETAILS) || "{}");
  const userToken =
    userData?.user?.api_key && userData?.user?.api_secret
      ? `token ${userData.user.api_key}:${userData.user.api_secret}`
      : "";

  const url = `${BaseURL}${path}`;
  const isFormData = data instanceof FormData;

  const finalHeaders: HeadersInit = {
    Authorization: userToken,
    ...(isFormData ? {} : { "Content-Type": "application/json" }),
    ...headers,
  };

  const config: RequestInit = {
    method,
    credentials: "include",
    headers: finalHeaders,
    body:
      method === "GET"
        ? undefined
        : isFormData
        ? (data as BodyInit)
        : JSON.stringify(data),
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      const errorResponse = await response.json().catch(() => ({}));
      throw new Error(errorResponse.message || "An error occurred");
    }

    if (responseType === "blob") {
      return (await response.blob()) as T;
    }

    return (await response.json()) as T;
  } catch (error: any) {
    console.error("API request error:", error);
    throw new Error(error.message || "An unknown error occurred");
  }
}

// export async function apiRequest<T = any>({
//   method,
//   path,
//   data,
//   headers = defaultHeaders,
//   responseType = "json",
// }: ApiRequestOptions & { responseType?: "json" | "blob" }): Promise<T> {
//   const userData = await JSON.parse(localStorage.getItem(USER_DETAILS) || "{}");
//   const userToken =
//     userData && `token ${userData?.user.api_key}:${userData?.user?.api_secret}`;
//   console.log("token", userToken);
//   try {
//     const isFormData = data instanceof FormData;
//     const url = `${BaseURL}${path}`;

//     const config: RequestInit = {
//       credentials: "include",
//       method,
//       body:
//         method === "GET"
//           ? undefined
//           : isFormData
//           ? (data as BodyInit)
//           : JSON.stringify(data),
//       headers: {
//         ...(isFormData
//           ? {}
//           : {
//               ...headers,
//               // Authorization: userToken,
//             }),
//       } as HeadersInit,
//     };

//     const response = await fetch(url, config);

//     if (!response.ok) {
//       const errorResponse = await response.json().catch(() => ({}));
//       throw new Error(errorResponse.message || "An error occurred");
//     }

//     if (responseType === "blob") {
//       return (await response.blob()) as T;
//     }

//     return (await response.json()) as T;
//   } catch (error: any) {
//     throw new Error(error.message || "An unknown error occurred");
//   }
// }
