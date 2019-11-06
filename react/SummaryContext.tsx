import React, { createContext, useContext, FunctionComponent } from 'react'

interface ContextProps {
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
  totalizers,
  total,
  children,
}) => (
  <SummaryContext.Provider value={{ totalizers, total }}>
    {children}
  </SummaryContext.Provider>
)

export default SummaryContextProvider
