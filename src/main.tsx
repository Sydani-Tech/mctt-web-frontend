import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { DemoProvider } from "./components/context/DemographicsContext.tsx";
import { SocialProvider } from "./components/context/SocialMappingContext.tsx";
import { RootCauseProvider } from "./components/context/RootCauseContext.tsx";
import { AppProvider } from "./components/context/AppContext.tsx";
import { HouseHoldsProvider } from "./components/context/HouseHoldsContext.tsx";
import { CACHE_TIME, STALE_TIME } from "./utils/utils copy.ts";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { AuthProvider } from "./components/context/AuthContext.tsx";

const queryClient = new QueryClient({
  mutationCache: new MutationCache(),
  queryCache: new QueryCache(),
  defaultOptions: {
    queries: {
      staleTime: STALE_TIME,
      gcTime: CACHE_TIME,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <AuthProvider>
          <HouseHoldsProvider>
            <DemoProvider>
              <SocialProvider>
                <RootCauseProvider>
                  <App />
                </RootCauseProvider>
              </SocialProvider>
            </DemoProvider>
          </HouseHoldsProvider>
        </AuthProvider>
      </AppProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
