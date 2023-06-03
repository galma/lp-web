export type AuthUser = {
  id: string;
  remainingBalance: number;
  // email: string;
  // firstName: string;
  // lastName: string;
};

export type UserResponse = {
  token: string;
  user: AuthUser;
};
