import React from 'react'
import { Navigation } from '../Navigation'

export const Header = () => {
  return (
    <header className="my-3 d-flex justify-content-between" >
        <h1> React </h1>
        <Navigation />
     </header>
  )
}
