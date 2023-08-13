import GlobalProvider from './src/contexts/GlobalContext'
import React from 'react'
import './src/styles/global.css'
// Wraps every page in a component
export const wrapPageElement = ({ element, }) => {
  return <GlobalProvider>{element}</GlobalProvider>
}

