import { createContext, useState } from 'react';

export const RolesContext = createContext();

export function RolesProvider({ children }) {
  const [roles, setRoles] = useState("");

  return (
    <RolesContext.Provider value={{ roles, setRoles }}>
      {children}
    </RolesContext.Provider>
  )
}