import { apiRequest } from "@/utils/apiRequest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const USER_DETAILS = "user-details-mcct";

export const useUser = () => {
  return useQuery({
    queryKey: [USER_DETAILS],
    queryFn: async () => {
      const response = await apiRequest({
        method: "GET",
        path: "/auth/user-details",
      });

      localStorage.setItem(USER_DETAILS, JSON.stringify(response.data));

      return response;
    },
    initialData: () => {
      const stored = localStorage.getItem(USER_DETAILS);
      return stored ? { data: JSON.parse(stored) } : undefined;
    },
  });
};

import { useNavigate } from "react-router";
export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async () => {
      return apiRequest({
        method: "POST",
        path: "/auth/logout",
      });
    },
    onSettled: () => {
      // Clear storage & query cache
      localStorage.removeItem(USER_DETAILS);
      localStorage.removeItem("token");
      queryClient.removeQueries({ queryKey: [USER_DETAILS] });

      // Force context reset (AuthProvider will see `undefined`)
      queryClient.setQueryData([USER_DETAILS], null);

      // Optional: close any modals tied to user state

      // Redirect
      navigate("/login", { replace: true });
    },
  });
};
