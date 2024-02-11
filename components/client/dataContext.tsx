import { createContext, useState, useContext } from 'react'

const defaultProvider: any = {
  data: [],
  setData: () => []
}

const DataContext = createContext(defaultProvider)

export function useDataContext() {
  return useContext(DataContext)
}

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<any[]>([])

  const value = {
    data,
    setData
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}