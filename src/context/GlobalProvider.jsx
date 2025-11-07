import { LanguageProvider } from "./providers/LanguageProvider";
import { DarkModalProvider } from './providers/DarkModalProvider';
import UserDetailsProvider from "./providers/UserDetailsProvider";

export default function GlobalProvider({ children }) {
  return (
    <LanguageProvider>
      <DarkModalProvider>
        <UserDetailsProvider>
          {children}
        </UserDetailsProvider>
      </DarkModalProvider>
    </LanguageProvider>
  );
}