import { createContext } from "react-router";

const AuthContext = createContext<string | null>(null);

export default AuthContext;
