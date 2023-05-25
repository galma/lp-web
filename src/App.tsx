import { QueryClientProvider } from "react-query";
import "./App.css";
import { AppProvider } from "@/providers/app";
import { queryClient } from "@/libs/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { AppRoutes } from "@/routes";

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

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
