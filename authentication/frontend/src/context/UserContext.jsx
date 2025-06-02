import React, { createContext } from 'react'
export const dataContext = createContext();
const UserContext = ({children}) => {
  const serverUrl = "http://localhost:8000";
  const value = {
    serverUrl,
    // Add other context values here as needed
  };
  return (
    <div>
        <dataContext.Provider value={value}>
            {children}
        </dataContext.Provider>
    </div>
  )
}

export default UserContext