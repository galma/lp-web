import { createContext, useState, ReactNode } from "react";

interface UserContextProps {
  userId: string | null;
  remainingBalance: number | null;
  handleSignIn: ({ id, balance }: { id: string; balance: number }) => void;
}

export const UserContext = createContext<UserContextProps>({
  userId: null,
  remainingBalance: null,
  handleSignIn: () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [remainingBalance, setRemainingBalance] = useState<number | null>(null);

  const handleSignIn = ({ id, balance }: { id: string; balance: number }) => {
    setUserId(id);
    setRemainingBalance(balance);
  };

  return (
    <UserContext.Provider value={{ userId, remainingBalance, handleSignIn }}>
      {children}
    </UserContext.Provider>
  );
};
