import { createContext } from "react";

const AdminContext = createContext({
  isAdmin: false,
  setIsAdmin(isAdmin: boolean) {},
});
AdminContext.displayName = "AdminContext";

export default AdminContext;
