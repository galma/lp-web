import * as React from "react";
import { useUser } from "./auth";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/libs/react-query";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "@/contexts/UserContext";

type AppProviderProps = {
  children: React.ReactNode;
};
const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      {/* <Button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button> */}
    </div>
  );
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    // <React.Suspense
    //   fallback={
    //     <div className="flex items-center justify-center w-screen h-screen">
    //       <Spinner size="xl" />
    //     </div>
    //   }
    // >
    <UserProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          {/* {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />} */}
          {/* <Notifications /> */}

          <BrowserRouter>{children}</BrowserRouter>
        </QueryClientProvider>
      </ErrorBoundary>
    </UserProvider>
    // </React.Suspense>
  );
};
