//{{base_url_sl}}/api/method/slmctt.req.facility_list

import { apiRequest } from "@/utils/apiRequest";
import { useQuery } from "@tanstack/react-query";

const FACILITIES = "facilities-list-mcct";

export const useFacilities = () => {
  return useQuery({
    queryKey: [FACILITIES],
    queryFn: async () => {
      const response = await apiRequest({
        method: "GET",
        path: "/api/method/slmctt.req.facility_list",
      });

      return response;
    },
  });
};
