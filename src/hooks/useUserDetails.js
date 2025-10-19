import { useState } from "react";

export default function useUserDetails() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    clearanceType: "",
    message: "",
  });


  return [userDetails, setUserDetails];
}
