import * as React from "react";
import { useUser } from "./auth";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return <div>{children}</div>;
};
