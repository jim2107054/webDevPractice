import React, { createContext } from 'react'
export const dataContext = createContext();
const UserContext = ({children}) => {
  const serverUrl = "https://auth-eight-phi-17.vercel.app";
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