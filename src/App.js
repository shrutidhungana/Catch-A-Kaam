import React from 'react'

import AppRouter from './AppRouter/AppRouter'
 import { UserAuthContextProvider } from './Context/UserAuthContext'

const App = () => {
  return (
    <div>
      <UserAuthContextProvider>
        <AppRouter />
        </UserAuthContextProvider>
    </div>
    
  )
}

export default App
