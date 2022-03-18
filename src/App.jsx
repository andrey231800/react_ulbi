import React, { useEffect, useState } from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Navbar } from './components/UI/Navbar/Navbar'
import { AppRouter } from './components/AppRouter'
import { AuthContext } from './context'

export const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false);
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading,
      setIsLoading
    }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
