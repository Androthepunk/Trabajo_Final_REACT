import { PropsWithChildren, createContext, useState } from 'react'
import { Children } from 'react'
// Este es el que tenemos que consumir
export const FiltersContext = createContext(0)

// Este es el que nos provee de acceso al contexto
export function FiltersProvider ({ children }:PropsWithChildren ) {
  const [filters, setFilters] = useState({
      category: 'all',
      minPrice: 250
  })
  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
      
  }}>  
      {children}
    </FiltersContext.Provider>
  )
}