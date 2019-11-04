import React, { createContext, useContext, FunctionComponent } from 'react'

interface ContextProps {
  loading: boolean
  totalizers: Totalizer[]
  total: number
}

const SummaryContext = createContext<ContextProps | undefined>(undefined)

export const useSummary = () => {
  const context = useContext(SummaryContext)
  if (context === undefined) {
    throw new Error('useSummary must be used within a SummaryProvider')
  }

  return context
}

const SummaryContextProvider: FunctionComponent<ContextProps> = ({
  loading,
  totalizers,
  total,
  children,
}) => (
  <SummaryContext.Provider value={{ loading, totalizers, total }}>
    {children}
  </SummaryContext.Provider>
)

export default SummaryContextProvider
