import React, { createContext, useState } from 'react'

export const DataContext = createContext(null)

export const UseProvider = ({children}) => {
  const [valores, SetValores] =useState('')

  return (
    <DataContext.Provider value={[valores, SetValores]}>{children}</DataContext.Provider>
  )
}
