import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { PortfolioContext } from "../../PortfolioContext";


export default function PrivateRoute({ component, ...props }) {
  const { adminLogin } = useContext(PortfolioContext)
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        adminLogin === true
          ? <Component {...componentProps} />
          : <Redirect
            to={{
              pathname: '/blog',
              state: { from: componentProps.location }
            }}
          />
      )}
    />
  )
}