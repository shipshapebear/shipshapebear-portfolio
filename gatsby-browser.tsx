import GlobalProvider from './src/contexts/GlobalContext'
import React from 'react'
import './src/styles/global.css'
// Wraps every page in a component
export const wrapPageElement = ({ element, }) => {
  return <GlobalProvider>{element}</GlobalProvider>
}
// export const shouldUpdateScroll = () => false;

// export const shouldUpdateScroll = ({
//   routerProps: { location },
//   getSavedScrollPosition
// }) => {
//   const currentPosition = getSavedScrollPosition(location)
//   const queriedPosition = getSavedScrollPosition({ pathname: `/random` })

//   window.scrollTo(...(currentPosition || [0, 0]))

//   return false
// }