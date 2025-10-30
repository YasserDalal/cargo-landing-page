import { DarkModalProvider } from './providers/DarkModalProvider';
import UserDetailsProvider from "./providers/UserDetailsProvider";

export default function GlobalProvider({ children }) {
  return (
    <DarkModalProvider>
      <UserDetailsProvider>
        {children}
      </UserDetailsProvider>
    </DarkModalProvider>
  );
}