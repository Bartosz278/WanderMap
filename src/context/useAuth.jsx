import { useContext } from "react";
import { AuthContext } from "./FakeAuthContext";

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("context was use outisde the AuthProvder");
  return context;
}

export default useAuth;
