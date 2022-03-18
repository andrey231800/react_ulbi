import React, { useContext } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { AuthContext } from '../context'
import { About } from '../pages/About'
import { PostIdPage } from '../pages/PostIdPage'
import { Posts } from '../pages/Posts'
import { routes } from '../router/routes'
import { publicRoutes, privateRoutes } from '../router/routes'
import { Loader } from './UI/Loader/Loader'

export const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);

  if(isLoading) {
    return <Loader/>
  }

  return (
    isAuth 
    ? 
    <Switch>
            {privateRoutes.map(route => 
              <Route 
                component={route.component} 
                exact={route.exact} 
                path={route.path}
                key={route.path}
              />
            )}
            <Redirect to='/posts' />
      </Switch>
    :
      <Switch>
            {publicRoutes.map(route => 
              <Route 
                component={route.component} 
                exact={route.exact} 
                path={route.path}
                key={route.path}
              />
            )}
            <Redirect to='/login' />
      </Switch>
  )
}
