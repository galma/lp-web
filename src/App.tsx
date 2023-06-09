import "./index.css";
import { AppProvider } from "@/providers/app";
import AppRoutes from "./routes";

export default function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}
