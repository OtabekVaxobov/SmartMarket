import * as React from "react";
import DataFetcher from "./components/Fetcher";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({});

export default function App() {
  return (
    <div className="grid h-screen place-items-center">
      <QueryClientProvider client={queryClient}>
        <DataFetcher />
      </QueryClientProvider>
    </div>
  );
}
