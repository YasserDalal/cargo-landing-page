import UserDetailsProvider from "./providers/UserDetailsProvider";

export default function GlobalProvider({ children }) {
  return (
    <UserDetailsProvider>
      {children}
    </UserDetailsProvider>
  );
}