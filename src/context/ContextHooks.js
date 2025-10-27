import { useContext } from "react";
import { UserDetailsContext } from "./providers/UserDetailsProvider";

// UserDetailsProvider.jsx
export const useUserDetails = () => useContext(UserDetailsContext);